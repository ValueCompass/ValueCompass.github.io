<template>
  <el-dialog
    v-model="dialogTableVisible"
    title=""
    style="width: 90%; max-width: 1200px"
    align-center
  >
    <!-- <div class="homepageSwiper-container"> -->
    <div>
      <div>
        <ul class="tabs-ul">
          <li
            :class="tabIndex == index ? 'on' : ''"
            v-for="(item, index) in introData"
            :key="index"
            @click="tabClick(index)"
          >
            <SvgIcon class="point-type-icon" name="point-type-icon"></SvgIcon>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <swiper
        class="swiper"
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="modules"
        :navigation="true"
        :pagination="{ clickable: true }"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in introData"
          :key="item.name + index"
        >
          <div class="swiper-main">
            <div>
              <h3>{{ item.name }}</h3>
              <p>{{ item.detail }}</p>
            </div>

            <div class="img-box">
              <img src="@/assets/images/SchwartzBasicValues@2x.png" alt="" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- </div> -->
  </el-dialog>
</template>
<script setup>
import { ref,defineExpose } from "vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper core and required modules
import { Pagination, Navigation, A11y, Autoplay } from "swiper/modules";
const modules = [Pagination, Navigation, A11y, Autoplay];

// Import Swiper Vue.js components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

const dialogTableVisible = ref(false);
const tabIndex = ref(0);

const introData = ref([
  {
    name: "Schwartz’s Value Theory",
    detail: `Schwartz’s Value Theory, proposed by psychologist Shalom Schwartz, provides a framework to describe and analyze basic human values. The theory suggests that values are universal beliefs that guide individual and societal behavior, reflecting personal and cultural differences through their varying priorities.\n\n Schwartz categorizes values into ten core types: Power (status and control), Achievement (success and competence), Hedonism (pleasure and enjoyment), Stimulation (adventure and novelty), Self-Direction (independence and creativity), Universalism (tolerance and protecting nature and humanity), Benevolence (caring for and helping others), Tradition (respecting cultural and religious practices), Conformity (adhering to rules and discipline), and Security (stability and safety). These values are organized in a circular structure that reflects their dynamic relationships. Adjacent values are more compatible, while opposing values (e.g., Stimulation and Security) often conflict.`,
  },
  {
    name: "Moral Foundation Theory",
    detail: `Schwartz’s Value Theory, proposed by psychologist Shalom Schwartz, provides a framework to describe and analyze basic human values. The theory suggests that values are universal beliefs that guide individual and societal behavior, reflecting personal and cultural differences through their varying priorities.\n\n Schwartz categorizes values into ten core types: Power (status and control), Achievement (success and competence), Hedonism (pleasure and enjoyment), Stimulation (adventure and novelty), Self-Direction (independence and creativity), Universalism (tolerance and protecting nature and humanity), Benevolence (caring for and helping others), Tradition (respecting cultural and religious practices), Conformity (adhering to rules and discipline), and Security (stability and safety). These values are organized in a circular structure that reflects their dynamic relationships. Adjacent values are more compatible, while opposing values (e.g., Stimulation and Security) often conflict.`,
  },
  {
    name: "Diverse Safety Risks",
    detail: `Schwartz’s Value Theory, proposed by psychologist Shalom Schwartz, provides a framework to describe and analyze basic human values. The theory suggests that values are universal beliefs that guide individual and societal behavior, reflecting personal and cultural differences through their varying priorities.\n\n Schwartz categorizes values into ten core types: Power (status and control), Achievement (success and competence), Hedonism (pleasure and enjoyment), Stimulation (adventure and novelty), Self-Direction (independence and creativity), Universalism (tolerance and protecting nature and humanity), Benevolence (caring for and helping others), Tradition (respecting cultural and religious practices), Conformity (adhering to rules and discipline), and Security (stability and safety). These values are organized in a circular structure that reflects their dynamic relationships. Adjacent values are more compatible, while opposing values (e.g., Stimulation and Security) often conflict.`,
  },
  {
    name: "LLMs’ Unique Values",
    detail: `Schwartz’s Value Theory, proposed by psychologist Shalom Schwartz, provides a framework to describe and analyze basic human values. The theory suggests that values are universal beliefs that guide individual and societal behavior, reflecting personal and cultural differences through their varying priorities.\n\n Schwartz categorizes values into ten core types: Power (status and control), Achievement (success and competence), Hedonism (pleasure and enjoyment), Stimulation (adventure and novelty), Self-Direction (independence and creativity), Universalism (tolerance and protecting nature and humanity), Benevolence (caring for and helping others), Tradition (respecting cultural and religious practices), Conformity (adhering to rules and discipline), and Security (stability and safety). These values are organized in a circular structure that reflects their dynamic relationships. Adjacent values are more compatible, while opposing values (e.g., Stimulation and Security) often conflict.`,
  },
]);

const swiperRef = ref(null);
const onSwiper = (swiper) => {
  console.log(swiper);
  swiperRef.value = swiper;
};

const onSlideChange = () => {
  console.log("slide change");
  console.log(swiperRef.value.activeIndex)
  tabIndex.value = swiperRef.value.activeIndex;
};
const tabClick = (index) => {
  tabIndex.value = index;
  if (swiperRef.value) {
    swiperRef.value.slideTo(index);
  }
};

const showIntro = (index) =>{
  tabClick(index)
  dialogTableVisible.value = true

}

defineExpose({
  showIntro
});
</script>

<style scoped lang="scss">
.homepageSwiper-container {
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  z-index: 10001;
}
.tabs-ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0 4em;
  li {
    cursor: pointer;
    padding-bottom: 0.5em;
    border-bottom: 2px solid transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 2em;
    span {
      font-weight: 600;
      color: #727272;
      font-size: 1rem;
    }
    &.on {
      border-color: #000;
      span {
        color: #000;
      }
    }
  }
}
.swiper {
  background: #fff;
}
.swiper-slide {
  .swiper-main {
    color: #000;
    padding: 2em 4em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    h3 {
      margin:.2em 0 .3em;
      font-style: italic;
      font-size: 2.5rem;
      font-weight: 400;
      line-height: 1.5;
      font-family: "Times New Roman";
    }
    p {
      font-size: 1.25rem;
      line-height: 1.5;
      white-space: pre-wrap;
    }
    & > div:nth-child(1) {
      padding-right: 1em;
      width: 70%;
    }
    .img-box {
      flex: 1;
      img {
        width: 100%;
      }
    }
  }
}
:deep(.swiper-pagination-bullet) {
  width: 1em;
  height: 3px;
  background-color: var(--text-color);
  opacity: 0.3;
  border-radius: 1px;
}
:deep(.swiper-pagination-bullet-active) {
  width: 1.25em;
  opacity: 1;
}
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 22px;
  height: 25px;
  color: var(--text-color);
}
:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after) {
  font-size: 1em;
}
:deep(.highlight i) {
  color: rgba(0, 79, 143, 1);
  font-weight: 500;
  line-height: 1.8em;
}
</style>