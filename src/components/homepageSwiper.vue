<template>
  <div>
    <el-dialog
      v-model="dialogTableVisible"
      title=""
      style="width: 65%; max-width: 1200px"
      align-center
    >
      <!-- <div class="homepageSwiper-container"> -->
      <div>
        <!-- <div>
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
        </div> -->
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
                <h3>
                  <SvgIcon
                    class="point-type-icon"
                    name="point-type-icon"
                  ></SvgIcon
                  >{{ item.name }}
                </h3>
                <img
                  :src="getAssetsFile(item.img)"
                  :alt="item.img"
                  width="100%"
                />
                <p>{{ item.detail }}</p>
              </div>

              <!-- <div class="img-box">
                <img src="@/assets/images/SchwartzBasicValues@2x.png" alt="" />
              </div> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- </div> -->
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, defineExpose } from "vue";

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

const getAssetsFile = (url) => {
  return new URL(`../assets/Value_Systems_images/${url}`, import.meta.url).href;
};

const dialogTableVisible = ref(false);
const tabIndex = ref(0);

const introData = ref([
  {
    name: "Schwartz Theory of Basic Values",
    img: "Schwartz_image.png",
    detail:
      "Proposed by psychologist Shalom Schwartz, Schwartz’s theory defines 10 universal human values grounded in the requirements of human existence ( Self-direction, Stimulation, Hedonism, Achievement, Power, Security, Tradition, Conformity, Benevolence, Universalism). This theory reflects basic needs inherent in human individuals and priorities shared across cultures.",
  },
  {
    name: "Moral Foundation Theory",
    img: "MoralFoundationTheory_image.png",
    detail:
      "This theory specifically focuses on morality as a core component of human values, dividing it into five innate foundations:  Care/Harm, Fairness/Cheating, Loyalty/Betrayal, Authority/Subversion, and Sanctity/Degradation. This theory explains how moral diversity varies across contexts.",
  },
  {
    name: "Safety Taxonomy",
    img: "Safety_Taxonomy_image.png",
    detail:
      "Organized via SALAD-Bench (Li et al., 2024), this system classifies AI risks (malicious use, toxicity, bias, privacy violations) into 6 domains and 16 tasks. For instance, a chatbot might unintentionally promote harmful stereotypes (bias) or leak user data (privacy). This value system guides people to build safer AI to eliminate those potential risks.",
  },
  {
    name: "LLMs' Unique Value System",
    img: "LLMs_Unique_Value_System_image.png",
    detail:
      "Proposed by Biedma et al. (2024), this framework prioritizes three AI-centric principles for LLMs: Competence (accuracy), Character (empathy), and Integrity (transparency). —leveraging psychological methods derived from human values and constructed independently. This framework ensures the alignment of LLMs with human principles while maintaining technical proficiency.",
  },
]);

const swiperRef = ref(null);
const onSwiper = (swiper) => {
  console.log(swiper);
  swiperRef.value = swiper;
};

const onSlideChange = () => {
  console.log("slide change");
  console.log(swiperRef.value.activeIndex);
  tabIndex.value = swiperRef.value.activeIndex;
};
const tabClick = (index) => {
  tabIndex.value = index;
  if (swiperRef.value) {
    swiperRef.value.slideTo(index);
  }
};

const showIntro = (index) => {
  tabClick(index);
  dialogTableVisible.value = true;
};

defineExpose({
  showIntro,
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
  padding: 0 4em;
  li {
    cursor: pointer;
    padding-bottom: 0.5em;
    border-bottom: 2px solid transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 2em;
    .point-type-icon {
      font-size: 1.4em;
      margin-right: 0.2em;
    }
    span {
      font-weight: 600;
      color: #727272;
      font-size: 1rem;
    }
    &.on {
      color: #1093ff;
      border-color: #000;
      span {
        color: #000;
      }
    }
  }
}
.swiper {
  margin-top: 1em;
  background: #fff;
}
.swiper-slide {
  .swiper-main {
    color: #000;
    padding: 0 1.2em 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    h3 {
      font-size: 2em;
      font-style: italic;
      font-weight: 400;
      line-height: 150%; /* 48px */
      text-align: center;
      color: #004f8f;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: stretch;
      svg {
        width: 1em;
        height: 1em;
        margin-right: 0.2em;
      }
    }
    img {
      width: 100%;
      margin: 0.875em 0;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.5;
      white-space: pre-wrap;
      line-height: 150%; /* 30px */
      letter-spacing: -0.2px;
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

:deep(.el-dialog) {
  --el-dialog-content-font-size: 1em;
  --el-dialog-border-radius: 0.75em;
  padding: 1em 2em;
  .el-dialog__header {
    padding-bottom: 0;
  }
  .el-dialog__headerbtn {
    width: 1.5em;
    height: 1.5em;
    top: 1em;
    right: 1em;
    z-index: 3;
    &:hover {
      .el-dialog__close {
        color: #909399;
      }
    }
  }
  .el-icon {
    width: 1.5em;
    height: 1.5em;
    svg {
      width: 1.5em;
      height: 1.5em;
    }
  }
}
</style>