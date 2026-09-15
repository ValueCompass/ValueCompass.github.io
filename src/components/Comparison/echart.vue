<template>
  <figure>
    <ul
      v-if="legendItems.length"
      class="chart-legend"
      :aria-label="`${chartTitle} series`"
    >
      <li
        v-for="item in legendItems"
        :key="item.name"
      >
        <button
          type="button"
          class="legend-button"
          :class="{ 'is-unselected': !item.selected }"
          :aria-pressed="item.selected"
          :aria-label="`${item.name}, ${item.selected ? 'shown' : 'hidden'}`"
          @click="toggleLegendItem(item)"
          @keydown="handleLegendKeydown"
        >
          <span
            class="legend-marker"
            :style="{ color: item.color }"
            aria-hidden="true"
          >{{ item.marker }}</span>
          <span>{{ item.name }}</span>
        </button>
      </li>
    </ul>
    <div class="">
      <div>
        <div>
          <div
            class="chart"
            ref="chartDom"
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
let chartResizeObserver = null;
let forcedColorsMediaQuery = null;
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
const legendItems = ref([]);
const legendMarkers = ["●", "■", "▲", "◆", "★"];
const starSymbol =
  "path://M12 1.8L15.1 8.1L22 9.1L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.1L8.9 8.1Z";
const modelSymbols = ["circle", "rect", "triangle", "diamond", starSymbol];
const modelLineTypes = ["solid", "dashed", "dotted"];

const getChartTextColor = () =>
  forcedColorsMediaQuery?.matches
    ? getComputedStyle(chartDom.value).color
    : "#000";

const updateChartContrast = () => {
  if (!chartInstance) {
    return;
  }

  const textColor = getChartTextColor();
  chartInstance.setOption({
    legend: { textStyle: { color: textColor } },
    radar: {
      axisName: { color: textColor },
      axisLabel: { color: textColor },
    },
  });
};

const toggleLegendItem = (item) => {
  chartInstance?.dispatchAction({
    type: "legendToggleSelect",
    name: item.name,
  });
  item.selected = !item.selected;
};

const handleLegendKeydown = (event) => {
  const legend = event.currentTarget.closest(".chart-legend");
  const buttons = Array.from(legend?.querySelectorAll(".legend-button") || []);
  const currentIndex = buttons.indexOf(event.currentTarget);
  let nextIndex = currentIndex;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    nextIndex = (currentIndex + 1) % buttons.length;
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
  } else if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = buttons.length - 1;
  } else {
    return;
  }

  event.preventDefault();
  buttons[nextIndex]?.focus();
};

const resizeChart = () => {
  if (!chartDom.value || !chartInstance) {
    return;
  }

  chartInstance.resize({
    width: chartDom.value.clientWidth,
    height: chartDom.value.clientHeight,
  });
};

const handleWindowResize = () => {
  requestAnimationFrame(() => requestAnimationFrame(resizeChart));
};

const setRadarChart = (modelList, MeasurementDimensionName, filerData) => {
  console.log(modelList);
  let Schwartz_data = [];
  let legendName = [];
  let Schwartz_indicator = [];
  legendItems.value = modelList.map((item, index) => ({
    name: item.model_name,
    color: item.color,
    marker: legendMarkers[index % legendMarkers.length],
    selected: true,
  }));
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
    chartDescription.value = `Selected dimensions: ${dimensionNames}. Use the series toggle buttons before the chart to show or hide models. Use the value-system tabs, dimension checkboxes, Select All, and Apply controls above this chart to change the displayed data.`;
  } else {
    chartAriaLabel.value = `${chartTitle} radar chart with no comparison data`;
    chartDescription.value =
      "No comparison data is currently displayed. Use the Selected Points controls above the chart, then choose Select All or Apply to update it.";
  }

  chartInstance.setOption({
    legend: {
      show: false,
      data: legendName,
      selected: Object.fromEntries(
        legendItems.value.map((item) => [item.name, true])
      ),
      // top: "0%",
      textStyle: {
        fontSize: 14,
        color: getChartTextColor(),
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
        color: getChartTextColor(),
        formatter: function (value) {
          return value.split("&").join("&\n"); // 将换行符拆分为数组
        },
      },
      axisLabel: {
        color: getChartTextColor(),
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
  resizeChart,
});

// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  forcedColorsMediaQuery = window.matchMedia("(forced-colors: active)");
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
        color: getChartTextColor(),
      },
      axisName: {
        fontSize: 14,
        color: getChartTextColor(),
      },
      triggerEvent: true,
      indicator: [
        { name: "Benevolence", max: 1 },
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
  chartResizeObserver = new ResizeObserver(([entry]) => {
    const { width, height } = entry.contentRect;

    if (width > 0 && height > 0) {
      chartInstance?.resize({ width, height });
    }
  });
  chartResizeObserver.observe(chartDom.value);
  window.addEventListener("resize", handleWindowResize);
  forcedColorsMediaQuery.addEventListener("change", updateChartContrast);
});

onUnmounted(() => {
  forcedColorsMediaQuery?.removeEventListener("change", updateChartContrast);
  window.removeEventListener("resize", handleWindowResize);
  chartResizeObserver?.disconnect();
  chartInstance?.dispose();
});
</script>
<style scoped>
figure {
  margin: 0;
}

.chart {
  width: 100%;
  height: 700px;
  margin: 0 auto;
}

.chart-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75em;
  min-height: 2em;
  margin: 0;
  padding: 0;
  list-style: none;
}

.legend-button {
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  padding: 0.25em;
  border: 0;
  background: transparent;
  color: #000;
  font: inherit;
  line-height: 1.2;

}

.legend-button:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

.legend-button.is-unselected {
  opacity: 0.55;
  text-decoration: line-through;
}

.legend-marker {
  width: 1em;
  font-size: 1.2em;
  line-height: 1;
  text-align: center;
}

@media (forced-colors: active) {
  .chart {
    color: CanvasText;
  }

  .legend-button {
    color: ButtonText;
  }

  .legend-button:focus-visible {
    outline-color: Highlight;
  }

  .legend-marker {
    color: ButtonText !important;
  }
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

@media (max-width: 767px) {
  .chart {
    height: 360px;
  }
}
</style>
