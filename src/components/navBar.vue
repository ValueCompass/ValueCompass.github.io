<template>
  <div class="header-component main-container">
    <div class="nav">
      <router-link to="/">
        <div class="logo-container">
          <img src="@/assets/images/main-logo.png" alt="Microsoft logo" />
        </div>
      </router-link>
      <ul>
        <li>
          <router-link to="/">Alignment Leaderboard</router-link>
        </li>
        <li>
          <router-link to="/Analysis">Value Analysis</router-link>
        </li>
        <li>
          <router-link to="/Comparison">Value Comparison</router-link>
        </li>
        <li>
          <router-link to="/TestValues">Test Your Values</router-link>
        </li>
        <li>
          <a
            class="homepage-a"
            href="https://valuecompass.github.io/Leaderboard/"
            >Homepage</a
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
    ul {
      display: flex;
      flex-direction: row;
      li {
        margin-left: 3em;
        font-size: 1.25em;
        font-weight: 600;
        line-height: 1.33em;
        text-align: center;
        cursor: pointer;
        a {
          color: var(--text-color);
        }
        .router-link-exact-active {
          color: #1093ff;
          font-weight: 700;
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
