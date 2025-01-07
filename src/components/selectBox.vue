<template>
  <div>
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
        style="width: 240px;margin-left: 20px"
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
            <el-tag type="info">
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
             
            >
              {{ item.name }}
            </el-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, watch, onMounted, onUnmounted, nextTick, defineEmits } from "vue";


var modelInfo_list = null;
// var modelInfo = null;
const modelInfo = ref();

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
const value1 = ref("2024/7");
const dates = [
  {
    value: "2024/7",
    label: "2024/7",
  },
];




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

const emit = defineEmits(["fitterChange"]);

const handleChange = (value) => {
  console.log("handleChange",value)
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
  emit("fitterChange", filterObj)
  // const arr = [];
  // modelInfo_list.forEach((item) => {
  //   const point = getAvaData(item.model, filterArr);
  //   arr.push({
  //     modelName: item.model,
  //     developer: item.developer,
  //     points: point.toFixed(5),
  //     type: item.type,
  //     releaseDate: item["release date"].split(" ")[0],
  //   });
  // });
  // arr.sort((a, b) => b.points - a.points);
  // arr.map((item, index) => {
  //   item.place = index + 1;
  //   return item;
  // });

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


</script>

<style scoped lang="scss">
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
    margin-right: 3em;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
:deep(.el-checkbox__label) {
  width: 145px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
:deep(.el-checkbox) {
  --el-checkbox-text-color: #fff;
  margin-right: 1em;
}



</style>
