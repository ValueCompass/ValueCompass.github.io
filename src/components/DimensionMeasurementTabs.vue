<template>
  <div class="select-container">
    <ul class="label">
      <li
        :class="props.DimensionMeasurementTabIndex == index ? 'on' : ''"
        v-for="(item, index) in options"
        :key="index"
        @click="hancelTypeIndexChange(index)"
      >
        <SvgIcon class="point-type-icon" name="point-type-icon"></SvgIcon>
        <span>{{ item.label }}</span>
        <SvgIcon
          class="info"
          name="info"
          @click.stop="showIntro(index)"
        ></SvgIcon>
      </li>
    </ul>
    <homepageSwiper ref="homepageSwiperRef"></homepageSwiper>
  </div>
</template>
<script setup>
import { ref, defineEmits, defineExpose, defineProps } from "vue";
const props = defineProps({
  DimensionMeasurementTabIndex: {
    type: Number,
    required: false,
    default: 0,
  },
});

const tablePointDetailShow = ref(false);

const options = [
  {
    value: 1,
    label: "Schwartz Theory of Basic Values",
  },
  {
    value: 2,
    label: "Moral Foundation Theory",
  },
  {
    value: 3,
    label: "Safety Taxonomy",
  },
  {
    value: 4,
    label: "LLMs' Unique Value System",
  },
];

const emit = defineEmits(["handleDimensionMeasurementTabsChange"]);

const hancelTypeIndexChange = (index) => {
  props.DimensionMeasurementTabIndex = index;
  emit("handleDimensionMeasurementTabsChange", index);
};

const homepageSwiperRef = ref(null);
const showIntro = (index) => {
  if (homepageSwiperRef.value) {
    homepageSwiperRef.value.showIntro(index);
  }
};

defineExpose({
  hancelTypeIndexChange,
  tablePointDetailShow,
});
</script>

<style scoped lang="scss">
.select-container {
  ul {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: left;
    li {
      line-height: 1.4;
      margin: 0 0.2em;
      cursor: pointer;
      // flex-grow: 1;
      padding: 0.65em 1em;
      border-radius: 1em;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      transition: all 0.2s;
      // flex: 1;
      color: #004f8f;
      font-weight: 600;
      border-radius: 1em;
      border: 2px solid transparent;
      span {
        white-space: nowrap;
        font-size: 1em;

        margin: 0 0.5em;
      }
      &:hover {
        // background: #47acff;
        color: #1093FF;
      }
      &.on {
        border-color: #004F8F;
        color: #004f8f;
      }

      svg {
        vertical-align: middle;

        &.point-type-icon {
          // transform: translateY(-.2em);
          width: 1.5em;
          height: 1.5em;
        }
        &.info {
          width: 1.1em;
          height: 1.1em;
        }
      }
    }
  }
}
</style>
