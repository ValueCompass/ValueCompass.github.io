<template>
  <div>
    <div class="">
      <button @click="downloadChartsAsPDF()">下载图表为PDF</button>
      <div class="echart-list">
        <div v-show="props.DimensionMeasurementTabIndex == 0">
          <p>Schwartz Theory of Basic Values</p>
          <EchartComponent ref="chartDom1"></EchartComponent>
        </div>
        <div v-show="props.DimensionMeasurementTabIndex == 0">
          <p>Moral Foundation Theory</p>
          <EchartComponent ref="chartDom2"></EchartComponent>
        </div>
        <div v-show="props.DimensionMeasurementTabIndex == 0">
          <p>Diverse Safety Risks</p>
          <EchartComponent ref="chartDom3"></EchartComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EchartComponent from "./echart.vue";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
  DimensionMeasurementTabIndex: {
    type: Number,
    required: false,
    default: 0,
  },
});

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

const titles = [
  "Schwartz Theory of Basic Values",
  "Moral Foundation Theory",
  "Diverse Safety Risks",
];
const downloadChartsAsPDF = async (pdf) => {
  console.log(pdf);
  if (!pdf) {
    pdf = new jsPDF("p", "mm", "a4");
  }
  // 获取页面宽高
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 10; // 设置统一的边距
  const charts = [
    chartDom1.value.$refs.chartDom,
    chartDom2.value.$refs.chartDom,
    chartDom3.value.$refs.chartDom,
  ];
  let top = margin;
  for (let i = 0; i < charts.length; i++) {
    const canvas = await html2canvas(charts[i]);
    const imgData = canvas.toDataURL("image/png");
    const imgProps = pdf.getImageProperties(imgData);
    const setImgWidth = pageWidth - 2 * margin;
    const setImgHeight = (imgProps.height * setImgWidth) / imgProps.width;

    if (i > 0) {
      pdf.addPage();
      top = margin;
    }

    // 添加文字并居中
    const text = titles[i];
    const textWidth = pdf.getTextWidth(text);
    const textX = (pageWidth - textWidth) / 2;
    pdf.text(text, textX, top); // 在顶部距离上方添加文字
    top += 10;

    // 添加图像
    pdf.addImage(imgData, "PNG", margin, top, setImgWidth, setImgHeight);
  }

  pdf.save("charts.pdf");
};
</script>