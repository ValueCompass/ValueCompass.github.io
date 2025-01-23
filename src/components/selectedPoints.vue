<template>
  <div class="select-container">
    <ul class="label">
      <li
        :class="selectedIndex == index ? 'on' : ''"
        v-for="(item, index) in options"
        :key="index"
        @click="hancelTypeIndexChange(index)"
      >
        <SvgIcon class="point-type-icon" name="point-type-icon"></SvgIcon>
        <span>{{ item.label }}</span>
        <SvgIcon class="info" name="info"></SvgIcon>
      </li>
    </ul>
    <div class="select-points-box">
      <p style="margin-bottom: 1em"><b>Selected Points</b></p>
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
            v-model="tablePointDetailShow"
            class="switch"
            inline-prompt
            :active-action-icon="Check"
            :inactive-action-icon="Close"
            @change="swicthChange"
          />
          <span style="color: #004f8f">Show Selected Points</span>
        </div>
        <div>
          <el-button
            class="btn select-all-btn"
            @click="handleCheckAllChange(true)"
            >Select All</el-button
          >
          <el-button class="btn apply-btn" color="#1093FF">Apply</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits, defineExpose, defineProps } from "vue";
import { Check, Close } from "@element-plus/icons-vue";
const props = defineProps({
  tablePointDetailShow: {
    type: Boolean,
    required: false,
  },
});
const tablePointDetailShow = ref(false);

const options = [
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

const selectedIndex = ref(0);
const points: any = ref([]);
const checkedPoints: any = ref([]);

const checkAll = ref(false);

const emit = defineEmits(["handleChange", "swicthChange"]);

const handleChange = () => {
  console.log("handleChange", checkedPoints.value);
  emit("handleChange", checkedPoints.value);
};
const handleCheckAllChange = (val: boolean) => {
  checkedPoints.value = points.value.map((item: any) => {
    return item.label;
  });
  handleChange();
};
const hancelTypeIndexChange = (index: number) => {
  selectedIndex.value = index;
  points.value = options[index].children;
  handleCheckAllChange(true);
};
// hancelTypeIndexChange(selectedIndex.value)

const handleCheckedPointsChange = (value: string[]) => {
  console.log("handleCheckedPointsChange", value);
  handleChange();
};

const swicthChange = (val: boolean) => {
  console.log("swicthChange", val);
  emit("swicthChange", val);
};

defineExpose({
  hancelTypeIndexChange,
  tablePointDetailShow,
});
</script>

<style scoped lang="scss">
.select-container {
  ul {
    padding: 1.5em 2.8em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    li {
      cursor: pointer;
      flex-grow: 1;
      padding: 1em 1em;
      border-radius: 200px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      // flex: 1;
      span {
        white-space: nowrap;
        font-size: 1.25em;
        color: #004f8f;
        margin: 0 0.5em;
      }
      &.on {
        background: #85c8ff;
      }
      svg {
        vertical-align: middle;

        &.point-type-icon {
          // transform: translateY(-.2em);
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
    font-size: 1.25em;
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .switch {
      margin-right: 0.8em;
    }
    .btn {
    }
    .select-all-btn {
      color: #1093ff;
      border-color: #1093ff;
    }
  }
}

.el-checkbox {
  .el-checkbox__input.is-checked .el-checkbox__inner {
    background: red !important;
  }
  margin-bottom: 1em;
  --el-checkbox-input-border: 1px solid #000;
  --el-checkbox-text-color: #000;
  --el-checkbox-checked-input-border-color: #000;
  --el-checkbox-checked-text-color: #000;
  --el-checkbox-input-border-color-hover: #000;
  --el-checkbox-checked-bg-color: #fff;
  --el-checkbox-checked-icon-color: #000;
  --el-checkbox-font-size: 1.25rem;
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
</style>
