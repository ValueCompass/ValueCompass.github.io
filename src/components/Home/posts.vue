<template>
  <div>
    <!-- Latest News -->
    <div>
      <ul class="posts-news">
        <li v-for="(post, index) in posts" :key="index">
          <a :href="'https://valuecompass.github.io/Research' + post.permalink">
            <div class="img-div">
              <img :src="getAssetsFile('posts/' + post.image)" alt="" />
            </div>
            <div class="bottom">
              <h2 class="article__title">
                {{ post.title }}
              </h2>

              <div class="article-tags">
                <div class="article-tags__box">
                  <template v-for="(tag, index) in post.tags" :key="index">
                    <a :href="'https://valuecompass.github.io/Research/' + tag" class="article__tag">{{ tag }}</a>
                  </template>
                </div>
              </div>
              <div class="article__date">
                <span
                  ><time datetime="{{ post.date }}">{{
                    dayjs(post.date).format("MMM D, YYYY")
                  }}</time></span
                >
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// element-plus 集成的 dayjs 默认也安装了 dayjs 插件，所以相关插件可以直接使用
import { dayjs } from "element-plus";
console.log(dayjs("2012-2-2").format("MMMM D,YYYY"));
const getAssetsFile = (url: any) => {
  return new URL(`../../assets/${url}`, import.meta.url).href;
};
const posts = ref([
  // {
  //   title:
  //     "Embedding an Ethical Mind - Aligning Text-to-Image Synthesis via Lightweight Value Optimization",
  //   date: "2024-10-16",
  //   image: "basic_value_space.png",
  //   tags: ["alignment"],
  //   permalink: "/text2image_alignment",
  // },
  // {
  //   title:
  //     "Elephant in the Room - Unveiling the Impact of Reward Model Quality in Alignment",
  //   date: "2024-09-26",
  //   image: "reward_model_quality.png",
  //   tags: ["analysis"],
  //   permalink: "/reward_model_quality",
  // },
  // {
  //   title:
  //     "Raising the Bar - Investigating the Values of Large Language Models via Generative Evolving Testing",
  //   date: "2024-07-20",
  //   image: "evolving_test.png",
  //   tags: ["evaluation"],
  //   permalink: "/generative_evolving_test",
  // },
  {
    title:
      "Value Compass Leaderboard: A Platform for Fundamental and Validated Evaluation of LLMs Values",
    date: "2025-1-13",
    image: "architecture_value.png",
    tags: ["evaluation"],
    permalink: "/value_compass_leaderboard",
  },
  {
    title:
      "The Road to Artificial SuperIntelligence: A Comprehensive Survey of Superalignment",
    date: "2024-12-25",
    image: "scalable_oversigh_ techniques.png",
    tags: ["analysis"],
    permalink: "/survey_of_superalignment",
  },
  {
    title:
      "Embedding an Ethical Mind - Aligning Text-to-Image Synthesis via Lightweight Value Optimization",
    date: "2024-10-16",
    image: "basic_value_space.png",
    tags: ["alignment"],
    permalink: "/text2image_alignment",
  },
]);
</script>
<style scoped lang="scss">
.posts-news {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: calc(33.3% - 21px);
    border-radius: 1em;
    overflow: hidden;
    border: 1px solid #d9d9d9;
    background: #f9f9f9;

    box-sizing: border-box;
    margin-bottom: 2.25em;
    transition: all .2s;
    .img-div {
      padding: 1.19em 1.625em;
      background: #ffffff;
    }
    img {
      width: 100%;
    }
    .bottom {
      padding: 1.635em;
      color: #333;
      .article__title {
        text-overflow: ellipsis;
        font-size: 1.25em;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 24px */
        min-height: 3.6em;
      }

      .article-tags__box {
        margin: 0.75em 0;
        .article__tag {
          display: inline-block;
          padding: 0.43em 0.86em;
          color: #004f8f;
          font-size: 0.875em;
          font-style: normal;
          font-weight: 400;
          text-transform: capitalize;
          background: rgba(233, 233, 233, 1);
          margin-right: 2em;
        }
      }
      .article__date {
        time {
          color: #6e6e6e;
          font-size: 1em;
          font-style: normal;
          font-weight: 400;
          line-height: 1.5;
        }
      }
    }

    &:hover{
      box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
      .article__title{
        color: #004F8F;
      }
    }
  }
}
</style>
