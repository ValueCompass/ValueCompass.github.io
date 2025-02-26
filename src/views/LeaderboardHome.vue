<template>
  <div>
    <div class="affix-container">
      <!-- <div class="main-container intro intro-container">
        <div class="left">
          <h2>Value Compass <br />Leaderboard</h2>
          <p>
            Welcome to a comprehensive LLM value assessment platform,
            distinguished by its interdisciplinary value perspectives and robust
            evaluation framework. <br />With fine-grained value comparisons and
            illustrative examples, this platform empowers you to find the LLM
            that best aligns with your own values.
          </p>
        </div>
        <div class="right">
          <img src="@/assets/images/leaderboard.png" alt="" />
        </div>
      </div> -->
      <div class="main-container">
        <div class="intro intro-container">
        <div class="left">
          <h2>Leaderboard: <br />Evaluating Human Value Alignment in LLMs</h2>
        </div>
        <div class="right">
          <p class="p">
              A holistic, adaptive, and pluralistic evaluation platform for LLM
              values, grounded in basic values and generative, evolving
              assessments.
            </p>
          <ul>
              <li>
                <p>4</p>
                <p>basic value systems</p>
              </li>
              <li>
                <p>25</p>
                <p>Advanced LLMs</p>
              </li>
              <li>
                <p>
                  <SvgIcon
                    class="svg-icon"
                    name="icon-AlignmentLeaderboard"
                  ></SvgIcon>
                </p>
                <p>Results Visualization</p>
              </li>
              <li>
                <p>
                  <SvgIcon
                    class="svg-icon"
                    name="icon-ValueComparison"
                  ></SvgIcon>
                </p>
                <p>Detailed Comparison</p>
              </li>
              <li>
                <p>
                  <SvgIcon class="svg-icon" name="icon-valuesSpace"></SvgIcon>
                </p>
                <p>value space</p>
              </li>
            </ul>
            
          <!-- <p>
            Welcome to a comprehensive LLM value assessment platform,
            distinguished by its interdisciplinary value perspectives and robust
            evaluation framework. <br />With fine-grained value comparisons and
            illustrative examples, this platform empowers you to find the LLM
            that best aligns with your own values.
          </p> -->
        </div>
      </div>
      </div>
      <el-affix
        class="affix-box"
        target=".affix-container"
        :offset="75"
        ref="affixRef"
      >
        <div class="leaderboard-nav-container">
          <ul class="nav-child-ul main-container">
            <li @click="toggleNav">
              <router-link to="/leaderboard/leaderboard">
                <SvgIcon
                  class="svg-icon"
                  name="icon-AlignmentLeaderboard"
                ></SvgIcon
                ><span>Leaderboard</span></router-link
              >
            </li>
            <li @click="toggleNav">
              <router-link to="/leaderboard/valueAnalysis"
                ><SvgIcon class="svg-icon" name="icon-ValueAnalysis"></SvgIcon
                >Analysis</router-link
              >
            </li>
            <li @click="toggleNav">
              <router-link to="/leaderboard/valueComparison"
                ><SvgIcon class="svg-icon" name="icon-ValueComparison"></SvgIcon
                >Comparison</router-link
              >
            </li>
          </ul>
        </div>
      </el-affix>
      <div class="leaderboard-router-view">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component
              :is="Component"
              :key="$route.name"
              v-if="$route.meta.keepAlive"
            />
          </keep-alive>
          <component
            :is="Component"
            :key="$route.name"
            v-if="!$route.meta.keepAlive"
          />
        </router-view>
      </div>
    </div>
    <div class="learnMore-btn" @click="showIntro(0)">
      <span>Learn More About the Value Systems</span>
    </div>

    <homepageSwiper ref="homepageSwiperRef"></homepageSwiper>
  </div>
</template>
<script setup>
import { ref, watch, reactive, nextTick, onActivated } from "vue";
import axios from "axios";
import { getKeyValue, mergeObj, getAvaData } from "../utils/common.js";
import { useRouter } from "vue-router";
import homepageSwiper from "../components/homepageSwiper.vue";

const homepageSwiperRef = ref(null);

const showIntro = (index) => {
  homepageSwiperRef.value.showIntro(index);
};

const affixRef = ref(null);
onActivated(() => {
  nextTick(() => {
    if (affixRef.value) {
      const dom = document.getElementById("content");
      const scrollTop = dom.scrollTop;
      const introContainerHeight =
        document.getElementsByClassName("intro-container")[0].offsetHeight;
      if (dom.scrollTop >= introContainerHeight) {
        dom.scrollTop = introContainerHeight;
      }
    }
  });
});
</script>

<style scoped lang="scss">
// .intro {
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   align-items: center;
//   padding: 0 4em 0 12em;
//   margin-top: -5em;
//   .left {
//     width: 55%;
//     max-width: 784px;
//     padding: 8.125em 0;
//     h2 {
//       font-size: 4em;
//       color: #004f8f;
//       line-height: 1.328;
//       font-weight: 400;
//       font-style: italic;
//     }
//     p {
//       margin-top: 1.5em;
//       font-size: 1.25em;
//       line-height: 1.8;
//     }
//   }
//   .right {
//     flex: 1;
//     padding: 1em 1em;
//     text-align: right;
//     img {
//       width: 92%;
//     }
//   }
// }
.intro {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 3.7em 0;
  width: 90%;
  max-width: 1328px;
  margin: 0 auto;
  .left {
    width: 32em;
  }
  .right {
    flex: 1;
    padding-left: 2em;
    ul {
        padding: 0.75em 0;
        margin: .75em 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        li {
          text-align: center;
          p:nth-child(1) {
            font-weight: 700;
            font-size: 2.5em;
            color: rgba(16, 147, 255, 1);
            svg {
              width: 1em;
              height: 1em;
            }
          }
          p:nth-child(2) {
            margin-top: 0.2em;
          }
        }
      }
      .p {
        font-size: 1.25em;
        line-height: 1.8;
      }
  }
  h2 {
    font-size: 2.25em;
    color: #004f8f;
    line-height: normal;
    font-weight: 400;
    font-style: italic;
  }
  // p {
  //   font-size: 1.25em;
  //   line-height: 1.8;
  // }
}
.leaderboard-nav-container {
  width: 100%;
  border-bottom: 2px solid #1093ff;
  background: #fff;
  padding-top: 2em;
}
.nav-child-ul {
  display: flex;
  flex-direction: row;
  li {
    margin-right: 1px;

    a {
      display: block;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      font-size: 1em;
      line-height: 1.4;
      padding: 1em 3em;
      border-width: 2px 2px 0px 2px;
      border-radius: 1em 1em 0 0;

      border-style: solid;

      border-color: #c2c2c2;
      color: #727272;
      &:hover {
        color: #1093ff;
      }
      &.router-link-active {
        background: #1093ff;
        color: #ffffff;
        border-color: #1093ff;
      }
      .svg-icon {
        margin-right: 0.6em;
        width: 1.25em;
        height: 1.25em;
      }
    }
  }
}
.learnMore-btn {
  background: #f5c344;
  padding: 0.8em;
  position: fixed;
  top: 50%;
  right: 3px;
  width: 5.35em;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  border-radius: 1em 0 0 1em;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 100;
}
</style>
