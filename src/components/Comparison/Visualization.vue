<template>
  <div>
    <div class="">
      <!-- <div class="model-title">
        <div v-for="(item, index) in modelsList" :key="index">
          <span :style="{ 'background-color': item.color }" style=""></span>
          <span>{{ item.model_name }}</span>
        </div>
      </div> -->
      <div class="echart-list">
        <div v-show="props.DimensionMeasurementTabIndex == 0">
          <p>Schwartz Theory of Basic Values</p>
          <EchartComponent ref="chartDom1"></EchartComponent>
        </div>
        <div v-show="props.DimensionMeasurementTabIndex == 1">
          <p>Moral Foundation Theory</p>
          <EchartComponent ref="chartDom2"></EchartComponent>
        </div>
        <div v-show="props.DimensionMeasurementTabIndex == 2">
          <p>Diverse Safety Risks</p>
          <EchartComponent ref="chartDom3"></EchartComponent>
        </div>
        <!-- <div>
          <p>LLM Value System</p>
          <div
            class="chart"
            ref="chartDom4"
            style="width: 500px; height: 500px"
          ></div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import EchartComponent from "./echart.vue";

import {
  ref,
  watch,
  onMounted,
  onUnmounted,
  nextTick,
  defineExpose,
  defineProps
} from "vue";
import axios from "axios";
import * as echarts from "echarts";
const props = defineProps({
  DimensionMeasurementTabIndex:{
    type:Number,
    required:false,
    default:0
  }
})

const chartDom1 = ref(null);
const chartDom2 = ref(null);
const chartDom3 = ref(null);
const chartDom4 = ref(null);
const modelsList = ref(null);

let chartInstance = null;

const setRadarChart = (modelList, filerData) => {
  modelsList.value = modelList;
  chartDom1.value.setRadarChart(
    modelList,
    "Schwartz_data",
    filerData ? filerData["Schwartz_data"] : null
  );
  chartDom2.value.setRadarChart(
    modelList,
    "MFT_data",
    filerData ? filerData["MFT_data"] : null
  );
  chartDom3.value.setRadarChart(
    modelList,
    "Risk_data",
    filerData ? filerData["Risk_data"] : null
  );
};

defineExpose({
  setRadarChart,
});

// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
// onMounted(async () => {
//   await nextTick(); // 确保DOM已经渲染完成
//   chartInstance = echarts.init(chartDom.value);
//   const option = {
//     radar: {
//       splitArea: {
//         areaStyle: {
//           color: ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)"],
//         },
//       },
//       axisLabel: {
//         show: true,
//         fontSize: 14,
//       },
//       axisName: {
//         fontSize: 14,
//         color: "#fff",
//       },
//       triggerEvent: true,
//       indicator: [
//         { name: "Benevolence", max: 1, color: "#ffd000" },
//         { name: "Achievement", max: 1, axisLabel: { show: false } },
//         { name: "Universalism", max: 1, axisLabel: { show: false } },
//         { name: "Tradition", max: 1, axisLabel: { show: false } },
//         { name: "Stimulation", max: 1, axisLabel: { show: false } },
//         { name: "Self-direction", max: 1, axisLabel: { show: false } },
//         { name: "Security", max: 1, axisLabel: { show: false } },
//         { name: "Power", max: 1, axisLabel: { show: false } },
//         { name: "Hedonism", max: 1, axisLabel: { show: false } },
//         { name: "Conformity", max: 1, axisLabel: { show: false } },
//       ],
//     },
//   };
//   chartInstance.setOption(option);
// });
</script>
<style lang="scss" scoped>
.model-title {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & > div {
    padding: 0 10px;
    span:nth-child(1) {
      transform: translateY(3px);
      width: 12px;
      height: 18px;
      display: inline-block;
      margin-right: 8px;
    }
  }
}
.echart-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    width: 100%;
    padding-bottom: 2em;
    box-sizing: border-box;
    p {
      text-align: center;
      margin-bottom: 1em;
    }
    font-weight: 600;
    font-size: 1.2em;
    margin-bottom: 30px;
  }
}
</style>
