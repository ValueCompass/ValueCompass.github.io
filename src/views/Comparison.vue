<template>
  <div class="bg comparison-template main-container">
    <div>
      <div class="title-content">
        <h2>Compare Pool</h2>
        <div class="compare-model-list">
          <ul>
            <li
              class="model-li"
              v-for="(item, index) in checkedModelDetailList"
              :key="item"
              :style="{ 'border-color': item.color }"
            >
              <span
                class="close-comparison"
                @click="closeModel(item.model_name, index)"
              ></span>
              <p class="name">{{ item.model_name }}</p>
              <!-- <p style="display: none">{{ modelInfo[item] }}</p> -->
              <p class="point-num">
                {{ item.model_info.points }}<span class="point">points</span>
              </p>
              <div class="top-item-content">
                <el-tooltip
                  effect="customized"
                  content="Proprietary"
                  placement="top"
                >
                  <span class="type-icon"></span>
                  <!-- <span
                  class="type-close-icon"
                ></span> -->
                </el-tooltip>
                <span class="dev">{{ item.model_info.developer }}</span>
                <span class="date">{{
                  item.model_info["release date"].split(" ")[0]
                }}</span>
              </div>
            </li>
            <li v-if="checkedModelDetailList.length >= 5" class="max-num-tip">
              <p style="">The maximum number of comparisons supported is 5</p>
            </li>
            <li
              v-if="checkedModelDetailList.length < 5"
              class="add-model"
              v-popover="popoverRef"
              @click="visible = true"
            >
              <img src="@/assets/images/add-model.svg" alt="add-model" />
              <p>Add</p>
            </li>
            <el-popover
              ref="popoverRef"
              :visible="visible"
              placement="right-start"
              :width="576"
              trigger="click"
              virtual-triggering
              persistent
            >
              <div>
                <el-checkbox-group v-model="checkedModelNameList" :max="5">
                  <el-checkbox
                    v-for="model in modelNameList"
                    :key="model"
                    :value="model"
                  >
                    {{ model }}
                  </el-checkbox>
                </el-checkbox-group>
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
          </ul>
        </div>
      </div>
    </div>
    <!-- <p
      style="
        font-size: 2em;
        font-weight: 600;
        text-align: center;
        margin: 1.5em;
      "
    >
      Comparison Direction
    </p> -->
    <div class="chart-box">
      <div class="chart-tab">
        <el-tabs v-model="currentTab" @tab-click="tabSwitch">
          <el-tab-pane
            v-for="tab in tabList"
            :key="tab.index"
            :label="'&nbsp;&nbsp;&nbsp;' + tab.name + '&nbsp;&nbsp;&nbsp;'"
            :name="tab.index"
          ></el-tab-pane>
        </el-tabs>
        <!-- <div class="chart-tab-title">Evaluation Results</div>
        <ul>
          <li
            :class="{ active: currentTab == tab.index }"
            @click="tabSwitch(tab.index)"
            v-for="tab in tabList"
            :key="tab.index"
          >
            <span class="lead"></span>{{ tab.name }}
          </li>
        </ul> -->
      </div>
      <div class="chart-main" style="">
        <selectBoxComponent
          v-show="currentTab == 0 || currentTab == 1"
          @fitterChange="fitterChange"
        ></selectBoxComponent>

        <!-- table -->
        <div class="table-box" v-show="currentTab == 0">
          <!-- <TableComponent ref="TableComponentRef"></TableComponent> -->
          <h4>Schwartz Theory of Basic Values</h4>
          <el-table :data="Schwartz_table_data" border style="width: 100%">
            <el-table-column prop="model_name" label="Model" />
            <template
              v-for="(item, index) in Schwartz_table_columns_checked"
              :key="index"
            >
              <el-table-column
                v-if="item != 'model_name'"
                :prop="item"
                :label="item"
                :formatter="formatter"
              />
            </template>
          </el-table>

          <h4>Moral Foundations Theory</h4>
          <el-table :data="MFT_table_data" border style="width: 100%">
            <el-table-column prop="model_name" label="Model" />
            <template
              v-for="(item, index) in MFT_table_columns_checked"
              :key="index"
            >
              <el-table-column
                v-if="item != 'model_name'"
                :prop="item"
                :label="item"
                :formatter="formatter"
              />
            </template>
          </el-table>

          <h4>Diverse Safety Risks</h4>
          <el-table :data="Risk_table_data" border style="width: 100%">
            <el-table-column prop="model_name" label="Model" />
            <template
              v-for="(item, index) in Risk_table_columns_checked"
              :key="index"
            >
              <el-table-column
                v-if="item != 'model_name'"
                :prop="item"
                :label="item"
                :formatter="formatter"
              />
            </template>
          </el-table>

          <!-- <h4>LLM Value System</h4> -->
        </div>
        <!-- echart -->
        <div v-show="currentTab == 1">
          <VisualizationComponent
            ref="VisualizationComponentProps"
          ></VisualizationComponent>
        </div>

        <!-- Value Space -->
        <div v-show="currentTab == 3">
          <ValueSpaceComponent
            ref="ValueSpaceComponentProps"
          ></ValueSpaceComponent>
        </div>
        <!-- Cultural Alignment -->
        <div v-show="currentTab == 2">
          <CulturalAlignmentComponent
            ref="CulturalAlignmentComponentProps"
          ></CulturalAlignmentComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  ref,
  reactive,
  watch,
  onMounted,
  onActivated,
  onUnmounted,
  nextTick,
} from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import * as echarts from "echarts";
import VisualizationComponent from "../components/Comparison/Visualization.vue";
import TableComponent from "../components/Comparison/Table.vue";
import ValueSpaceComponent from "../components/Comparison/ValueSpace.vue";
import CulturalAlignmentComponent from "../components/Comparison/CulturalAlignment.vue";
import selectBoxComponent from "../components/selectBox.vue";
import { getKeyValue, mergeObj, getAvaData } from "../utils/common.js";

const VisualizationComponentProps = ref(null);
const CulturalAlignmentComponentProps = ref(null);
const ValueSpaceComponentProps = ref(null);
const TableComponentRef = ref(null);
const colorList = [
  "rgba(16, 147, 255, 1)",
  "rgba(172, 210, 145, 1)",
  "rgba(113, 134, 201, 1)",
  "rgba(162, 123, 187, 1)",
  "rgba(225, 149, 208, 1)",
];

const tabList = [
  {
    name: "Table",
    index: 0,
  },
  {
    name: "Visualization",
    index: 1,
  },
  {
    name: "Cultural Alignment",
    index: 2,
  },
  {
    name: "Value Space",
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

var Schwartz_data = null;
var Schwartz_case = null;
var Risk_data = null;
var Risk_case = null;
var MFT_data = null;
var MFT_case = null;

var modelInfo_list = null; // [ {model: 'GPT-4-Turbo', developer: 'OpenAI', type: 'Close'}, ... ]
// var modelInfo = null;
const modelInfo = ref(); //  { 'GPT-4-Turbo': {developer: 'OpenAI', type: 'Close'},  'GPT-4o-mini' : {} }
const checkedModel = ref([]);
const popoverRef = ref();
const visible = ref(false);
const modelNameList = ref([]); // [ 'GPT-4-Turbo', 'GPT-4-Turbo' ]
const checkedModelNameList = ref([]);
const checkedModelDetailList = ref([]);

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
        getAxiosData("./data/Risk_scores.json"),
        getAxiosData("./data/Risk_cases.json"),
        getAxiosData("./data/MFT_scores.json"),
        getAxiosData("./data/MFT_cases.json"),
      ])
      .then(
        axios.spread(function (
          modelInfos,
          Schwartz_datas,
          Schwartz_cases,
          Risk_scores,
          Risk_cases,
          MFT_scores,
          MFT_cases
        ) {
          modelInfo_list = modelInfos.data.data;
          modelInfo.value = getKeyValue(modelInfos.data.data);
          Schwartz_data = getKeyValue(Schwartz_datas.data.data);
          Schwartz_case = Schwartz_cases.data.data;
          Risk_data = getKeyValue(Risk_scores.data.data);
          Risk_case = Risk_cases.data.data;
          MFT_data = getKeyValue(MFT_scores.data.data);
          MFT_case = MFT_cases.data.data;

          // const a = getKeyValue(Schwartz_data);
          // const b = getKeyValue(Risk_data);
          // const c = getKeyValue(MFT_data);
          const d = mergeObj(Schwartz_data, Risk_data, MFT_data);
          mergeData = d;

          for (let key in modelInfo.value) {
            const point = getAvaData(key, [], mergeData);
            modelInfo.value[key].points = (point * 100).toFixed(3);
          }
          modelNameList.value = Object.keys(modelInfo.value);

          Schwartz_table_columns.value = Object.keys(
            Schwartz_data[modelNameList.value[0]]
          );
          Schwartz_table_columns_checked.value = Schwartz_table_columns.value;
          Risk_table_columns.value = Object.keys(
            Risk_data[modelNameList.value[0]]
          );
          Risk_table_columns_checked.value = Risk_table_columns.value;
          MFT_table_columns.value = Object.keys(
            MFT_data[modelNameList.value[0]]
          );
          MFT_table_columns_checked.value = MFT_table_columns.value;

          //  默认选中第一个model
          checkedModelNameList.value.push(modelNameList.value[0]);
          // if (setModelName) {
          //   checkedModelNameList.value = [setModelName];
          // } else {
          //   checkedModelNameList.value.push(modelNameList.value[0]);
          // }
          submit();
        })
      );
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

const formatter = (row, column) => {
  if (column.label == "model_name") {
    return row[column.label];
  } else {
    return (row[column.label] * 100).toFixed(3);
  }
  // if(column.label == 'model_name'){
  //   return row[column.label]
  // }else{
  //   console.log(row[column.label])
  //   return row[column.label].toFixed(5)
  // }
};

const currentTab = ref(0);
const tabSwitch = (index) => {
  console.log(index);
  currentTab.value = index.index;
};
const submit = () => {
  visible.value = false;
  console.log(checkedModelNameList.value);
  if (checkedModelNameList.value.length > 5) {
    alert("最多可添加5个model");
  }
  getModelDetail();
  checkedModel.value = "";
};

const closeModel = (modelName, index) => {
  if (checkedModelNameList.value.length <= 1) {
    return;
  }
  checkedModelNameList.value.splice(index, 1);
  submit();
};

const Schwartz_table_columns = ref([]);
const MFT_table_columns = ref([]);
const Risk_table_columns = ref([]);

const Schwartz_table_columns_checked = ref([]);
const MFT_table_columns_checked = ref([]);
const Risk_table_columns_checked = ref([]);

const Schwartz_table_data = ref([]);
const MFT_table_data = ref([]);
const Risk_table_data = ref([]);
const getModelDetail = () => {
  checkedModelDetailList.value = [];
  if (checkedModelNameList.value.length > 5) {
    alert("最多可添加5个model");
  }
  // console.log("checkedModelNameList.value", checkedModelNameList.value); // ["GPT-4-Turbo","GPT-4-Turbo"]
  var colorHas = []; // colorList
  for (let i = 0; i < checkedModelNameList.value.length; i++) {
    if (i >= 5) {
      break;
    }
    console.log(checkedModelDetailList.value);
    let has = false;
    checkedModelDetailList.value.forEach((item) => {
      console.log("item", item, checkedModelNameList.value[i]);
      if (item.model_name == checkedModelNameList.value[i]) {
        has = true;
      } else {
      }
      colorHas.push(item.color);
    });

    let newArr = colorList.filter((v) => colorHas.every((val) => val != v));
    if (!has) {
      let obj = {};
      obj.color = newArr[0];
      obj.model_name = checkedModelNameList.value[i];
      obj.model_info = modelInfo.value[checkedModelNameList.value[i]];
      obj.Schwartz_data = Schwartz_data[checkedModelNameList.value[i]];
      obj.Risk_data = Risk_data[checkedModelNameList.value[i]];
      obj.MFT_data = MFT_data[checkedModelNameList.value[i]];
      checkedModelDetailList.value.push(obj);
    }
  }

  console.log("checkedModelDetailList.value", checkedModelDetailList.value);
  // checkedModelDetailList.value = [];
  Schwartz_table_data.value = [];
  MFT_table_data.value = [];
  Risk_table_data.value = [];
  for (let i = 0; i < checkedModelDetailList.value.length; i++) {
    // for table
    let Schwartz_obj = {};
    Schwartz_obj = Schwartz_data[checkedModelNameList.value[i]];
    Schwartz_obj.model_name = checkedModelNameList.value[i];
    Schwartz_table_data.value.push(Schwartz_obj);

    let Risk_obj = {};
    Risk_obj = Risk_data[checkedModelNameList.value[i]];
    Risk_obj.model_name = checkedModelNameList.value[i];
    Risk_table_data.value.push(Risk_obj);

    let MFT_obj = {};
    MFT_obj = MFT_data[checkedModelNameList.value[i]];
    MFT_obj.model_name = checkedModelNameList.value[i];
    MFT_table_data.value.push(MFT_obj);
  }
  //
  // TableComponentRef.value.setTableData(
  //   Schwartz_table_data.value,
  //   Risk_table_data.value,
  //   MFT_table_data.value,
  //   Schwartz_table_columns_checked.value,
  //   Risk_table_columns_checked.value,
  //   MFT_table_columns_checked.value )

  // for echart
  VisualizationComponentProps.value.setRadarChart(checkedModelDetailList.value);

  // for value space
  ValueSpaceComponentProps.value.setValueSpacesData(
    checkedModelDetailList.value
  );

  // for setHotChart
  CulturalAlignmentComponentProps.value.setHotChart(checkedModelNameList.value);
  console.log("checkedModelDetailList.value", checkedModelDetailList.value);

};

// 销毁ECharts实例
onUnmounted(() => {});

let setModelName = null;
const router = useRoute();
let isFirstEnter = true;
onMounted(() => {
  // console.log("首页传过来的modelName：" + router.query.modelName);
  // setModelName = router.query.modelName;
  fetchData();
});

// onActivated(() => {
//   if (isFirstEnter) {
//     isFirstEnter = false;
//   } else {
//     setModelName = router.query.modelName;
//     if (setModelName) {
//       console.log("首页传过来的modelName：" + router.query.modelName);
//       checkedModelNameList.value = [setModelName];
//       submit();
//     }
//   }
// });

let mergeData = null;

const fitterChange = (filerData) => {
  console.log("filerData", filerData);
  // const Schwartz_table_columns_checked = ref([]);
  // const MFT_table_columns_checked = ref([]);
  // const Risk_table_columns_checked = ref([]);
  if (filerData[1]) {
    Schwartz_table_columns_checked.value = filerData[1].map((v) => {
      return v.name;
    });
  } else {
    Schwartz_table_columns_checked.value = Schwartz_table_columns.value;
  }

  if (filerData[2]) {
    MFT_table_columns_checked.value = filerData[2].map((v) => {
      return v.name;
    });
  } else {
    MFT_table_columns_checked.value = MFT_table_columns.value;
  }

  if (filerData[3]) {
    Risk_table_columns_checked.value = filerData[3].map((v) => {
      return v.name;
    });
  } else {
    Risk_table_columns_checked.value = Risk_table_columns.value;
  }

  // TableComponentRef.value.setTableData(
  //   Schwartz_table_data.value,
  //   Risk_table_data.value,
  //   MFT_table_data.value,
  //   Schwartz_table_columns_checked.value,
  //   Risk_table_columns_checked.value,
  //   MFT_table_columns_checked.value )

  // for echart
  VisualizationComponentProps.value.setRadarChart(
    checkedModelDetailList.value,
    {
      Schwartz_data: Schwartz_table_columns_checked.value,
      MFT_data: MFT_table_columns_checked.value,
      Risk_data: Risk_table_columns_checked.value,
    }
  );
  // chartDom1.value.setRadarChart(modelList, "Schwartz_data", filerData && filerData[1] || null);
  // chartDom2.value.setRadarChart(modelList, "MFT_data",filerData && filerData[2] || null);
  // chartDom3.value.setRadarChart(modelList, "Risk_data",filerData && filerData[3] || null);
};
</script>

<style scoped lang="scss">
.comparison-template {
  // width: 80%;
  // max-width: 1500px;
  // margin: 0 auto;
  // min-width: 1200px;
}
.el-table {
  // --el-table-border: none;
  --el-table-header-bg-color: var(--gary-color);
  --el-table-bg-color: transparent;
  --el-table-tr-bg-color: transparent;
  --el-table-text-color: var(--text-color);
  --el-table-header-text-color: var(--text-color);
  --el-table-row-hover-bg-color: #0a111f;
  --el-table-border-color: var(--border-color);
  --el-table-row-hover-bg-color: transparent;
  font-size: 1em;
}
.title-content {
  margin-top: 3.56em;
  margin-bottom: 3em;
  background: var(--gary-color);
  padding: 2.25em 3em;
  border-radius: 0.375em;
  h2 {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.3125em;
    margin-bottom: 1.3125em;
  }
  .compare-model-list {
    font-size: 14px;
    ul {
      display: flex;
      gap: 0.75em;
      align-items: center;
      align-items: stretch;
      li.model-li {
        width: 13em;
        // height: 7.5em;
        padding: 1.125em 1.5em;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 0.75em;
        text-align: center;
        border: 1px solid #4992ff;
        position: relative;
        .close-comparison {
          display: inline-block;
          width: 1.2em;
          height: 1.2em;
          background: url(@/assets/images/close-comparison.svg) no-repeat;
          background-size: contain;
          vertical-align: text-bottom;
          position: absolute;
          right: 0.5em;
          top: 0.5em;
        }
        .name {
          margin-right: 0.5em;
        }
        .point-num {
          font-size: 1.25em;
          font-weight: 600;
          line-height: 1.5em;
          margin: 0.8em 0;
        }
        .point {
          font-size: 0.6em;
          font-weight: 400;
          line-height: 1.3em;
          margin-left: 0.4em;
          opacity: 0.8;
        }
        .top-item-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .dev {
            width: 6em;
            font-size: 0.75em;
            // line-height: 1.5em;
          }
          .date {
            font-size: 0.75em;
            opacity: 0.8;
            // line-height: 1.5em;
          }
        }
        .type-icon {
          display: inline-block;
          width: 1em;
          height: 1em;
          background: url(@/assets/images/type-icon.svg) no-repeat;
          background-size: contain;
          vertical-align: text-bottom;
        }
        .type-close-icon {
          display: inline-block;
          width: 1em;
          height: 1em;
          background: url(@/assets/images/type-icon-close.svg) no-repeat;
          background-size: contain;
          vertical-align: text-bottom;
        }
      }
      .add-model {
        width: 10em;
        min-height: 7.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px dashed rgba(194, 194, 194, 1);
        border-radius: 0.75em;
        color: #6b6b6b;
        cursor: pointer;
      }
      .max-num-tip {
        width: 8em;
        min-height: 7.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1.8;
        text-align: center;
      }
    }
  }
}
.chart-box {
  // margin-top: 4.5em;
  padding: 0 0 4.5em;
  // display: flex;
  .chart-tab {
    .chart-tab-title {
      font-size: 1em;
      font-weight: 700;
    }
    ul {
      li {
        font-size: 1em;
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
    // flex-grow: 1;
    width: 100%;
    .table-box {
      margin-top: 2em;
      h4 {
        font-size: 1.2em;
        margin: 2em 0 0.8em;
        font-weight: 600;
        text-align: center;
      }
    }

    .chart-main-chart {
      display: flex;
      align-items: center;
    }
  }
}
:deep(.el-checkbox__label) {
  width: 145px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
:deep(.el-checkbox) {
  --el-checkbox-text-color: var(--text-color);
  margin-right: 1em;
}

:deep(.el-tabs__header) {
  --el-font-size-base: 1.25em;
  .el-tabs__item {
    padding: 0;
    color: var(--sub-text-color);
    &.is-active {
      color: rgba(16, 147, 255, 1);
    }
  }
}
</style>
