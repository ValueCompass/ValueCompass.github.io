<template>
  <div class="page" style="position: relative">
    <div class="cover-container"></div>
    <div style="position: relative">
      <div class="culture-alignment-container main-container">
        <div>
          <h2>
            Explore Cultural Perspectives – Choose a Topic to Compare Responses
          </h2>
          <p>
            Each topic offers a lens into values, norms, and communication
            styles across regions. Select one to begin your cultural comparison
            and reveal key differences in thought and behavior.
          </p>
          <ul>
            <li
              v-for="(item, index) in topicListShow"
              :key="index"
              @click="goToComparisonPage(item)"
            >
              <div>
                <img :src="item.img || getAssetsFile('1.png')" alt="" />
                <p>{{ item.currQuestion }}</p>
              </div>
            </li>
          </ul>

          <div class="btn-container">
            <el-button
              class="Change-question-btn"
              @click="RandomSelectQuestion"
            >
              Change question<el-icon class="el-icon--right"
                ><Refresh
              /></el-icon>
            </el-button>
          </div>
        </div>

        <div class="bg-container">
          <img
            class="bg"
            src="@/assets//images/culturalBg.png"
            alt=""
            style="z-index: -1"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onActivated } from "vue";
import { useRouter } from "vue-router";
import { Refresh } from "@element-plus/icons-vue";
import axios from "axios";
import { getAnswerInfo, getQuestionInfo } from "@/service/api";

import { useCulturalAlignmentStore } from "@/stores/culturalAlignmentStore";
const culturalAlignmentStore = useCulturalAlignmentStore();
import { initQuestions, getRandomQuestions } from "@/utils/questionsManager.js";

const getAssetsFile = (url) => {
  return new URL(`../../assets/topic/${url}`, import.meta.url).href;
};

let question_info_data = null;
let answer_info_data = null;

const topicListShow = ref([
  // {
  //   img: getAssetsFile("1.png"),
  //   currQuestion: "Do you think kids should be punished when they oppose their parents both in words and actions?",
  // }
]);

onMounted(async () => {
  console.log("topicSelection onMounted ");
  await fetchData();

  // setOptionAndGenarateResult()
  initQuestions(question_info_data);
  RandomSelectQuestion();
});

onActivated(() => {
  console.log("topicSelection onActivated");
  // setOptionAndGenarateResult()
});

const fetchData = async () => {
  if (
    culturalAlignmentStore.question_info_data &&
    culturalAlignmentStore.answer_info_data
  ) {
  } else {
    const question_info = await getQuestionInfo();
    const answer_info = await getAnswerInfo();

    culturalAlignmentStore.question_info_data = question_info.data;
    culturalAlignmentStore.answer_info_data = answer_info.data;
  }
  question_info_data = culturalAlignmentStore.question_info_data;
  answer_info_data = culturalAlignmentStore.answer_info_data;
};

const setOptionAndGenarateResult = () => {
  if (!culturalAlignmentStore.isTopicSelectionPageUpdateData) {
    return;
  }

  console.log("setOptionAndGenarateResult");
  culturalAlignmentStore.isTopicSelectionPageUpdateData = false;

  console.log("question_info_data", question_info_data);
  initQuestions(question_info_data);
  RandomSelectQuestion();
};

const RandomSelectQuestion = () => {
  const randomQuestions = getRandomQuestions(3);
  topicListShow.value = randomQuestions;
};

const router = useRouter();
const goToComparisonPage = (item) => {
  sessionStorage.setItem("currentQuestion", JSON.stringify(item));
  culturalAlignmentStore.isComparesionPageUpdateData = true;
  router.push({
    path: "/CulturalAlignment/comparison",
  });
};
</script>

<style scoped lang="scss">
.culture-alignment-container {
  position: relative;
  padding: 2em 0;
  & > div {
    max-width: 1190px;
    width: 90%;
    margin: 0 auto;
  }
  h2 {
    font-size: 2em;
    color: rgba(11, 112, 195, 1);
    font-weight: 600;
    font-style: italic;
    margin-bottom: 0.78125em;
    & + p {
      color: rgba(102, 102, 102, 1);
      font-size: 1.25em;
      line-height: 1.8;
    }
  }
  ul {
    margin: 3em 0;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    li {
      background: #fff;
      box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
      width: 32%;
      padding: 1.5em 3em;
      box-sizing: border-box;
      border-radius: 1em;
      transition: all 0.2s;
      cursor: pointer;
      p {
        font-size: 1.25em;
        line-height: 1.2;
      }
      img {
        width: 90%;
        display: block;
        margin: 0 auto;
        margin-bottom: 1.5em;
      }
      &:hover {
        box-shadow: 0px 0px 12px 0px rgba(133, 200, 255, 0.4);
        P {
          color: rgba(11, 112, 195, 1);
          // font-weight: 600;
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

  .bg-container {
    margin-top: -3em;
    position: absolute;
    width: 45%;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 784px;
    background: red;
    z-index: -1;
    .bg {
      // display: none;
      position: absolute;
      width: 414.286%;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.cover-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.8) 26.74%,
    rgba(255, 255, 255, 0.95) 54.69%
  );
}
</style>
