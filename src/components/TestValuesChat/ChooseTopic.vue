<template>
  <div class="topic-container main-container">
    <div class="skip-div">
      <el-button @click="skipClick">Skip</el-button>
    </div>
    <div>
      <h2>Enter Your Name (Optional)</h2>
      <p>
        Providing your name makes the experience more personal. We’ll use it to
        address you during the conversation, and it will also appear on your
        result card. But if you prefer to stay anonymous, you can skip this
        step.
      </p>
      <div class="input-box">
        <el-input
          v-model="nickName"
          class="input"
          placeholder="Please enter your name or nickname"
        ></el-input>
      </div>
    </div>
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
        <el-button
          class="Change-question-btn"
          @click="confirmChooseTopics"
          :disabled="selectedArr.length == 0"
          :class="selectedArr.length == 0 ? 'disabled' : ''"
        >
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

const nickName = ref("");

const topicList = ref([
  {
    img: getAssetsFile("1.png"),
    topicName: "Family & Intimacy",
  },
  {
    img: getAssetsFile("2.png"),
    topicName: "Friendship",
  },
  {
    img: getAssetsFile("3.png"),
    topicName: "Education",
  },
  {
    img: getAssetsFile("4.png"),
    topicName: "Work & Career",
  },
  {
    img: getAssetsFile("5.png"),
    topicName: "Consumption & Lifestyle",
  },
  {
    img: getAssetsFile("6.png"),
    topicName: "Collaboration & Teamwork",
  },
  {
    img: getAssetsFile("7.png"),
    topicName: "Public Policy & Justice",
  },
  {
    img: getAssetsFile("8.png"),
    topicName: "Religion & Culture",
  },
  {
    img: getAssetsFile("9.png"),
    topicName: "Technology & Innovation",
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
  emit("confirmChooseTopics", {
    selectedTopics:selectedArr,
    nickName:nickName.value
  });
};

const skipClick = () =>{
  emit("confirmChooseTopics", {
    selectedTopics:[],
    nickName:""
  });
}
</script>

<style scoped lang="scss">
.topic-container {
  padding-bottom: 3em;
  position: relative;
  // padding: 2em 8.5em;
  width: 83%;
  .skip-div{
    margin: 2em 0 6em;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    button{
      border: 2px solid rgba(11, 112, 195, 1);
      color: rgba(11, 112, 195, 1);
      font-size: 1.5em;
      height: 2.4em;
      width: 4em;
    }
  }

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

  .input-box {
    width: 70%;
    margin: 1.5em auto 4em;
    .input {
      font-size: 1.5em;
      height: 2.33em;
      --el-input-text-color: var(--text-color);
      --el-input-bg-color: var(--bg-color) !important;
      --el-input-border-color: rgba(194, 194, 194, 1) !important;
      --el-input-placeholder-color: rgba(194, 194, 194, 1) !important;
      --el-input-hover-border-color: rgba(194, 194, 194, 1) !important;
      --el-input-focus-border: rgba(194, 194, 194, 1) !important;
      --el-input-focus-border-color: rgba(194, 194, 194, 1) !important;
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
      background: rgba(11, 112, 195, 1);
      color: #fff;
      height: 3em;
      // border: 2px solid rgba(11, 112, 195, 1);
      padding: 0.2em 1.2em;
      border-radius: 6px;
      &:hover {
        opacity: 0.9;
      }
      &.is-disabled {
        background: rgba(194, 194, 194, 1);
        color: #fff;
      }
    }
  }
}
</style>
