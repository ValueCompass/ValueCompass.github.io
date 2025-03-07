<template>
  <div style="width: 100%; height: 100%" ref="chartDom"></div>
</template>
<script setup>
import {
  ref,
  watch,
  onMounted,
  onUnmounted,
  nextTick,
  defineExpose,
  defineEmits,
  defineProps,
} from "vue";
import axios from "axios";
import * as echarts from "echarts";

const props = defineProps({
  hasHightlight: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const chartDom = ref(null);
let chartInstance = null;

let maxValue = 0;
let minValue = 100;

const setRadarChart = (data) => {
  const values = Object.values(data);
  maxValue = Math.ceil(Math.max(...values) * 1) / 1;
  minValue = Math.floor(Math.min(...values) * 1) / 1 - 10;
  // 获取dada
  const indicator = Object.keys(data).map((item, index) => {
    return {
      name: item,
      color:
        props.hasHightlight && index == 0 ? "rgba(16, 147, 255, 1)" : "black",
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
};
const setRadarHighlight = (data, item) => {
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
};

defineExpose({
  setRadarChart,
  setRadarHighlight,
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

          emit("setCurrentCaseData", item.name);
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

const emit = defineEmits(["setCurrentCaseData"]);
</script>
<style>
</style>
