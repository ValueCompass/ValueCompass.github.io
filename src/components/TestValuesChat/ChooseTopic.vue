<template>
  <div class="topic-container main-container">
    <div>
      <h2>Choose Your Topic</h2>
      <p>
        We offer multiple value domains covering personal, social, work, and
        cultural topics.<br />
        Once selected, you’ll get scenario-based questions tailored to that
        area, helping you explore cultural differences and value tensions.
      </p>
      <ul>
        <li
          v-for="(item, index) in topicList"
          :key="index"
          :class="['topic-item', { selected: isSelected(item.topicName) }]"
          @click="toggle(item.topicName)"
        >
          <img :src="item.img || getAssetsFile('1.png')" alt="" />
          <p>{{ item.topicName }}</p>

          <span class="check-icon">
            <el-icon><Check /></el-icon>
          </span>
        </li>
      </ul>

      <div class="btn-container">
        <el-button class="Change-question-btn" @click="confirmChooseTopics">
          Confirm and Continue
        </el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps } from "vue";
import { Check } from "@element-plus/icons-vue";

const getAssetsFile = (url) => {
  return new URL(`../../assets/testValuesTopic/${url}`, import.meta.url).href;
};

const props = defineProps({
  // 是否允许多选（默认 true）
  multiple: {
    type: Boolean,
    default: true,
  },
});

const topicList = ref([
  {
    img: getAssetsFile("1.png"),
    topicName: "Social Justice & Responsibility",
  },
  {
    img: getAssetsFile("1.png"),
    topicName: "Friendship & Social Life",
  },
  {
    img: getAssetsFile("1.png"),
    topicName: "Romance & Partnerships",
  },
  {
    img: getAssetsFile("1.png"),
    topicName: "Social Justice & Responsibility",
  },
  {
    img: getAssetsFile("1.png"),
    topicName: "Freedom & Individual Rights",
  },
  {
    img: getAssetsFile("1.png"),
    topicName: "Work & Professional Ethics",
  },
  {
    img: getAssetsFile("1.png"),
    topicName: "Wealth & Material Values",
  },
  {
    img: getAssetsFile("1.png"),
    topicName: "Culture & Tradition",
  },
  {
    img: getAssetsFile("1.png"),
    topicName: "Environment & Sustainability",
  },
]);

const selectedArr = ref([]);
// 判断是否已选
function isSelected(id) {
  return selectedArr.value.indexOf(id) !== -1;
}

function toggle(id) {
  if (props.multiple) {
    const idx = selectedArr.value.indexOf(id);
    if (idx === -1) {
      selectedArr.value.push(id);
    } else {
      selectedArr.value.splice(idx, 1);
    }
  } else {
    // 单选模式
    selectedArr.value = selectedArr.value[0] === id ? [] : [id];
  }
}


const emit = defineEmits(["confirmChooseTopics"]);
const confirmChooseTopics = () => {
  emit("confirmChooseTopics", selectedArr);
};
</script>

<style scoped lang="scss">
.topic-container {
  position: relative;
  padding: 2em 8.5em;

  h2 {
    font-size: 2em;
    color: rgba(11, 112, 195, 1);
    font-weight: 600;
    font-style: italic;
    & + p {
      color: rgba(102, 102, 102, 1);
      font-size: 1.25em;
      line-height: 1.8;
      margin: 0.5em 0;
    }
  }
  ul {
    margin: 1.5em 0;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5em;
    li.topic-item {
      position: relative;
      background: #fff;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
      width: calc(33.333% - 1.25em);
      padding: 1.5em 2em;
      box-sizing: border-box;
      border-radius: 1em;
      transition: all 0.2s;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.5em;
      p {
        font-size: 1.5em;
        line-height: 1.2;
        font-weight: 600;
        font-style: italic;
      }
      img {
        width: 33%;
        display: block;
        margin: 0 auto;
      }

      .check-icon {
        position: absolute;
        right: 1em;
        top: 1em;
        width: 1.5em;
        height: 1.5em;
        border: 1px solid #ccc;
        box-sizing: border-box;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 1em;
          height: 1em;
          color: transparent;
        }
      }
      &:hover {
        box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
        color: rgba(11, 112, 195, 1);
        .check-icon {
          position: absolute;
          border-color: rgba(11, 112, 195, 1);
          svg {
            color: rgba(11, 112, 195, 1);
          }
        }
      }

      &.selected {
        box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);

        color: rgba(5, 64, 140, 1) !important;
        .check-icon {
          border-color: rgba(5, 64, 140, 1);
          background: rgba(5, 64, 140, 1);
          svg {
            color: #fff;
          }
        }
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    .Change-question-btn {
      font-size: 1.25em;
      color: rgba(11, 112, 195, 1);
      height: 3em;
      border: 2px solid rgba(11, 112, 195, 1);
      padding: 0.2em 1.2em;
      border-radius: 6px;
      &:hover {
        background: #fff;
        opacity: 0.8;
      }
      .el-icon--right {
        font-size: 1.2em;
        margin-left: 0.4em;
      }
    }
  }
}
</style>
