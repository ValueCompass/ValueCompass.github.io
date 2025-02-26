<template>
  <div class="home" style="padding: 0">
    <introComponent></introComponent>
    <!-- <modulesComponent></modulesComponent>
    <postsComponent></postsComponent> -->

    <div class="box">
      <div class="leaderboard flex main-container">
        <div class="left">
          <div>
            <router-link to="/leaderboard/leaderboard">
              <img src="@/assets/images/leaderboard-image.png" alt="" />
              <div class="cover"></div>
            </router-link>
          </div>
        </div>
        <div class="right card">
          <div class="title">
            <img src="@/assets/images/home-icon-leaderboard.png" alt="" />
            <h4>Leaderboard</h4>
          </div>
          <div>
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
            <p class="p">
              A holistic, adaptive, and pluralistic evaluation platform for LLM
              values, grounded in basic values and generative, evolving
              assessments.
            </p>
            <div>
              <router-link to="/leaderboard/leaderboard">
                <span class="view-more-btn">
                  <span>View more</span>
                  <SvgIcon class="svg-icon" name="view-more-icon"></SvgIcon>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div style="background: #f9f9f9">
        <div class="flex main-container" style="padding: 2.8em 0">
          <div class="left">
            <div class="card">
              <div class="title">
                <img
                  src="@/assets/images/home-icon-PublicationsHub.png"
                  alt=""
                />
                <h4>Publications Hub</h4>
              </div>
              <p class="p">
                A collection of published papers covering various topics within
                the Value Compass project. It provides a detailed overview of
                our research progress and findings, focusing on
                interdisciplinary analysis, benchmarks, value evaluation and
                alignment techniques.
              </p>
              <div>
                <a href="https://valuecompass.github.io/Research/papers/">
                  <span class="view-more-btn">
                    <span>View more</span>
                    <SvgIcon class="svg-icon" name="view-more-icon"></SvgIcon>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="card">
              <div class="title">
                <img src="@/assets/images/home-icon-testValues.png" alt="" />
                <h4>Test Your Values</h4>
              </div>
              <p class="p">
                "Test Your Values" is a quiz of 14 quick questions to help you
                uncover your values profile—your way of thinking. By comparing
                your answers to LLMs’ value orientations, quiz matches you with
                the LLM that best reflects your beliefs.
              </p>
              <div>
                <router-link to="/TestValues">
                  <span class="view-more-btn">
                    <span>View more</span>
                    <SvgIcon class="svg-icon" name="view-more-icon"></SvgIcon>
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="latest-news main-container" style="padding: 4.5em 0">
        <div class="title">
          <img src="@/assets/images/home-icon-news.png" alt="" />
          <h4>Latest News</h4>
        </div>
        <!-- <ul>
          <li>
            <img src="" alt="">
            <div class="bottom">
              <h3>Embedding an Ethical Mind - Aligning Text-to-Image Synthesis via Lightweight Value Optimization</h3>
              <p><span class="tag">Alignment</span></p>
              <p>Sep 26, 2024</p>
            </div>
          </li>
        </ul> -->
        <postsComponent style="margin-top: 3em"></postsComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import introComponent from "../components/Home/intro.vue";
import modulesComponent from "../components/Home/modules.vue";
import postsComponent from "../components/Home/posts.vue";
</script>
<style scoped lang="scss">
.box {
  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > div {
      width: calc(50% - 1em);
      box-sizing: border-box;
    }
  }
  .leaderboard {
    padding: 2.75em 0;
    .left > div {
      overflow: hidden;
      position: relative;

      &:hover {
        img {
          transform: translateX(0.8em);
          box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
        }
      }
      img {
        transform: translateX(0.8em);
        box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
        display: block;
        width: 145.7%;
        transition: all 0.5s;
        border-radius: 1.6%;
      }
      .cover {
        background: linear-gradient(
          270deg,
          #fff 52%,
          rgba(255, 255, 255, 0) 100%
        );
        height: calc(100% + 20px);
        width: 97.57%;
        position: absolute;
        left: 50.7%;
        top: -10px;
      }
    }
    .right {
      padding: 2.25em 1.75em;
      border: none;
      ul {
        padding: 0.75em 0;
        margin: 1.5em 0;
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
        margin-bottom: 1.2em;
      }
    }
  }

  .card {
    padding: 2.25em 3em;
    border: 1px solid rgba(214, 237, 255, 1);
    border-radius: 3em;
    .p {
      font-size: 1.25em;
      line-height: 1.8;
      margin-bottom: 1.2em;
      margin-top: 0.6em;
    }
  }
  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      width: 7.5em;
    }
    h4 {
      font-weight: 400;
      color: rgba(0, 79, 143, 1);
      font-size: 2.5em;
      padding-left: 0.5em;
      font-style: italic;
    }
  }
  .view-more-btn {
    display: inline-block;
    color: rgba(16, 147, 255, 1);
    display: inline-flex;
    flex-direction: row;
    align-content: center;
    font-size: 1.25em;
    cursor: pointer;
    svg {
      width: 1.2em;
      height: 1.2em;
      margin-left: 0.2em;
    }

    &:hover {
      span {
        background: linear-gradient(270deg, #0078d4 0%, #8661c5 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.2s;
      }
      svg {
        color: #0078d4;
        transition: all 0.2s;
      }
    }
  }
}
</style>
