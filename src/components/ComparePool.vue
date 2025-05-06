
<template>
  <div class="title-content">
    <h2>
      Compare Pool ({{ props.compareArr.length }})
      <SvgIcon
        @click="hideComparePool"
        class="compare-hide-icon"
        name="compare-hide-icon"
        :style="{ transform: showDetail ? '' : 'rotate(180deg)' }"
      ></SvgIcon>
    </h2>

    <div class="compare-model-list" v-if="showDetail">
      <ul>
        <li
          class="model-li"
          v-for="(item, index) in props.compareArr"
          :key="index"
          :style="{ 'border-color': colorList[index] }"
        >
          <span class="close" @click="closeModel(item)"></span>
          <p class="name">{{ item.modelName }}</p>
          <!-- <p style="display: none">{{ modelInfo[item] }}</p> -->
          <!-- <p class="point-num">
            {{ item.points }}<span class="point">points</span>
          </p> -->
          <div class="top-item-content">
            <el-tooltip
              effect="customized"
              content="Proprietary"
              placement="top"
            >
              <span class="type-icon"></span>
            </el-tooltip>
            <span class="dev ellipsis">{{ item.developer }}</span>
            <span class="date">{{
              item["releaseDate"].split(" ")[0].substring(0, 7)
            }}</span>
          </div>
        </li>
        <li
          class="model-li add-model"
          v-for="item in 5 - props.compareArr.length"
          :key="item"
          :style="{ 'border-color': item.color }"
          :ref="(el) => (buttonRefs[item] = el)"
          @click="showPopover(item)"
        >
          <!-- <img src="@/assets/images/add-model.svg" alt="add-model" /> -->
          <SvgIcon class="add-model-svg" name="add-model"></SvgIcon>
          <p>Add</p>
        </li>
        <el-popover
          ref="popoverRef"
          :width="630"
          v-if="activeIndex !== null"
          :visible="true"
          :virtual-ref="buttonRefs[activeIndex]"
          virtual-triggering
          placement="right-start"
          trigger="click"
          @after-leave="activeIndex = null"
        >
          <div id="popoverId3">
            <ModelListCheckbox
              :modelGropsByDeveloper="modelGropsByDeveloper"
              :modelValue="checkedModelNameList"
              @updateCheckboxValue="updateCheckboxValue"
            ></ModelListCheckbox>
          </div>
        </el-popover>

        <li class="btn-box">
          <el-button
            :color="
              props.compareArr.length < 2 ? '#C2C2C2' : 'var(--theme-color)'
            "
            @click="compareNow"
            :disabled="props.compareArr.length < 2"
            class="compare-btn"
            >compare now</el-button
          >
          <span @click="removeAll" class="remove-all-btn">remove all</span>
        </li>
      </ul>
      <p class="max-num-tip">
        The maximum number of comparisons supported is 5
      </p>
    </div>
  </div>
</template>


<script setup>
import {
  ref,
  reactive,
  defineExpose,
  defineEmits,
  onMounted,
  watchEffect,
} from "vue";
import axios from "axios";

import ModelListCheckbox from "../components/ModelListCheckbox.vue";
import GlobalData from "@/utils/common-data";
import { groupByDeveloper } from "../utils/common.js";

const props = defineProps({
  compareArr: Array,
});
const popoverRef = ref(null);
const visible = ref(false);
const modelNameList = ref([]);
const modelGropsByDeveloper = ref({});
const checkedModelNameList = ref([]);

const checkedModelDetailList = ref([]);
const showDetail = ref(true);

const closeModel = (model) => {
  emit("closeModel", model);
};
const removeAll = () => {
  emit("removeAll");
};
const compareNow = () => {
  emit("compareNow");
};

const hideComparePool = () => {
  // emit("hideComparePool");
  showDetail.value = !showDetail.value;
};

const emit = defineEmits([
  "comparisonPoolSubmit",
  "removeAll",
  "compareNow",
  "closeModel",
  "hideComparePool",
]);

const colorList = ref(GlobalData.colorList);
const getAxiosData = (url) => {
  return axios.get(url);
};

onMounted(() => {
  fetchData();
  document.addEventListener("click", handleClickOutside);
});

// 监听 checkedModelDetailList 的变化
watchEffect(() => {
  console.log("newValue", props.compareArr);
  checkedModelNameList.value = props.compareArr.map((item) => item.modelName);
});

const updateCheckboxValue = (checkedValue) => {
  checkedModelNameList.value = checkedValue;
  submit();
};
const submit = () => {
  visible.value = false;
  activeIndex.value = null;
  emit("comparisonPoolSubmit", checkedModelNameList.value);
};

const fetchData = async () => {
  try {
    axios.all([getAxiosData("./data/models_info.json")]).then(
      axios.spread(function (modelInfos) {
        const modelInfo_list = modelInfos.data.data.map((item) => {
          return item.model;
        });
        modelNameList.value = modelInfo_list;
        modelGropsByDeveloper.value = groupByDeveloper(modelInfos.data.data);
      })
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

// el-popover交互
const buttonRefs = ref([]);
const activeIndex = ref(null);

const showPopover = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
const handleClickOutside = (event) => {
  // 如果点击的是按钮或弹出框，不关闭
  const popoverEl = document.getElementById("popoverId3");
  const clickedInsideButton = buttonRefs.value.some((el) =>
    el?.contains(event.target)
  );
  const clickedInsidePopover = popoverEl?.contains(event.target);

  if (!clickedInsideButton && !clickedInsidePopover) {
    activeIndex.value = null;
  }
};
</script>


<style scoped  lang="scss">
.title-content {
  box-sizing: border-box;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);

  position: fixed;
  bottom: 1em;
  background: #fff;
  max-width: 1236px;
  width: 85%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background: var(--gary-color);
  padding: 1.5em 3em;
  border-radius: 0.375em;
  .compare-hide-icon {
    width: 0.6em;
    height: 0.6em;
    position: absolute;
    top: 0.2em;
    right: 0.2em;
    cursor: pointer;
  }
  h2 {
    position: relative;
    font-size: 2em;
    font-weight: 600;
    line-height: 1.3125em;
    padding: 0.2em 0;
  }
}

:deep(.el-tabs__header) {
  --el-font-size-base: 1.25em;
  .el-tabs__item {
    padding: 0;
    color: var(--sub-text-color);
    &.is-active {
      color: rgba(16, 147, 255, 1);
    }
  }
}
</style>
