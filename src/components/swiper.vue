<template>
  <swiper
    :modules="modules"
    :navigation="true"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    
  >
    <swiper-slide
      class="swiper-slide"
      v-for="(item, index) in caseData"
      :key="item.model + index"
    >
      <div class="swiper-main swiper-no-swiping" tabindex=0>
        <p class="title">
          <span>{{ "Case" + (index + 1) }} Score：</span>{{ item.score.toFixed(4) }} &nbsp;(<text style="text-transform: capitalize;">{{ item.label }}</text> Score)
        </p>
        <!-- <p class="title">{{ "Case" + (index + 1) + " - " }}<i style="font-style: normal;">{{ item.label }}</i> Score</p> -->
        <div class="chart-content-desc">
          <!-- <img src="@/assets/images/Avatar-Q.png" alt="Q" /> -->
          <span class="span">Q</span>
          <p>
            {{ item.prompt }}
          </p>
        </div>
        <div class="chart-content-desc">
          <!-- <img src="@/assets/images/Avatar-A.png" alt="A" /> -->
          <span class="span">A</span>
          <p class="highlight" v-html="item.highlight"></p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { ref, watch } from "vue";
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
          swiperRef.value.slideTo(0);
        }
        console.log(caseData.value);
      }
    );
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation, A11y, Autoplay],
      caseData,
    };
  },
};
</script>
<style scoped lang="scss">
.swiper-slide {
  width: 100%;
  padding-bottom: 3.25em;
  box-sizing: border-box;
  padding: 2.5em 0 2.5em 0;
  .swiper-main {
    padding: 0 4em;
    height: 19em;
    overflow: auto;
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
    margin-top: 1.625em;
    img,
    .span {
      display: inline-block;
      width: 1.875em;
      height: 1.875em;
      line-height: 1.875em;
      margin-right: 1.625em;
      background: rgba(194, 194, 194, 1);
      font-weight: bold;
      text-align: center;
    }
    p {
      flex: 1;
      overflow: hidden;
      font-size: 1.125em;
      line-height: 1.8em;
      white-space: pre-wrap;
    }
  }
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
  line-height: 1.8em;
}


</style>
