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
          @click="hancelTypeIndexChange(index)"
        >
          <SvgIcon class="point-type-icon" name="point-type-icon"></SvgIcon>
          <span>{{ item.label }}</span>
          <SvgIcon
            class="info"
            name="info"
            @click.stop="showIntro(index)"
          ></SvgIcon>
        </li>
      </ul>
      <p style="margin: 1em 0; font-size: 1.25em"><b>Selected Points</b></p>
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
      <div class="btn-container">
        <div>
          <el-switch
            aria-label="switch"
            v-model="tablePointDetailShow"
            class="switch"
            inline-prompt
            :active-action-icon="Check"
            :inactive-action-icon="Close"
            @change="swicthChange"
          />
          <span
            style="color: #004f8f; font-size: 1.125em; cursor: pointer"
            @click="
              tablePointDetailShow = !tablePointDetailShow;
              swicthChange(tablePointDetailShow);
            "
            >Show Selected Points</span
          >
        </div>
        <div>
          <el-button class="btn select-all-btn" @click="handleCheckAllChange"
            >Select All</el-button
          >
          <el-button
            class="btn apply-btn"
            :disabled="checkedPoints.length == 0"
            @click="applyChange()"
            >Apply</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits, defineExpose } from "vue";
import { Check, Close } from "@element-plus/icons-vue";

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
    label: "Safety Taxonomy",
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
        value: 2,
        label: "Idealistic",
      },
      {
        value: 3,
        label: "Social",
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

const selectedIndex = ref(0);
const points: any = ref([]);
const checkedPoints: any = ref([]);

const emit = defineEmits(["applyChange", "swicthChange", "showIntro"]);

const applyChange = () => {
  console.log("applyChange", checkedPoints.value);
  emit("applyChange", checkedPoints.value);
};
const handleCheckAllChange = () => {
  if (
    checkedPoints.value.length > 0 &&
    checkedPoints.value.length == points.value.length
  ) {
    checkedPoints.value = [];
    return;
  }
  checkedPoints.value = points.value.map((item: any) => {
    return item.label;
  });
  // applyChange();
};
const hancelTypeIndexChange = (index: number) => {
  // if(selectedIndex.value == index){
  //   return;
  // }
  selectedIndex.value = index;
  points.value = options[index].children;
  checkedPoints.value = points.value.map((item: any) => {
    return item.label;
  });
  applyChange();
};
// hancelTypeIndexChange(selectedIndex.value)

const handleCheckedPointsChange = (value: string[]) => {
  console.log("handleCheckedPointsChange", value);
  // applyChange();
};

const swicthChange = (val: boolean) => {
  console.log("swicthChange", val);
  emit("swicthChange", val);
};

const showIntro = (index: number) => {
  emit("showIntro", index);
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
  ul {
    width: calc(100% - 6em);
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: left;
    li {
      line-height: 1.4;
      margin: 0 0.2em;
      cursor: pointer;
      padding: 0.65em 3%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      transition: all 0.2s;
      color: rgba(114, 114, 114, 1);
      font-weight: 600;
      border-bottom: 2px solid transparent;
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
      margin-right: 0.8em;
    }
    .btn {
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
}

.el-checkbox {
  .el-checkbox__input.is-checked .el-checkbox__inner {
    background: red !important;
  }
  margin-bottom: 0em;
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

    .el-checkbox__inner {
      background: red !important;
    }
  }
}

:deep(.el-checkbox__input) {
  background: url(@/assets/images/Checkbox-base.png) no-repeat !important;
  background-size: 100% 100% !important;
  &.is-checked {
    background: url(@/assets/images/Checkbox-checked.png) no-repeat !important;
    background-size: 100% 100% !important;
  }
  .el-checkbox__inner {
    opacity: 0;
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
</style>
