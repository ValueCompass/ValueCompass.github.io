<template>
  <div class="speech-to-text">
    <div class="box">
      <template v-if="!isListening">
        <el-input
          v-model="textareaText"
          style="width: 100%; font-size: 1.25em"
          type="textarea"
          :placeholder="
            lang == 'en-US'
              ? 'Share your thoughts in as much detail as you like.'
              : '请尽可能详细地分享你的想法'
          "
          resize="none"
          :autosize="{ minRows: 1, maxRows: 5 }"
          @keydown.enter.native="handleEnter"
          @input="handleInput"
        />
        <div class="icon-box">
          <el-button :disabled="isListening">
            <svg-icon name="recrod_btn" @click="startRecognition"></svg-icon>
          </el-button>
          <el-button :disabled="!textareaText.trim() || isSendLoading">
            <svg-icon
              class="send_btn"
              name="send_btn"
              :class="!textareaText.trim() || isSendLoading ? 'disabled' : ''"
              @click="sendMessage"
            ></svg-icon>
          </el-button>
        </div>
      </template>

      <template v-else>
        <div class="listening-result-div" v-if="isListening">
          {{ fullText }} ...
        </div>
        <div class="icon-box">
          <el-button :disabled="!isListening">
            <svg-icon name="cancel_btn" @click="cancelRecognition"></svg-icon>
          </el-button>
          <el-button :disabled="!isListening">
            <svg-icon name="confirm_btn" @click="confirmRecognition"></svg-icon>
          </el-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineExpose } from "vue";
import { ElMessage } from "element-plus";

const props = defineProps({
  lang: { type: String, default: "zh-CN" }, //'en-US' "zh-CN"
  isSendLoading: { type: Boolean, default: false }, //
});

const textareaText = ref("");

const isListening = ref(false);
const finalText = ref(""); // 已确认的文本
const interimText = ref(""); // 临时文本
const fullText = ref(""); // 最终 + 临时拼接

let recognition = null;

onMounted(() => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("当前浏览器不支持 Web Speech API，请使用 Chrome / Edge / Safari");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = props.lang || "en-US"; // 'en-US'   // 英文

  console.log("recognition.lang====", recognition.lang);
  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.onstart = () => {
    console.log("recognition start");
    isListening.value = true;
    finalText.value = "";
    interimText.value = "";
    fullText.value = "";

    emit("setEmotionStatus", "cursor");
  };

  recognition.onresult = (event) => {
    let interim = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalText.value += transcript;
      } else {
        interim += transcript;
      }
    }
    interimText.value = interim;
    // 拼接成一段
    fullText.value = finalText.value + interimText.value;
  };

  recognition.onend = () => {
    console.log("recognition end");
    isListening.value = false;
  };

  recognition.onerror = (e) => {
    console.error("语音识别出错：", e);
    isListening.value = false;
    ElMessage.error("语音识别出错");
  };
});

onBeforeUnmount(() => {
  stopRecognition();
});

function startRecognition() {
  if (recognition && !isListening.value) {
    recognition.start();
  }
}

function stopRecognition() {
  if (recognition && isListening.value) {
    recognition.stop();
  }
  isListening.value = false;
}

const cancelRecognition = () => {
  stopRecognition();
};

const confirmRecognition = () => {
  stopRecognition();
  textareaText.value = finalText.value;
};

const handleEnter = (event) => {
  event.preventDefault(); // 阻止换行

  sendMessage();
};

const handleInput = (event) => {
  emit("setEmotionStatus", "cursor");
};

const emit = defineEmits(["sendMessage", "setEmotionStatus"]);
const sendMessage = () => {
  if (!textareaText.value.trim() || props.isSendLoading) {
  } else {
    emit("sendMessage", textareaText.value.trim());
  }
};

const clear = () => {
  textareaText.value = "";
};

defineExpose({
  clear,
});
</script>

<style scoped lang="scss">
.speech-to-text .box {
  width: 100%;
  min-height: 7.75em;
  box-shadow: 0px 0px 12px 0px rgba(133, 200, 255, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-sizing: border-box;
  padding: 0.9em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :deep(.el-textarea__inner) {
    border: 0;
    box-shadow: none;
    padding: 0 0.2em 0 0;
    line-height: 1.2;
    color: #000;
  }

  .icon-box {
    margin-top: 0.1em;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1.5em;
    color: rgba(11, 112, 195, 1);

    .el-button {
      margin: 0;
      padding: 0;
      border: 0;
      color: rgba(11, 112, 195, 1);
      width: 2em;
      height: 2em;
      font-size: 1em;
    }
    svg {
      width: 2em;
      height: 2em;
    }
    .send_btn.disabled {
      color: rgba(194, 194, 194, 1);
    }
  }
  .listening-result-div {
    font-size: 1.25em;
    line-height: 1.2;
  }
}
</style>
