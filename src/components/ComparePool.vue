
<template>
  <div class="title-content">
    <h2>
      Compare Pool
      <SvgIcon
        @click="hideComparePool"
        class="compare-hide-icon"
        name="compare-hide-icon"
      ></SvgIcon>
    </h2>

    <div class="compare-model-list">
      <ul>
        <li
          class="model-li"
          v-for="(item, index) in checkedModelDetailList"
          :key="index"
          :style="{ 'border-color': item.color }"
        >
          <span class="close-comparison" @click="closeModel(item)"></span>
          <p class="name">{{ item.modelName }}</p>
          <!-- <p style="display: none">{{ modelInfo[item] }}</p> -->
          <p class="point-num">
            {{ item.points }}<span class="point">points</span>
          </p>
          <div class="top-item-content">
            <el-tooltip
              effect="customized"
              content="Proprietary"
              placement="top"
            >
              <span class="type-icon"></span>
              <!-- <span
                  class="type-close-icon"
                ></span> -->
            </el-tooltip>
            <span class="dev">{{ item.developer }}</span>
            <span class="date">{{ item["releaseDate"].split(" ")[0] }}</span>
          </div>
        </li>
        <li
          class="model-li add-model"
          v-for="item in 5 - checkedModelDetailList.length"
          :key="item"
          :style="{ 'border-color': item.color }"
        >
          <img src="@/assets/images/add-model.svg" alt="add-model" />
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

const checkedModelDetailList = ref([]);
const setCheckedModelDetailList = (arr) => {
  checkedModelDetailList.value = arr;
  console.log("arr", checkedModelDetailList.value);
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
  emit("hideComparePool");
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
</script>


<style scoped  lang="scss">
.title-content {
  box-sizing: border-box;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);

  position: fixed;
  bottom: 0;
  background: #fff;
  max-width: 1236px;
  width: 85%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-top: 3.56em;
  background: var(--gary-color);
  padding: 2.25em 3em;
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
    margin-bottom: 1.3125em;
  }
  .compare-model-list {
    ul {
      display: flex;
      gap: 0.75em;
      li.model-li {
        width: 11.25em;
        // height: 7.5em;
        padding: 1.125em 1.5em;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 0.75em;
        text-align: center;
        border: 1px solid #4992ff;
        position: relative;
        .close-comparison {
          display: inline-block;
          width: 1.2em;
          height: 1.2em;
          background: url(@/assets/images/close-comparison.svg) no-repeat;
          background-size: contain;
          vertical-align: text-bottom;
          position: absolute;
          right: 0.5em;
          top: 0.5em;
        }
        .name {
          margin-right: 0.5em;
        }
        .point-num {
          font-size: 1.25em;
          font-weight: 600;
          line-height: 1.5em;
          margin: 0.8em 0;
        }
        .point {
          font-size: 0.6em;
          font-weight: 400;
          line-height: 1.3em;
          margin-left: 0.4em;
          opacity: 0.8;
        }
        .top-item-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .dev {
            width: 6em;
            font-size: 0.75em;
            // line-height: 1.5em;
          }
          .date {
            font-size: 0.75em;
            opacity: 0.8;
            // line-height: 1.5em;
          }
        }
        .type-icon {
          display: inline-block;
          width: 1em;
          height: 1em;
          background: url(@/assets/images/type-icon.svg) no-repeat;
          background-size: contain;
          vertical-align: text-bottom;
        }
        .type-close-icon {
          display: inline-block;
          width: 1em;
          height: 1em;
          background: url(@/assets/images/type-icon-close.svg) no-repeat;
          background-size: contain;
          vertical-align: text-bottom;
        }
      }
      .add-model {
        width: 10em;
        min-height: 7.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px dashed rgba(194, 194, 194, 1) !important;
        border-radius: 0.75em;
        color: #6b6b6b;
      }
      .btn-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 11.25em;
        .compare-btn {
          width: 100%;
          height: 2.8em;
          font-size: 1.25em;
        }
        .remove-all-btn {
          text-decoration: underline;
          margin-top: 0.2em;
          font-size: 1.25em;
          cursor: pointer;
        }
      }
    }
    .max-num-tip {
      color: #666;
      margin-top: 0.5em;
    }
  }
}
</style>
