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
            <h2>Leaderboard</h2>
          </div>
          <div class="right">
            <p class="p">
              A <b>comprehensive, self-evolving, and pluralistic</b> evaluation
              platform for LLM values, grounded in basic values and generative,
              evolving assessments.
            </p>
            <p class="p">
              <a href="https://arxiv.org/pdf/2501.07071" target="_blank" class="view-more-btn">
                <span>Read paper</span>
                <SvgIcon class="svg-icon" name="view-more-icon"></SvgIcon>
              </a>
            </p>
            <ul>
              <li>
                <p>4</p>
                <p>basic value systems</p>
              </li>
              <li>
                <p>33</p>
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
                <p>Model Comparison</p>
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
    <div class="learnMore-btn" @click="showIntro(0)" v-drag>
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
  if (isDragging) {
    return;
  }
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
        dom.scrollTop = introContainerHeight + 25;
      }
    }
  });
});

// 自定义指令 v-drag
let isDragging = false;
const vDrag = {
  mounted(el) {
    el.style.position = "absolute";

    el.onmousedown = function (e) {
      console.log("mousedown");
      isDragging = false;
      const disX = e.clientX - el.offsetLeft;
      const disY = e.clientY - el.offsetTop;

      document.onmousemove = function (e) {
        isDragging = true;
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        // 边界检查
        const minLeft = 0;
        const maxLeft = document.body.clientWidth - el.offsetWidth;
        const minTop = 0;
        const maxTop = document.body.clientHeight - el.offsetHeight;

        if (left < minLeft) left = minLeft;
        if (left > maxLeft) left = maxLeft;
        if (top < minTop) top = minTop;
        if (top > maxTop) top = maxTop;

        el.style.left = left + "px";
        el.style.top = top + "px";
      };

      document.onmouseup = function () {
        console.log("mouseup");
        document.onmousemove = null;
        document.onmouseup = null;
        setTimeout(() => {
          isDragging = false;
        }, 0);
      };
    };

    el.onclick = function (e) {
      if (isDragging) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };
  },
};
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
      margin: 1.2em 0;
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
          color: var(--theme-color);
          svg {
            width: 1em;
            height: 1em;
          }
        }
        p:nth-child(2) {
          margin-top: 0.2em;
          text-transform: capitalize;
        }
      }
    }
    .p {
      font-size: 1.25em;
      line-height: 1.8;
    }
  }
  h2 {
    font-size: 4em;
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
  width: 100vw;
  border-bottom: 2px solid var(--theme-color);
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
        color: var(--theme-color);
      }
      &.router-link-active {
        background: var(--theme-color);
        color: #ffffff;
        border-color: var(--theme-color);
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
  position: absolute;
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
  -webkit-user-select: none; /* WebKit内核私有属性 */
  -moz-user-select: none; /* Firefox私有属性 */
  -ms-user-select: none; /* IE私有属性(IE10及以后) */
  user-select: none; /* 标准CSS3属性 */
}

:deep(.el-affix--fixed) {
  z-index: 2001 !important;
}

.view-more-btn{
  margin-top: .6em;
  display: flex;
  align-items: center;
  color: var(--theme-color);
  svg{
    width: 1.2em;
    height: 1.2em;
    margin-left: .2em;
    
  }
}
</style>
