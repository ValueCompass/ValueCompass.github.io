<template>
  <div style="position: relative" ref="scrollBox">
    <!-- 右侧按钮列 -->
    <div class="button-column" @wheel="handleWheel">
      <span
        v-for="letter in alphabet"
        :key="letter"
        @click="scrollToGroup(letter)"
        :class="{ on: activeLetter === letter }"
      >
        {{ letter }}
      </span>
    </div>

    <div class="scroll-inner" ref="contentRef" @scroll="handleScroll">
      <el-checkbox-group
        v-model="checkedModelNameList"
        :max="isSetModelNumMax ? 5 : 100"
      >
        <template
          v-for="(models, developer) in modelGropsByDeveloper"
          :key="developer"
        >
          <p
            style="font-size: 12px; height: 12px; line-height: 16px; opacity: 0"
            :ref="setRef(developer)"
          >
            {{ developer }}
          </p>
          <div class="provider_models">
            <el-checkbox
              v-for="model in models"
              :key="model.model"
              :value="model.model"
            >
              {{ model.model }}
            </el-checkbox>
          </div>
        </template>
      </el-checkbox-group>
    </div>

    <div style="display: flex; justify-content: flex-end; margin-top: 10px">
      <button @click="submit">Submit</button>
    </div>
  </div>
</template>
<script setup>
import {
  ref,
  reactive,
  watch,
  nextTick,
  computed,
  defineProps,
  onMounted,
} from "vue";

const props = defineProps({
  modelGropsByDeveloper: {
    type: Object,
    required: true,
    default: () => {},
  },
  modelValue: {
    type: Array,
    required: true,
    default: () => [],
  },
  isSetModelNumMax: {
    type: Boolean,
    required: false,
    default: true,
  },
});
const checkedModelNameList = ref([]);

watch(
  () => props.modelValue,
  (newVal, oldVal) => {
    console.log("[子组件] modelValue 变化了:", oldVal, "→", newVal);
    // 你可以在这里做副作用处理，比如重新过滤、加载数据等
    checkedModelNameList.value = newVal;
  },
  { deep: true, immediate: true } // optional: 立即执行一次 + 深度监听
);

const submit = () => {
  emit("updateCheckboxValue", checkedModelNameList.value);
};

const emit = defineEmits(["updateCheckboxValue"]);

// 计算字母按钮的列表（根据开发者组中第一个模型的首字母生成）
const alphabet = computed(() => {
  // 提取每个开发者组中第一个模型的首字母
  const letters = Object.values(props.modelGropsByDeveloper).map((group) =>
    group[0].model[0].toUpperCase()
  );

  // 使用 Set 去重，并排序
  return [...new Set(letters)].sort();
});

const contentRef = ref(null);
const scrollBox = ref(null);
// 用来存储动态的开发者组 refs
const developerRefs = ref({});

const activeLetter = ref(null); // 当前激活的字母
const isManualScrolling = ref(false); // 👉 标记是“人为滚动中”

// 设置 ref，用开发者组名称作为 ref 名称
const setRef = (developer) => {
  return (el) => {
    if (el) {
      developerRefs.value[developer] = el;
    }
  };
};

// 滚动到指定字母的分组
const scrollToGroup = (letter) => {
  isManualScrolling.value = true;
  activeLetter.value = letter; // 更新激活状态
  // 遍历所有开发者分组
  for (let developer in props.modelGropsByDeveloper) {
    const group = props.modelGropsByDeveloper[developer];
    const firstModel = group[0]; // 获取该开发者组的第一个模型

    // 如果该开发者组第一个模型的首字母与点击的字母相同
    if (firstModel.model[0].toUpperCase() === letter.toUpperCase()) {
      // 获取该开发者组对应的 ul 元素
      const ulElement = developerRefs.value[developer];

      // 滚动到该组的 ul 元素
      if (ulElement) {
        console.log(ulElement);
        ulElement.scrollIntoView({ behavior: "smooth", block: "start" });
        // 假设滚动动画大约 500ms，之后再允许 scroll 自动更新
        setTimeout(() => {
          isManualScrolling.value = false;
        }, 500);
      }
      break;
    }
  }
};

// 鼠标在button上滚动时候，滚动区域可滚动
const handleWheel = (e) => {
  const scrollInner = scrollBox.value?.querySelector(".scroll-inner");
  if (!scrollInner) return;

  // 模拟滚动
  scrollInner.scrollTop += e.deltaY;

  // 阻止默认行为，避免整个页面滚动
  e.preventDefault();
};

// 监听滚动事件，判断当前内容滚动到哪个组
const handleScroll = () => {
  if (isManualScrolling.value) return; // 👉 阻止 scroll 时更新 activeLetter

  const contentTop = contentRef.value.scrollTop;
  const contentOffset = contentRef.value.getBoundingClientRect().top;

  let closestGroup = null;
  let closestOffset = Infinity;

  for (const developer in developerRefs.value) {
    const el = developerRefs.value[developer];
    if (el) {
      const rect = el.getBoundingClientRect();
      const offset = Math.abs(rect.top - contentOffset);

      if (offset < closestOffset) {
        closestOffset = offset;
        const firstLetter =
          props.modelGropsByDeveloper[developer][0].model[0].toUpperCase();
        closestGroup = firstLetter;
      }
    }
  }

  if (closestGroup) {
    activeLetter.value = closestGroup;
  }
};

onMounted(async () => {
  await nextTick(); // 等待 DOM 渲染完成
  handleScroll(); // 模拟一次滚动，初始化 activeLetter
});
</script>

<style scoped lang="scss">
.button-column {
  position: absolute;
  height: calc(100% - 50px);
  right: 16px;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  span {
    cursor: pointer;
    font-size: 12px;
    display: flex;
    width: 24px;
    height: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 1px solid #c2c2c2;
    &.on {
      background: #47acff;
      border-color: #0b70c3;
      color: #fff;
    }
  }
}

.scroll-inner {
  height: 376px;
  overflow-y: auto;
  padding-right: 3em;
}
.provider_models {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px 12px;
  align-self: stretch;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
:deep(.el-checkbox__label) {
  width: 156px;
  // overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis;
  line-height: 1.125;
  white-space: pre-line;
}
:deep(.el-checkbox) {
  --el-checkbox-text-color: var(--text-color);
  margin-right: 0;
  align-items: flex-start;
  height: auto !important;
}
</style>
