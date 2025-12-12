<template>
  <div class="chat-template">
    <div class="chat-container main-container">
      <div class="left-emotion-img">
          <img src="@/assets/images/robi-character.png" alt="Robi" class="robi-avatar" />
      </div>
      <div class="left">
        <!-- <div class="exit-btn" @click="dialogVisible = true">
          <svg-icon name="exit_btn"></svg-icon>
          <span>Exit</span>
        </div> -->

        <div class="chat-content">
          <div class="chat-list-container setHeight">
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

                    <button
                      v-if="item.type === 'model' && speechSupported"
                      class="read-aloud-btn"
                      type="button"
                      :aria-label="getReadAloudLabel(index)"
                      :class="{ playing: currentSpeakingIndex === index }"
                      @click="toggleReadAloud(index, item.text)"
                    >
                      <img
                        :src="
                          currentSpeakingIndex === index
                            ? readAloudIconStop
                            : readAloudIcon
                        "
                        alt=""
                        aria-hidden="true"
                      />
                      <span>{{ getReadAloudLabel(index) }}</span>
                    </button>
                  </li>

                  <li v-if="isSendLoading">
                    <LoadingDots
                      class="select-tip"
                      text="Generating"
                      :size="7"
                    />
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
              {{
                choosedLanguage == "en-US"
                  ? "Your data stays local in your browser. No account needed."
                  : "你的数据将保存在本地浏览器中，无需注册账户"
              }}
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <div>
            <div style="position: relative">
              <!-- <GradientCircle
                :percentage="chatPercentage * 100"
               
              /> -->

              <img
                :style="{ opacity: !showChat ? '1' : '0' }"
                class="compass-img"
                src="@/assets/images/compass-icon.png"
                alt=""
              />
            </div>
            <p>
              {{
                choosedLanguage == "en-US"
                  ? "Your conversation will begin to light up and fill the outer ring of this compass."
                  : "随着对话的深入，罗盘的外环将被点亮。"
              }}
            </p>
          </div>
          <div>
            <el-button
              @click="ViewResults"
              class="button view-btn"
              color="#0B70C3"
              >{{
                choosedLanguage == "en-US"
                  ? "End and View Results"
                  : "结束并查看结果"
              }}
              <i class="icon"></i
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
import readAloudIcon from "@/assets/images/ReadAloud_btnE2.png";
import readAloudIconStop from "@/assets/images/ReadAloud_btnE2_stop.png";

import {
  ref,
  onMounted,
  defineEmits,
  nextTick,
  watch,
  toRaw,
  defineExpose,
  onDeactivated,
} from "vue";
import { ElMessage } from "element-plus";

import { ElMessageBox } from "element-plus";

const props = defineProps({
  // choosedLanguage: { type: String, default: "zh-CN" }, //'en-US'
  choosedTopics: { type: Array, default: [] },
  isSendLoading: { type: Boolean, default: false }, //
  nickName: { type: String, default: "" }, //'en-US'
});


const chatId = ref(null);
const dialogVisible = ref(false);

const ChatInputRef = ref();
const scrollbarRef = ref();

const isSendLoading = ref(false);

const chatPercentage = ref(0);

const choosedLanguage = ref("en-US"); // 默认英文，可以添加语言选择功能
const chatProgress = ref(1); // 聊天进度 1-7
const speechSupported =
  typeof window !== "undefined" && "speechSynthesis" in window;
const currentSpeakingIndex = ref(null);
let utterance = null;

const chatList = ref([
  {
    type: "model",
    text: "Hi there! I’m Robi — here to explore your values with you.\nI don’t give scores or right answers — I just want to talk about the things that matter to you.\nWould you like to tell me what I can call you? A nickname is fine too, or you can skip it if you prefer.",
  },
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

const sendFirstChat = () => {
  chatId.value = generateId();
  sendMessage(null);
};

onMounted(() => {
  console.log("onMounted");

  //   {
  //   type: "model",
  //   text: "Do you think people should prioritize logic or emotions when relating to others?",
  // },
});
const sendMessage = (textareaValue) => {
  if (isSendLoading.value) {
    return;
  }
  isSendLoading.value = true;

  if (textareaValue) {
    chatList.value.push({
      type: "user",
      text: textareaValue,
    });
  }

  if (ChatInputRef.value) {
    ChatInputRef.value.clear();
  }

  try {
    const obj = {
      language: choosedLanguage.value,
      topic_list: toRaw(props.choosedTopics),
      user_name: props.nickName,
      user_response: textareaValue,
      user_id: chatId.value,
    };
    console.log("需要传的参数", obj);
    getChatItemInfo(obj)
      .then((res) => {
        let response = res.data;
        console.log(response);
        chatList.value.push({ type: "model", text: response.question });
        chatPercentage.value = response.progress_bar;
        if (chatPercentage.value >= 1) {
          chatPercentage.value = 1;
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

        if (chatList.value.length == 0) {
        }
      })
      .finally(() => {
        isSendLoading.value = false;
      });
  } catch (error) {
    console.error("Error:", error);
  }
};

const emit = defineEmits(["setProcessIndex", "getResults"]);

const ViewResults = () => {
  console.log("ViewResults", chatId.value);
  emit("getResults", chatId.value);
};

const confirmExitClick = () => {
  dialogVisible.value = false;
  emit("setProcessIndex", 1);
  location.reload();
};

function generateId() {
  return "msg-" + Date.now() + "-" + Math.floor(Math.random() * 10000);
}

const getSpeechLang = () => {
  if (choosedLanguage.value === "zh-CN") {
    return "zh-CN";
  }
  return "en-US";
};

const stopSpeaking = () => {
  if (!speechSupported) return;
  window.speechSynthesis.cancel();
  currentSpeakingIndex.value = null;
  utterance = null;
};

const playMessage = (index, text) => {
  if (!speechSupported) {
    ElMessage.warning(
      choosedLanguage.value === "zh-CN"
        ? "当前浏览器不支持语音朗读"
        : "Speech synthesis is not supported in this browser."
    );
    return;
  }

  // 如果有正在播放的消息，先停止
  if (currentSpeakingIndex.value !== null) {
    stopSpeaking();
  }

  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = getSpeechLang();
  utterance.onend = () => {
    if (currentSpeakingIndex.value === index) {
      currentSpeakingIndex.value = null;
    }
    utterance = null;
  };
  utterance.onerror = () => {
    if (currentSpeakingIndex.value === index) {
      currentSpeakingIndex.value = null;
    }
    utterance = null;
  };

  // 设置当前播放索引
  currentSpeakingIndex.value = index;
  window.speechSynthesis.speak(utterance);
};

const toggleReadAloud = (index, text) => {
  if (!speechSupported) {
    ElMessage.warning(
      choosedLanguage.value === "zh-CN"
        ? "当前浏览器不支持语音朗读"
        : "Speech synthesis is not supported in this browser."
    );
    return;
  }

  if (currentSpeakingIndex.value === index) {
    stopSpeaking();
  } else {
    playMessage(index, text);
  }
};

const getReadAloudLabel = (index) => {
  const isPlaying = currentSpeakingIndex.value === index;
  const labels = {
    play: choosedLanguage.value === "zh-CN" ? "朗读" : "Read Aloud",
    stop:
      choosedLanguage.value === "zh-CN"
        ? "停止"
        : "\u00a0\u00a0Stop\u00a0\u00a0",
  };
  return isPlaying ? labels.stop : labels.play;
};

onDeactivated(() => {
  console.log("onDeactivated");
  window.speechSynthesis.cancel();
});
window.addEventListener("beforeunload", () => {
  window.speechSynthesis.cancel();
});

defineExpose({
  sendFirstChat,
});
</script>

<style lang="scss" scoped>
.chat-template {
  background: #e4f4ff;
  color: #000;
  position: absolute !important;
  width: 100%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 9999 !important;
  .chat-container {
    display: flex;
    flex-direction: row;
    height: 100%;
    .left-emotion-img{
      width: 20%;
      display: flex;
      align-items: center;
      img{
        width: 100%;
      }
    }
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

      .chat-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
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
              background: #ccf0fc;
              &:nth-child(1) {
                // font-weight: 600;
              }
              & > div {
                font-size: 1.25em;
                white-space: pre-line;
              }
              &.model-chat {
                display: flex;
                flex-direction: column;
                gap: 0.8em;
              }
              &.me-chat {
                align-self: flex-end;
                background: #e9e9e9;
                max-width: 75%;
              }

              .read-aloud-btn {
                display: inline-flex;
                align-items: center;
                gap: 0.5em;
                height: 1.75em;
                padding: 2px 12px 2px 8px;
                border: 1px solid var(--black-black40, rgba(114, 114, 114, 1));
                background: rgba(255, 255, 255, 1);
                border-radius: 200px;
                color: rgba(114, 114, 114, 1);
                font-family: "Segoe UI", "Microsoft YaHei", sans-serif;
                font-weight: 600;
                font-size: 1em;
                line-height: 22px;
                cursor: pointer;
                transition: background 0.2s ease, color 0.2s ease,
                  opacity 0.2s ease;
                align-self: flex-start;

                &:hover {
                  background: rgba(255, 255, 255, 0.9);
                  color: rgba(114, 114, 114, 1);
                }

                &.playing {
                  background: rgba(11, 112, 195, 0.12);
                  color: rgba(114, 114, 114, 1);
                }

                img {
                  width: 1.2em;
                  height: 1.2em;
                }

                span {
                  display: inline-block;
                  white-space: nowrap;
                }
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
      width: 16%;
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
            padding-top: 6em;
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

  .compass-img {
    top: 20%;
    height: 60%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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