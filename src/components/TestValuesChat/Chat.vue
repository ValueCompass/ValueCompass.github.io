<template>
  <div class="chat-template">
    <div class="chat-container">
      <div class="left">
        <div class="exit-btn" @click="dialogVisible = true">
          <svg-icon name="exit_btn"></svg-icon>
          <span>Exit</span>
        </div>
        <div
          class="chat-list-container"
          :class="chatList.length > 1 ? 'setHeight' : ''"
        >
          <el-scrollbar ref="scrollbarRef">
            <div class="content">
              <ul class="chat-ul">
                <li
                  :class="item.type == 'user' ? 'me-chat' : 'model-chat'"
                  v-for="(item, index) in chatList"
                  :key="index"
                >
                  <div>
                    {{ item.text }}
                  </div>
                </li>

                <li v-if="isSendLoading">
                  <LoadingDots class="select-tip" text="Generating" :size="7" />
                </li>
              </ul>
            </div>
          </el-scrollbar>
        </div>

        <div class="input-container">
          <ChatInput
            ref="ChatInputRef"
            @sendMessage="sendMessage"
            :isSendLoading="isSendLoading"
            :lang="choosedLanguage"
          ></ChatInput>
          <p class="tip-text">
            Your data stays local in your browser. No account needed.
          </p>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <div>
            <div>
              <GradientCircle :percentage="chatPercentage * 100" />
            </div>
            <p>
              Your conversation will begin to light up and fill the outer ring
              of this compass.
            </p>
          </div>
          <div>
            <el-button
              @click="ViewResults"
              class="button view-btn"
              color="#0B70C3"
              >End and View Results <i class="icon"></i
            ></el-button>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      v-model="dialogVisible"
      title=""
      width="536"
      center
      align-center
      class="my-dialog"
    >
      <div class="exitDialogBody">
        <p>
          The content of the page will not be saved, <br />
          are you sure you want to quit?
        </p>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button class="cancel-btn" @click="dialogVisible = false"
            >Cancel</el-button
          >
          <el-button type="primary" @click="confirmExitClick">Exit</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import LoadingDots from "@/components/common/LoadingDots.vue";
import ChatInput from "@/components/TestValuesChat/ChatInput.vue";
import GradientCircle from "@/components/TestValuesChat/GradientCircle.vue";

import { getChatItemInfo } from "@/service/api";

import { ref, onMounted, defineEmits, nextTick, watch,toRaw  } from "vue";
import { ElMessage } from "element-plus";

import { ElMessageBox } from "element-plus";
import { array, type } from "@amcharts/amcharts4/core";

const props = defineProps({
  choosedLanguage: { type: String, default: "zh-CN" }, //'en-US'
  choosedTopics: {type:Array,default:[]},
  isSendLoading: { type: Boolean, default: false }, //
  nickName: { type: String, default: "" }, //'en-US'
});

const chatId = ref(null)

const dialogVisible = ref(false);

const ChatInputRef = ref();
const scrollbarRef = ref();

const isSendLoading = ref(false);

const chatPercentage = ref(0);

const chatList = ref([
  // {
  //   type: "model",
  //   text: "Do you think people should prioritize logic or emotions when relating to others?",
  // },
  // {
  //   type: "user",
  //   text: "I think emotions should come first. They help build trust and deeper connections.",
  // },
  // {
  //   type: "model",
  //   text: "Interesting. Could you give me an example where emotions helped you connect with someone better than logic would have?",
  // },
  //   {
  //     type: "user",
  //     text: "Sure — once my friend was really stressed, and instead of giving her practical solutions, I just listened and showed empathy. That helped her open up.",
  //   },
  //   {
  //     type: "model",
  //     text: "Do you think people should prioritize logic or emotions when relating to others?",
  //   },
  //   {
  //     type: "user",
  //     text: "I think emotions should come first. They help build trust and deeper connections.",
  //   },
  //   {
  //     type: "model",
  //     text: "Interesting. Could you give me an example where emotions helped you connect with someone better than logic would have?",
  //   },
  //   {
  //     type: "user",
  //     text: "Sure — once my friend was really stressed, and instead of giving her practical solutions, I just listened and showed empathy. That helped her open up.",
  //   },
  //   {
  //     type: "model",
  //     text: "Do you think people should prioritize logic or emotions when relating to others?",
  //   },
  //   {
  //     type: "user",
  //     text: "I think emotions should come first. They help build trust and deeper connections.",
  //   },
  //   {
  //     type: "model",
  //     text: "Interesting. Could you give me an example where emotions helped you connect with someone better than logic would have?",
  //   },
  //   {
  //     type: "user",
  //     text: "Sure — once my friend was really stressed, and instead of giving her practical solutions, I just listened and showed empathy. That helped her open up.",
  //   },
  //   {
  //     type: "model",
  //     text: "Do you think people should prioritize logic or emotions when relating to others?",
  //   },
  //   {
  //     type: "user",
  //     text: "I think emotions should come first. They help build trust and deeper connections.",
  //   },
  //   {
  //     type: "model",
  //     text: "Interesting. Could you give me an example where emotions helped you connect with someone better than logic would have?",
  //   },
  //   {
  //     type: "user",
  //     text: "Sure — once my friend was really stressed, and instead of giving her practical solutions, I just listened and showed empathy. That helped her open up.",
  //   },
  //   {
  //     type: "model",
  //     text: "Do you think people should prioritize logic or emotions when relating to others?",
  //   },
  //   {
  //     type: "user",
  //     text: "I think emotions should come first. They help build trust and deeper connections.",
  //   },
  //   {
  //     type: "model",
  //     text: "Interesting. Could you give me an example where emotions helped you connect with someone better than logic would have?",
  //   },
  //   {
  //     type: "user",
  //     text: "Sure — once my friend was really stressed, and instead of giving her practical solutions, I just listened and showed empathy. That helped her open up.",
  //   },
]);

watch(
  chatList,
  async () => {
    await nextTick();
    const wrap = scrollbarRef.value?.wrapRef;
    if (wrap) {
      scrollbarRef.value.setScrollTop(wrap.scrollHeight);
    }
  },
  { deep: true }
);

onMounted(()=>{
  console.log("onMounted")
  chatId.value = generateId()
  sendMessage(null)
  //   {
  //   type: "model",
  //   text: "Do you think people should prioritize logic or emotions when relating to others?",
  // },
})
const sendMessage = (textareaValue) => {
  if (isSendLoading.value) {
    return;
  }
  isSendLoading.value = true;

  if(textareaValue){
    chatList.value.push({
      type: "user",
      text: textareaValue,
    });
  }
  ChatInputRef.value.clear();

  try {
    const obj = { language: props.choosedLanguage,choosedTopics:toRaw(props.choosedTopics),nickName:props.nickName, user_response: textareaValue, user_id:chatId.value, }
    console.log("需要传的参数",obj)
    getChatItemInfo()
      .then((response) => {
        console.log(response);
        chatList.value.push({ type: "model", text: response.question });
        chatPercentage.value = response.progress_bar
         if (chatPercentage.value >= 1){
          chatPercentage.value = 1
         }
        // if (chatPercentage.value < 1) {
        //   chatPercentage.value += 0.11;
        //   chatPercentage.value =
        //     chatPercentage.value > 1 ? 1 : chatPercentage.value;
        // }
      })
      .catch((err) => {
        console.log("err");
        ElMessage.error("发送失败，请重新发送");
      })
      .finally(() => {
        isSendLoading.value = false;
      });
  } catch (error) {
    console.error("Error:", error);
  }
};

const emit = defineEmits(["setProcessIndex","getResults"]);

const ViewResults = () => {
  console.log("ViewResults",chatId.value);
  emit("getResults", chatId.value);

};

const confirmExitClick = () => {
  dialogVisible.value = false;
  emit("setProcessIndex", 1);
};


function generateId() {
  return 'msg-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
}

</script>

<style lang="scss" scoped>
.chat-template {
  color: #000;
  position: absolute !important;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 9999 !important;
  background: #fff;
  .chat-container {
    display: flex;
    flex-direction: row;
    height: 100%;
    .left {
      height: 100%;
      width: 60%;
      padding: 3em 0 2em;
      box-sizing: border-box;
      background: linear-gradient(
        180deg,
        rgba(204, 240, 252, 0.2) 0%,
        rgba(155, 221, 249, 0.2) 100%
      );
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.25em;
      position: relative;
      .exit-btn {
        cursor: pointer;
        position: absolute;
        // left: 10%;
        // transform: translateX(-100%);
        left: 1.5em;
        top: 0.75em;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.75em;
        color: rgba(11, 112, 195, 1);
        svg {
          width: 2em;
          height: 2em;
        }
        span {
          font-size: 1.25em;
        }
      }
      .chat-list-container {
        // height: calc(100% - 10em);
        overflow: hidden;
        &.setHeight {
          flex: 1;
          .content .chat-ul {
            padding-bottom: 5em;
          }
        }

        .content {
          // display: none;
          padding: 0 3em;
          width: 80%;
          margin: 0 auto;
          max-width: 784px;
          height: 100%;
          .chat-ul {
            display: flex;
            flex-direction: column;
            gap: 1em;
            // padding-bottom: 5em;
            li {
              display: flex;
              flex-direction: column;

              padding: 0.625em 1.5em;
              border-radius: 0.8em;

              line-height: 1.5;
              box-sizing: border-box;
              &:nth-child(1) {
                font-weight: 600;
              }
              & > div {
                font-size: 1.25em;
              }
              &.model-chat {
              }
              &.me-chat {
                align-self: flex-end;
                background: rgba(204, 240, 252, 1);
                width: 75%;
              }
            }
          }
        }
      }

      .input-container {
        padding: 0 3em;
        width: 80%;
        margin: 0 auto;
        max-width: 784px;

        // height: 10em;
        // flex: 1;
        .tip-text {
          text-align: center;
          color: rgba(0, 0, 0, 0.5);
          margin-top: 1.25em;
        }
      }
    }
    .right {
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .content {
        height: 100%;
        width: 80%;
        max-width: 784px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        & > div {
          &:nth-child(1) {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p {
              margin-top: 2em;
              color: rgba(102, 102, 102, 1);
              font-style: italic;
            }
          }
          &:nth-child(2) {
            padding: 4em;
            .view-btn {
              display: inline-block;
              position: relative;
              font-size: 1.25em;
              height: 3em;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              border: none;
              background: #0b70c3;
              &.is-disabled {
                background: #c2c2c2;
              }
              .icon {
                margin-left: 0.5em;
                width: 1em;
                height: 1em;
                background: url(@/assets/images/arrow-right.png) no-repeat left
                  center;
                background-size: 60% auto;
                display: inline-block;
                transform: translate(0, 0.1em);
                transition: all 0.2s;
              }
              &:hover {
                & > .icon {
                  transform: translate(0.2em, 0.1em);
                }
              }
            }
          }
        }
      }
    }
  }
}

:deep(.my-dialog) {
  --el-dialog-content-font-size: 1rem;
  padding: 30px;
  color: #000;
  .el-dialog__close {
    font-size: 1.2em;
  }

  .el-dialog__body {
    .exitDialogBody {
      font-size: 1.125em;
      font-weight: 700;
      line-height: 1.333;
      text-align: center;
    }
  }

  .el-dialog__footer {
    padding-top: 3em;
    .dialog-footer {
      .el-button {
        font-size: 1.25em;
        height: 2.1em;
        background: rgba(11, 112, 195, 1);
        margin: 0;
        padding: 0 1.2em;
        &.cancel-btn {
          border-color: rgba(11, 112, 195, 1);
          background: #fff;
          color: rgba(11, 112, 195, 1);
          margin-right: 5.3em;
        }
      }
    }
  }
}
</style>