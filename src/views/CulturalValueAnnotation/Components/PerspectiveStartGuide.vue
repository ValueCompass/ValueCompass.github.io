<template>
  <div class="perspective-guide" :class="{ 'perspective-guide--purple': step === 6 }">
    <div class="perspective-guide__heading">
      <span class="perspective-guide__bulb">💡</span>
      <b>{{ t("culturalValueAnnotation.perspectiveGuide.coreAction") }}</b>
    </div>

    <p class="perspective-guide__switch-label">
      {{
        previousPerspective
          ? t("culturalValueAnnotation.perspectiveGuide.switchPerspective")
          : perspectiveLabel
      }}
    </p>

    <div class="perspective-guide__flow">
      <PerspectiveCard
        v-if="previousPerspective"
        :perspective="previousPerspective"
        :completed="previousCompleted"
        :inactive="!previousCompleted"
      />
      <div v-if="previousPerspective" class="perspective-guide__arrow" aria-hidden="true">
        <span>•••</span><b>→</b>
      </div>
      <PerspectiveCard :perspective="perspective" :purple="step === 6" />
    </div>

    <p class="perspective-guide__description" v-html="description"></p>
    <el-button color="#0B70C3" :disabled="!canStart" @click="emit('start')">
      {{ t("culturalValueAnnotation.perspectiveGuide.start") }}
    </el-button>
  </div>
</template>

<script setup>
import { computed, defineComponent, h } from "vue";
import { useI18n } from "vue-i18n";
import { Grid, UserFilled } from "@element-plus/icons-vue";

const props = defineProps({
  perspective: {
    type: String,
    required: true,
  },
  previousPerspective: {
    type: String,
    default: "",
  },
  previousCompleted: {
    type: Boolean,
    default: false,
  },
  canStart: {
    type: Boolean,
    default: true,
  },
  step: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["start"]);
const { t } = useI18n();
const isCultural = (perspective) => perspective === "culturalPerspective";
const perspectiveLabel = computed(() =>
  t(
    isCultural(props.perspective)
      ? "common.culturalPerspective"
      : "common.personalPerspective",
  ),
);

const PerspectiveCard = defineComponent({
  props: {
    perspective: { type: String, required: true },
    completed: { type: Boolean, default: false },
    inactive: { type: Boolean, default: false },
    purple: { type: Boolean, default: false },
  },
  setup(cardProps) {
    return () => {
      const cultural = isCultural(cardProps.perspective);
      const label = t(
        cultural ? "common.culturalPerspective" : "common.personalPerspective",
      );
      const prompt = t(
        cultural
          ? "culturalValueAnnotation.perspectiveGuide.culturalPrompt"
          : "culturalValueAnnotation.perspectiveGuide.personalPrompt",
      );
      const status = t(
        cardProps.completed
          ? "culturalValueAnnotation.perspectiveGuide.completed"
          : cardProps.inactive
            ? "culturalValueAnnotation.perspectiveGuide.notStarted"
            : "culturalValueAnnotation.perspectiveGuide.inProgress",
      );

      return h(
        "div",
        {
          class: [
            "perspective-card",
            {
              "perspective-card--completed": cardProps.completed,
              "perspective-card--inactive": cardProps.inactive,
              "perspective-card--purple": cardProps.purple,
            },
          ],
        },
        [
          h("div", { class: "perspective-card__icon" }, [
            h(cultural ? Grid : UserFilled),
          ]),
          h("div", { class: "perspective-card__title" }, [
            label,
            h("small", ` (${status})`),
          ]),
          h("div", { class: "perspective-card__prompt" }, prompt),
          h(
            "div",
            { class: "perspective-card__status" },
            cardProps.completed || cardProps.inactive ? "×" : "✓",
          ),
        ],
      );
    };
  },
});
</script>

<style scoped lang="scss">
.perspective-guide {
  max-width: 54rem;
  padding: 1.25rem 1.5rem 1.5rem;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  box-sizing: border-box;
  color: #222;

  &__heading {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
    font-size: 1rem;
    color: #111827;
  }

  &__bulb {
    filter: grayscale(1);
  }

  &__switch-label {
    margin-bottom: 0.75rem;
    color: #0b70c3;
    font-size: 0.875rem;
    font-weight: 500;
  }

  &__flow {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1rem;
    min-height: 11rem;
  }

  &__arrow {
    display: flex;
    align-items: center;
    color: #a855f7;

    span {
      letter-spacing: 0.12rem;
    }

    b {
      font-size: 2rem;
      line-height: 1;
    }
  }

  &__description {
    max-width: 50rem;
    margin-bottom: 1.25rem;
    line-height: 1.55;
    color: #111827;
    font-size: 1rem;
  }
}

:deep(.perspective-card) {
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  align-items: center;
  min-width: 16rem;
  padding: 1.25rem 1rem 0.875rem;
  border: 2px solid #38bdf8;
  border-radius: 12px;
  box-sizing: border-box;
  background: #cff3ff;
  text-align: center;

  .perspective-card__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    flex: 0 0 auto;
    margin: 0 auto 0.625rem;
    border-radius: 50%;
    background: #0866b3;
    color: #fff;
    font-size: 1.5rem;
  }

  .perspective-card__title {
    margin-bottom: 0.375rem;
    color: #1f2937;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.35;

    small {
      color: #0b70c3;
      font-size: 0.75rem;
      font-weight: 500;
    }
  }

  .perspective-card__prompt {
    color: #374151;
    font-size: 0.875rem;
    line-height: 1.4;
  }

  .perspective-card__status {
    display: flex;
    flex: 0 0 1.75rem;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    min-width: 1.75rem;
    min-height: 1.75rem;
    aspect-ratio: 1;
    margin: 0.625rem auto 0;
    border-radius: 50%;
    background: #0866b3;
    color: #fff;
    line-height: 1;
    font-weight: 700;
  }

  &.perspective-card--purple {
    border-color: #d8b4fe;
    background: #f3e8ff;

    .perspective-card__icon,
    .perspective-card__status {
      background: #780096;
    }

    .perspective-card__title small {
      color: #780096;
    }
  }

  &.perspective-card--completed,
  &.perspective-card--inactive {
    border-color: #d9dde3;
    background-color: #f3f4f6;
    color: #6b7280;
    box-shadow: none;

    .perspective-card__icon {
      background-color: #dedede;
      color: #666;
    }

    .perspective-card__title,
    .perspective-card__prompt {
      color: #6b7280;
    }

    .perspective-card__title small {
      color: #7d8590;
    }

    .perspective-card__status {
      flex-basis: 1.75rem;
      background: transparent;
      color: #9ca3af;
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }
}

@media (max-width: 720px) {
  .perspective-guide__flow {
    flex-direction: column;
    align-items: flex-start;
  }

  .perspective-guide__arrow {
    align-self: center;
    transform: rotate(90deg);
  }
}
</style>
