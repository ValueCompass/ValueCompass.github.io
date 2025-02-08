<template>
  <div>
    <div class="affix-container">
      <div class="main-container intro">
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
      </div>
      <el-affix target=".affix-container" :offset="65" ref="affixRef">
        <div class="nav-container">
          <ul class="nav-child-ul main-container">
            <li @click="toggleNav">
              <router-link to="/leaderboard/leaderboard">
                <SvgIcon
                  class="svg-icon"
                  name="icon-AlignmentLeaderboard"
                ></SvgIcon
                ><span>Alignment Leaderboard</span></router-link
              >
            </li>
            <li @click="toggleNav">
              <router-link to="/leaderboard/valueAnalysis"
                ><SvgIcon
                  class="svg-icon"
                  name="icon-ValueAnalysis"
                  color="red"
                ></SvgIcon
                >Value Analysis</router-link
              >
            </li>
            <li @click="toggleNav">
              <router-link to="/leaderboard/valueComparison"
                ><SvgIcon
                  class="svg-icon"
                  name="icon-ValueComparison"
                  color="red"
                ></SvgIcon
                >Value Comparison</router-link
              >
            </li>
          </ul>
        </div>
      </el-affix>
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
      // 进行必要的 DOM 操作或更新位置
      // affixRef.value.$forceUpdate(); // 强制更新
      setTimeout(() => {
        console.log("dddddsss");
        affixRef.value.updateRoot();
      }, 1000);
    }
  });
  // setTimeout(()=>{
  //   affixRef.value.update()
  //   // console.log(document.getElementsByClassName("app-container")[0])
  //   // const dom = document.getElementsByClassName("app-container")[0]
  //   // let scrolltop = dom.scrollTop
  //   // dom.scrollTo({'top':1+scrolltop})
  // },10)
});
</script>

<style scoped lang="scss">
.intro {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 4em 0 12em;
  margin-top: -5em;
  .left {
    width: 55%;
    max-width: 784px;
    padding: 8.125em 0;
    h2 {
      font-size: 4em;
      color: #004f8f;
      line-height: 1.328;
      font-weight: 400;
    }
    p {
      margin-top: 1.5em;
      font-size: 1.25em;
      line-height: 1.8;
    }
  }
  .right {
    flex: 1;
    padding: 1em 1em;
    text-align: right;
    img {
      width: 92%;
    }
  }
}
.nav-container {
  width: 100vw;
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
        color: #f5c344;
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
.learnMore-btn{
  background: #F5C344;
  padding: .8em;
  position: fixed;
  top:50%;
  right:3px;
  width: 5.35em;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  border-radius: 1em 0 0 1em;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 100
}
</style>
