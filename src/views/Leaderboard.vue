<template>
  <div>
    <div class="main-container" style="padding: 0 70px">
      <div class="des">
        <h1>Value Compass Leaderboard</h1>
        <p>
          Welcome to a comprehensive LLM value assessment platform,
          distinguished by its interdisciplinary value perspectives and robust
          evaluation framework. <br />
          With fine-grained value comparisons and illustrative examples, this
          platform empowers you to find the LLM that best aligns with your own
          values.
        </p>
        <h4>Overall Rankings and Scores of LLMs</h4>
      </div>
      <div class="content">
        <div class="content-filter">
          <el-select
            v-model="value1"
            placeholder="Measurement Date"
            @change="dateChange"
            style="width: 200px"
            aria-label="Measurement Date"
          >
            <el-radio-group v-model="value1" style="width: 100%">
              <el-option
                v-for="item in dates"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <el-radio :value="item.value">{{ item.label }}</el-radio>
              </el-option>
            </el-radio-group>
          </el-select>
          <el-cascader
            class="select"
            v-model="value2"
            :options="options"
            :props="props"
            style="width: 240px"
            :show-all-levels="false"
            :collapse-tags="true"
            @change="handleChange"
            placeholder="Measurement Dimension"
          />
          <span class="filter-btn" @click="resetFilter">Reset Filter</span>
          <span
            class="show-filter"
            :class="{ 'is-show': showFilter }"
            @click="showFilterFunc"
          ></span>
        </div>
        <div class="panel-box" ref="panel">
          <div class="panel-content">
            <div class="title">Applied filters</div>
            <div class="panel-row" v-show="value1">
              <div class="filter-name">Measurement Date</div>
              <div class="panel-tags">
                <el-tag type="info" color="rgba(255, 255, 255, 0.2)">
                  {{ value1 }}
                </el-tag>
              </div>
            </div>
            <div class="title">Measurement Dimension({{ filterCount }})</div>
            <div class="panel-row" v-show="filterObj[1]">
              <div class="filter-name">Schwartz Value Theory</div>
              <div class="panel-tags">
                <el-tag
                  v-for="item in filterObj[1]"
                  :key="item.key"
                  closable
                  type="info"
                  @close="handleClose(item)"
                  color="rgba(255, 255, 255, 0.2)"
                >
                  {{ item.name }}
                </el-tag>
              </div>
            </div>
            <div class="panel-row" v-show="filterObj[2]">
              <div class="filter-name">Moral Foundation Theory</div>
              <div class="panel-tags">
                <el-tag
                  v-for="item in filterObj[2]"
                  :key="item.key"
                  closable
                  type="info"
                  @close="handleClose(item)"
                  color="rgba(255, 255, 255, 0.2)"
                >
                  {{ item.name }}
                </el-tag>
              </div>
            </div>
            <div class="panel-row" v-show="filterObj[3]">
              <div class="filter-name">Diverse Safety Risks</div>
              <div class="panel-tags">
                <el-tag
                  v-for="item in filterObj[3]"
                  :key="item.key"
                  closable
                  type="info"
                  @close="handleClose(item)"
                  color="rgba(255, 255, 255, 0.2)"
                >
                  {{ item.name }}
                </el-tag>
              </div>
            </div>
            <div class="panel-row" v-show="filterObj[4]">
              <div class="filter-name">LLMs' Unique Values</div>
              <div class="panel-tags">
                <el-tag
                  v-for="item in filterObj[4]"
                  :key="item.key"
                  closable
                  type="info"
                  @close="handleClose(item)"
                  color="rgba(255, 255, 255, 0.2)"
                >
                  {{ item.name }}
                </el-tag>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="filer-top" v-if="top3">
          <div class="top-item">
            <div class="top-medal">
              <img src="@/assets/images/silver-medal.png" alt="silver medal" />
              <SvgIcon
                color="#FFD000"
                class="top-icon-e"
                name="sort-e"
              ></SvgIcon>
            </div>
            <p>
              <span class="name">{{ top2.modelName }}</span>
            </p>
            <p>{{ top2.points }}<span class="point">points</span></p>
            <div class="top-item-content">
              <el-tooltip
                effect="customized"
                content="Proprietary"
                placement="top"
              >
                <span
                  v-if="top2.type == 'Open'"
                  class="type-icon top-type-icon"
                ></span>
                <span
                  v-if="top2.type == 'Close'"
                  class="type-close-icon top-type-icon"
                ></span>
              </el-tooltip>
              <span class="dev">{{ top2.developer }}</span>
              <span class="date">{{ top2.releaseDate }}</span>
            </div>
          </div>
          <div class="top-item" style="margin-top: -3em">
            <div class="top-medal">
              <img src="@/assets/images/gold-medal.png" alt="silver medal" />
              <SvgIcon
                color="#FFD000"
                class="top-icon-e"
                name="sort-e"
              ></SvgIcon>
            </div>
            <p>
              <span class="name">{{ top1.modelName }}</span>
            </p>
            <p>{{ top1.points }}<span class="point">points</span></p>
            <div class="top-item-content">
              <el-tooltip
                effect="customized"
                content="Proprietary"
                placement="top"
              >
                <span
                  v-if="top1.type == 'Open'"
                  class="type-icon top-type-icon"
                ></span>
                <span
                  v-if="top1.type == 'Close'"
                  class="type-close-icon top-type-icon"
                ></span>
              </el-tooltip>
              <span class="dev">{{ top1.developer }}</span>
              <span class="date">{{ top1.releaseDate }}</span>
            </div>
          </div>
          <div class="top-item">
            <div class="top-medal">
              <img src="@/assets/images/bronze-medal.png" alt="silver medal" />
              <SvgIcon
                color="#FFD000"
                class="top-icon-e"
                name="sort-e"
              ></SvgIcon>
            </div>
            <p>
              <span class="name">{{ top3.modelName }}</span>
            </p>
            <p>{{ top3.points }}<span class="point">points</span></p>
            <div class="top-item-content">
              <el-tooltip
                effect="customized"
                content="Proprietary"
                placement="top"
              >
                <span
                  v-if="top3.type == 'Open'"
                  class="type-icon top-type-icon"
                ></span>
                <span
                  v-if="top3.type == 'Close'"
                  class="type-close-icon top-type-icon"
                ></span>
              </el-tooltip>
              <span class="dev">{{ top3.developer }}</span>
              <span class="date">{{ top3.releaseDate }}</span>
            </div>
          </div>
        </div> -->
        <div class="filter-table">
          <el-table
            :data="tableData"
            :default-sort="{ prop: 'place' }"
            style="width: 100%"
            @row-click="handleRowClick"
          >
            <el-table-column prop="place" label="Place" sortable width="120">
              <template #default="scope">
                <img
                  v-if="scope.row.place == 2"
                  style="width: 1.9em"
                  src="@/assets/images/silver-medal.png"
                  alt="silver medal"
                />
                <img
                  v-else-if="scope.row.place == 1"
                  style="width: 1.9em"
                  src="@/assets/images/gold-medal.png"
                  alt="silver medal"
                />
                <img
                  v-else-if="scope.row.place == 3"
                  style="width: 1.9em"
                  src="@/assets/images/bronze-medal.png"
                  alt="silver medal"
                />
                <span v-else class="table-color">{{ scope.row.place }}</span>
                <SvgIcon
                  color="#FFD000"
                  class="top-icon"
                  name="sort-e"
                ></SvgIcon>
              </template>
            </el-table-column>
            <el-table-column prop="modelName" label="Model Name" sortable>
              <template #default="scope">
                <span class="table-color">{{ scope.row.modelName }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="developer" label="Developer" sortable />
            <el-table-column prop="points" label="Points" sortable>
              <template #default="scope">
                <span class="table-color">{{ scope.row.points }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Type">
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
            <el-table-column prop="releaseDate" label="Release Date" sortable />
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, reactive, nextTick } from "vue";
import axios from "axios";
import { getKeyValue, mergeObj, getAvaData } from "../utils/common.js";
import { useRouter } from "vue-router";

var modelInfo = null;
const Schwartz_data = ref(null);
const Risk_data = ref(null);
const MFT_data = ref(null);
let mergeData = null;

const props = { multiple: true };
const value2 = ref([]);
const showFilter = ref(false);
const panel = ref(null);
const filterCount = ref(0);
// const checkSelect = ref("");
let filterObj = reactive({});
const options = [
  {
    value: 0,
    label: "Universal",
  },
  {
    value: 1,
    label: "Schwartz Value Theory",
    children: [
      {
        value: 0,
        label: "Achievement",
      },
      {
        value: 1,
        label: "Benevolence",
      },
      {
        value: 2,
        label: "Conformity",
      },
      {
        value: 3,
        label: "Hedonism",
      },
      {
        value: 4,
        label: "Power",
      },
      {
        value: 5,
        label: "Security",
      },
      {
        value: 6,
        label: "Self-direction",
      },
      {
        value: 7,
        label: "Stimulation",
      },
      {
        value: 8,
        label: "Tradition",
      },
      {
        value: 9,
        label: "Universalism",
      },
    ],
  },
  {
    value: 2,
    label: "Moral Foundation Theory",
    children: [
      {
        value: 0,
        label: "Authority/Subversion",
      },
      {
        value: 1,
        label: "Care/Harm",
      },
      {
        value: 2,
        label: "Fairness/Cheating",
      },
      {
        value: 3,
        label: "Loyalty/Betrayal",
      },
      {
        value: 4,
        label: "Sanctity/Degradation",
      },
    ],
  },
  {
    value: 3,
    label: "Diverse Safety Risks",
    children: [
      {
        value: 0,
        label: "Misinformation Harms",
      },
      {
        value: 1,
        label: "Representation & Toxicity Harms",
      },
      {
        value: 2,
        label: "Socioeconomic Harms",
      },
      {
        value: 3,
        label: "Human Autonomy & Integrity Harms",
      },
      {
        value: 4,
        label: "Malicious Use",
      },
      {
        value: 5,
        label: "Information & Safety Harms",
      },
    ],
  },
  {
    value: 4,
    label: "LLMs' Unique Values",
    children: [
      {
        value: 0,
        label: "User-Oriented",
      },
      {
        value: 1,
        label: "Self-Competent",
      },
      {
        value: 2,
        label: "Idealistic",
      },
      {
        value: 3,
        label: "Social",
      },
      {
        value: 4,
        label: "Ethical",
      },
      {
        value: 5,
        label: "Professional",
      },
    ],
  },
];

const checkedDefault = () => {
  const arr = [];
  for (let i = 0; i < options[2].children.length; i++) {
    arr.push([2, i]);
  }
  for (let i = 0; i < options[3].children.length; i++) {
    arr.push([3, i]);
  }
  return arr
};
// checkedDefault();

const value1 = ref("2024/7");
const dates = [
  {
    value: "2024/7",
    label: "2024/7",
  },
];
const tableData = ref([]);
const top1 = ref({});
const top2 = ref({});
const top3 = ref({});
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

          // handleChange(value2.value);
          handleChange(checkedDefault())

          // modelInfo.forEach((item) => {
          //   const point = getAvaData(item.model, [], mergeData);
          //   arr.push({
          //     modelName: item.model,
          //     developer: item.developer,
          //     points: (point * 100).toFixed(3),
          //     type: item.type,
          //     releaseDate: item["release date"].split(" ")[0],
          //   });
          // });
          // arr.sort((a, b) => b.points - a.points);
          // arr.map((item, index) => {
          //   item.place = index + 1;
          //   return item;
          // });
          // top1.value = Object.assign({}, arr[0]);
          // top2.value = Object.assign({}, arr[1]);
          // top3.value = Object.assign({}, arr[2]);

          // tableData.value = arr;
        })
      );
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
fetchData();

const handleDelete = (index, row) => {
  console.log(index, row);
};
const handleClose = (tag) => {
  value2.value = value2.value.filter(
    (item) => item[0] !== tag.parent || item[1] !== tag.key
  );
  handleChange(value2.value);
};
const dateChange = (value) => {
  // checkSelect.value = dates[value].label;
  nextTick(() => {
    updateFilterHeight();
  });
};
const handleChange = (value) => {
  console.log(value);
  filterCount.value = value.length;
  filterObj = {};
  const filterArr = [];
  if (value.length > 0) {
    value.forEach((item) => {
      filterObj[item[0]] = filterObj[item[0]] || [];
      if (item[1] || item[1] == 0) {
        filterObj[item[0]].push({
          name: options[item[0]].children[item[1]].label,
          key: item[1],
          parent: item[0],
        });
        filterArr.push(options[item[0]].children[item[1]].label);
      }
    });
  }
  const arr = [];
  modelInfo.forEach((item) => {
    const point = getAvaData(item.model, filterArr, mergeData);
    arr.push({
      modelName: item.model,
      developer: item.developer,
      points: (point * 100).toFixed(3),
      type: item.type,
      releaseDate: item["release date"].split(" ")[0],
    });
  });
  arr.sort((a, b) => b.points - a.points);
  arr.map((item, index) => {
    item.place = index + 1;
    return item;
  });
  top1.value = Object.assign({}, arr[0]);
  top2.value = Object.assign({}, arr[1]);
  top3.value = Object.assign({}, arr[2]);

  tableData.value = arr;
  nextTick(() => {
    updateFilterHeight();
  });
};
const resetFilter = () => {
  value2.value = [];
  // value1.value = "";
  handleChange(value2.value);
  nextTick(() => {
    updateFilterHeight();
  });
};
const showFilterFunc = () => {
  showFilter.value = !showFilter.value;
  if (panel.value.style.maxHeight) {
    panel.value.style.maxHeight = null;
  } else {
    panel.value.style.maxHeight = panel.value.scrollHeight + "px";
  }
};
const updateFilterHeight = () => {
  if (showFilter.value) {
    panel.value.style.maxHeight = panel.value.scrollHeight + "px";
  }
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

const handleRowClick = (row, column, event) => {
  console.log(row);
  goAnalysisPage(row.modelName);
};
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
    font-size: 1.6em;
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
  .content-filter {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    .filter-btn {
      font-size: 0.875em;
      font-weight: 400;
      line-height: 1.57em;
      color: #0c76ce;
      margin-left: 1.9em;
      cursor: pointer;
    }
    .show-filter {
      width: 1.5em;
      height: 1.5em;
      background: url(@/assets/images/filter-show.svg) no-repeat;
      background-size: contain;
      cursor: pointer;
      position: absolute;
      right: 0;

      &.is-show {
        background: url(@/assets/images/filter-hide.svg) no-repeat;
        background-size: contain;
      }
    }
  }

  .panel-box {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-out;
    margin-top: 0.75em;
    border-bottom: 1px solid var(--gary-color);
    .panel-content {
      padding: 0 0 1.5em;
      .title {
        font-size: 0.875em;
        font-weight: 600;
        line-height: 1.7em;
        margin-top: 0.75em;
      }
      .panel-row {
        margin-top: 0.75em;
        display: flex;
        .filter-name {
          width: 12.85em;
          font-size: 0.875em;
          font-weight: 600;
          line-height: 1.57em;
          text-align: right;
          margin-right: 0.75em;
        }
        .panel-tags {
          flex: 1;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 0.75em;
        }
      }
    }
  }
  .filter-table {
    margin-top: 2.25em;
    .top-icon {
      width: 1.125em;
      height: 1.125em;
      float: right;
      margin-top: 5px;
    }

    .table-color {
      font-weight: bold;
      font-size: 1.125em;
    }
  }
  .filer-top {
    margin-top: 2.25em;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 3em 1em;
    .top-item {
      color: #fff;
      padding: 1.125em 1.5em;
      box-sizing: border-box;
      background: #121f37;
      border-radius: 0.75em;
      text-align: center;
      width: 31%;
      &:hover {
        background: #0a111f;
      }
      img {
        display: inline-block;
      }
      .top-medal {
        position: relative;
      }
      .top-icon-e {
        position: absolute;
        width: 1.125em;
        height: 1.125em;
        bottom: 0;
      }
      p {
        margin-top: 1.2em;

        font-size: 1.25em;
        font-weight: 600;
        line-height: 1.625em;
        .name {
          margin-right: 0.5em;
        }
        .point {
          font-size: 0.6em;
          font-weight: 400;
          line-height: 1.3em;
          margin-left: 0.4em;
        }
      }
      .top-item-content {
        margin-top: 1.5em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .dev {
          width: 9em;
          font-size: 1em;
          line-height: 1.5em;
        }
        .date {
          font-size: 0.75em;
          line-height: 1.5em;
        }
      }
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
  }
  .type-close-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    background: url(@/assets/images/type-icon-close.svg) no-repeat;
    background-size: contain;
    vertical-align: text-bottom;
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
  --el-table-border: none;
  --el-table-header-bg-color: var(--bg-color);
  --el-table-bg-color: transparent;
  --el-table-tr-bg-color: var(--gary-color);
  --el-table-text-color: var(--text-color);
  --el-table-header-text-color: var(--text-color);
  --el-table-row-hover-bg-color: var(--gary-color);
  --el-table-border-color: transparent;
  font-size: 1em;

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
:deep(.el-table__body) {
  border-spacing: 0 0.5em;
}
:deep(.el-table .cell) {
  text-align: center;
}
:deep(.el-table .el-table__cell) {
  padding: 18px 0;
  cursor: pointer;
}
:deep(.el-table thead th) {
  font-weight: normal;
}
.el-select-dropdown__item.is-hovering {
  background: transparent !important;
}
</style>
