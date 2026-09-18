<template>
  <div class="header-component">
    <div class="nav main-container">
      <router-link to="/">
        <div class="logo-container">
          <img src="@/assets/images/main-logo.png" alt="Value Compass logo" />
        </div>
      </router-link>
      <button
        class="mobile-nav-toggle"
        type="button"
        aria-controls="primary-navigation"
        :aria-expanded="isMobileNavOpen"
        aria-label="Toggle navigation"
        @click="isMobileNavOpen = !isMobileNavOpen"
      >
        <span class="mobile-nav-toggle__icon" aria-hidden="true"></span>
        <span class="mobile-nav-toggle__label">Menu</span>
      </button>
      <ul
        id="primary-navigation"
        class="nav-ul"
        :class="{ 'mobile-open': isMobileNavOpen }"
        @click="closeMobileNav"
      >
        <li>
          <router-link to="/">Home</router-link>
          <!-- <a href="">Home</a> -->
        </li>
        <li
          ref="researchMenuRef"
          class="has-child-nav"
          :class="{ 'enter-active': isResearchMenuOpen }"
          @mouseenter="openResearchMenu"
          @mouseleave="closeResearchMenu"
          @focusin="openResearchMenu"
          @focusout="handleResearchFocusout"
          @keydown="handleResearchKeydown"
        >
          <a
            ref="researchTriggerRef"
            href="https://valuecompass.github.io/Research/papers/"
            aria-haspopup="true"
            :aria-expanded="isResearchMenuOpen"
          >
            Research
          </a>
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
        <li>
          <a href="https://microsoft.github.io/ValueChallenge/" target="_blank">
              <span class="join-now-btn">
                <span>Global Value Challenge</span>
                <SvgIcon class="svg-icon" name="view-more-icon"></SvgIcon>
              </span>
            </a>
        </li>
        <li
          @mouseenter="mouseenter"
          @mouseleave="mouseleave"
          :class="{ active: $route.path.indexOf('/benchmarks/') != -1 }"
        >
          <router-link to="/benchmarks/benchmarks">Benchmarks</router-link>
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

        

        <!-- <li
          :class="{ active: $route.path.indexOf('/CulturalAlignment/') != -1 }"
        >
          <router-link to="/CulturalAlignment">Cultural Alignment</router-link>
        </li>

        <li v-if="showTestYourValues">
          <router-link to="/TestValues">Test Your Values</router-link>
        </li> -->
        
        <li>
          <router-link to="/AboutUs">About Us</router-link>
        </li>
        <li class="icon-li">
          <a
            href="mailto:valuecompass@microsoft.com"
            aria-label="Email"
            @click.prevent="copyEmail('valuecompass@microsoft.com')"
          >
            <SvgIcon
              class="SvgIcon email-icon"
              name="email-icon"
              aria-hidden="true"
            ></SvgIcon>
          </a>
        </li>
        <li class="icon-li">
          <a
            aria-label="Github"
            target="_blank"
            href="https://github.com/microsoft/ValueCompass.git"
            ><SvgIcon class="SvgIcon github-icon" name="github-icon"></SvgIcon
          ></a>
        </li>
      </ul>
      <p
        class="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {{ emailCopyStatus }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { getGeoStatus } from "../service/api";

const showTestYourValues = ref(false);
const isMobileNavOpen = ref(false);
const isResearchMenuOpen = ref(false);
const researchMenuRef = ref<HTMLElement | null>(null);
const researchTriggerRef = ref<HTMLElement | null>(null);
const emailCopyStatus = ref("");
let emailCopyStatusTimer: number | undefined;
let emailClientTimer: number | undefined;

onBeforeUnmount(() => {
  window.clearTimeout(emailCopyStatusTimer);
  window.clearTimeout(emailClientTimer);
});

onMounted(async () => {
  try {
    const res = await getGeoStatus();
    console.log("geo status", res);
    showTestYourValues.value = res?.data?.blocked === false;
  } catch (err: any) {
    showTestYourValues.value = false;
  }
  console.log("showTestYourValues", showTestYourValues.value);
});

const mouseenter = (e: any) => {
  console.log("mouseenter");
  e.currentTarget.classList.add("enter-active");
};
const mouseleave = (e: any) => {
  console.log("mouseleave");
  e.currentTarget.classList.remove("enter-active");
};
const openResearchMenu = () => {
  isResearchMenuOpen.value = true;
};
const closeResearchMenu = () => {
  isResearchMenuOpen.value = false;
};
const closeMobileNav = (event: MouseEvent) => {
  if ((event.target as HTMLElement).closest("a")) {
    isMobileNavOpen.value = false;
  }
};
const getResearchMenuLinks = () => {
  return Array.from(
    researchMenuRef.value?.querySelectorAll(".nav-child-ul a") ?? []
  ) as HTMLElement[];
};
const handleResearchFocusout = (event: FocusEvent) => {
  const nextTarget = event.relatedTarget;

  if (
    nextTarget instanceof Node &&
    researchMenuRef.value?.contains(nextTarget)
  ) {
    return;
  }

  closeResearchMenu();
};
const handleResearchKeydown = (event: KeyboardEvent) => {
  const menuLinks = getResearchMenuLinks();
  const activeElement = document.activeElement as HTMLElement | null;
  const currentLinkIndex = menuLinks.findIndex((link) => link === activeElement);

  if (event.key === "ArrowDown") {
    event.preventDefault();
    openResearchMenu();

    if (currentLinkIndex >= 0) {
      menuLinks[(currentLinkIndex + 1) % menuLinks.length]?.focus();
      return;
    }

    menuLinks[0]?.focus();
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    openResearchMenu();

    if (currentLinkIndex >= 0) {
      menuLinks[
        (currentLinkIndex - 1 + menuLinks.length) % menuLinks.length
      ]?.focus();
      return;
    }

    menuLinks[menuLinks.length - 1]?.focus();
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeResearchMenu();
    researchTriggerRef.value?.focus();
  }
};
const copyEmail = async (text: string) => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else if (!copyText(text)) {
      throw new Error("Clipboard copy failed");
    }
  } catch {
    if (!copyText(text)) {
      ElMessage.error("Unable to copy email");
      return;
    }
  }

  emailCopyStatus.value = "";
  window.clearTimeout(emailCopyStatusTimer);
  window.clearTimeout(emailClientTimer);
  await nextTick();
  emailCopyStatusTimer = window.setTimeout(() => {
    emailCopyStatus.value = "Copied email";
    emailClientTimer = window.setTimeout(() => {
      window.location.href = `mailto:${text}`;
    }, 1000);
  }, 100);
  ElMessage({
    message: "Copied email",
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
  font-size: 1em;
  height: 6.375em;
  box-sizing: border-box;
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

        margin-left: 2em;

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

        .join-now-btn{
          display: flex;
          gap: 0.1em;
          svg{
            width: 1.2em;
            height: 1.2em;
            transform: translateY(6%) rotate(-45deg);
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
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}

.mobile-nav-toggle {
  display: none;
}

@media (max-width: 767px) {
  .header-component {
    height: auto;
    padding: 0.75em 0;

    & > .nav {
      flex-wrap: wrap;

      .logo-container img {
        width: auto;
        max-width: 11em;
        height: 3.25em;
      }

      ul.nav-ul {
        display: none;
        width: 100%;
        padding-top: 0.75em;
        flex-direction: column;
        align-items: stretch;

        &.mobile-open {
          display: flex;
        }

        & > li {
          width: 100%;
          margin-left: 0;
          border-top: 1px solid var(--border-color);

          & > a {
            display: inline-flex;
            max-width: 100%;
            padding: 0.75em 0;
            overflow-wrap: anywhere;
          }

          &.icon-li {
            padding: 0.75em 0;
          }

          .nav-child-ul {
            right: 0;
            left: auto;
            max-width: 100%;
          }
        }
      }
    }
  }

  .mobile-nav-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-width: 44px;
    height: 44px;
    padding: 10px;
    color: var(--text-color);
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 6px;
  }

  .mobile-nav-toggle__icon,
  .mobile-nav-toggle__icon::before,
  .mobile-nav-toggle__icon::after {
    display: block;
    width: 22px;
    height: 2px;
    content: "";
    background: currentColor;
  }

  .mobile-nav-toggle__icon {
    position: relative;
  }

  .mobile-nav-toggle__icon::before,
  .mobile-nav-toggle__icon::after {
    position: absolute;
    left: 0;
  }

  .mobile-nav-toggle__icon::before {
    top: -7px;
  }

  .mobile-nav-toggle__icon::after {
    top: 7px;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .header-component > .nav {
    .mobile-nav-toggle {
      display: none;
    }

    ul.nav-ul {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      gap: 0.25em 1em;

      > li {
        flex: 0 0 auto;
        width: auto;
        display: flex;
        align-items: center;
        border-top: 0;

        > a {
          width: auto;
          padding: 0.6em 0.35em;
          white-space: normal;
        }
      }
    }
  }
}

@media (forced-colors: active) {
  .header-component .icon-li a {
    color: LinkText !important;
    forced-color-adjust: auto;
  }

  .header-component .icon-li a:focus-visible {
    outline: 2px solid Highlight;
    outline-offset: 3px;
  }
}
</style>
