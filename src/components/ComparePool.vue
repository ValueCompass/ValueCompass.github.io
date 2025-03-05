
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
          v-popover="popoverRef"
          @click.stop="visible = true"
        >
          <!-- <img src="@/assets/images/add-model.svg" alt="add-model" /> -->
          <SvgIcon class="add-model-svg" name="add-model"></SvgIcon>
          <p>Add</p>
        </li>
        <el-popover
          ref="popoverRef"
          :visible="visible"
          placement="top"
          :width="576"
          trigger="click"
          virtual-triggering
          persistent
          :reference="currentLi"
        >
          <div id="popoverId3">
            <el-checkbox-group v-model="checkedModelNameList" :max="5">
              <el-checkbox
                v-for="model in modelNameList"
                :key="model"
                :value="model"
              >
                {{ model }}
              </el-checkbox>
            </el-checkbox-group>
            <div
              style="
                display: flex;
                justify-content: flex-end;
                margin-top: 20px;
                padding-right: 20px;
              "
            >
              <button @click="submit">Submit</button>
            </div>
          </div>
        </el-popover>

        <li class="btn-box">
          <el-button
            :color="props.compareArr.length < 2 ? '#C2C2C2' : 'var(--theme-color)'"
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

import GlobalData from "@/utils/common-data";

const props = defineProps({
  compareArr: Array,
});
const popoverRef = ref(null);
const visible = ref(false);
const modelNameList = ref([]);
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
const handleClickOutside = (event) => {
  // 使用 Popper 的 getPopperElement 方法获取真正的弹窗元素
  const popperElement = document.getElementById("popoverId3");
  // 判断点击的是否为popover外部，关闭popover
  if (
    popoverRef.value &&
    popperElement &&
    !popperElement.contains(event.target)
  ) {
    visible.value = false;
  }
};

// 监听 checkedModelDetailList 的变化
watchEffect(() => {
  console.log("newValue", props.compareArr);
  checkedModelNameList.value = props.compareArr.map((item) => item.modelName);
});

const submit = () => {
  visible.value = false;
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
      })
    );
  } catch (error) {
    console.error("Fetch error:", error);
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

:deep(.el-checkbox__label) {
  width: 145px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.4;
}
:deep(.el-checkbox) {
  --el-checkbox-text-color: var(--text-color);
  margin-right: 1em;
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
