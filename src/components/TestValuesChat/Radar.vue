<template>
  <div ref="chartRef" class="radar-chart"></div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount, watch } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  value: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const chartRef = ref(null);
let chartInstance = null;

const renderChart = () => {
  if (!chartInstance) return;

  const dataObj = props.value || {};

  // 转成数组并按 value 降序排序
  const sortedArray = Object.entries(dataObj)
    .map(([name, value]) => ({ name, value }))
   // .sort((a, b) => b.value - a.value);

  // 生成雷达图 indicator 和 values
  const indicators = sortedArray.map(item => ({
    name: item.name,
    max: 10, // 每个维度最大值
  }));

  const values = sortedArray.map(item => item.value);

  const option = {
    // title: {
    //   text: "Value Dimension Scores",
    //   left: "center",
    // },
    tooltip: {
      trigger: "item",
    },
    radar: [
      {
        indicator: indicators,
        radius: "50%",
        splitNumber: 5,
        shape: "circle",
        axisName: {
          color: "#666",
          fontSize: 12,
        },
        splitLine: {
          lineStyle: {
            color: "#ddd",
            type: "dashed",
          },
        },
        splitArea: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#ddd",
          },
        },
      },
    ],
    series: [
      {
        type: "radar",
        areaStyle: {
          color: "rgba(0,123,255,0.5)",
        },
        lineStyle: {
          color: "rgba(0,123,255,1)",
          width: 2,
        },
        symbol: "circle",
        symbolSize: 4,
        itemStyle: {
          color: "rgba(0,123,255,1)",
        },
        data: [
          {
            value: values,
            name: "Value Scores",
          },
        ],
      },
    ],
  };

  chartInstance.setOption(option);
  chartInstance.resize();
};


onMounted(() => {
  chartInstance = echarts.init(chartRef.value);
  renderChart();

  window.addEventListener("resize", () => chartInstance.resize());
});

// 当 props.value 更新时，自动刷新图表
watch(
  () => props.value,
  () => {
    renderChart();
  },
  { deep: true }
);

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose();
  }
});
</script>

<style scoped>
.radar-chart {
  width: 100%;
  height: 400px;
}
</style>
