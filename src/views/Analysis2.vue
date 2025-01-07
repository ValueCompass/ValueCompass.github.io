<template>
  <div class="bg">
    <div class="main-container">
      <div class="title-content">
        <div class="model">
          <el-tooltip
            effect="customized"
            content="Switch model"
            placement="top"
          >
            <div
              class="model-type model-flex"
              v-popover="popoverRef"
              @click="visible = true"
            >
              {{ currentModel }}
              <SvgIcon class="down-arrow" name="down-arrow"></SvgIcon>
            </div>
          </el-tooltip>
          <el-popover
            ref="popoverRef"
            :visible="visible"
            placement="bottom-start"
            :width="576"
            trigger="click"
            virtual-triggering
            persistent
          >
            <div>
              <el-radio-group
                v-model="checkedModel"
                @change="handleCheckedModelChange"
              >
                <el-radio
                  v-for="model in modellist"
                  :key="model"
                  :value="model"
                >
                  {{ model }}
                </el-radio>
              </el-radio-group>
              <div
                style="
                  display: flex;
                  justify-content: flex-end;
                  margin-top: 20px;
                  padding-right: 20px;
                "
              >
                <button @click="submit">Submit</button>
              </div>
            </div>
          </el-popover>
          <!-- <div class="model-btn">
            <button>
              <SvgIcon class="add-icon" name="add-icon"></SvgIcon>Compare
            </button>
          </div> -->
        </div>
        <div class="desc" v-if="currentModelInfo">
          GPT-4o is an API model produced by OpenAI, with the specific version
          number being gpt-4o-2024-05-13.
        </div>
        <div class="model-props" v-if="currentModelInfo">
          <div class="model-prop">
            <SvgIcon class="prop-icon" name="Affiliation-icon"></SvgIcon>
            <span class="prop-name">Affiliation: </span>
            <span class="prop-content">{{ currentModelInfo.affiliation }}</span>
          </div>
          <div class="model-prop">
            <SvgIcon class="prop-icon" name="website-icon"></SvgIcon>
            <span class="prop-name">Website/GitHub: </span>
            <span class="prop-content"
              ><a :href="currentModelInfo.website">{{
                currentModelInfo.website
              }}</a></span
            >
          </div>
          <div class="model-prop">
            <SvgIcon class="prop-icon" name="paper-icon"></SvgIcon>
            <span class="prop-name">Paper/Report: </span>
            <span class="prop-content">{{ currentModelInfo.report }}</span>
          </div>
          <div class="model-prop">
            <SvgIcon class="prop-icon" name="publish-icon"></SvgIcon>
            <span class="prop-name">Publish Date: </span>
            <span class="prop-content">{{
              currentModelInfo["release date"].split(" ")[0]
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="chart-box">
      <div class="chart-tab">
        <div class="chart-tab-title">Evaluation Results</div>
        <ul>
          <li
            :class="{ active: currentTab == tab.index }"
            @click="tabSwitch(tab.index)"
            v-for="tab in tabList"
            :key="tab.index"
          >
            <span class="lead"></span>{{ tab.name }}
          </li>
        </ul>
      </div>
      <div class="chart-main">
        <div class="chart-main-chart">
          <div class="chart" ref="chartDom"></div>
          <div class="chart-text-main">
            <ul class="chart-menu">
              <li
                v-for="item in chartMenu"
                :key="item"
                @click="currentChartTab = item"
                :class="{ active: currentChartTab == item }"
              >
                {{ item }}
              </li>
            </ul>
            <div class="chart-content">
              <swiper></swiper>
            </div>
          </div>
        </div>
        <p class="chart-title">
          Schwartz Value Theory Evaluation Results and cases
        </p>
        <!-- <div class="chart-main-bar" v-show="currentTab == 0 || currentTab == 1">
          <div class="bar-chart" ref="barChart"></div>
        </div>
        <p class="chart-title" v-if="currentTab == 0 || currentTab == 1">
          Moral Foundation Theory Distance between national values
        </p>
        <div class="dwn-btn">
          <button>Download All</button>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";
import axios from "axios";
import * as echarts from "echarts";
import swiper from "../components/swiper.vue";

const chartDom = ref(null);
// const barChart = ref(null);
let chartInstance = null;
let barInstance = null;
const tabList = [
  {
    name: "Schwartz Value Theory",
    index: 0,
    children: [
      {
        name: "Evaluation Results and cases",
        index: 0,
      },
      {
        name: "Distance between national values",
        index: 1,
      },
    ],
  },
  {
    name: "Moral Foundation Theory",
    index: 1,
    children: [
      {
        name: "Evaluation Results and cases",
        index: 0,
      },
      {
        name: "Distance between national values",
        index: 1,
      },
    ],
  },
  {
    name: "Diverse Safety Risks",
    index: 2,
  },
  {
    name: "LLMs’ Unique Values",
    index: 3,
  },
];
const chartTabMenu = [
  "Benevolence",
  "Achievement",
  "Universalism",
  "Tradition",
  "Stimulation",
  "Self-direction",
  "Security",
  "Power",
  "Hedonism",
  "Conformity",
];
const chartMenu = chartTabMenu.map((item) => {
  return item.substring(0, 3);
});
const currentChartTab = ref(chartMenu[0]);

var modelInfo = null;
const Schwartz_data = ref(null);
const Schwartz_case = ref(null);
const Risk_data = ref(null);
const MFT_data = ref(null);
const modellist = ref([]);
const popoverRef = ref();
const visible = ref(false);
const checkedModel = ref("GPT-4-Turbo");
const currentModel = ref("GPT-4-Turbo");
const currentModelInfo = ref(null);

const getAxiosData = (url) => {
  return axios.get(url);
};
const fetchData = async () => {
  try {
    axios
      .all([
        getAxiosData("./data/models_info.json"),
        getAxiosData("./data/Schwartz_scores.json"),
        getAxiosData("./data/Schwartz_cases.json"),
      ])
      .then(
        axios.spread(function (modelInfos, Schwartz_data, Schwartz_case) {
          modelInfo = getKeyValue(modelInfos.data.data);
          Schwartz_data.value = Schwartz_data.data.data;
          Schwartz_case.value = Schwartz_case.data.data;
          modellist.value = Object.keys(modelInfo);
          checkedModel.value = modellist.value[0];
          currentModel.value = modellist.value[0];
          currentModelInfo.value = modelInfo[currentModel.value];
          console.log("currentModelInfo:", currentModelInfo.value);
          console.log("Schwartz_data:", Schwartz_data.data.data);
          console.log("Schwartz_case:", Schwartz_case.data.data);
        })
      );
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
fetchData();

function getKeyValue(array) {
  const result = array.reduce((acc, item) => {
    const { model, ...rest } = item; // 提取name字段，其他字段放入rest
    acc[model] = rest; // 将剩余字段放入对象
    return acc;
  }, {});
  return result;
}

// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  chartInstance = echarts.init(chartDom.value);
  const option = {
    radar: {
      splitArea: {
        areaStyle: {
          color: ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)"],
        },
      },
      axisLabel: {
        show: true,
        fontSize: 14,
        // formatter: function (value, index) {
        //   return value.toFixed(2);
        // },
      },
      axisName: {
        fontSize: 14,
        color: "#fff",
      },
      triggerEvent: true,
      indicator: [
        { name: "Benevolence", max: 100, color: "#ffd000" },
        { name: "Achievement", max: 100, axisLabel: { show: false } },
        { name: "Universalism", max: 100, axisLabel: { show: false } },
        { name: "Tradition", max: 100, axisLabel: { show: false } },
        { name: "Stimulation", max: 100, axisLabel: { show: false } },
        { name: "Self-direction", max: 100, axisLabel: { show: false } },
        { name: "Security", max: 100, axisLabel: { show: false } },
        { name: "Power", max: 100, axisLabel: { show: false } },
        { name: "Hedonism", max: 100, axisLabel: { show: false } },
        { name: "Conformity", max: 100, axisLabel: { show: false } },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        symbolSize: 8,
        itemStyle: {
          color: "#1093FF",
        },

        data: [
          {
            value: [90, 60, 65, 98, 95, 85, 88, 99, 96, 83],
            areaStyle: {
              opacity: 0.3,
              color: "#1093FF",
            },
            lineStyle: {
              width: 2,
              color: "#1093FF",
            },
            itemStyle: {
              color: "#1093FF",
            },
          },
        ],
      },
    ],
  };
  chartInstance.setOption(option);
  chartInstance.on("mouseover", function (params) {
    if (params.componentType === "radar" && params.targetType == "axisName") {
      // 修改雷达图的颜色
      const radar = chartInstance.getOption().radar[0];
      const indicator = radar.indicator.map((item) => {
        if (item.name == params.name && item.color !== "#ffd000") {
          item.color = "green";
        }
        return item;
      });
      chartInstance.setOption({
        radar: {
          splitArea: {
            areaStyle: {
              color: ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)"],
            },
          },
          axisName: {
            fontSize: 14,
            color: "#fff",
          },
          triggerEvent: true,
          indicator: indicator,
        },
      });
    }
  });
  chartInstance.on("click", function (params) {
    if (params.componentType === "radar" && params.targetType == "axisName") {
      // 修改雷达图的颜色
      const radar = chartInstance.getOption().radar[0];
      const indicator = radar.indicator.map((item) => {
        if (item.name != params.name && item.color == "#ffd000") {
          delete item.color;
        }
        if (item.name == params.name && item.color !== "#ffd000") {
          item.color = "#ffd000";
        }
        return item;
      });
      chartInstance.setOption({
        radar: {
          splitArea: {
            areaStyle: {
              color: ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)"],
            },
          },
          axisName: {
            fontSize: 14,
            color: "#fff",
          },
          triggerEvent: true,
          indicator: indicator,
        },
      });
    }
  });
  chartInstance.on("mouseout", function (params) {
    if (params.componentType === "radar" && params.targetType == "axisName") {
      const radar = chartInstance.getOption().radar[0];
      const indicator = radar.indicator.map((item) => {
        if (item.name == params.name && item.color !== "#ffd000") {
          delete item.color;
        }
        return item;
      });
      chartInstance.setOption({
        radar: {
          splitArea: {
            areaStyle: {
              color: ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)"],
            },
          },
          axisName: {
            fontSize: 14,
            color: "#fff",
          },
          triggerEvent: true,
          indicator: indicator,
        },
      });
    }
  });

  // barInstance = echarts.init(barChart.value);
  // const barOption = {
  //   darkMode: true,
  //   xAxis: {
  //     type: "category",
  //     data: ["Germany", "France", "USA", "Britain", "Russia", "China"],
  //     axisLabel: {
  //       color: "#fff",
  //       fontSize: 14,
  //     },
  //   },
  //   grid: {
  //     left: "3%",
  //     right: "3%",
  //     bottom: "4%",
  //     containLabel: true,
  //   },
  //   yAxis: {
  //     type: "value",
  //     axisLabel: {
  //       color: "#fff",
  //     },
  //     splitLine: {
  //       lineStyle: {
  //         color: "#484753",
  //       },
  //     },
  //   },
  //   series: [
  //     {
  //       data: [0.06, 0.08, 0.13, 0.02, 0.21, 0.28],
  //       type: "bar",
  //       barWidth: "65%",
  //       itemStyle: {
  //         color: "#1093FF",
  //       },
  //     },
  //   ],
  // };
  // barInstance.setOption(barOption);
});

const handleCheckedModelChange = (value) => {
  console.log(value);
};
const submit = () => {
  currentModel.value = checkedModel.value;
  visible.value = false;
};

const currentTab = ref(0);
const tabSwitch = (index) => {
  currentTab.value = index;
  // barInstance.setOption({
  //   series: [
  //     {
  //       data: [0.16, 0.08, 0.13, 0.22, 0.06, 0.28],
  //       type: "bar",
  //       barWidth: "65%",
  //       itemStyle: {
  //         color: "#1093FF",
  //       },
  //     },
  //   ],
  // });
  chartInstance.setOption({
    radar: {
      splitArea: {
        areaStyle: {
          color: ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)"],
        },
      },
      axisName: {
        fontSize: 14,
        color: "#fff",
      },
      triggerEvent: true,
      indicator: [
        { name: "Stimulation", max: 100, color: "#ffd000" },
        { name: "Self-direction", max: 100 },
        { name: "Security", max: 100 },
        { name: "Power", max: 100 },
        { name: "Hedonism", max: 100 },
        { name: "Conformity", max: 100 },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        symbolSize: 8,
        itemStyle: {
          color: "#1093FF",
        },

        data: [
          {
            value: [65, 85, 78, 99, 86, 83],
            areaStyle: {
              opacity: 0.3,
              color: "#1093FF",
            },
            lineStyle: {
              width: 2,
              color: "#1093FF",
            },
            itemStyle: {
              color: function (params) {
                // 根据不同的指示器索引设置颜色
                const colors = [
                  "#ff0000",
                  "#00ff00",
                  "#0000ff",
                  "#ffff00",
                  "#ff00ff",
                ];
                return colors[params.dataIndex];
              },
            },
          },
          // {
          //   value: [90],
          //   itemStyle: {
          //     color: "#ffd000",
          //   },
          // },
        ],
      },
    ],
  });
};

// 销毁ECharts实例
onUnmounted(() => {
  if (chartInstance != null && chartInstance.dispose) {
    chartInstance.dispose();
  }
});
</script>

<style scoped lang="scss">
.title-content {
  margin-top: 3.56em;
  background: rgba(18, 31, 55, 1);
  padding: 2.25em 3em;
  border-radius: 0.375em;
  color: #fff;
  .model {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .model-type {
      font-size: 2em;
      font-weight: 600;
      line-height: 1.3em;

      .down-arrow {
        width: 0.75em;
        height: 0.75em;
        margin-left: 0.3em;
        cursor: pointer;
      }
    }
    .model-btn {
      button {
        background: rgba(16, 147, 255, 1);
        padding: 0 1.14em;
        height: 2.28em;
        color: #fff;
        font-size: 0.875em;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:hover {
          background: #50b8ff;
        }
      }
      .add-icon {
        width: 1.14em;
        height: 1.14em;
        margin-right: 0.4em;
      }
    }
    .model-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 0.375em;
      padding: 0.2em 0.5em;
      cursor: pointer;
    }
  }
  .desc {
    font-size: 0.875em;
    font-weight: 400;
    line-height: 1.29em;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 1.36em;
  }
  .model-props {
    margin-top: 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .model-prop {
      display: flex;
      align-items: center;
      .prop-icon {
        width: 1.5em;
        height: 1.5em;
        margin-right: 0.375em;
      }
      .prop-name {
        font-size: 1.125em;
        color: rgba(255, 255, 255, 0.8);
        margin-right: 0.375em;
      }
      .prop-content {
        font-size: 1.125em;
        color: #fff;
        a {
          color: #fff;
          text-decoration: underline;
        }
      }
    }
  }
}
.chart-box {
  margin-top: 4.5em;
  padding: 0 4em 4.5em;
  display: flex;
  .chart-tab {
    width: calc(calc(100% - 1200px) / 2);
    min-width: 13.125em;
    .chart-tab-title {
      font-size: 1em;
      font-weight: 700;
      color: #fff;
    }
    ul {
      li {
        font-size: 1em;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 1.5em;
        display: flex;
        align-items: center;
        cursor: pointer;
        span {
          width: 0.6875em;
          height: 1.125em;
          display: inline-block;
          margin-right: 1em;
        }
        &.active {
          font-weight: 700;
          color: rgba(16, 147, 255, 1);
          span {
            background: url(@/assets/images/right-arrow.svg) no-repeat;
            background-size: contain;
          }
        }
      }
    }
  }
  .chart-main {
    .chart-main-chart {
      display: flex;
      align-items: center;
      .chart {
        width: 37.5em;
        height: 28em;
        // flex: 1;
      }
      .chart-text-main {
        width: 37.5em;
        .chart-menu {
          width: 100%;
          display: flex;
          justify-content: space-between;
          gap: 1em;
          li {
            font-size: 1em;
            line-height: 1.5em;
            color: #fff;
            padding: 0.25em 0;
            cursor: pointer;

            &.active {
              color: #ffd000;
              border-bottom: 2px solid #ffd000;
            }
          }
        }
        .chart-content {
          width: 100%;
          padding: 3.25em 3em 2.5em 3.5em;
          background: #121f37;
          border-radius: 0.375em;
          box-sizing: border-box;
          margin-top: 0.75em;
          .title {
            color: #ffd000;
            font-size: 1em;
          }
          .chart-content-desc {
            display: flex;
            margin-top: 1.625em;
            img {
              display: block;
              width: 1.875em;
              height: 1.875em;
              margin-right: 1.625em;
            }
            p {
              width: 31.43em;
              font-size: 0.875em;
              color: #fff;
              line-height: 1.57em;
            }
          }
        }
      }
    }
    .chart-title {
      font-size: 1em;
      font-weight: 600;
      text-align: center;
      color: #fff;
    }
    .chart-main-bar {
      .bar-chart {
        width: 55em;
        height: 30em;
        margin: 0 auto;
      }
    }
    .dwn-btn {
      margin-top: 4em;
      text-align: center;
    }
  }
}
.swiper-container {
  width: 100%;
  .swiper-slide {
    width: 100%;
  }
}
:deep(.el-radio__label) {
  width: 145px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
:deep(.el-radio) {
  --el-checkbox-text-color: #fff;
  margin-right: 1em;
}
</style>
