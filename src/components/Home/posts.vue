<template>
  <div class="home" style="padding: 0">
    <!-- Latest News -->
    <div class="main-container">
      <h4 class="lates-title">Latest News</h4>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <div class="article">
            <div class="box">
              <div class="article__wrapper">
                <div class="article__date">
                  <span
                    ><time datetime="{{ post.date }}">{{
                      dayjs(post.date).format("MMMM D, YYYY")
                    }}</time></span
                  >
                </div>

                <div class="article__content">
                  <a
                    :href="
                      'https://valuecompass.github.io/Research' + post.permalink
                    "
                  >
                    <h2 class="article__title">
                      {{ post.title }}
                    </h2>
                  </a>
                  <div class="article-tags">
                    <div class="article-tags__box">
                      <template v-for="(tag, index) in post.tags" :key="index">
                        <a href="" class="article__tag">{{ tag }}</a>
                        <span
                          class="line"
                          style="background-image: url(/images/line.png)"
                          >/</span
                        >
                      </template>
                    </div>
                  </div>
                </div>

                <a
                  :href="
                    'https://valuecompass.github.io/Research' + post.permalink
                  "
                  class="article__image"
                  aria-label="{{post.url}}"
                >
                  <img :src="getAssetsFile('posts/' + post.image)" alt="" />
                </a>
              </div>
            </div>
          </div>
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
const getAssetsFile = (url:any) => {
  return new URL(`../../assets/${url}`, import.meta.url).href;
};
const posts = ref([
  {
    title:
      "Elephant in the Room - Unveiling the Impact of Reward Model Quality in Alignment",
    date: "2024-09-26",
    image: "reward_model_quality.png",
    coverImage: "hand.png",
    tags: ["Analysis"],
    permalink: "/reward_model_quality",
  },
  {
    title:
      "Raising the Bar - Investigating the Values of Large Language Models via Generative Evolving Testing",
    date: "2024-07-20",
    image: "evolving_test.png",
    coverImage: "Weight-of-the-heart.png",
    tags: ["Evaluation"],
    permalink: "/generative_evolving_test",
  },
  {
    title:
      "CLAVE - An Adaptive Framework for Evaluating Values of LLM Generated Responses",
    date: "2024-07-15",
    image: "clave_evaluator.png",
    coverImage: "paper-cutting-doll.png",
    tags: ["Dataset", "Evaluation"],
    permalink: "/clave_evaluator",
  },
  {
    title:
      "Beyond Human Norms - Unveiling Unique Values of Large Language Models through Interdisciplinary Approaches",
    date: "2024-05-10",
    image: "unique_llm_values.png",
    coverImage: "hand.png",
    tags: ["Analysis", "Evaluation"],
    permalink: "/unique_value_alignment",
  },
  {
    title:
      "On the Essence and Prospect - An Investigation of Alignment Approaches for Big Models",
    date: "2024-03-07",
    image: "alignment_methods.png",
    coverImage: "hand.png",
    tags: ["Analysis"],
    permalink: "/essence_and_prospect",
  },
  {
    title:
      "Negating Negatives - Alignment without Human Positive Samples via Distributional Dispreference Optimization",
    date: "2024-03-06",
    image: "basic_value_space.png",
    coverImage: "hand&arrow.png",
    tags: ["Alignment"],
    permalink: "/negating_negatives",
  },
]);
</script>
<style scoped lang="scss">
.home {
  max-width: 1920px;
  margin: 0 auto;
}

.article {
  width: 100%;
  .article__wrapper {
    display: flex;
    align-items: flex-start;
    border-bottom: 2px solid rgba(243, 245, 246, 1);
    padding: 1.6em 4%;
  }

  .article__date {
    line-height: 3;
    font-size: 0.94em;
    width: 360px;
    color: #747474;
  }

  .article__image {
    align-self: center;
    width: 20%;
    display: block;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    // background-color: $light-gray;
    &:hover {
      opacity: 0.9;
    }
    img {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
    }

    // &:after {
    //   content: "";
    //   display: table;
    //   width: 100%;
    //   padding-bottom: 70%;
    // }
  }

  // .article__brief {
  //   width: 100%;
  //   padding: 0px;
  //   //margin-left: -10%;
  //   z-index: 1;
  //   border-radius: 3px;
  //   background: rgba(255, 255, 255, 0.98);
  //   box-shadow: 0 1px 4px rgba(0,0,0,0.15);

  //   .article__tag {
  //     font-size: 1.25em;
  //     letter-spacing: 0.5px;
  //     font-weight: 700;
  //     text-transform: uppercase;
  //     margin-bottom: 15px;

  //   }

  //   .article__title {
  //     margin-bottom: 20px;
  //     font-size: 1.5625em;
  //     line-height: 1.8;

  //     a {
  //       color: $dark;
  //       &:hover {
  //         color: $black;
  //       }
  //     }
  //   }

  //   .article__excerpt {
  //     margin-bottom: 20px;
  //     font-size: 16px;
  //     line-height: 26px;
  //   }

  //   .article__meta {
  //     font-size: 12px;
  //     line-height: 18px;
  //     text-transform: uppercase;
  //     color: $dark;
  //   }

  //   .article__footer {
  //     display: flex;
  //     align-items: center;

  //     .read-more {
  //       margin-left: auto;
  //       padding-bottom: 5px;
  //       font-size: 12px;
  //       line-height: 18px;
  //       letter-spacing: 1px;
  //       text-transform: uppercase;
  //       border-bottom: 1px solid transparent;
  //       color: $dark;
  //       &:hover {
  //         color: $dark;
  //         border-color: #1093ff;
  //       }
  //     }
  //   }
  // }
  .article-tags {
    margin-bottom: 1em;
  }
  .article__tag {
    display: inline-block;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.5px;
    font-weight: 600;
    // text-transform: uppercase;
    margin-bottom: 1em;
    color: #0f8bf2;
    background: #f6f6f6;
    border-radius: 999px;
    line-height: 1.9em;
    padding: 0 1em;
  }
  .line {
    display: inline-block;
    line-height: 1.9em;
    width: 1em;
    // background: url(/images/Line.png) no-repeat center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 70%;
    color: transparent;
    text-align: center;
  }
  .article__content {
    // align-self: center;
    width: calc(80% - 14em);
    // width: calc(70% - 14em);
    padding: 0 5%;
    // margin-left: -1.5%;
    z-index: 1;

    .article__title {
      color: #000;
      // margin: .8em 0 0;
      font-size: 1.4rem;
      line-height: 1.8;
      margin-bottom: 0.6em;
      margin-top: 0.3em;

      &:hover {
        color: #1093ff;
      }
    }

    .article__excerpt {
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 26px;
    }

    .article__meta {
      font-size: 12px;
      line-height: 18px;
      text-transform: uppercase;
      color: gray;
    }

    .article__footer {
      display: flex;
      align-items: center;

      .read-more {
        margin-left: auto;
        padding-bottom: 5px;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 1px;
        text-transform: uppercase;
        border-bottom: 1px solid transparent;
        color: gray;
        &:hover {
          color: #000;
          border-color: #1093ff;
        }
      }
    }
  }

  // .article-without-image {
  //   width: 100%;
  //   margin-left: auto;
  // }

  &.article-without-image-box {
    .article__wrapper {
      padding: 2.8em 6%;
    }
    .article__content {
      align-self: center;
      width: calc(100% - 360px);
      padding: 0 0 0 5%;
      align-self: center;
      .article__title {
        margin: 0;
      }
    }
  }
}

@media only screen and (max-width: 1200) {
  .article .box {
    .article__wrapper {
      flex-direction: column;
      padding: 1em;
    }

    .article__image {
      width: 100%;
    }

    .article__content {
      width: 100%;
      padding: 1em 0;
    }

    .article-without-image {
      width: 90%;
      margin: 0;
    }
  }
  .article-without-image-box .article-tags {
    margin-bottom: -0.5em !important;
  }
}

@media only screen and (max-width: 960) {
  .article .box {
    .article__content {
      .article__title {
        font-size: 1.4em;
      }
    }
  }
}
.lates-title {
  margin-top: 1em;
  margin-bottom: 0.8em;
  font-size: 2em;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-weight: 700;
  color: #1093ff;
  padding-left: 3%;
}
</style>
