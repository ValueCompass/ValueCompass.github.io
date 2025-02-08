<template>
  <div>
    <div class="main-container">
      <div class="des">
        <h4>Overall Rankings and Scores of LLMs</h4>
      </div>
      <div class="content">
        <SelectedPoints
          ref="SelectedPointsRef"
          @applyChange="applyChange"
          @swicthChange="swicthChange"
          @showIntro="showIntro"
        ></SelectedPoints>
        <div class="filter-table">
          <el-table
            :data="tableData"
            :default-sort="{ prop: 'place' }"
            style="width: 100%"
            height="600"
          >
            <el-table-column
              prop="place"
              label="Rank"
              sortable
              width="188"
              fixed
            >
              <template #header>
                <span style="padding-left: 3em">Rank</span>
              </template>
              <template #default="scope">
                <span
                  style="
                    padding-left: 3em;
                    width: 3em;
                    display: inline-block;
                    text-align: center;
                  "
                >
                  <img
                    class="top3-img"
                    v-if="scope.row.place == 2"
                    src="@/assets/images/silver-medal.png"
                    alt="silver medal"
                  />
                  <img
                    class="top3-img"
                    v-else-if="scope.row.place == 1"
                    src="@/assets/images/gold-medal.png"
                    alt="silver medal"
                  />
                  <img
                    class="top3-img"
                    v-else-if="scope.row.place == 3"
                    src="@/assets/images/bronze-medal.png"
                    alt="silver medal"
                  />
                  <span v-else class="table-color">{{ scope.row.place }}</span>
                </span>
                <SvgIcon
                  color="#FFD000"
                  class="top-icon"
                  name="sort-e"
                ></SvgIcon>
              </template>
            </el-table-column>
            <el-table-column
              align="left"
              prop="modelName"
              label="Model Name"
              width="304"
              sortable
              fixed
            >
              <template #default="scope">
                <p class="table-color">
                  {{ scope.row.modelName }}
                </p>
              </template>
            </el-table-column>
            <el-table-column
              align="left"
              prop="developer"
              label="Developer"
              min-width="160"
              sortable
            >
            </el-table-column>
            <el-table-column
              align="left"
              prop="points"
              label="Points"
              min-width="130"
              sortable
            >
              <template #header>
                Score
                <el-tooltip
                  effect="customized"
                  :content="!tablePointDetailShow ? 'show more' : 'show less'"
                  placement="top"
                  v-if="!tablePointDetailShow"
                >
                  <SvgIcon
                    class="points-show"
                    name="points-show"
                    @click="showPointsDetail($event, true)"
                  ></SvgIcon>
                </el-tooltip>
                <el-tooltip
                  v-else
                  effect="customized"
                  :content="!tablePointDetailShow ? 'show more' : 'show less'"
                  placement="top"
                >
                  <SvgIcon
                    class="points-show"
                    name="points-hide"
                    @click="showPointsDetail($event, false)"
                  ></SvgIcon>
                </el-tooltip>
              </template>
              <template #default="scope">
                <span class="table-color">{{ scope.row.points }}</span>
              </template>
            </el-table-column>

            <template v-if="tablePointDetailShow">
              <template
                v-for="(item, index) in checked_points_list"
                :key="index"
              >
                <el-table-column
                  :label="item"
                  :prop="item"
                  :formatter="formatter"
                  :min-width="
                    SelectedPointsRef.selectedIndex == 0
                      ? 80
                      : SelectedPointsRef.selectedIndex == 2
                      ? 100
                      : 135
                  "
                  sortable
                  align="left"
                >
                  <template #header>
                    <template v-if="SelectedPointsRef.selectedIndex == 0">{{
                      item.indexOf("-") > -1
                        ? item
                            .split("-")
                            .map((x) => x[0].toUpperCase())
                            .join("")
                        : item.substring(0, 3)
                    }}</template>
                    <template v-else-if="SelectedPointsRef.selectedIndex == 1">
                      <span
                        v-html="
                          item
                            .split('/')
                            .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
                            .join('/<br>')
                        "
                      ></span>
                    </template>

                    <template
                      v-else-if="SelectedPointsRef.selectedIndex == 2"
                      >{{
                        item
                          .split(" ")
                          .map((x) => x.charAt(0).toUpperCase())
                          .join("")
                      }}</template
                    >
                    <template v-else-if="SelectedPointsRef.selectedIndex == 3">
                      <span
                        v-html="
                          item
                            .split('-')
                            .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
                            .join('-<br>')
                        "
                      ></span>
                    </template>
                  </template>
                </el-table-column>
              </template>
            </template>

            <el-table-column label="Type" min-width="70" >
              <template #default="scope">
                <el-tooltip
                  effect="customized"
                  :content="scope.row.type + ' Source'"
                  placement="top"
                >
                  <span
                    v-if="scope.row.type.toLowerCase() == 'open'"
                    class="type-icon"
                  ></span>
                  <span
                    v-if="scope.row.type.toLowerCase() == 'close'"
                    class="type-close-icon"
                  ></span>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              prop="releaseDate"
              label="Release Date"
              min-width="140"
              sortable
            />

            <el-table-column label="Compare" min-width="100">
              <template #default="scope">
                <div
                  v-if="
                    compareArrString.indexOf(scope.row.modelName) == -1 &&
                    compareArr.length < 5
                  "
                >
                  <el-tooltip
                    effect="customized"
                    content="compare"
                    placement="top"
                  >
                    <SvgIcon
                      class="add"
                      name="add"
                      @click="compareBtnClick(scope.row)"
                      style="margin-left:1.2em"
                    ></SvgIcon>
                  </el-tooltip>
                </div>

                <div
                  v-else-if="
                    compareArrString.indexOf(scope.row.modelName) == -1 &&
                    compareArr.length >= 5
                  "
                >
                  <SvgIcon class="add disabled" name="add-disabled" style="margin-left:1.2em"></SvgIcon>
                </div>

                <div v-else>
                  <el-tooltip
                    effect="customized"
                    content="compare pool"
                    placement="top"
                  >
                    <SvgIcon
                      style="color: #1093ff;margin-left:1.2em"
                      class="add"
                      name="model-checked-icon"
                      @click="compareBtnClick(scope.row)"
                    ></SvgIcon>
                  </el-tooltip>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="Details" min-width="100" >
              <template #default="scope">
                <el-tooltip effect="customized" content="view" placement="top">
                  <SvgIcon
                    color="#FFD000"
                    class="handleDetailClick"
                    name="jump"
                    @click="handleDetailClick(scope.row)"
                    style="margin-left:1em"
                  ></SvgIcon>
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <ComparePool
      v-show="compareArr.length > 0"
      ref="ComparePoolRef"
      @removeAll="removeAll"
      @compareNow="compareNow"
      @closeModel="closeModel"
      @hideComparePool="ComparePoolShow = false"
    ></ComparePool>
    <homepageSwiper ref="homepageSwiperRef"></homepageSwiper>
    <div v-if="compareArr.length > 0" style="height:200px"></div>
  </div>
</template>
<script setup>
import homepageSwiper from "../components/homepageSwiper.vue";
import ComparePool from "../components/ComparePool.vue";
import SelectedPoints from "../components/selectedPoints.vue";
import { ref, watch, reactive, nextTick } from "vue";
import axios from "axios";
import { getKeyValue, mergeObj, getAvaData } from "../utils/common.js";
import { useRouter } from "vue-router";

const SelectedPointsRef = ref(null);
var modelInfo = null;
const Schwartz_data = ref(null);
const Risk_data = ref(null);
const MFT_data = ref(null);
let mergeData = null;

// const checkSelect = ref("");

const value1 = ref("2024/7");
const dates = [
  {
    value: "2024/7",
    label: "2024/7",
  },
];
const tableData = ref([]);
const getAxiosData = (url) => {
  return axios.get(url);
};
const fetchData = async () => {
  try {
    axios
      .all([
        getAxiosData("./data/models_info.json"),
        getAxiosData("./data/Schwartz_scores.json"),
        getAxiosData("./data/Risk_scores.json"),
        getAxiosData("./data/MFT_scores.json"),
      ])
      .then(
        axios.spread(function (modelInfos, Schwartz_data, Risk_data, MFT_data) {
          modelInfo = modelInfos.data.data;
          console.log(modelInfo);
          Schwartz_data.value = Schwartz_data.data.data;
          Risk_data.value = Risk_data.data.data;
          MFT_data.value = MFT_data.data.data;
          // console.log(modelInfo);
          // console.log("Schwartz_data:", Schwartz_data.data.data);
          // console.log("Risk_data:", Risk_data.data.data);
          // console.log("MFT_data:", MFT_data.data.data);
          const a = getKeyValue(Schwartz_data.value);
          const b = getKeyValue(Risk_data.value);
          const c = getKeyValue(MFT_data.value);
          const d = mergeObj(a, b, c);
          mergeData = d;
          const arr = [];

          // 初始设置第一个分类选中
          SelectedPointsRef.value.hancelTypeIndexChange(0);
        })
      );
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
fetchData();

const checked_points_list = ref([]);
const applyChange = (value) => {
  console.log(value);
  const filterArr = value;

  const arr = [];
  modelInfo.forEach((item) => {
    const point = getAvaData(item.model, filterArr, mergeData);
    console.log(item.model, filterArr, mergeData);
    checked_points_list.value = filterArr;
    let modelitem = {
      modelName: item.model,
      developer: item.developer,
      points: (point * 100).toFixed(3),
      type: item.type,
      releaseDate: item["release date"].split(" ")[0],
    };
    filterArr.forEach((item2) => {
      console.log(item2, mergeData);
      modelitem[item2] = mergeData[item.model][item2];
    });
    arr.push(modelitem);
  });
  arr.sort((a, b) => b.points - a.points);
  arr.map((item, index) => {
    item.place = index + 1;
    return item;
  });

  tableData.value = arr;
  console.log("tableData", tableData.value);
};

const router = useRouter();
const goAnalysisPage = (modelName) => {
  router.push({
    path: "/leaderboard/valueAnalysis",
    query: {
      modelName: modelName,
    },
  });
};

const handleDetailClick = (row) => {
  console.log(row);
  goAnalysisPage(row.modelName);
};

const ComparePoolShow = ref(false);
const ComparePoolRef = ref();
const compareArr = ref([]);
const compareArrString = ref([]);

const compareBtnClick = (row) => {
  ComparePoolShow.value = true;
  if (
    compareArr.value.length >= 5 &&
    compareArrString.value.indexOf(row.modelName) == -1
  ) {
    return;
  }

  if (compareArrString.value.indexOf(row.modelName) > -1) {
    compareArr.value = compareArr.value.filter(
      (item) => item.modelName !== row.modelName
    );
    compareArrString.value = compareArrString.value.filter(
      (item) => item !== row.modelName
    );
  } else {
    compareArr.value.push(row);
    compareArrString.value.push(row.modelName);
  }
  ComparePoolRef.value.setCheckedModelDetailList(compareArr.value);
};

const removeAll = () => {
  console.log("removeAll");
  for (let i = 0; i < compareArr.value.length; i++) {
    let item = compareArr.value[i];
  }
  compareArr.value = [];
  compareArrString.value = [];
  ComparePoolRef.value.setCheckedModelDetailList(compareArr.value);
};
const compareNow = () => {
  router.push({
    path: "/leaderboard/valueComparison",
    query: {
      modelName: compareArrString.value,
    },
  });
};
const closeModel = (model) => {
  compareArr.value = compareArr.value.filter(
    (item) => item.modelName !== model.modelName
  );
  compareArrString.value = compareArrString.value.filter(
    (item) => item !== model.modelName
  );
  ComparePoolRef.value.setCheckedModelDetailList(compareArr.value);
};

const formatter = (row, column) => {
  if (column.label == "model_name") {
    return row[column.label];
  } else {
    return (row[column.label] * 100).toFixed(3);
  }
};

const showPointsDetail = (e, bool) => {
  e.cancelBubble = true;
  console.log("showPointsDetail");
  tablePointDetailShow.value = bool;
  SelectedPointsRef.value.tablePointDetailShow = bool;
  return false;
};
const swicthChange = (bool) => {
  tablePointDetailShow.value = bool;
};

const homepageSwiperRef = ref(null);
const showIntro = (index) => {
  homepageSwiperRef.value.showIntro(index);
};

const tablePointDetailShow = ref(false);
</script>

<style scoped lang="scss">
.des {
  text-align: center;
  line-height: 1.8;

  h1 {
    font-size: 2.5em;
    font-weight: 600;
    color: rgba(16, 147, 255, 1);

    margin: 0.5em 0 0.8em;
  }
  h4 {
    font-size: 2em;
    font-weight: 600;
    margin: 1.5em 0 1em;
  }
  p {
    font-size: 1.12em;
  }
}

.content {
  margin-top: 3.56em;
  font-family: Segoe UI;
  padding-bottom: 4em;
  .filter-table {
    margin-top: 2.25em;
    .top3-img {
      width: 1.9em;
      vertical-align: middle;
    }
    .top-icon {
      width: 1.125em;
      height: 1.125em;

      transform: translateY(0.2em);
    }

    .table-color {
      font-weight: bold;
      font-size: 1.125em;
    }
  }

  .add-icon {
    width: 1.125em;
    height: 1.125em;
    vertical-align: text-bottom;
  }
  .type-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    background: url(@/assets/images/type-icon.svg) no-repeat;
    background-size: contain;
    vertical-align: text-bottom;
    margin-left: .5em;
  }
  .type-close-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    background: url(@/assets/images/type-icon-close.svg) no-repeat;
    background-size: contain;
    vertical-align: text-bottom;
    margin-left: .5em;
  }
  .top-type-icon {
    width: 1.6em;
    height: 1.6em;
  }
}
:deep(.select) {
  margin-left: 0.75em;
}
.el-table {
  // --el-table-header-bg-color: var(--gary-color);
  // --el-table-bg-color: transparent;
  // --el-table-tr-bg-color: transparent;
  // --el-table-text-color: var(--text-color);
  // --el-table-header-text-color: var(--text-color);
  // --el-table-row-hover-bg-color: #0a111f;
  // --el-table-border-color: var(--border-color);
  // --el-table-row-hover-bg-color: transparent;
  // font-size: 1em;

  // --el-table-border: none;
  --el-table-header-bg-color: var(--gary-color);
  --el-table-bg-color: transparent;
  --el-table-tr-bg-color: #fff;
  --el-table-text-color: var(--text-color);
  --el-table-header-text-color: var(--text-color);
  --el-table-row-hover-bg-color: #fff;
  --el-table-border-color: transparent;
  font-size: 1em;
  border-radius: 16px;

  // --el-table-border: none;
  // --el-table-header-bg-color: red;
  // --el-table-bg-color: #182845;
  // --el-table-tr-bg-color: #121f37;
  // --el-table-text-color: rgba(255, 255, 255, 0.8);
  // --el-table-header-text-color: #fff;
  // --el-table-row-hover-bg-color: #0a111f;
  // --el-table-border-color: transparent;
  // font-size: 1em;
}
:deep(.el-radio-group) {
  width: 100%;
  flex-direction: column;
}

:deep(.el-table) {
  border: 1px solid rgba(0, 0, 0, 0.2);

  :deep(.el-table__body) {
    // border-spacing: 0 0.5em;
  }
  .el-table__cell.is-left {
    text-align: left;
  }
  .el-table__cell {
    // text-align: center;
    padding: 1em 0!important;
  }
  .cell {
    padding: 0 5px;
  }
  .el-table__cell {
    padding: 18px 0;
    cursor: pointer;
  }
  thead th {
    font-weight: 600;
    font-size: 1.11em;
  }
  .el-scrollbar__bar.is-horizontal{
    height: 10px;
  }
}

.el-select-dropdown__item.is-hovering {
  background: transparent !important;
}

.points-show {
  position: absolute;
  left: 4.5em;
}
</style>
