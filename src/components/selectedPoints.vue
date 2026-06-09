<template>
  <div class="select-container">
    <div class="select-date">
      <SvgIcon class="select-date-icon" name="select-date"></SvgIcon>
      <el-select
        v-model="value1"
        placeholder="Measurement Date"
        style="width: 4.5em"
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
    </div>
    <div class="select-points-box">
      <ul class="label">
        <li
          :class="selectedIndex == index ? 'on' : ''"
          v-for="(item, index) in options"
          :key="index"
        >
          <button
            type="button"
            class="point-option-button"
            :aria-pressed="selectedIndex == index"
            :aria-label="`Select ${item.label}`"
            @click="hancelTypeIndexChange(index)"
          >
            <SvgIcon class="point-type-icon" name="point-type-icon"></SvgIcon>
            <span>{{ item.label }}</span>
          </button>
          <button
            type="button"
            class="point-info-button"
            :aria-label="`Show introduction for ${item.label}`"
            @click.stop="showIntro(index)"
          >
            <SvgIcon class="info" name="info"></SvgIcon>
          </button>
        </li>
      </ul>
      <p style="margin: 1em 0; font-size: 1.25em"><b>Selected Points</b></p>
      <template v-if="selectedIndex != 0">
        <el-checkbox-group
          v-model="checkedPoints"
          @change="handleCheckedPointsChange"
        >
          <el-checkbox
            v-for="point in points"
            :key="point.label"
            :label="point.label"
            :value="point.label"
          >
            {{ point.label }}
          </el-checkbox>
        </el-checkbox-group>
      </template>

      <template v-else>
        <el-checkbox-group
          v-model="checkedPoints"
          @change="handleCheckedPointsChange"
        >
          <div class="group-list">
            <div
              v-for="(item, index) in SchwartzData.group"
              :key="index"
              class="group-item"
            >
              <div class="border-box">
                <p class="group-text" @click="checkSubArray(index, item.name)">
                  <span
                    class="check-icon"
                    :class="isGroupChecked(item) ? 'is-checked' : ''"
                    tabindex="0"
                    role="checkbox"
                    :aria-checked="isGroupChecked(item)"
                    :aria-label="`select ${item.name}`"
                    @click.stop="checkSubArray(index, item.name)"
                    @keydown.enter.prevent="checkSubArray(index, item.name)"
                    @keydown.space.prevent="checkSubArray(index, item.name)"
                  ></span
                  ><span>{{ item.name }}</span>
                </p>
              </div>
              <div class="radio-box">
                <template v-for="point in item.children" :key="point.label">
                  <el-checkbox
                    :label="point.label"
                    :value="point.label"
                    v-if="!point.isRepeat"
                  >
                    {{ point.label }}
                  </el-checkbox>
                </template>
              </div>
            </div>
          </div>
        </el-checkbox-group>
      </template>
      <div class="btn-container">
        <div>
          <div v-if="!(props.type && props.type == 1)">
            <el-switch
              aria-label="show selected points details"
              v-model="tablePointDetailShow"
              class="switch"
              inline-prompt
              :active-action-icon="Select"
              :inactive-action-icon="CloseBold"
              @change="swicthChange"
              size="large"
            />
            <button
              type="button"
              class="toggle-selected-points-button"
              aria-label="Toggle selected points details"
              @click="
                tablePointDetailShow = !tablePointDetailShow;
                swicthChange(tablePointDetailShow);
              "
              >Show Selected Points</button
            >
          </div>
        </div>
        <div>
          <el-button class="btn select-all-btn" :aria-label="selectAllAriaLabel" @click="handleCheckAllChange"
            >{{ selectAllAriaLabel }}</el-button
          >
          <el-button
            class="btn apply-btn"
            aria-label="Apply"
            :disabled="checkedPoints.length == 0"
            @click="applyChange()"
            >Apply</el-button
          >
        </div>
      </div>
      <div class="sr-only" aria-live="polite" aria-atomic="true">
        {{ liveAnnouncement }}
      </div>
    </div>

    <homepageSwiper ref="homepageSwiperRef"></homepageSwiper>
  </div>
</template>
<script setup>
import { ref, computed, nextTick, defineEmits, defineExpose, defineProps } from "vue";
import { Select, CloseBold } from "@element-plus/icons-vue";
import homepageSwiper from "@/components/homepageSwiper.vue";

const props = defineProps({
  type: {
    type: Number,
    required: false,
    default: 0,
  },
});
const homepageSwiperRef = ref(null);

const value1 = ref("2025-02");
const dates = [
  {
    value: "2025-02",
    label: "2025-02",
  },
];

const tablePointDetailShow = ref(false);

const options = [
  {
    value: 1,
    label: "Schwartz Theory of Basic Values",
    children: [
      {
        value: 6,
        label: "Self-direction",
      },
      {
        value: 7,
        label: "Stimulation",
      },
      {
        value: 3,
        label: "Hedonism",
      },
      {
        value: 0,
        label: "Achievement",
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
        value: 2,
        label: "Conformity",
      },
      {
        value: 8,
        label: "Tradition",
      },
      {
        value: 1,
        label: "Benevolence",
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
        value: 0,
        label: "Authority/Subversion",
      },

      {
        value: 4,
        label: "Sanctity/Degradation",
      },
    ],
  },
  {
    value: 3,
    label: "Safety Taxonomy",
    children: [
      {
        value: 1,
        label: "Representation & Toxicity Harms",
      },
      {
        value: 0,
        label: "Misinformation Harms",
      },
      {
        value: 5,
        label: "Information & Safety Harms",
      },
      {
        value: 4,
        label: "Malicious Use",
      },
      {
        value: 3,
        label: "Human Autonomy & Integrity Harms",
      },
      {
        value: 2,
        label: "Socioeconomic Harms",
      },
    ],
  },
  {
    value: 4,
    label: "LLMs' Unique Value System",
    children: [
      {
        value: 0,
        label: "Self-Competence",
      },
      {
        value: 1,
        label: "User-Oriented",
      },

      {
        value: 3,
        label: "Social",
      },
      {
        value: 2,
        label: "Idealistic",
      },
      {
        value: 4,
        label: "Professional",
      },
      {
        value: 5,
        label: "Ethical",
      },
    ],
  },
];

const SchwartzData = {
  value: 1,
  label: "Schwartz Theory of Basic Values",
  group: [
    {
      name: "Openness to Change",
      children: [
        {
          value: 6,
          label: "Self-direction",
        },
        {
          value: 7,
          label: "Stimulation",
        },
        {
          value: 3,
          label: "Hedonism",
        },
      ],
    },
    {
      name: "Self-Enhancement",
      children: [
        {
          value: 3,
          label: "Hedonism",
          isRepeat: true,
        },
        {
          value: 0,
          label: "Achievement",
        },
        {
          value: 4,
          label: "Power",
        },
      ],
    },

    {
      name: "Conservation",
      children: [
        {
          value: 5,
          label: "Security",
        },
        {
          value: 2,
          label: "Conformity",
        },
        {
          value: 8,
          label: "Tradition",
        },
      ],
    },
    {
      name: "Self-Transcendence",
      children: [
        {
          value: 1,
          label: "Benevolence",
        },
        {
          value: 9,
          label: "Universalism",
        },
      ],
    },
  ],
};

const selectedIndex = ref(-1);
const points = ref([]);
const checkedPoints = ref([]);
const liveAnnouncement = ref("");

const selectAllAriaLabel = computed(() => {
  if (points.value.length > 0 && checkedPoints.value.length === points.value.length) {
    return "Clear All";
  }

  return "Select All";
});

const emit = defineEmits(["applyChange", "swicthChange", "showIntro"]);

const announceLiveMessage = async (message) => {
  liveAnnouncement.value = "";
  await nextTick();
  liveAnnouncement.value = message;
};

const applyChange = () => {
  console.log("applyChange", checkedPoints.value);
  if (props.type && props.type == 1) {
    emit("applyChange", {
      index: selectedIndex.value,
      checkPoints: checkedPoints.value,
    });
  } else {
    emit("applyChange", checkedPoints.value);
  }
};

const handleCheckAllChange = () => {
  if (points.value.length === 0) {
    announceLiveMessage("No points available to select.");
    return;
  }

  if (
    checkedPoints.value.length > 0 &&
    checkedPoints.value.length == points.value.length
  ) {
    checkedPoints.value = [];
    announceLiveMessage("All selected points cleared.");
  } else {
    checkedPoints.value = points.value.map((item) => {
      return item.label;
    });
    announceLiveMessage(`All ${checkedPoints.value.length} points selected.`);
  }

  // applyChange();
};
const hancelTypeIndexChange = (index) => {
  if (selectedIndex.value == index) {
    return;
  }
  selectedIndex.value = index;
  points.value = options[index].children;
  if (index == 0) {
    checkedPoints.value = SchwartzData.group[
      SchwartzData.group.length - 1
    ].children.map((item) => {
      return item.label;
    });
  } else {
    checkedPoints.value = points.value.map((item) => {
      return item.label;
    });
  }

  applyChange();
};
// hancelTypeIndexChange(selectedIndex.value)

const handleCheckedPointsChange = (value) => {
  console.log("handleCheckedPointsChange", value);
};

// 判断是否选中某个 group
const isGroupChecked = (group) => {
  return group.children.every((child) =>
    checkedPoints.value.includes(child.label)
  );
};
const checkSubArray = (index, groupName) => {
  console.log(index);
  const currentGroup = SchwartzData.group.find((g) => g.name === groupName);
  if (!currentGroup) return;

  const otherGroups = SchwartzData.group.filter((g) => g.name !== groupName);
  const isChecked = isGroupChecked(currentGroup);

  if (!isChecked) {
    // 选中：添加所有 label，去重
    const newLabels = currentGroup.children.map((c) => c.label);
    checkedPoints.value = Array.from(
      new Set([...checkedPoints.value, ...newLabels])
    );
  } else {
    // 取消选中：移除当前组内的 label，前提是它不属于其他选中组
    const labelsToRemove = currentGroup.children
      .map((child) => child.label)
      .filter((label) => {
        return !otherGroups.some(
          (group) =>
            group.children.some((c) => c.label === label) &&
            isGroupChecked(group)
        );
      });

    checkedPoints.value = checkedPoints.value.filter(
      (label) => !labelsToRemove.includes(label)
    );
  }
};

const swicthChange = (val) => {
  console.log("swicthChange", val);
  emit("swicthChange", val);
};

const showIntro = (index) => {
  // emit("showIntro", index);
  if (homepageSwiperRef.value) {
    homepageSwiperRef.value.showIntro(index);
  }
};

defineExpose({
  hancelTypeIndexChange,
  tablePointDetailShow,
  selectedIndex,
});
</script>

<style scoped lang="scss">
.select-container {
  position: relative;
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
  ul {
    width: calc(100% - 6em);
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: left;
    gap: 0 0.5em;
    li {
      line-height: 1.4;
      padding: 0.65em 3%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      transition: all 0.2s;
      color: rgba(114, 114, 114, 1);
      font-weight: 600;
      border-bottom: 2px solid transparent;
      .point-option-button,
      .point-info-button {
        padding: 0;
        margin: 0;
        border: 0;
        background: transparent;
        color: inherit;
        font: inherit;
      }
      .point-option-button {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
      .point-info-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 4px;
      }
      span {
        white-space: nowrap;
        font-size: 1em;

        margin: 0 0.5em;
      }
      &:hover {
        // background: #47acff;
        color: #1093ff;
      }
      &.on {
        border-color: #004f8f;
        color: #004f8f;
      }

      svg {
        vertical-align: middle;

        &.point-type-icon {
          // transform: translateY(-.2em);
          width: 1.5em;
          height: 1.5em;
        }
        &.info {
          width: 1.1em;
          height: 1.1em;
        }
      }
    }
  }
  .select-points-box {
    background: #eefaff;
    border-radius: 1em;
    padding: 1.5em 3em;
    // font-size: 1.25em;
  }
  .btn-container {
    margin-top: 0.8em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .switch {
      --el-switch-on-color: #368fd4;
      --el-switch-off-color: #368fd4;
      margin-right: 0.8em;

      :deep(.el-switch__action) {
        color: #0f4ea3;
      }

      :deep(.el-switch__action .el-icon) {
        color: #0f4ea3;
      }
    }
    .toggle-selected-points-button {
      padding: 0;
      margin: 0;
      border: 0;
      background: transparent;
      color: #004f8f;
      font: inherit;
      font-size: 1.125em;
      cursor: pointer;

      &:focus-visible {
        outline: 2px solid #0b70c3;
        outline-offset: 2px;
        border-radius: 4px;
      }
    }
    .select-all-btn {
      color: var(--theme-color);
      border-color: var(--theme-color);
    }
    .apply-btn {
      background: var(--theme-color);
      color: #fff;
    }
  }

  :deep(.el-checkbox-group) {
    .el-checkbox {
      background: #eefaff;
      margin-bottom: 0em;
      margin-right: 1.875rem;
      --el-checkbox-input-border: 1px solid #000;
      --el-checkbox-text-color: #000;
      --el-checkbox-checked-input-border-color: #000;
      --el-checkbox-checked-text-color: #000;
      --el-checkbox-input-border-color-hover: #000;
      --el-checkbox-checked-bg-color: #fff;
      --el-checkbox-checked-icon-color: #000;
      --el-checkbox-font-size: 1.125rem;
      // --el-checkbox-font-size:1.25rem;
      --el-checkbox-input-width: 1rem;
      --el-checkbox-input-height: 1rem;
      &.is-checked {
        font-weight: 400;
      }
      height: auto;
      align-items: flex-start;
      margin-bottom: 0.2em;
      .el-checkbox__label {
        max-width: 10em;
        white-space: pre-line;
        line-height: normal;
      }
    }

    .el-checkbox__input {
      transform: translateY(0.3em);
      // background: url(@/assets/images/Checkbox-base.png) no-repeat !important;
      background-size: 100% 100% !important;
      &.is-checked {
        // background: url(@/assets/images/Checkbox-checked.png) no-repeat !important;
        background-size: 100% 100% !important;
      }
    }
  }

  .select-date {
    position: absolute;
    right: 3em;
    top: 1.8em;
    .select-date-icon {
      position: absolute;
      left: 0.8em;
      top: 50%;
      transform: translateY(-50%);
      width: 1.5em;
      height: 1.5em;
    }
  }
  :deep(.el-select) {
    .el-select__wrapper {
      padding: 0 0.8em !important;
      background: transparent !important;
      box-shadow: none !important;
      .el-select__placeholder {
        opacity: 0;
      }
      .el-select__caret {
        color: #000 !important;
        font-weight: 600 !important;
        font-size: 1.2em;
      }
    }
  }

  .group-list {
    padding-top: 0.5em;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 18px 0;
    // gap: 30px;
    .group-item {
      position: relative;
      padding: 1em 0 0.8em;
      .group-text {
        cursor: pointer;
        font-size: 1rem;
        height: 1.5rem;
        line-height: 1.5rem;
        position: absolute;
        z-index: 2;
        left: 1em;
        top: -0.8em;
        background: #eefaff;
        padding: 0 0.3em;
        font-size: 1.25em;
        font-weight: 600;
        text-transform: capitalize;
        color: #000;
        display: flex;
        align-items: center;
        gap: 0.3em;
        .check-icon {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          background: url(@/assets/images/Checkbox-base.png) no-repeat !important;
          background-size: 100% 100% !important;

            &:focus-visible {
              outline: 2px solid #000;
              outline-offset: 2px;
              border-radius: 2px;
            }

          &.is-checked {
            background: url(@/assets/images/Checkbox-checked.png) no-repeat !important;
            background-size: 100% 100% !important;
          }
        }
      }
      .radio-box {
        position: relative;
        z-index: 3;
      }
      & > .border-box {
        position: absolute;
        content: " ";
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #47acff;
        top: 0;
        left: 0;
        border-radius: 12px;
        transform: translateX(-0.9375rem) scale(0.985);
        //
      }
      &:nth-child(1) {
        & > .border-box {
          width: calc((100% - 3.18rem - 0.9375rem));
        }
      }
      &:nth-child(2) {
        & > .border-box {
          width: calc((100% + 3.18rem + 0.9375rem));
          transform: translateX(-3.18rem - 1.875rem) scale(0.985);
        }
      }
    }
  }
}
</style>
