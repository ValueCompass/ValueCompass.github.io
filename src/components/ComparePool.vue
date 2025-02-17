
<template>
  <div class="title-content">
    <h2>
      Compare Pool ({{ checkedModelDetailList.length }})
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
          v-for="(item, index) in checkedModelDetailList"
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
          v-for="item in 5 - checkedModelDetailList.length"
          :key="item"
          :style="{ 'border-color': item.color }"
        >
          <!-- <img src="@/assets/images/add-model.svg" alt="add-model" /> -->
          <SvgIcon class="add-model-svg" name="add-model"></SvgIcon>
          <p>Add</p>
        </li>

        <li class="btn-box">
          <el-button
            :color="checkedModelDetailList.length < 2 ? '#C2C2C2' : '#1093FF'"
            @click="compareNow"
            :disabled="checkedModelDetailList.length < 2"
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
import { ref, reactive, defineExpose, defineEmits } from "vue";
import GlobalData from "@/utils/common-data";

const checkedModelDetailList = ref([]);
const showDetail = ref(true);
const setCheckedModelDetailList = (arr) => {
  checkedModelDetailList.value = arr;
};
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
  "removeAll",
  "compareNow",
  "closeModel",
  "hideComparePool",
]);
defineExpose({
  setCheckedModelDetailList,
});

const colorList = ref(GlobalData.colorList);
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
    padding: .2em 0;
  }
  
}
</style>
