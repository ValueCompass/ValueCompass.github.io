<template>
  <div class="header-component">
    <div class="nav main-container">
      <router-link to="/">
        <div class="logo-container">
          <img src="@/assets/images/main-logo.png" alt="Microsoft logo" />
        </div>
      </router-link>
      <ul class="nav-ul">
        <li>
          <router-link to="/">Home</router-link>
          <!-- <a href="">Home</a> -->
        </li>
        <li
          @mouseenter="mouseenter"
          @mouseleave="mouseleave"
          class="has-child-nav"
        >
          <a href="https://valuecompass.github.io/Research/papers/">Research</a>
          <SvgIcon class="down-arrow" name="down-arrow"></SvgIcon>
          <ul class="nav-child-ul">
            <li>
              <a href="https://valuecompass.github.io/Research/papers/"
                >Publication</a
              >
            </li>
            <li>
              <a href="https://valuecompass.github.io/Research/talks">Blog</a>
            </li>
            <li>
              <a href="https://valuecompass.github.io/Research/resources"
                >Related Works</a
              >
            </li>
          </ul>
        </li>
        <li
          @mouseenter="mouseenter"
          @mouseleave="mouseleave"
          :class="{ active: $route.path.indexOf('/leaderboard/') != -1 }"
        >
          <router-link to="/leaderboard/leaderboard">Benchmarks</router-link>
          <!-- <SvgIcon class="down-arrow" name="down-arrow"></SvgIcon>
          <ul class="nav-child-ul">
            <li @click="toggleNav">
              <router-link to="/leaderboard/leaderboard"
                >Alignment Leaderboard</router-link
              >
            </li>
            <li @click="toggleNav">
              <router-link to="/leaderboard/valueAnalysis"
                >Value Analysis</router-link
              >
            </li>
            <li @click="toggleNav">
              <router-link to="/leaderboard/valueComparison"
                >Value Comparison</router-link
              >
            </li>
          </ul> -->
        </li>

        <!-- <li>
          <router-link to="/TestValues">Test Your Values</router-link>
        </li> -->
        <li>
          <router-link to="/AboutUs">About Us</router-link>
        </li>
        <li class="icon-li">
          <a href="mailto:valuecompass@microsoft.com" aria-label="Email">
            <SvgIcon
              class="SvgIcon email-icon"
              name="email-icon"
              @click="copyEmail('valuecompass@microsoft.com')"
            ></SvgIcon>
          </a>
        </li>
        <li class="icon-li">
          <a aria-label="Github"
            target="_blank"
            href="https://github.com/microsoft/ValueCompass.git"
            ><SvgIcon class="SvgIcon github-icon" name="github-icon"></SvgIcon
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from "element-plus";

const mouseenter = (e: any) => {
  console.log("mouseenter");
  e.currentTarget.classList.add("enter-active");
};
const mouseleave = (e: any) => {
  console.log("mouseleave");
  e.currentTarget.classList.remove("enter-active");
};
const copyEmail = (text: string) => {
  copyText(text);
  // ElMessage.success('"mailto: valuecompass@microsoft.com" copied to your clipboard')
  ElMessage({
    message: `"mailto: ${text}" copied to your clipboard`,
    type: "success",
    plain: true,
  });
};
const copyText = (text: string) => {
  var textareaC = document.createElement("textarea");
  textareaC.setAttribute("readonly", "readonly"); //设置只读属性防止手机上弹出软键盘
  textareaC.value = text;
  document.body.appendChild(textareaC); //将textarea添加为body子元素
  textareaC.select();
  var res = document.execCommand("copy");
  document.body.removeChild(textareaC); //移除DOM元素
  return res;
};
// const toggleNav = (e: any) => {
//   console.log(e.currentTarget.parentElement);
//   const liNode = e.currentTarget.parentElement.parentElement;
//   liNode.classList.remove("enter-active");
//   // opacity: 0;
//   //         transform: scaleY(0);
// };
</script>
<style scoped lang="scss">
.header-component {
  background: #f9f9f9;
  padding: 1em 0;
  padding-right: 3.75em;
  font-size: 1em;
  & > .nav {
    a {
      color: #2f2f2f;
    }
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    .logo-container {
      img {
        display: block;
        height: 4.375em;
      }
    }
    ul.nav-ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      & > li {
        &.icon-li {
          padding: 0.5em 0;
          a {
            font-size: 1em;
            padding: 0;
          }
          .SvgIcon {
            width: 1.5em;
            height: 1.5em;
          }
        }

        &:nth-child(1) {
          margin-left: 0;
        }
        &:hover {
          & > a,
          svg {
            color: var(--theme-color);
          }
        }
        &.has-child-nav.enter-active {
          // background: #f5f5f5;
          .nav-child-ul {
            opacity: 1;
            transform: scaleY(1);
          }
        }
        
        margin-left: 2.68em;

        font-weight: 700;
        line-height: 1.68em;
        position: relative;
        // cursor: pointer;
        a {
          color: var(--text-color);
          font-size: 1.125em;
          padding: 0.2em 0.45em;
          line-height: 1.4;
        }
        .router-link-exact-active {
          color: var(--theme-color) !important;
          font-weight: 700;
        }
        &.active {
          & > a,
          svg {
            color: var(--theme-color) !important;
          }
        }
        .down-arrow {
          vertical-align: middle;
          margin-top: -0.4em;
          width: 1.6em;
          height: 1.6em;
          display: inline-block;
        }

        .nav-child-ul {
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
            opacity3s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 0;
          transform: scaleY(0);
          transform-origin: center top;
          width: fit-content;
          white-space: nowrap;
          overflow: hidden;
          position: absolute;
          left: 0em;
          top: 100%;
          z-index: 101;
          color: #666666;
          padding: 1.5em 1em;
          background: #f5f5f5;
          & > li {
            font-weight: 700;
            margin-bottom: 1.5em;
            line-height: 1.2;
            &:last-child {
              margin-bottom: 0;
            }
            a:hover {
              color: var(--theme-color);
            }
          }
        }
      }
    }
  }
  .homepage-a {
    padding-right: 1.3em;
    background: url(@/assets/images/goHomepageIcon.png) no-repeat right 0.1em;
    background-size: 1.2em;
  }
}
</style>
