<template>
  <div>
    <div class="">
      <div>
        <div>
          <div
            class="chart"
            ref="chartDom"
            style="width: 1200px; height: 600px; margin: 0 auto"
            tabindex="0"
            role="img"
            aria-label="Culture heatmap"
            aria-describedby="heatmap-keyboard-help heatmap-live-status"
            @focus="handleChartFocus"
            @blur="handleChartBlur"
          ></div>
          <div
            class="heatmap-cell-controls"
            role="group"
            aria-label="Culture heatmap cells"
          >
            <button
              v-for="(cell, index) in accessibleHeatmapCells"
              :key="`${cell[0]}-${cell[1]}`"
              type="button"
              class="sr-only"
              :aria-label="getCellLabel(cell)"
              @focus="focusHeatmapCell(index)"
              @blur="handleChartBlur"
            >
              {{ getCellLabel(cell) }}
            </button>
          </div>
          <p id="heatmap-keyboard-help" class="sr-only">
            Press Tab to visit each heatmap cell individually.
          </p>
          <p id="heatmap-live-status" class="sr-only" aria-live="polite">
            {{ activeCellAnnouncement }}
          </p>
          <p style="text-align: center; color: #747474;;">The heatmap illustrates the Pearson correlation between the values of various models and countries.</p>
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
import { getKeyValue } from "@/utils/common.js";

const checkedModels = ref([]);
const chartDom = ref(null);
let chartInstance = null;
const allHeatMapData = ref();
const allHeatMapDataObject = ref();
let countries = [];
let heatmapData = [];
let heatmapModels = [];
const accessibleHeatmapCells = ref([]);
const activeCellIndex = ref(0);
const activeCellAnnouncement = ref("");
const heatmapColors = ["#096DD9", "#91D5FF", "#eeeeee", "#FFA39E", "#CF1322"];

const hexToRgb = (hex) => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];

const getHeatmapColor = (value) => {
  const normalizedValue = Math.min(100, Math.max(0, Number(value))) / 100;
  const scaledValue = normalizedValue * (heatmapColors.length - 1);
  const startIndex = Math.min(Math.floor(scaledValue), heatmapColors.length - 2);
  const ratio = scaledValue - startIndex;
  const startColor = hexToRgb(heatmapColors[startIndex]);
  const endColor = hexToRgb(heatmapColors[startIndex + 1]);

  return startColor.map((channel, index) =>
    Math.round(channel + (endColor[index] - channel) * ratio),
  );
};

const getRelativeLuminance = (rgb) => {
  const channels = rgb.map((channel) => {
    const value = channel / 255;
    return value <= 0.04045
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  });

  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
};

const getHeatmapLabelStyle = (value) =>
  getRelativeLuminance(getHeatmapColor(value)) > 0.179 ? "dark" : "light";

const getCellLabel = ([countryIndex, modelIndex, value]) =>
  `${heatmapModels[modelIndex]}, ${countries[countryIndex]}: ${value}`;

const announceActiveCell = () => {
  const cell = heatmapData[activeCellIndex.value];
  if (!cell) {
    activeCellAnnouncement.value = "No heatmap data available.";
    return;
  }

  const [countryIndex, modelIndex, value] = cell;
  activeCellAnnouncement.value = `${heatmapModels[modelIndex]}, ${countries[countryIndex]}: ${value}`;
  chartInstance.dispatchAction({
    type: "downplay",
    seriesIndex: 0,
  });
  chartInstance.dispatchAction({
    type: "highlight",
    seriesIndex: 0,
    dataIndex: activeCellIndex.value,
  });
  chartInstance.dispatchAction({
    type: "showTip",
    seriesIndex: 0,
    dataIndex: activeCellIndex.value,
  });
};

const handleChartFocus = () => {
  announceActiveCell();
};

const focusHeatmapCell = (index) => {
  activeCellIndex.value = index;
  announceActiveCell();
};

const handleChartBlur = () => {
  chartInstance?.dispatchAction({ type: "downplay", seriesIndex: 0 });
  chartInstance?.dispatchAction({ type: "hideTip" });
};

const getAllHeatMapData = async () => {
  return axios.get("./data/value_sim_heatmap.json").then((value_space_data) => {
    console.log(value_space_data);
    allHeatMapData.value = value_space_data.data;
    const obj = {};
    for (let i = 0; i < value_space_data.data.models.length; i++) {
      obj[value_space_data.data.models[i]] =
        value_space_data.data.cosine_sim_matrix[i];
    }
    // console.log(obj);
    allHeatMapDataObject.value = obj;
  });
};
const setHotChart = (modelNameList) => {
  checkedModels.value = modelNameList;
  let allHeatMapDataFilter = [];
  if (modelNameList && modelNameList.length > 0) {
    let cosine_sim_matrixArr = [];
    for (var i = 0; i < modelNameList.length; i++) {
      cosine_sim_matrixArr.push(allHeatMapDataObject.value[modelNameList[i]]);
    }
    allHeatMapDataFilter = {
      cosine_sim_matrix: cosine_sim_matrixArr,
      models: modelNameList,
      countries: countries,
    };
  } else {
    // allHeatMapDataFilter = allHeatMapData.value;
    // allHeatMapDataFilter = {
    //   cosine_sim_matrix: [allHeatMapData.value.cosine_sim_matrix[0], allHeatMapData.value.cosine_sim_matrix[1]],
    //   models: [allHeatMapData.value.models[0], allHeatMapData.value.models[1]],
    //   countries: countries,
    // };
    allHeatMapDataFilter = {
      cosine_sim_matrix: [],
      models: [],
      countries: countries,
    };
  }

  console.log("modelNameList", modelNameList, allHeatMapDataFilter);

  var hotData = [];
  for (let i = 0; i < allHeatMapDataFilter.cosine_sim_matrix.length; i++) {
    if (allHeatMapDataFilter.cosine_sim_matrix[i]) {
      for (let j = 0; j < allHeatMapDataFilter.countries.length; j++) {
        hotData.push([i, j, allHeatMapDataFilter.cosine_sim_matrix[i][j]]);
      }
    }
  }
  const modelNames = allHeatMapDataFilter.models;
  const data = hotData.map(function (item) {
    return [item[1], item[0], (item[2] * 100).toFixed(3) || "-"];
  });
  heatmapData = data;
  heatmapModels = modelNames;
  accessibleHeatmapCells.value = data;
  activeCellIndex.value = 0;
  activeCellAnnouncement.value = "";
  // console.log(hotData, "hotData", data);

  chartInstance.setOption({
    yAxis: {
      type: "category",

      data: modelNames,

      splitArea: {
        show: true,
      },

      axisLabel: {
        color: "#000",
        fontSize: 16,
      },
    },
    series: [
      {
        name: "Punch Card",

        type: "heatmap",

        data: data,

        label: {
          show: true,
          fontSize: 16,
          fontWeight: "bold",
          formatter: (params) =>
            `{${getHeatmapLabelStyle(params.value[2])}|${params.value[2]}}`,
          rich: {
            dark: {
              color: "#000",
              fontSize: 16,
              fontWeight: "bold",
            },
            light: {
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
            },
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,

            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  });
};

defineExpose({
  setHotChart,
});

// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
onMounted(async () => {
  await getAllHeatMapData();
  await nextTick(); // 确保DOM已经渲染完成

  // const hours = ["Germany", "France", "USA", "Britain", "Russia", "China"];
  // console.log("allHeatMapData.value.countries", allHeatMapData.value);
  countries = allHeatMapData.value.countries;

  // prettier-ignore

  // const modelNames = ['GPT-4-Turbo', 'GPT-3.5-Turbo', 'Claude 2','Mistral-7B-Instruct', 'Llama-2-7b-chat',];
  const modelNames = allHeatMapData.value.models

  // prettier-ignore

  chartInstance = echarts.init(chartDom.value);
  const option = {
    tooltip: {
      position: "top",
    },

    grid: {
      height: "60%",

      top: "10%",
      left: "2%",
      containLabel: true,
    },

    xAxis: {
      type: "category",

      data: countries,

      splitArea: {
        show: true,
      },

      axisLabel: {
        color: "#000",
        fontSize: 16,
      },
    },

    yAxis: {
      type: "category",

      data: modelNames,

      splitArea: {
        show: true,
      },

      axisLabel: {
        color: "#000",
        fontSize: 16,
      },
    },

    visualMap: {
      min: 0,

      max: 100,

      calculable: false,

      orient: "horizontal",

      text: ["100", "0"],

      textGap: 8,

      left: "center",
      bottom: "10%",
      // color: ["#083669", "#4795C3", "#eeeeee", "#E0785F", "#690320"],
      // color: ["#083669", "#4795C3", "#eeeeee", "#E0785F", "#690320"],
      color: [...heatmapColors].reverse(),
      textStyle: { color: "#000" },
    },

    // series: [
    //   {
    //     name: "Punch Card",

    //     type: "heatmap",

    //     data: data,

    //     label: {
    //       show: true,
    //     },

    //     emphasis: {
    //       itemStyle: {
    //         shadowBlur: 10,

    //         shadowColor: "rgba(0, 0, 0, 0.5)",
    //       },
    //     },
    //   },
    // ],
  };
  chartInstance.setOption(option);

  setHotChart(checkedModels.value);
});
</script>
<style>
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

.chart:focus-visible {
  outline: 3px solid #0870c3;
  outline-offset: 3px;
}
</style>
