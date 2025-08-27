<template>
  <div style="position: relative">
    <div class="culture-alignment-container main-container">
      <div>
        <h2>
          Explore Cultural Perspectives – Choose a Topic to Compare Responses
        </h2>
        <p>
          Each topic offers a lens into values, norms, and communication styles
          across regions. Select one to begin your cultural comparison and
          reveal key differences in thought and behavior.
        </p>
        <ul>
          <li v-for="(item, index) in topicListShow" :key="index">
            <div>
              <img :src="item.img" alt="" />
              <p>{{ item.des }}</p>
            </div>
          </li>
        </ul>

        <div class="btn-container">
          <el-button class="Change-question-btn">
            Change question<el-icon class="el-icon--right"><Refresh /></el-icon>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Refresh } from "@element-plus/icons-vue";

const getAssetsFile = (url) => {
  return new URL(`../../assets/topic/${url}`, import.meta.url).href;
};

const topicListShow = ref([
  {
    img: getAssetsFile("1.png"),
    des: "Do you think kids should be punished when they oppose their parents both in words and actions?",
  },
  {
    img: getAssetsFile("2.png"),
    des: "Should people always follow the law, even if they believe it is unfair?",
  },
  {
    img: getAssetsFile("3.png"),
    des: "Should you help a stranger in need even if it puts your own plans at risk?",
  },
]);
</script>

<style scoped lang="scss">
.culture-alignment-container {
  padding: 2em 0;
  & > div {
    max-width: 74.4375rem;
    margin: 0 auto;
  }
  h2 {
    font-size: 2em;
    color: rgba(11, 112, 195, 1);
    font-weight: 600;
    font-style: italic;
    margin-bottom: 0.78125em;
    & + p {
      color: rgba(102, 102, 102, 1);
      font-size: 1.25em;
      line-height: 1.8;
    }
  }
  ul {
    margin: 3em 0;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    li {
      box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
      width: 32%;
      padding: 1.5em 3em;
      box-sizing: border-box;
      border-radius: 1em;
      p {
        font-size: 1.25em;
        line-height: 1.2;
      }
      img {
        width: 90%;
        display: block;
        margin: 0 auto;
        margin-bottom: 1.5em;
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    .Change-question-btn {
      font-size: 1.25em;
      color: rgba(11, 112, 195, 1);
      height: 3em;
      border: 2px solid rgba(11, 112, 195, 1);
      padding: 0.2em 1.2em;
      border-radius: 6px;
      .el-icon--right {
        font-size: 1.2em;
        margin-left: 0.4em;
      }
    }
  }
}
</style>
