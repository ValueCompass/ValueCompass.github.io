<template>
  <div class="dimension-measurement-tabs">
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
.dimension-measurement-tabs {
  ul {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: left;
    li {
      line-height: 1.4;
      margin: 0 0.2em;
      cursor: pointer;
      padding: 0.65em 3em;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      transition: all 0.2s;
      color: rgba(114, 114, 114, 1);
      font-weight: 600;
      border-bottom: 2px solid transparent;
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
