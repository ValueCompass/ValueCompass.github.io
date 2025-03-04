<template>
  <div class="bg main-container">
    <div class="">
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
              @click.stop="visible = true"
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
            <div id="popoverId2">
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
        </div>
        <div class="desc" v-if="currentModelInfo">
          {{ currentModel }} is an API model produced by
          {{ currentModelInfo.developer }}.
        </div>
        <div class="model-props" v-if="currentModelInfo">
          <div class="model-prop">
            <!-- <SvgIcon class="prop-icon" name="Affiliation-icon"></SvgIcon> -->
            <span class="prop-name">Developer: </span>
            <span class="prop-content">{{ currentModelInfo.affiliation }}</span>
          </div>
          <div class="model-prop">
            <!-- <SvgIcon class="prop-icon" name="website-icon"></SvgIcon> -->
            <span class="prop-name">Website/GitHub: </span>
            <span class="prop-content"
              ><a :href="currentModelInfo.website" target="_blank">{{
                currentModelInfo.website
              }}</a></span
            >
          </div>
          <div class="model-prop">
            <!-- <SvgIcon class="prop-icon" name="paper-icon"></SvgIcon> -->
            <span class="prop-name">Paper/Report: </span>
            <span class="prop-content"
              ><a :href="currentModelInfo.report" target="_blank">{{
                currentModelInfo.report
                  ? currentModelInfo.report == "NaN"
                    ? ""
                    : currentModelInfo.report
                  : ""
              }}</a></span
            >
          </div>
          <div class="model-prop">
            <span class="prop-name">Type: </span>
            <span class="prop-content"
              >{{ currentModelInfo["type"] }}-Source</span
            >
          </div>
          <div class="model-prop">
            <!-- <SvgIcon class="prop-icon" name="publish-icon"></SvgIcon> -->
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
        <div class="chart-main-chart" :class="openCaseStatus ? '' : 'close'">
          <span class="case-open-btn" @click="openCase(true)">Cases</span>
          <div class="chart-container">
            <div class="chart" ref="chartDom"></div>
          </div>
          <div class="chart-text-main">
            <div class="chart-menu">
              <ul>
                <li
                  v-for="item in chartMenu"
                  :key="item"
                  @click="changeMenu(item)"
                  :class="{ active: currentChartTab == item }"
                >
                  <template v-if="currentTab == 0">{{
                    item.indexOf("-") > -1
                      ? item
                          .split("-")
                          .map((x) => x[0].toUpperCase())
                          .join("")
                      : item.substring(0, 3)
                  }}</template>
                  <!-- <template v-else-if="currentTab == 1">{{
                  item
                    .split("-")
                    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
                    .join("/<br>")
                }}</template> -->
                  <template v-else-if="currentTab == 1">
                    <span
                      style="margin-right: 1em"
                      v-html="
                        item
                          .split('/')
                          .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
                          .join('/<br>')
                      "
                    ></span>
                  </template>
                  <template v-else-if="currentTab == 2">{{
                    item
                      .split(" ")
                      .map((x) => x.charAt(0).toUpperCase())
                      .join("")
                  }}</template>
                  <template v-else-if="currentTab == 3">{{ item }}</template>
                </li>
              </ul>
            </div>
            <div class="chart-content">
              <span class="case-close-btn" @click="openCase(false)"></span>
              <swiper :data="currentCaseData"></swiper>
            </div>
          </div>
        </div>
        <p class="chart-title">
          {{ tabList[currentTab].name }} Evaluation Results and cases
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onActivated, onUnmounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import * as echarts from "echarts";
import swiper from "../components/swiper.vue";
import { getKeyValue } from "../utils/common.js";

const chartDom = ref(null);
// const barChart = ref(null);
let chartInstance = null;
let barInstance = null;
const tabList = [
  {
    name: "Schwartz Theory of Basic Values",
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
    name: "Safety Taxonomy",
    index: 2,
  },
  {
    name: "LLMs' Unique Value System",
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
const chartMenu = ref([]);
const currentChartTab = ref("");
const currentCaseData = ref([]);
var currentCase = null;
var modelInfo = null;
var Schwartz_data = null;
var Schwartz_case = null;
var Risk_data = null;
var Risk_case = null;
var MFT_data = null;
var MFT_case = null;
var FULVa_data = null;
var FULVa_case = null;
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
        axios.spread(function (modelInfos, Schwartz_datas, Schwartz_cases) {
          modelInfo = getKeyValue(modelInfos.data.data);
          Schwartz_data = getKeyValue(Schwartz_datas.data.data);
          Schwartz_case = Schwartz_cases.data.data;
          modellist.value = Object.keys(modelInfo);

          if (!checkedModel.value && !currentModel.value) {
            checkedModel.value = modellist.value[0];
            currentModel.value = modellist.value[0];
          }
          currentModelInfo.value = modelInfo[currentModel.value];
          setRadarChart(Schwartz_data[currentModel.value]);
          currentCase = getCaseData(Schwartz_case, currentModel.value);

          chartMenu.value = Object.keys(currentCase).sort();
          changeMenu(chartMenu.value[0]);
          currentChartTab.value = chartMenu.value[0];
          currentCaseData.value = currentCase[currentChartTab.value];
        })
      );
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
const fetchOtherData = async () => {
  try {
    axios
      .all([
        getAxiosData("./data/Risk_scores.json"),
        getAxiosData("./data/Risk_cases.json"),
        getAxiosData("./data/MFT_scores.json"),
        getAxiosData("./data/MFT_cases.json"),
        getAxiosData("./data/FULVa_scores.json"),
        getAxiosData("./data/FULVa_cases.json"),
      ])
      .then(
        axios.spread(function (
          Risk_scores,
          Risk_cases,
          MFT_scores,
          MFT_cases,
          FULVa_scores,
          FULVa_cases
        ) {
          Risk_data = getKeyValue(Risk_scores.data.data);
          Risk_case = Risk_cases.data.data;
          MFT_data = getKeyValue(MFT_scores.data.data);
          MFT_case = MFT_cases.data.data;
          FULVa_data = getKeyValue(FULVa_scores.data.data);
          FULVa_case = FULVa_cases.data.data;
        })
      );
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
fetchData();
fetchOtherData();

let maxValue = 0;
let minValue = 100;
function getCaseData(arr, model) {
  const arr1 = arr.filter((item) => {
    return item.model == model;
  });
  return arr1.reduce((acc, item) => {
    if (!acc[item.value]) {
      acc[item.value] = [];
    }
    const { model, ...rest } = item;
    acc[item.value].push({ model, ...rest });

    return acc;
  }, {});
}
function setRadarChart(data) {
  const values = Object.values(data);
  maxValue = Math.ceil(Math.max(...values) * 1) / 1;
  minValue = Math.floor(Math.min(...values) * 1) / 1 - 10;
  // 获取dada
  const indicator = Object.keys(data).map((item, index) => {
    return {
      name: item,
      color: index == 0 ? "rgba(16, 147, 255, 1)" : "black",
      axisLabel: { show: index == 0 ? true : false },
      min: minValue,
      max: maxValue,
    };
  });
  const r_data = Object.values(data);
  chartInstance.setOption({
    radar: {
      splitArea: {
        areaStyle: {
          color: ["rgba(0,0,0,0.05)", "rgba(0,0,0,0.03)"],
        },
      },
      splitNumber: 5,
      axisName: {
        fontSize: 14,
        color: "black",
        formatter: function (value) {
          return value.split("&").join("&\n"); // 将换行符拆分为数组
        },
      },
      axisLabel: {
        formatter: function (value) {
          return value.toFixed(0); // 保留一位小数
        },
      },
      triggerEvent: true,
      indicator: indicator,
    },
    series: [
      {
        type: "radar",
        symbolSize: 8,
        itemStyle: {
          color: "#1093FF",
        },
        data: [
          {
            value: r_data,
            areaStyle: {
              opacity: 0.3,
              color: "#1093FF",
            },
            lineStyle: {
              width: 2,
              color: "#1093FF",
            },
          },
        ],
      },
    ],
  });
}
function setRadarHighlight(data, item) {
  const indicator = Object.keys(data).map((indica, index) => {
    return {
      name: indica,
      color: item == indica ? "rgba(16, 147, 255, 1)" : "black",
      axisLabel: { show: index == 0 ? true : false },
      min: minValue,
      max: maxValue,
    };
  });
  chartInstance.setOption({
    radar: {
      splitArea: {
        areaStyle: {
          color: ["rgba(0,0,0,0.05)", "rgba(0,0,0,0.03)"],
        },
      },
      splitNumber: 5,
      axisName: {
        fontSize: 14,
        color: "black",
        formatter: function (value) {
          return value.split("&").join("&\n"); // 将换行符拆分为数组
        },
      },
      triggerEvent: true,
      indicator: indicator,
    },
  });
}
// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  chartInstance = echarts.init(chartDom.value);
  const option = {
    radar: {
      splitArea: {
        areaStyle: {
          color: ["rgba(0,0,0,0.05)", "rgba(0,0,0,0.03)"],
        },
      },
      axisLabel: {
        show: true,
        fontSize: 14,
      },
      axisName: {
        fontSize: 14,
        color: "black",
      },
      triggerEvent: true,
      indicator: [
        { name: "Benevolence", max: 1, color: "rgba(16, 147, 255, 1)" },
        { name: "Achievement", max: 1, axisLabel: { show: false } },
        { name: "Universalism", max: 1, axisLabel: { show: false } },
        { name: "Tradition", max: 1, axisLabel: { show: false } },
        { name: "Stimulation", max: 1, axisLabel: { show: false } },
        { name: "Self-direction", max: 1, axisLabel: { show: false } },
        { name: "Security", max: 1, axisLabel: { show: false } },
        { name: "Power", max: 1, axisLabel: { show: false } },
        { name: "Hedonism", max: 1, axisLabel: { show: false } },
        { name: "Conformity", max: 1, axisLabel: { show: false } },
      ],
    },
  };
  chartInstance.setOption(option);
  // chartInstance.on("mouseover", function (params) {
  //   if (params.componentType === "radar" && params.targetType == "axisName") {
  //     // 修改雷达图的颜色
  //     const radar = chartInstance.getOption().radar[0];
  //     const indicator = radar.indicator.map((item) => {
  //       if (item.name == params.name && item.color !== "rgba(16, 147, 255, 1)") {
  //         item.color = "green";
  //       }
  //       return item;
  //     });
  //     chartInstance.setOption({
  //       radar: {
  //         splitArea: {
  //           areaStyle: {
  //             color: ["rgba(0,0,0,0.05)", "rgba(0,0,0,0.03)"],
  //           },
  //         },
  //         axisName: {
  //           fontSize: 14,
  //           color: "#fff",
  //         },
  //         triggerEvent: true,
  //         indicator: indicator,
  //       },
  //     });
  //   }
  // });
  chartInstance.on("click", function (params) {
    if (params.componentType === "radar" && params.targetType == "axisName") {
      // 修改雷达图的颜色
      const radar = chartInstance.getOption().radar[0];
      const indicator = radar.indicator.map((item) => {
        params.name = params.name.replace(/[\r\n]/g, "");
        if (item.name != params.name && item.color == "rgba(16, 147, 255, 1)") {
          delete item.color;
        }
        if (
          item.name == params.name &&
          item.color !== "rgba(16, 147, 255, 1)"
        ) {
          item.color = "rgba(16, 147, 255, 1)";
          currentChartTab.value = item.name;
          currentCaseData.value = currentCase[currentChartTab.value];
        }
        return item;
      });
      chartInstance.setOption({
        radar: {
          splitArea: {
            areaStyle: {
              color: ["rgba(0,0,0,0.05)", "rgba(0,0,0,0.03)"],
            },
          },
          axisName: {
            fontSize: 14,
            color: "black",
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
        if (
          item.name == params.name &&
          item.color !== "rgba(16, 147, 255, 1)"
        ) {
          delete item.color;
        }
        return item;
      });
      chartInstance.setOption({
        radar: {
          splitArea: {
            areaStyle: {
              color: ["rgba(0,0,0,0.05)", "rgba(0,0,0,0.03)"],
            },
          },
          axisName: {
            fontSize: 14,
            color: "black",
          },
          triggerEvent: true,
          indicator: indicator,
        },
      });
    }
  });
});

const handleCheckedModelChange = (value) => {
  console.log(value);
};
const changeMenu = (item) => {
  currentChartTab.value = item;
  currentCaseData.value = currentCase[currentChartTab.value];
  if (currentTab.value == 0) {
    setRadarHighlight(Schwartz_data[currentModel.value], item);
  } else if (currentTab.value == 1) {
    setRadarHighlight(MFT_data[currentModel.value], item);
  } else if (currentTab.value == 2) {
    setRadarHighlight(Risk_data[currentModel.value], item);
  } else if (currentTab.value == 3) {
    setRadarHighlight(FULVa_data[currentModel.value], item);
  }
};
const submit = () => {
  currentModel.value = checkedModel.value;
  visible.value = false;
  currentModelInfo.value = modelInfo[currentModel.value];
  // setRadarChart(Schwartz_data[currentModel.value]);
  console.log(currentTab.value);
  console.log(currentModel.value);
  if (currentTab.value == 0) {
    setRadarChart(Schwartz_data[currentModel.value]);
    currentCase = getCaseData(Schwartz_case, currentModel.value);
  } else if (currentTab.value == 1) {
    setRadarChart(MFT_data[currentModel.value]);
    currentCase = getCaseData(MFT_case, currentModel.value);
  } else if (currentTab.value == 2) {
    setRadarChart(Risk_data[currentModel.value]);
    currentCase = getCaseData(Risk_case, currentModel.value);
  } else if (currentTab.value == 3) {
    setRadarChart(FULVa_data[currentModel.value]);
    currentCase = getCaseData(FULVa_case, currentModel.value);
  }
  console.log(currentCase);
  chartMenu.value = Object.keys(currentCase).sort();
  changeMenu(chartMenu.value[0]);
  currentChartTab.value = chartMenu.value[0];
  currentCaseData.value = currentCase[currentChartTab.value];
};

const currentTab = ref(0);
const tabSwitch = (index) => {
  currentTab.value = index;
  if (currentTab.value == 0) {
    setRadarChart(Schwartz_data[currentModel.value]);
    currentCase = getCaseData(Schwartz_case, currentModel.value);
  } else if (currentTab.value == 1) {
    setRadarChart(MFT_data[currentModel.value]);
    currentCase = getCaseData(MFT_case, currentModel.value);
  } else if (currentTab.value == 2) {
    setRadarChart(Risk_data[currentModel.value]);
    currentCase = getCaseData(Risk_case, currentModel.value);
  } else if (currentTab.value == 3) {
    setRadarChart(FULVa_data[currentModel.value]);
    currentCase = getCaseData(FULVa_case, currentModel.value);
  }

  chartMenu.value = Object.keys(currentCase).sort();
  changeMenu(chartMenu.value[0]);
  currentChartTab.value = chartMenu.value[0];
  currentCaseData.value = currentCase[currentChartTab.value];
};

const openCaseStatus = ref(true);
const openCase = (bool) => {
  openCaseStatus.value = bool;
};

// 销毁ECharts实例
onUnmounted(() => {
  if (chartInstance != null && chartInstance.dispose) {
    chartInstance.dispose();
  }
});

let isFirstEnter = true;
const router = useRoute();
onActivated(() => {
  console.log("首页传过来的modelName：" + router.query.modelName);
  const setModelName = router.query.modelName;
  if (setModelName) {
    checkedModel.value = setModelName;
    currentModel.value = setModelName;
    if (isFirstEnter) {
      isFirstEnter = false;
    } else {
      submit();
    }
  }
});

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
const handleClickOutside = (event) => {
  // 使用 Popper 的 getPopperElement 方法获取真正的弹窗元素
  const popperElement = document.getElementById("popoverId2");
  // 判断点击的是否为popover外部，关闭popover
  if (
    popoverRef.value &&
    popperElement &&
    !popperElement.contains(event.target)
  ) {
    visible.value = false;
  }
};
</script>

<style scoped lang="scss">
.title-content {
  margin-top: 1.5em;
  background: var(--gary-color);
  padding: 2.25em 6em;
  border-radius: 1em;
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
        color: var(--text-color) !important;
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
      border: 1px solid var(--border-color);
      border-radius: 0.375em;
      padding: 0.2em 0.5em;
      cursor: pointer;
    }
  }
  .desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.29em;
    margin-top: 1.36em;
  }
  .model-props {
    margin-top: 1.5em;
    display: flex;
    gap: 3.75em;
    // justify-content: space-between;
    align-items: center;
    .model-prop {
      display: flex;
      align-items: center;
      .prop-icon {
        width: 1.5em;
        height: 1.5em;
        margin-right: 0.375em;
        color: var(--text-color) !important;
      }
      .prop-name {
        font-size: 1.125em;
        margin-right: 0.375em;
      }
      .prop-content {
        height: 20px;
        max-width: 180px;
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis;
        font-size: 1.125em;
        a {
          text-decoration: underline;
          color: #657171;
        }
      }
    }
  }
}
.chart-box {
  margin-top: 3em;
  padding: 0 0 4.5em;
  font-size: 1.125em;
  display: flex;
  .chart-tab {
    width: 9em;
    padding-right: 1em;
    .chart-tab-title {
      font-size: 1em;
      font-weight: 700;
    }
    ul {
      li {
        line-height: 1.35;
        font-size: 1.11em;
        font-weight: 400;
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
    flex: 1;
    overflow: hidden;

    .chart-main-chart {
      transition: all 0.2s;
      height: 30em;
      position: relative;
      display: flex;
      // align-items: center;
      .case-open-btn {
        opacity: 0;
        z-index: -1;
        transition: all 0.2s;
        font-size: 0.9em;
        cursor: pointer;
        position: absolute;
        top: 1em;
        left: 80%;
        background: var(--gary-color) url(@/assets/images/toggle.png) no-repeat
          3.5em center;
        background-size: 0.8em auto;
        padding: 5px 30px 5px 10px;
      }
      .chart-container {
        transition: all 0.2s;
        width: 54%;
        padding-bottom: 35%;
        height: 0;
        // min-width: 640px;
        // flex: 1;
        position: relative;
        .chart {
          z-index: 2;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      }
      .chart-text-main {
        padding-left: 1em;
        transition: all 0.2s;
        flex: 1;
        overflow: hidden;
        .chart-menu {
          position: relative;
          &::after {
            background-color: rgba(194, 194, 194, 1);
            bottom: 0;
            content: "";
            height: 1px;
            left: 0;
            position: absolute;
            width: 100%;
            z-index: 1;
          }
          & > ul {
            position: relative;
            z-index: 2;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 0.4em 0;
            align-items: flex-end;
            li {
              max-width: 5.5em;
              font-size: 1em;
              line-height: 1.3em;
              padding: 0.25em .7em;
              cursor: pointer;
              border-bottom: 2px solid transparent;

              &.active {
                color: #0c76ce;
                border-bottom: 2px solid rgba(16, 147, 255, 1);
              }
              &:hover {
                color: #0c76ce;
              }
            }
          }
        }
        .chart-content {
          position: relative;
          width: 100%;
          background: var(--gary-color);
          border-radius: 0.375em;
          margin-top: 0.75em;
          padding-bottom: 0.75em;
          .case-close-btn {
            cursor: pointer;
            position: absolute;
            left: 1em;
            top: 1em;
            z-index: 10;
            background: var(--gary-color) url(@/assets/images/toggle.png)
              no-repeat center;
            background-size: 0.8em auto;
            display: inline-block;
            width: 2em;
            height: 1.2em;
            transform: rotate(180deg);
          }

          .title {
            color: rgba(16, 147, 255, 1);
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
              line-height: 1.57em;
            }
          }
        }
      }
    }

    .chart-main-chart.close {
      height: 34em;
      .case-open-btn {
        opacity: 1;
        z-index: 1;
      }
      .chart-container {
        transform: translate(38%, 16%) scale(1.2);
      }
      .chart-text-main {
        transform: scaleX(0);
      }
    }
    .chart-main-chart.close + .chart-title {
      // transform: translateY(.2em);
    }
    .chart-title {
      font-size: 1em;
      font-weight: 600;
      text-align: center;
      margin-top: 1em;
      line-height: 2;
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
