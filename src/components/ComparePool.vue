
<template>
  <div class="title-content">
    <h2>
      Compare Pool ({{ props.compareArr.length }})
      <button
        type="button"
        class="compare-toggle-button"
        :aria-expanded="showDetail"
        :aria-label="`${showDetail ? 'Collapse' : 'Expand'} compare pool`"
        @click="hideComparePool"
      >
        <SvgIcon
          class="compare-hide-icon"
          name="compare-hide-icon"
          :style="{ transform: showDetail ? '' : 'rotate(180deg)' }"
        ></SvgIcon>
      </button>
    </h2>

    <div class="compare-model-list" v-if="showDetail">
      <ul>
        <li
          class="model-li"
          v-for="(item, index) in props.compareArr"
          :key="index"
          :style="{ 'border-color': colorList[index] }"
        >
          <button
            type="button"
            class="close"
            :aria-label="`Remove ${item.modelName} from compare`"
            @click="closeModel(item)"
          >
            <el-icon><Close /></el-icon>
          </button>
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
        >
          <button
            type="button"
            class="add-model-button"
            :ref="(el) => (buttonRefs[item] = el)"
            aria-label="Add model to compare"
            @click="showPopover(item)"
          >
            <SvgIcon class="add-model-svg" name="add-model"></SvgIcon>
            <span>Add</span>
          </button>
        </li>
        <el-popover
          ref="popoverRef"
          width="min(630px, calc(100vw - 32px))"
          popper-class="compare-pool-model-popover"
          v-if="activeIndex !== null"
          :visible="true"
          :virtual-ref="buttonRefs[activeIndex]"
          virtual-triggering
          :placement="isMobileViewport ? 'top' : 'right-start'"
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
          <button
            type="button"
            class="remove-all-btn"
            @click="removeAll"
          >
            remove all
          </button>
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
  onUnmounted,
  watchEffect,
} from "vue";
import axios from "axios";
import { Close } from "@element-plus/icons-vue";

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
const mobileViewportQuery = window.matchMedia("(max-width: 767px)");
const isMobileViewport = ref(mobileViewportQuery.matches);
const handleMobileViewportChange = (event) => {
  isMobileViewport.value = event.matches;
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
  mobileViewportQuery.addEventListener("change", handleMobileViewportChange);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  mobileViewportQuery.removeEventListener("change", handleMobileViewportChange);
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
  .compare-toggle-button {
    position: absolute;
    top: 0.2em;
    right: 0.2em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.2em;
    height: 1.2em;
    padding: 0;
    border: 0;
    background: transparent;
    color: #000;
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid #0b70c3;
      outline-offset: 2px;
    }
  }
  .compare-hide-icon {
    width: 0.6em;
    height: 0.6em;
  }
  .add-model-svg {
    color: #808080;
    fill: #808080;
  }
  .add-model-button {
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: inherit;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid #0b70c3;
      outline-offset: 3px;
    }
  }
  h2 {
    position: relative;
    font-size: 2em;
    font-weight: 600;
    line-height: 1.3125em;
    padding: 0.2em 0;
  }
}

.compare-model-list .close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4em;
  height: 1.4em;
  padding: 0;
  border: 0;
  background: transparent;
  color: #666;
  cursor: pointer;
  position: absolute;
  right: 0.2em;
  top: 0.2em;
}

.compare-model-list .close :deep(.el-icon) {
  font-size: 1.1em;
}

.compare-model-list .remove-all-btn {
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font-family: inherit;

  &:focus-visible {
    outline: 2px solid #0b70c3;
    outline-offset: 2px;
  }
}

@media (forced-colors: active) {
  .title-content .compare-toggle-button {
    color: ButtonText;

    &:focus-visible {
      outline-color: Highlight;
    }
  }
}

@media (max-width: 767px) {
  .title-content {
    bottom: 16px;
    width: calc(100% - 32px);
    max-height: calc(100% - 32px);
    padding: 1.25em;
    overflow-y: auto;
    overscroll-behavior: contain;

    h2 {
      padding-right: 1.5em;
      font-size: 1.5em;
    }

    .compare-model-list ul {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.75em;

      > li.model-li,
      > li.model-li.add-model {
        width: 100%;
        min-width: 0;
        padding: 0.85em 0.6em;

        .name {
          padding-right: 1.25em;
          overflow-wrap: anywhere;
        }

        .top-item-content {
          flex-wrap: wrap;
          gap: 0.25em;

          .dev {
            min-width: 0;
            padding: 0 0.25em;
          }

          .date {
            margin-left: auto;
          }
        }
      }

      > li.model-li.add-model {
        padding: 0;
      }

      > .btn-box {
        grid-column: 1 / -1;
        width: 100%;
      }
    }
  }

  :global(.compare-pool-model-popover) {
    position: fixed !important;
    inset: 16px !important;
    width: auto !important;
    max-width: none !important;
    max-height: calc(100vh - 32px);
    overflow-y: auto;
    transform: none !important;
    box-sizing: border-box;
  }

  :global(.compare-pool-model-popover .el-popper__arrow) {
    display: none;
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
