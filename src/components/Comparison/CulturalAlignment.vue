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
            aria-label="Culture heatmap. Use the arrow keys to explore values by model and country."
            aria-describedby="heatmap-keyboard-help heatmap-live-status"
            @focus="handleChartFocus"
            @blur="handleChartBlur"
            @keydown="handleChartKeydown"
          ></div>
          <p id="heatmap-keyboard-help" class="sr-only">
            Use Left and Right Arrow keys to move between countries. Use Up and
            Down Arrow keys to move between models.
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
const activeCellIndex = ref(0);
const activeCellAnnouncement = ref("");

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

const handleChartBlur = () => {
  chartInstance?.dispatchAction({ type: "downplay", seriesIndex: 0 });
  chartInstance?.dispatchAction({ type: "hideTip" });
};

const handleChartKeydown = (event) => {
  if (!heatmapData.length || !countries.length) {
    return;
  }

  const [countryIndex, modelIndex] = heatmapData[activeCellIndex.value];
  let nextCountryIndex = countryIndex;
  let nextModelIndex = modelIndex;
  if (event.key === "ArrowRight") {
    nextCountryIndex = Math.min(countryIndex + 1, countries.length - 1);
  } else if (event.key === "ArrowLeft") {
    nextCountryIndex = Math.max(countryIndex - 1, 0);
  } else if (event.key === "ArrowDown") {
    nextModelIndex = Math.max(modelIndex - 1, 0);
  } else if (event.key === "ArrowUp") {
    nextModelIndex = Math.min(modelIndex + 1, heatmapModels.length - 1);
  } else {
    return;
  }

  event.preventDefault();
  const nextIndex = heatmapData.findIndex(
    ([cellCountryIndex, cellModelIndex]) =>
      cellCountryIndex === nextCountryIndex &&
      cellModelIndex === nextModelIndex,
  );
  if (nextIndex !== -1) {
    activeCellIndex.value = nextIndex;
  }
  announceActiveCell();
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

      calculable: true,

      orient: "horizontal",

      left: "center",
      bottom: "10%",
      // color: ["#083669", "#4795C3", "#eeeeee", "#E0785F", "#690320"],
      // color: ["#083669", "#4795C3", "#eeeeee", "#E0785F", "#690320"],
      color: ["#CF1322", "#FFA39E","#eeeeee","#91D5FF","#096DD9"],
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
