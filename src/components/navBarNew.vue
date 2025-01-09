<template>
  <div class="header-component main-container">
    <div class="nav">
      <router-link to="/">
        <div class="logo-container">
          <img src="@/assets/images/main-logo.png" alt="Microsoft logo" />
        </div>
      </router-link>
      <ul class="nav-ul">
        <li>
          <!-- <router-link to="/">Home</router-link> -->
          <a href="">Home</a>
        </li>
        <li class="has-child-nav">
          <a href="https://valuecompass.github.io/papers">Resources</a>
          <SvgIcon class="down-arrow" name="down-arrow"></SvgIcon>
          <ul class="nav-child-ul">
            <li>
              <a href="https://valuecompass.github.io/papers/">Papers</a>
            </li>
            <li>
              <a href="https://valuecompass.github.io/talks">Talks</a>
            </li>
            <li>
              <a href="https://valuecompass.github.io/resources">Documents</a>
            </li>
          </ul>
        </li>
        <li class="has-child-nav">
          <a href="">Leaderboard</a>
          <SvgIcon class="down-arrow" name="down-arrow"></SvgIcon>
          <ul class="nav-child-ul">
            <li>
              <router-link to="/">Alignment Leaderboard</router-link>
            </li>
            <li>
              <router-link to="/Analysis">Value Analysis</router-link>
            </li>
            <li>
              <router-link to="/Comparison">Value Comparison</router-link>
            </li>
          </ul>
        </li>

        <li>
          <router-link to="/TestValues">Test Your Values</router-link>
        </li>
        <li>
          <a href="https://valuecompass.github.io/Leaderboard/team_info"
            >About Us</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  components: {},
  setup() {},
};
</script>
<style scoped lang="scss">
.header-component {
  padding: 1.875em 0 1.875em;
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
        display: inline-block;
        height: 4.375em;
      }
    }
    ul.nav-ul {
      display: flex;
      flex-direction: row;
      & > li {
        &:nth-child(1) {
          margin-left: 0;
        }
        &:hover {
          & > a,
          svg {
            color: #ffd000;
          }
        }
        &.has-child-nav:hover {
          background: #f5f5f5;
          .nav-child-ul {
            opacity: 1;
            transform: scaleY(1);
          }
        }
        padding: 1.37em 0.75em;
        margin-left: 3.75em;

        font-weight: 700;
        line-height: 1.68em;
        position: relative;
        cursor: pointer;
        a {
          color: var(--text-color);
          font-size: 1.25em;
        }
        .router-link-exact-active {
          color: #1093ff !important;
          font-weight: 700;
        }
        .down-arrow {
          vertical-align: middle;
          margin-left: 0.4em;
          margin-top: -0.4em;
          width: 1.6em;
          height: 1.6em;
          display: inline-block;
        }

        .nav-child-ul {
          transition: all 0.2s;
          opacity: 0;
          transform: scaleY(0);
          transform-origin: center top;
          width: fit-content;
          white-space: nowrap;
          overflow: hidden;
          position: absolute;
          left: 0em;
          top: 100%;
          z-index: 3;
          color: #666666;
          padding: 1.5em 3em;
          background: #f5f5f5;
          & > li {
            font-weight: 700;
            margin-bottom: 1.5em;
            line-height: 1.2;
            padding: 0 0.75em;
            &:last-child {
              margin-bottom: 0;
            }
            &:hover {
              & > a {
                color: #ffd000;
              }
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
