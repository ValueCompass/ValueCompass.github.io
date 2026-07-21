<template>
  <el-dialog
    :model-value="visible"
    @update:model-value="$emit('update:visible', $event)"
    width="900px"
    :close-on-click-modal="false"
  >
    <div class="dialog-content">
      <p class="intro-text">Answer text tells us how to do or what to do, while value concepts justify why the action is considered appropriate or important.</p>

      <h4>Valid Value Concepts</h4>
      <table class="concept-table">
        <tr>
          <td>Respect for parents</td>
          <td>Teamwork and cooperation</td>
          <td>Social Inclusion</td>
        </tr>
        <tr>
          <td>Filial piety</td>
          <td>Mutual Respect</td>
          <td>Moral Responsibility</td>
        </tr>
        <tr>
          <td>Family Harmony</td>
          <td>Empathy</td>
          <td>Educational Equity</td>
        </tr>
        <tr>
          <td>Personal autonomy</td>
          <td>Honesty</td>
          <td>Social Justice</td>
        </tr>
        <tr>
          <td>Personal Growth</td>
          <td>Civic responsibility</td>
          <td>Social Belonging</td>
        </tr>
        <tr>
          <td>Mental Well-being</td>
          <td>Respect for Elders</td>
          <td>Racial Equality</td>
        </tr>
        <tr>
          <td>Kindness</td>
          <td>Forgiveness</td>
          <td>Loyalty</td>
        </tr>
        <tr>
          <td>Integrity</td>
          <td>Social Security</td>
          <td>Gender Equality</td>
        </tr>
        <tr>
          <td>Personal Well-being</td>
          <td>Lifelong Learning</td>
          <td>Fairness</td>
        </tr>
        <tr>
          <td>Protection of Privacy</td>
          <td>Work-life Balance</td>
          <td>Respect for Individual Rights</td>
        </tr>
      </table>

      <h4>Invalid Value Concepts (negative terms, specific actions, tools or status)</h4>
      <table class="concept-table">
        <tr>
          <td>Discrimination</td>
          <td>Social Exclusion</td>
          <td>Participant the activity</td>
        </tr>
        <tr>
          <td>Cheating</td>
          <td>Dishonesty</td>
          <td>Call the Police</td>
        </tr>
        <tr>
          <td>Corruption</td>
          <td>Give money to a charity</td>
          <td>Attend a meeting</td>
        </tr>
        <tr>
          <td>Privacy Violation</td>
          <td>Have a high salary</td>
          <td>policy</td>
        </tr>
        <tr>
          <td>Child Abuse</td>
          <td>Live with parents</td>
          <td></td>
        </tr>
        <tr>
          <td>Racism</td>
          <td>Have many friends</td>
          <td></td>
        </tr>
      </table>
    </div>
  </el-dialog>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:visible"]);
</script>

<style scoped lang="scss">
.dialog-content {
  font-size: 14px;
  line-height: 1.6;

  .intro-text {
    margin-bottom: 1.2em;
    font-size: 15px;
  }

  h4 {
    font-weight: bold;
    margin: 1em 0 0.5em 0;
    font-size: 15px;
  }

  .concept-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1em;
    border: 1px solid #e0e0e0;

    tr {
      border-bottom: 1px solid #e0e0e0;

      &:last-child {
        border-bottom: none;
      }
    }

    td {
      padding: 8px 12px;
      border-bottom: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;
      width: 33.33%;

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
