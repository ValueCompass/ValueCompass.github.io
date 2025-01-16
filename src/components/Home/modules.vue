<template>
  <div class="home" style="padding: 0">
    <div>
      <div class="main-container module-container">
        <div class="row">
          <div
            class="col col-3"
            v-for="(module, index) in modules"
            :key="index"
          >
            <div class="module">
              <a
                :href="
                  'https://valuecompass.github.io/Research' + module.permalink
                "
              >
                <img
                  class="module-bg"
                  :src="getAssetsFile('modules/' + module.image)"
                  :alt="module.title"
                />

                <div class="module-cover">
                  <img
                    :src="getAssetsFile('modules/' + module.imageCover)"
                    :alt="module.title"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const getAssetsFile = (url) => {
  return new URL(`../../assets/${url}`, import.meta.url).href;
};
const modules = ref([
  {
    title: "Alignment",
    description: "Brief description of the alignment module",
    permalink: "/alignment/",
    image: "alignment.svg",
    imageCover: "alignment_hover.svg",
  },
  {
    title: "Analysis",
    description: "Brief description of the analysis module",
    permalink: "/analysis/",
    image: "analysis.svg",
    imageCover: "analysis_hover.svg",
  },
  {
    title: "Dataset",
    description: "Brief description of the dataset module",
    permalink: "/dataset/",
    image: "dataset.svg",
    imageCover: "dataset_hover.svg",
  },
  {
    title: "Evaluation",
    description: "Brief description of the evaluation module",
    permalink: "/evaluation/",
    image: "evaluation.svg",
    imageCover: "evaluation_hover.svg",
  },
]);
</script>
<style scoped lang="scss">
.home {
  max-width: 1920px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.col-3 {
  width: 25%;
}
.module-container {
  margin-top: 2em;
  margin-bottom: 6em;
  & > div {
  }
  .module {
    max-width: 9.375rem;
    // min-width: 80px;
    width: 80%;
    margin: 0 auto;
    position: relative;

    .module-bg {
      width: 100%;
      // padding: 8%;
      // border-radius: 8px;
      margin: 0 auto;
      display: block;
    }

    .module-title {
      color: #1093ff;
      text-align: center;
      font-size: 1em;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0em;
    }

    .module-cover {
      z-index: 1;
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;

      img {
        width: 100%;
        height: 100%;
        // padding: 8%;
      }
      // &::after{
      //   content: "";
      //   width: 100%;
      //   height: 100%;
      //   left: 0;
      //   top: 0;
      //   position: absolute;
      //   background-color: #1093ff;
      //   opacity: .7;
      //   border-radius: 12%;
      // }
      p {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        z-index: 3;
        font-weight: bold;
      }
    }

    &:hover .module-cover {
      opacity: 1;
    }

    // .module-cover {
    //   border-radius: 8px;
    //   z-index: 1;
    //   background-color: #1093ff;
    //   color: #fff;
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   display: flex;
    //   flex-direction: row;
    //   align-items: center;
    //   justify-content: center;
    //   opacity: 0;
    //   transition: all .1s;
    //   font-size: 1.2em;
    //   font-weight: bold;

    //   p {
    //     margin: 0;
    //   }

    // }

    // &:hover {
    //   .module-cover {
    //     opacity: .8;
    //   }
    // }
  }
}
</style>
