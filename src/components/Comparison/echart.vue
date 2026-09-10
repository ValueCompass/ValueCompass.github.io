<template>
  <figure>
    <div class="">
      <div>
        <div>
          <div
            class="chart"
            ref="chartDom"
            style="width: 1200px; height: 700px; margin: 0 auto"
            tabindex="0"
            role="img"
            :aria-label="chartAriaLabel"
            :aria-describedby="chartDescriptionId"
          ></div>
          <figcaption :id="chartDescriptionId" class="sr-only">
            {{ chartDescription }}
          </figcaption>
        </div>
      </div>
    </div>
  </figure>
</template>
<script setup>
import {
  ref,
  watch,
  onMounted,
  onUnmounted,
  nextTick,
  defineExpose,
  defineProps,
} from "vue";
import axios from "axios";
import * as echarts from "echarts";
const props = defineProps({
  type: {
    type: Number,
    required: true,
  },
});

const chartDom = ref(null);
let chartInstance = null;
const chartTitles = {
  1: "Schwartz Theory of Basic Values",
  2: "Moral Foundation Theory",
  3: "Safety Taxonomy",
  4: "LLMs' Unique Value System",
};
const chartTitle = chartTitles[props.type] || "Value comparison";
const chartDescriptionId = `comparison-chart-description-${props.type}`;
const chartAriaLabel = ref(`${chartTitle} radar chart`);
const chartDescription = ref(
  "No comparison data is currently displayed. Use the Selected Points controls above the chart, then choose Select All or Apply to update it."
);
const starSymbol =
  "path://M12 1.8L15.1 8.1L22 9.1L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.1L8.9 8.1Z";
const modelSymbols = ["circle", "rect", "triangle", "diamond", starSymbol];
const modelLineTypes = ["solid", "dashed", "dotted"];

const setRadarChart = (modelList, MeasurementDimensionName, filerData) => {
  console.log(modelList);
  let Schwartz_data = [];
  let legendName = [];
  let Schwartz_indicator = [];
  if (modelList.length > 0) {
    const allValues = modelList.flatMap((item) =>
      Object.entries(item[MeasurementDimensionName])
        .filter(([key, value]) => key !== "model_name" && key !== "Score")
        .map(([key, value]) => value)
    );
    const maxValue = Math.ceil(Math.max(...allValues) * 1) / 1;
    let jianNum = 2;
    if (props.type == 1) {
      jianNum = 5;
    }
    const minValue = Math.floor(Math.min(...allValues) * 1) / 1 - jianNum;

    let keys = [];
    if (filerData) {
      keys = filerData;
    } else {
      keys = Object.keys(modelList[0][MeasurementDimensionName]);
    }
    Schwartz_indicator = keys // Object.keys(modelList[0].Schwartz_data)
      .filter((item) => item != "model_name" && item != "Score")
      .map((item, index) => {
        return {
          name: item,
          color: index == 0 ? "#000" : "#000",
          axisLabel: { show: index == 0 ? true : false },
          min: minValue,
          max: maxValue,
        };
      });

    for (let i = 0; i < modelList.length; i++) {
      let item = [];
      const symbol = modelSymbols[i % modelSymbols.length];
      const lineType =
        modelLineTypes[Math.floor(i / modelSymbols.length) % modelLineTypes.length];
      for (let j = 0; j < Schwartz_indicator.length; j++) {
        item.push(
          modelList[i][MeasurementDimensionName][Schwartz_indicator[j].name]
        );
      }
      Schwartz_data.push({
        name: modelList[i].model_name,
        value: item,
        symbol,
        symbolSize: 9,
        areaStyle: {
          opacity: 0,
          color: "#1093FF",
        },
        lineStyle: {
          width: 2,
          color: modelList[i].color,
          type: lineType,
        },
        itemStyle: {
          color: modelList[i].color,
        },
      });
      legendName.push({
        name: modelList[i].model_name,
        icon: symbol,
      });
    }

    const modelNames = modelList.map((item) => item.model_name).join(", ");
    const dimensionNames = Schwartz_indicator
      .map((item) => item.name)
      .join(", ");
    chartAriaLabel.value = `${chartTitle} radar chart comparing ${modelNames}`;
    chartDescription.value = `Selected dimensions: ${dimensionNames}. Use the value-system tabs, dimension checkboxes, Select All, and Apply controls above this chart to change the displayed data.`;
  } else {
    chartAriaLabel.value = `${chartTitle} radar chart with no comparison data`;
    chartDescription.value =
      "No comparison data is currently displayed. Use the Selected Points controls above the chart, then choose Select All or Apply to update it.";
  }

  chartInstance.setOption({
    legend: {
      data: legendName,
      // top: "0%",
      textStyle: {
        fontSize: 14,
        color: "black",
      },
    },
    radar: {
      // 设置雷达图的中心和半径
      center: ["50%", "56%"],
      radius: "65%", // 增大半径以留出更多空间给文字
      splitArea: {
        areaStyle: {
          color: ["rgba(0,0,0,0.05)", "rgba(0,0,0,0.03)"],
        },
      },
      splitNumber: 5,
      axisName: {
        fontSize: 16,
        color: "black",
        formatter: function (value) {
          return value.split("&").join("&\n"); // 将换行符拆分为数组
        },
      },
      axisLabel: {
        color: "#767676",
        formatter: function (value) {
          return value.toFixed(0); // 保留一位小数
        },
      },
      triggerEvent: true,
      indicator: Schwartz_indicator,
    },
    series: [
      {
        type: "radar",
        symbolSize: 8,
        itemStyle: {
          color: "#4992ff",
        },
        data: Schwartz_data,
      },
    ],
  });
};

defineExpose({
  setRadarChart,
});

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
        color: "#767676",
      },
      axisName: {
        fontSize: 14,
        color: "#fff",
      },
      triggerEvent: true,
      indicator: [
        { name: "Benevolence", max: 1, color: "#ffd000" },
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
});
</script>
<style scoped>
figure {
  margin: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
