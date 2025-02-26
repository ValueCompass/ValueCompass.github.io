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
          The score is calculated as a weighted sum across multiple value
          dimensions, with weights customizable based on user needs.
        </p>
        <p style="text-align: center; margin: 1em 0">
          <img src="@/assets/images/score-computingFormula.png" alt="" />
        </p>
        <p>
          Each model’s score is dynamically calculated based on these value
          systems, using an evolving framework to ensure its validity.
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

    line-height: 150%; /* 36px */
  }
  p.title {
    color: #004f8f;
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 0.8em;
    font-style: italic;
  }
  img {
    width: 22em;
  }

  :deep(.el-dialog) {
    --el-dialog-content-font-size: 1em;
    --el-dialog-border-radius: 0.75em;
    padding: 5em 4.5em;
    .el-dialog__header {
      padding-bottom: 0;
    }
    .el-dialog__headerbtn {
      width: 1.5em;
      height: 1.5em;
      top: 1.25em;
      right: 1.25em;
      &:hover{
        .el-dialog__close{
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