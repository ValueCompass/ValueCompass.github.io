<template>
  <div>
    <div class="">
      <div>
        <div>
          <div
            class="chart"
            ref="chartDom"
            style="width: 1100px; height: 700px; margin: 0 auto"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  ref,
  watch,
  onMounted,
  onUnmounted,
  nextTick,
  defineExpose,
} from "vue";
import axios from "axios";
import * as echarts from "echarts";

const chartDom = ref(null);
let chartInstance = null;

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
    const minValue = Math.floor(Math.min(...allValues) * 1) / 1 - 10;

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
      for (let j = 0; j < Schwartz_indicator.length; j++) {
        item.push(
          modelList[i][MeasurementDimensionName][Schwartz_indicator[j].name]
        );
      }
      Schwartz_data.push({
        name: modelList[i].model_name,
        value: item,
        areaStyle: {
          opacity: 0,
          color: "#1093FF",
        },
        lineStyle: {
          width: 2,
          color: modelList[i].color,
        },
        itemStyle: {
          color: modelList[i].color,
        },
      });
      legendName.push(modelList[i].model_name);
    }
  }

  chartInstance.setOption({
    legend: {
      data: legendName,
      // top: "0%",
      textStyle: {
        fontSize: 16,
        color: "black",
      },
    },
    radar: {
      // 设置雷达图的中心和半径
      center: ["50%", "50%"],
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
<style>
</style>
