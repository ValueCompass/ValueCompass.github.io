<template>
  <swiper
    :modules="modules"
    :navigation="true"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    :loop="true"
    style="height: 100%; padding-bottom: 1.7em; box-sizing: border-box"
  >
    <swiper-slide
      class="swiper-slide"
      v-for="(item, index) in caseData"
      :key="item.model + index"
    >
      <div class="swiper-main swiper-no-swiping" tabindex="0">
        <svgIcon
          class="copy-icon"
          name="copy-icon"
          @click="copyCase($event)"
        ></svgIcon>
        <p class="title">
          <span>{{ "Case" + (index + 1) }} Score：</span
          >{{ item.score.toFixed(4) }} &nbsp;(<text
            style="text-transform: capitalize"
            >{{ item.label }}</text
          >
          Score)
        </p>
        <!-- <p class="title">{{ "Case" + (index + 1) + " - " }}<i style="font-style: normal;">{{ item.label }}</i> Score</p> -->
        <div class="chart-content-desc q-des">
          <!-- <img src="@/assets/images/Avatar-Q.png" alt="Q" /> -->
          <span class="span">Q:</span>
          <p>
            {{ item.prompt }}
          </p>
        </div>
        <div class="chart-content-desc a-des">
          <!-- <img src="@/assets/images/Avatar-A.png" alt="A" /> -->
          <span class="span">A:</span>
          <p class="highlight" v-html="item.highlight"></p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { ElMessage } from "element-plus";

import { ref, watch, nextTick } from "vue";
// import Swiper core and required modules
import { Pagination, Navigation, A11y, Autoplay } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log("接收到的消息:", this.data); // 打印接收到的消息
  },
  setup(props) {
    const swiperRef = ref(null);
    const onSwiper = (swiper) => {
      console.log(swiper);
      swiperRef.value = swiper;
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const caseData = ref(props.data);
    watch(
      () => props.data,
      (newMessage, oldMessage) => {
        caseData.value = newMessage;
        if (swiperRef.value) {
          nextTick(() => {
            // swiperRef.value.slideTo(0);
            const swiperInstance = swiperRef.value;
            // 禁用loop临时
            swiperInstance.loopDestroy();

            // 跳到第一个幻灯片
            swiperInstance.slideTo(0, 0);

            // 启用loop模式
            swiperInstance.loopCreate();
          });
        }
        console.log(caseData.value);
      }
    );

    const copyCase = (event) => {
      // 获取当前点击的按钮所在的li元素
      const liElement = event.target.closest(".swiper-main");

      // 获取li中的目标div元素（兄弟元素）
      const targetDiv = liElement.querySelector(".q-des");
      const targetDiv2 = liElement.querySelector(".a-des");

      // 创建一个临时的容器元素
      const range = document.createRange();
      const selection = window.getSelection();

      // 创建一个临时div，将目标div的HTML内容放入其中
      const tempDiv = document.createElement("div");
      tempDiv.style.position = "absolute"; // 防止影响布局
      tempDiv.style.opacity = "0"; // 不显示内容
      tempDiv.innerHTML = targetDiv.outerHTML + targetDiv2.outerHTML; // 保留div的HTML内容
      document.body.appendChild(tempDiv);

      // 选择临时div中的内容
      range.selectNodeContents(tempDiv);
      selection.removeAllRanges();
      selection.addRange(range);

      // 复制内容
      try {
        document.execCommand("copy");
        ElMessage.warning("文本已复制！");
      } catch (err) {
        ElMessage.warning("复制失败");
      }

      // 清除选区并移除临时容器
      selection.removeAllRanges();
      document.body.removeChild(tempDiv);
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation, A11y, Autoplay],
      caseData,
      copyCase,
    };
  },
};
</script>
<style scoped lang="scss">
.swiper-slide {
  width: 100%;
  // padding-bottom: 3.25em;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  .swiper-main {
    padding: 0 2.5em;
    // height: 19em;
    overflow: auto;
    position: relative;
    .copy-icon {
      color: #666;
      width: 1.5em;
      height: 1.5em;
      position: absolute;
      right: 2.3em;
      top: 0.5em;
      &:active {
        opacity: 0.8;
      }
    }
  }
  .title {
    font-weight: bold;
    font-size: 1.25em;
    line-height: 2em;
    span {
      color: #0b70c3;
    }
  }
  .chart-content-desc {
    display: flex;
    margin-top: 0.5em;
    img,
    .span {
      display: inline-block;
      width: 1.875em;
      height: 1.875em;
      line-height: 1.875em;
      margin-right: 0.2em;
      // background: rgba(194, 194, 194, 1);
      font-weight: bold;
      text-align: center;
    }
    p {
      flex: 1;
      overflow: hidden;
      font-size: 1.125em;
      line-height: 1.333;
      white-space: pre-wrap;
    }
  }
}
:deep(.swiper) {
}
:deep(.swiper-pagination-bullet) {
  width: 1.25em;
  height: 4px;
  background-color: var(--text-color);
  opacity: 0.3;
  border-radius: 1px;
}
:deep(.swiper-pagination-bullet-active) {
  width: 1.5em;
  opacity: 1;
}
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 5em;
  height: 5em;
  color: var(--text-color);
}
:deep(.swiper-button-prev) {
  left: -1em;
}
:deep(.swiper-button-next) {
  right: -1em;
}
:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after) {
  font-size: 1.5em;
}
:deep(.highlight i) {
  color: rgba(0, 79, 143, 1);
  font-weight: 500;
  // line-height: 1.8em;
}
</style>
