<template>
  <div class="score-intro-template">
    <el-dialog
      v-model="dialogTableVisible"
      title=""
      style="width: 90%; max-width: 730px"
      align-center
    >
      <div>
        <p class="title">How It Works – Understanding the Evaluation Process</p>
        <p>
          This score is the average across value dimensions from the "selected
          point" above, which can be adjusted based on the user's needs.
        </p>
        <!-- <p style="text-align: center; margin: 1em 0">
          <img src="@/assets/images/score-computingFormula.png" alt="" />
        </p> -->
        <p>
          More details on datasets and evaluation methods can be found in
          <a href="https://arxiv.org/pdf/2501.07071" target="_blank"
            >[Value Compass Leaderboard]</a
          >.
        </p>
      </div>
      <!-- </div> -->
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, defineExpose } from "vue";

const dialogTableVisible = ref(false);

const showScoreIntro = () => {
  dialogTableVisible.value = true;
};

defineExpose({
  showScoreIntro,
});
</script>

<style scoped lang="scss">
.score-intro-template {
  p {
    font-size: 1.25em;
    margin-top: 1.2em;
    line-height: 150%; /* 36px */
    color: #000;
  }
  p.title {
    color: #004f8f;
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 0.8em;
    margin-top: 0;
    font-style: italic;
    text-align: center;
  }
  img {
    width: 22em;
  }
  a {
    white-space: nowrap;
    color: var(--theme-color);
    text-decoration: underline;
  }

  :deep(.el-dialog) {
    --el-dialog-content-font-size: 1em;
    --el-dialog-border-radius: 0.75em;
    padding: 5em 3.5em;
    .el-dialog__header {
      padding-bottom: 0;
    }
    .el-dialog__headerbtn {
      width: 1.5em;
      height: 1.5em;
      top: 1.25em;
      right: 1.25em;
      &:hover {
        .el-dialog__close {
          color: #909399;
        }
      }
    }
    .el-icon {
      width: 1.5em;
      height: 1.5em;
      svg {
        width: 1.5em;
        height: 1.5em;
      }
    }
  }
}
</style>