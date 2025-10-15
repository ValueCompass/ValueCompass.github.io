<template>
  <div class="main-container test-values-template" style="flex: 1">
    <Home v-show="processIndex == 1" @chooseLanguage="chooseLanguage"></Home>
    <ChooseTopic
      v-show="processIndex == 2"
      @confirmChooseTopics="confirmChooseTopics"
    ></ChooseTopic>
    
    <LoadingMain v-show="processIndex == 4"></LoadingMain>
    <Result v-if="processIndex == 5" :valuesRecults="valuesRecults"></Result>

    <div class="img-div" v-show="processIndex < 4">
      <div
        class="testValues-img"
        :class="{
          'animate-on-load': animateOnLoad,
          status2: processIndex == 2,
          status3: processIndex == 3,
        }"
      >
        <img class="img0" src="@/assets/images/testValues/0.png" alt="test" />
        <img
          class="img img1"
          src="@/assets/images/testValues/1@2x.png"
          alt="test"
        />
        <img
          class="img img2"
          src="@/assets/images/testValues/2@2x.png"
          alt="test"
        />
        <img
          class="img img3"
          src="@/assets/images/testValues/3@2x.png"
          alt="test"
        />
        <img
          class="img img4"
          src="@/assets/images/testValues/4@2x.png"
          alt="test"
        />
      </div>
    </div>
  </div>
  <Chat v-if="processIndex == 3" :choosedLanguage="choosedLanguage" :choosedTopics="choosedTopics.value" :nickName="nickName" @setProcessIndex="setProcessIndex" @getResults="getResults"></Chat>
</template>
<script setup>
import Home from "../components/TestValuesChat/Home.vue";
import ChooseTopic from "../components/TestValuesChat/ChooseTopic.vue";
import Chat from "../components/TestValuesChat/Chat.vue";
import LoadingMain from "../components/TestValuesChat/LoadingMain.vue";

import Result from "../components/TestValuesChat/Result.vue";

import { getChatResult } from "@/service/api";


import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

const processIndex = ref(1);

const valuesRecults = ref(null)

const choosedLanguage = ref("en-US");  //'en-US' "zh-CN" 
const choosedTopics = ref([]);
const nickName = ref("")

const chooseLanguage = (language) => {
  console.log("!!",language)
  choosedLanguage.value = language;
  processIndex.value = 2;
};


const confirmChooseTopics = (data) => {
  choosedTopics.value = data.selectedTopics;
  nickName.value = data.nickName
  processIndex.value = 3;
};

const setProcessIndex = (index) => {
  console.log("@@@@@@@@@@@",index)
  processIndex.value = index;
};

const getResults = (userId) =>{
  console.log("getResults",userId)
  processIndex.value = 4
  try {
    getChatResult()
      .then((response) => {
        processIndex.value = 5;
        console.log(response);
        valuesRecults.value = response
      })
      .catch((err) => {
        console.log("err");
        ElMessage.error("发送失败，请重新发送");
        processIndex.value = 3;
      })
      .finally(() => {});
  } catch (error) {
    console.error("Error:", error);
  }
}

const animateOnLoad = ref(false);

onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  setTimeout(() => {
    // document.querySelector(".testValues-img").classList.add("animate-on-load");
    animateOnLoad.value = true;
  }, 100);
});
</script>

<style scoped lang="scss">
.test-values-template {
  min-height: inherit;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  & > div {
    position: relative;
    z-index: 3;
  }

  .img-div {
    width: calc(100% - 62em);
    padding-left: 2em;
    position: absolute;
    z-index: 1;
    right: 5em;
    top: 50%;
    transform: translateY(-50%);
    img {
      width: 100%;
    }
    .testValues-img {
      position: relative;
      .img {
        position: absolute;
        top: 0;
        left: 0;
        // transform: translate(-50%, -50%);
        opacity: 0;
        transition: all 1s ease-out 0.1s;
      }

      .img1 {
        width: 100%;
        height: 100%;
      }
      .img2 {
        width: 10px;
        height: 10px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .img3 {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        aspect-ratio: 1/1;
        margin-left: 20%;
      }
      .img4 {
        width: 100%;
        height: 100%;
        transform: rotate(90deg);
        flex-shrink: 0;
        aspect-ratio: 1/1;
      }
      &.animate-on-load {
        .img {
          opacity: 1;
          width: 100%;
          height: 100%;
        }
        .img3 {
          margin-left: 0;
          transform: rotate(0);
        }
        .img4 {
          transform: rotate(0);
        }
      }

      &.status2 {
        .img {
          transition: all 1s;
        }
        .img0 {
          opacity: 0.2;
          transform: translate(20%, 40%) scale(0.9);
        }
        .img1 {
          transform: translate(-210%, -65%) scale(0.7);
          opacity: 0.2;
        }
        .img2 {
          transform: translate(10%, -120%) scale(0.69);
          opacity: 0.2;
        }
        .img3 {
          transform: translate(-210%, -5%) scale(0.68);
          opacity: 0.2;
        }
        .img4 {
          opacity: 0;
        }
      }
    }
  }
}

@media (max-width: 1750px) {
  .test-values-template .img-div {
    .testValues-img {
      &.status2 {
        .img {
          transition: all 1s;
        }
        .img0 {
          opacity: 0.2;
          transform: translate(20%, 40%) scale(0.9);
        }
        .img1 {
          transform: translate(calc(-90vw + 10em + 35%), -65%) scale(0.65);
          opacity: 0.2;
        }
        .img2 {
          transform: translate(10%, -120%) scale(0.69);
          opacity: 0.2;
        }
        .img3 {
          transform: translate(calc(-90vw + 10em + 25%), -5%) scale(0.68);
          opacity: 0.2;
        }
        .img4 {
          opacity: 0;
        }
      }
    }
  }
}

@media (max-width: 1400px) {
  .test-values-template .img-div {
    .testValues-img {
      &.status2 {
        .img {
          transition: all 1s;
        }
        .img0 {
          opacity: 0.2;
          transform: translate(30%, 40%) scale(0.6);
        }
        .img1 {
          transform: translate(calc(-1100px + 70%), -40%) scale(0.4);
          opacity: 0.2;
        }
        .img2 {
          transform: translate(0, -80%) scale(0.6);
          opacity: 0.2;
        }
        .img3 {
          transform: translate(calc(-1100px + 50%), 30%) scale(0.5);
          opacity: 0.2;
        }
        .img4 {
          opacity: 0;
        }
      }
    }
  }
}
</style>
