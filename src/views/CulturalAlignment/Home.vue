<template>
  <div
    class="page cultural-alignment-homme-animation-box"
    :class="{ 'animate-on-load': firstLoad, 'animated-complete': !firstLoad }"
    style="position: relative"
  >
    <div class="cover-container"></div>
    <div style="position: relative">
      <div class="culture-alignment-container main-container">
        <div class="left">
          <h1>As Culture Shifts, So Does AI</h1>
          <p>
            In a globally connected world, AI must navigate the nuances of
            diverse cultural values. Cultural alignment empowers language models
            to adapt their responses with sensitivity and relevance, fostering
            more meaningful and respectful human-AI interactions.
          </p>

          <div>
            <router-link to="/CulturalAlignment/TopicSelection">
              <span class="button github-btn" style="font-size: 1.5em"
                >Get Started <i class="icon"></i
              ></span>
            </router-link>
          </div>
        </div>
        <div class="right" style="position: ">
          <div class="right-content">
            <img
              class="bg"
              src="@/assets//images/culturalBg.png"
              alt=""
              style="z-index: -1"
            />
          </div>
          <div class="country-list">
            <ul>
              <li v-for="(item, index) in allCountryList" :key="index">
                <div
                  class="country-item"
                  :class="
                    'country-' + item.country.toLowerCase().split(' ').join('_')
                  "
                >
                  <span
                    class="dot"
                    :style="{
                      'background-color': getCountryColor(item.country),
                    }"
                  ></span>
                  <span
                    class="country-name"
                    :style="{ color: getCountryColor(item.country) }"
                    >{{ item.country }}</span
                  >
                  <div
                    v-if="item.answer"
                    class="country-answer-box"
                    :style="{ 'border-color': getCountryColor(item.country) }"
                  >
                    <div class="country-img">
                      <!-- <img
                  :src="getAssetsFile(getCountryIconBig(item.country))"
                  alt=""
                /> -->
                      <el-image
                        fit="cover"
                        style=""
                        :src="getAssetsFile(getCountryIconBig(item.country))"
                      ></el-image>
                    </div>
                    <div class="country-text">
                      <span>A:</span>
                      <p :style="{ color: getCountryColor(item.country) }">
                        {{ item.answer }}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="question-box">
            <span>Q:</span>
            <p>
              Is it okay to put my personal happiness above family expectations?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onActivated, nextTick } from "vue";
import {
  countryColors,
  getCountryColor,
  getCountryColorSub,
  getCountryIcon,
  getCountryIconBig,
  setOpacity,
} from "@/utils/culturalAlignmentData.js";
const getAssetsFile = (url) => {
  return new URL(`../../assets/country/${url}`, import.meta.url).href;
};

const allCountryList = ref([]);
allCountryList.value = [
  {
    country: "China",
    answer:
      "Family harmony is most important. Sometimes, personal sacrifice is necessary.",
  },
  {
    country: "japan",
    answer: "Harmony keeps the group strong. Sacrifice preserves respect.",
  },
  {
    country: "Thailand",
  },
  {
    country: "malaysia",
  },
  {
    country: "South Korea",
  },
  {
    country: "Singapore",
    answer:
      "Family and self must stay in balance. Sacrifice may build stronger bonds.",
  },
  // {
  //   country: "indonesia",
  // },
  {
    country: "Australia",
  },
];

const firstLoad = ref(true); // 是否首次播放动画

onMounted(() => {
  // 首次 mounted 后添加动画类
  nextTick(() => {
    firstLoad.value = true;
  });
});

onActivated(() => {
  // keep-alive 页面再次激活时，不播放动画，但保持最终状态
  firstLoad.value = false;
});
</script>

<style scoped lang="scss">
.github-btn {
  display: inline-block;
  position: relative;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // line-height: ;
  .icon {
    margin-left: 0.5em;
    width: 1em;
    height: 1em;
    background: url(@/assets/images/arrow-right.png) no-repeat left center;
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

.culture-alignment-container {
  padding: 2em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    min-height: 45em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 49%;
    text-align: left;
    opacity: 0;
    h1 {
      font-size: 4em;
      font-weight: 400;
      line-height: 1.3;
      color: rgba(0, 79, 143, 1);
      font-style: italic;
    }
    p {
      font-size: 1.25em;
      line-height: 1.8;
      margin: 1em 0 2.4em;
    }
    button {
      background: var(--theme-color);
      padding: 0 1.14em;
      height: 2.28em;
      color: #fff;
      font-size: 1.25em;
      font-weight: bold;
      cursor: pointer;
      margin-top: 3.43em;
      margin-bottom: 2em;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .right {
    position: relative;
    width: 45%;
    // align-self: flex-start;
    margin-top: -6em;
    .right-content {
      padding-top: 100%;
      // background: rgba(0, 0, 0, 0.2);
      position: relative;
      .bg {
        // opacity: 0;
        position: absolute;
        width: 185%;
        // width: 414.286%;
        right: 0;
        top: 50%;
        // transform:  translate(0, -50%);
        transform: translate(-5%, -40%);
      }
    }
    .country-list {
      .country-item {
        & > span {
          position: absolute;
          position: absolute;
          left: 0;
          top: 0;
        }
        span.dot {
          position: absolute;
          width: 2.3%;
          height: 2.3%;
          border-radius: 50%;
          background: #ccc;
          display: inline-block;
          opacity: 0;
        }
        span.country-name {
          opacity: 0;
          font-size: 1.125em;
          font-weight: bold;
          transform: translateX(1.3em);
          text-transform: uppercase;
          // -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
          // text-stroke: 1px rgba(255, 255, 255, 1);
          // font-weight: 900;
        }
        .country-answer-box {
          opacity: 0;
          animation-delay: 8s;
          max-width: 20em;
          width: 45%;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0 0.75em;
          position: absolute;
          // left: 0;
          // top: 0;
          border: 1px solid rgba(128, 0, 0, 1);
          box-shadow: 0px 0px 12px 0px rgba(114, 114, 114, 0.2);
          background: #fff;
          border-radius: 0.25em;
          padding: 0 0.75em;
          z-index: 5;
          .country-img {
            align-self: flex-end;
            position: relative;
            display: flex;
            .el-image {
              width: 4.6875em;
              height: 6.875em;
            }
          }
          .country-text {
            padding: 0.5em 0;
            display: flex;
            flex-direction: row;
            font-weight: 600;
            font-size: 1.125em;
            gap: 0.333em;
            span {
              font-weight: 900;
            }
            p {
              font-style: italic;
              line-height: 1.2;
            }
          }
        }
      }

      .country-china {
        span.dot,
        span.country-name {
          left: 8.8%;
          top: 14.2%;
          animation-delay: 3s;
        }

        .country-answer-box {
          left: 8.8%;
          top: calc(14.2% + 1.5em);
        }
      }

      .country-south_korea {
        span.dot,
        span.country-name {
          left: 52.7%;
          top: 11%;
          animation-delay: 3.5s;
        }
      }
      .country-japan {
        span.dot,
        span.country-name {
          left: 66.2%;
          top: 14.2%;
          animation-delay: 4s;
        }
        .country-answer-box {
          right: 0;
          top: calc(14.2% + 1.5em);
        }
      }
      .country-thailand {
        span.dot,
        span.country-name {
          left: 11.8%;
          top: 46%;
        }
      }
      .country-malaysia {
        span.dot,
        span.country-name {
          left: 11.8%;
          top: 61.8%;
        }
      }
      .country-singapore {
        span.dot,
        span.country-name {
          left: 15%;
          top: 67.5%;
        }
        .country-answer-box {
          left: 15%;
          top: calc(67.5% + 1.3em);
        }
      }

      .country-indonesia {
        span.dot,
        span.country-name {
          left: 34%;
          top: 70.5%;
        }
      }

      .country-australia {
        span.dot,
        span.country-name {
          left: 52.9%;
          top: 92.8%;
        }
      }
    }

    .question-box {
      opacity: 0;
      background: rgba(204, 240, 252, 1);
      box-shadow: 0px 0px 12px 0px rgba(133, 200, 255, 0.4);
      border-radius: 0.375em;
      font-size: 1.125em;
      width: 20em;
      padding: 0.75em;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      gap: 0.75em;
      position: absolute;
      left: 35%;
      top: 45%;

      span,
      p {
        font-size: 1.125em;
      }
      span {
        font-weight: 900;
      }
      p {
        font-weight: 600;
        line-height: 1.2;
      }
    }
  }
}

.cover-container {
  opacity: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.4) 26.74%,
    rgba(255, 255, 255, 0.9) 54.69%
  );
}

@keyframes fadeInUp {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes zoomIn {
  from {
    width: 185%;
    transform: translate(-5%, -40%);
  }
  to {
    //  width: 185%;
    width: 414.286%;

    transform: translate(0, -50%);
  }
}

.animate-on-load {
  .culture-alignment-container {
    .left {
      animation: fadeInUp 0.6s forwards;
      animation-delay: 2s;
    }
    .right {
      .right-content {
        .bg {
          animation: zoomIn 1s forwards;
          animation-delay: 1s;
        }
      }
      .country-list {
        span.dot {
          animation: fadeInUp 0.6s forwards;
        }
        span.country-name {
          animation: fadeInUp 0.6s forwards;
        }
        .country-answer-box {
          animation: fadeInUp 0.6s forwards;
          animation-delay: 8s;
        }
      }

      .country-china {
        span.dot,
        span.country-name {
          animation-delay: 3s;
        }
      }

      .country-south_korea {
        span.dot,
        span.country-name {
          animation-delay: 3.5s;
        }
      }
      .country-japan {
        span.dot,
        span.country-name {
          animation-delay: 4s;
        }
      }
      .country-thailand {
        span.dot,
        span.country-name {
          animation-delay: 4.5s;
        }
      }
      .country-malaysia {
        span.dot,
        span.country-name {
          animation-delay: 5s;
        }
      }

      .country-singapore {
        span.dot,
        span.country-name {
          animation-delay: 5.5s;
        }
      }

      .country-indonesia {
        span.dot,
        span.country-name {
          animation-delay: 6s;
        }
      }

      .country-australia {
        span.dot,
        span.country-name {
          animation-delay: 6.5s;
        }
      }
    }

    .question-box {
      animation: fadeInUp 0.6s forwards;
      animation-delay: 7s;
    }
  }
  .cover-container {
    animation: fadeInUp 1s forwards;
  }
}

.animated-complete {
  .culture-alignment-container {
    .left {
      opacity: 1;
    }
    .right {
      .right-content {
        .bg {
          width: 414.286%;
          transform: translate(0, -50%);
        }
      }
      .country-list {
        span.dot {
          opacity: 1;
        }
        span.country-name {
          opacity: 1;
        }
        .country-answer-box {
          opacity: 1;
        }
      }
    }
    .question-box {
    }
  }

  .cover-container {
    opacity: 1;
  }
}
</style>
