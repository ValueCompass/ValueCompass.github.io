<template>
  <div class="show-highlight" @mouseleave="handleRootMouseLeave">
    <div
      v-if="!isAddingNew && isCueMode && currentCueDisplayParts.length"
      class="show-highlight__cue"
    >
      <span
        v-for="(part, index) in currentCueDisplayParts"
        :key="`${part.start}-${index}`"
        class="show-highlight__cue-part"
        :class="{
          'is-linked': part.lineEntries.length > 0,
          'is-hovered': hoveredPartIndex === index,
        }"
        :style="getUnderlineStyle(
          part.lineEntries,
          part.activeTrackCount,
          hoveredFragmentIds,
          hoveredPartIndex === index ? hoveredTrackIndexes : []
        )"
        @mouseenter="handleCuePartEnter(index, $event)"
        @mousemove="handleCuePartMove($event)"
        @mouseleave="handleCuePartLeave"
      >{{ part.text }}</span>
    </div>

    <div
      v-if="!isAddingNew && isConceptMode && currentConceptHighlights.length"
      class="show-highlight__concepts"
    >
      <template v-for="(concept, index) in currentConceptHighlights" :key="`${concept.text}-${index}`">
        <span
          class="show-highlight__concept-item"
          :class="{ 'is-hovered': hoveredTrackIndexes.includes(concept.trackIndex) }"
          :style="getUnderlineStyle(
            [{ color: concept.color, hoverColor: concept.hoverColor, trackIndex: 0 }],
            1,
            [],
            hoveredTrackIndexes.includes(concept.trackIndex) ? [0] : []
          )"
          @mouseenter="handleConceptEnter(concept.trackIndex)"
          @mouseleave="handleConceptLeave"
        >{{ concept.text }}</span><span
          v-if="concept.separator"
          class="show-highlight__concept-separator"
          :class="{ 'is-hovered': hoveredTrackIndexes.includes(concept.trackIndex) }"
          @mouseenter="handleConceptEnter(concept.trackIndex)"
          @mouseleave="handleConceptLeave"
        >{{ concept.separator }}&nbsp;</span>
      </template>
    </div>

    <div
      v-if="isCueMode && hoverTooltip.visible && hoveredTooltipGroups.length"
      ref="tooltipRef"
      class="show-highlight__tooltip"
      :style="tooltipStyle"
      @mouseenter="cancelScheduledClear"
      @mouseleave="handleTooltipLeave"
    >
      <div
        v-for="(group, index) in hoveredTooltipGroups"
        :key="`${group.fragmentId}-${index}`"
        class="show-highlight__tooltip-group"
      >
        <p class="show-highlight__tooltip-fragments-title">
          Text fragment：
        </p>
        <p class="show-highlight__tooltip-fragment-text">
          {{ group.text }}
        </p>

        <div
          v-for="(concept, conceptIndex) in group.concepts"
          :key="`${group.fragmentId}-${concept.trackIndex}-${conceptIndex}`"
          class="show-highlight__tooltip-item"
        >
          <p class="show-highlight__tooltip-title">
            Value Concept: {{ concept.text }}
          </p>
          <p class="show-highlight__tooltip-reason">
            Reason: {{ concept.evidence || "-" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  overlayMode: {
    type: String,
    default: "all",
  },
  isAddingNew: {
    type: Boolean,
    default: false,
  },
  cueText: {
    type: String,
    default: "",
  },
  conceptText: {
    type: String,
    default: "",
  },
  cueConceptCorrespondence: {
    type: Array,
    default: () => [],
  },
  cueConceptEvidence: {
    type: Array,
    default: () => [],
  },
  externalActiveTrackIndexes: {
    type: Array,
    default: () => [],
  },
  externalActiveFragmentIds: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["hover-change"]);

const isCueMode = computed(() => {
  return props.overlayMode === "all" || props.overlayMode === "cue";
});

const isConceptMode = computed(() => {
  return props.overlayMode === "all" || props.overlayMode === "concepts";
});

const highlightColors = [
  {
    base: "rgba(75, 122, 63, 0.5)",
    hover: "rgba(75, 122, 63, 1)",
  },
  {
    base: "rgba(192, 106, 43, 0.5)",
    hover: "rgba(192, 106, 43, 1)",
  },
  {
    base: "rgba(107, 76, 154, 0.5)",
    hover: "rgba(107, 76, 154, 1)",
  },
  {
    base: "rgba(47, 93, 159, 0.5)",
    hover: "rgba(47, 93, 159, 1)",
  },
  {
    base: "rgba(178, 58, 58, 1)",
    hover: "rgba(178, 58, 58, 1)",
  },
];

const hoveredPartIndex = ref(-1);
const hoveredConceptTrackIndex = ref(-1);
const tooltipRef = ref(null);
let clearHoverTimeoutId = null;
const hoverTooltip = ref({
  visible: false,
  left: 0,
  top: 0,
});

const splitConcepts = (conceptText = "") => {
  const results = [];
  const matches = conceptText.matchAll(/([^,，]+?)(\s*[,，]\s*|$)/g);

  for (const match of matches) {
    const text = match[1]?.trim?.() || "";
    if (!text) {
      continue;
    }

    results.push({
      text,
      separator: match[2]?.includes("，") ? "，" : match[2]?.includes(",") ? "," : "",
    });
  }

  return results;
};

const currentConceptHighlights = computed(() => {
  const concepts = splitConcepts(props.conceptText);

  return concepts.map((concept, index) => ({
    text: concept.text,
    separator: concept.separator,
    trackIndex: index,
    color: highlightColors[index % highlightColors.length].base,
    hoverColor: highlightColors[index % highlightColors.length].hover,
    fragments: Array.isArray(props.cueConceptCorrespondence?.[index])
      ? props.cueConceptCorrespondence[index]
          .map((item) => item?.trim?.() || "")
          .filter(Boolean)
      : [],
  }));
});

const currentCueDisplayParts = computed(() => {
  const cueText = props.cueText;
  if (!cueText) {
    return [];
  }

  const matchedFragments = [];
  const searchOffsets = new Map();

  currentConceptHighlights.value.forEach((concept, conceptIndex) => {
    concept.fragments.forEach((fragment) => {
      const searchKey = `${conceptIndex}-${fragment}`;
      const startOffset = searchOffsets.get(searchKey) || 0;
      const start = cueText.indexOf(fragment, startOffset);

      if (start === -1) {
        return;
      }

      const end = start + fragment.length;
      matchedFragments.push({
        fragmentId: `${conceptIndex}-${start}-${end}-${matchedFragments.length}`,
        start,
        end,
        fragment,
        color: concept.color,
        hoverColor: concept.hoverColor,
        conceptTrackIndex: concept.trackIndex,
      });

      searchOffsets.set(searchKey, start + fragment.length);
    });
  });

  matchedFragments.sort((left, right) => {
    if (left.start !== right.start) {
      return left.start - right.start;
    }

    if (left.end !== right.end) {
      return left.end - right.end;
    }

    return left.conceptTrackIndex - right.conceptTrackIndex;
  });

  const ranges = matchedFragments.reduce((assignedFragments, fragment) => {
    const occupiedTracks = new Set(
      assignedFragments
        .filter((otherFragment) => {
          return (
            otherFragment.start < fragment.end &&
            otherFragment.end > fragment.start
          );
        })
        .map((otherFragment) => otherFragment.displayTrackIndex)
    );

    let displayTrackIndex = 0;
    while (occupiedTracks.has(displayTrackIndex)) {
      displayTrackIndex += 1;
    }

    assignedFragments.push({
      ...fragment,
      displayTrackIndex,
    });

    return assignedFragments;
  }, []);

  if (!ranges.length) {
    return [{ text: cueText, lineEntries: [], start: 0 }];
  }

  const boundaries = new Set([0, cueText.length]);
  ranges.forEach((range) => {
    boundaries.add(range.start);
    boundaries.add(range.end);
  });

  const sortedBoundaries = Array.from(boundaries).sort((a, b) => a - b);
  const parts = [];
  for (let index = 0; index < sortedBoundaries.length - 1; index += 1) {
    const start = sortedBoundaries[index];
    const end = sortedBoundaries[index + 1];

    if (start === end) {
      continue;
    }

    const lineEntries = ranges
      .filter((range) => range.start < end && range.end > start)
      .reduce((entries, currentEntry) => {
        if (
          !entries.some((entry) => {
            return (
              entry.displayTrackIndex === currentEntry.displayTrackIndex &&
              entry.conceptTrackIndex === currentEntry.conceptTrackIndex &&
              entry.fragmentId === currentEntry.fragmentId
            );
          })
        ) {
          entries.push({
            fragmentId: currentEntry.fragmentId,
            fragmentText: currentEntry.fragment,
            color: currentEntry.color,
            hoverColor: currentEntry.hoverColor,
            trackIndex: currentEntry.conceptTrackIndex,
            displayTrackIndex: currentEntry.displayTrackIndex,
          });
        }

        return entries;
      }, [])
      .sort((left, right) => left.displayTrackIndex - right.displayTrackIndex);

    parts.push({
      text: cueText.slice(start, end),
      lineEntries,
      start,
    });
  }

  const visibleParts = parts.filter((part) => part.text);

  return visibleParts.map((part, index) => {
    const previousPart = visibleParts[index - 1];
    const nextPart = visibleParts[index + 1];
    const activeDisplayTrackIndexes = Array.from(
      new Set(part.lineEntries.map((entry) => entry.displayTrackIndex))
    ).sort((left, right) => left - right);
    const maxDisplayTrackIndex = activeDisplayTrackIndexes.length
      ? activeDisplayTrackIndexes[activeDisplayTrackIndexes.length - 1]
      : 0;

    return {
      ...part,
      activeTrackCount: Math.max(maxDisplayTrackIndex + 1, 1),
      lineEntries: part.lineEntries.map((entry) => {
        const displayTrackIndex = entry.displayTrackIndex;
        return {
          ...entry,
          extendLeft: Boolean(
            previousPart?.lineEntries?.some((item) => {
              return item.displayTrackIndex === displayTrackIndex;
            })
          ),
          extendRight: Boolean(
            nextPart?.lineEntries?.some((item) => {
              return item.displayTrackIndex === displayTrackIndex;
            })
          ),
        };
      }),
    };
  });
});

const getUnderlineStyle = (
  lineEntries = [],
  totalTracks = 1,
  activeFragmentIds = [],
  activeTrackIndexes = []
) => {
  if (!lineEntries.length) {
    return {};
  }

  const lineGap = 4;
  const thickness = 2;
  const joinOverlap = 2;
  const normalizedTrackCount = Math.max(totalTracks, 1);

  return {
    backgroundImage: lineEntries
      .map((entry) => {
        const isHovered = entry.fragmentId
          ? activeFragmentIds.includes(entry.fragmentId)
          : activeTrackIndexes.includes(entry.trackIndex);
        const lineColor = isHovered ? entry.hoverColor || entry.color : entry.color;
        return `linear-gradient(${lineColor}, ${lineColor})`;
      })
      .join(", "),
    backgroundRepeat: lineEntries.map(() => "no-repeat").join(", "),
    backgroundSize: lineEntries
      .map((entry) => {
        const extraWidth =
          (entry.extendLeft ? joinOverlap : 0) +
          (entry.extendRight ? joinOverlap : 0);
        return `calc(100% + ${extraWidth}px) ${thickness}px`;
      })
      .join(", "),
    backgroundPosition: lineEntries
      .map((entry) => {
        const trackIndex = Math.min(
          normalizedTrackCount - 1,
          entry.displayTrackIndex ?? entry.effectiveTrackIndex ?? entry.trackIndex ?? 0
        );
        const leftOffset = entry.extendLeft ? -joinOverlap : 0;
        return `${leftOffset}px calc(100% - ${(normalizedTrackCount - 1 - trackIndex) * lineGap}px)`;
      })
      .join(", "),
    paddingBottom: `${Math.max(0, normalizedTrackCount - 1) * lineGap + thickness}px`,
  };
};

const localHoveredTrackIndexes = computed(() => {
  if (hoveredConceptTrackIndex.value >= 0) {
    return [hoveredConceptTrackIndex.value];
  }

  if (hoveredPartIndex.value < 0) {
    return [];
  }

  return currentCueDisplayParts.value[hoveredPartIndex.value]?.lineEntries?.map(
    (entry) => entry.trackIndex
  ) || [];
});

const localHoveredFragmentIds = computed(() => {
  if (hoveredPartIndex.value < 0) {
    return [];
  }

  return currentCueDisplayParts.value[hoveredPartIndex.value]?.lineEntries?.map(
    (entry) => entry.fragmentId
  ).filter(Boolean) || [];
});

const hoveredTrackIndexes = computed(() => {
  return Array.from(
    new Set([
      ...props.externalActiveTrackIndexes,
      ...localHoveredTrackIndexes.value,
    ])
  );
});

const hoveredFragmentIds = computed(() => {
  return Array.from(
    new Set([
      ...props.externalActiveFragmentIds,
      ...localHoveredFragmentIds.value,
    ])
  );
});

const getEvidenceText = (evidence) => {
  if (Array.isArray(evidence)) {
    return evidence
      .map((item) => {
        if (typeof item === "string") {
          return item.trim();
        }

        return item == null ? "" : String(item).trim();
      })
      .filter(Boolean)
      .join(" ");
  }

  if (typeof evidence === "string") {
    return evidence.trim();
  }

  if (evidence == null) {
    return "";
  }

  return String(evidence).trim();
};

const hoveredTooltipGroups = computed(() => {
  if (hoveredPartIndex.value < 0) {
    return [];
  }

  const currentPartLineEntries =
    currentCueDisplayParts.value[hoveredPartIndex.value]?.lineEntries || [];
  const fragmentMap = new Map();

  currentPartLineEntries.forEach((entry) => {
    if (!entry.fragmentId || !entry.fragmentText) {
      return;
    }

    if (!fragmentMap.has(entry.fragmentId)) {
      fragmentMap.set(entry.fragmentId, {
        fragmentId: entry.fragmentId,
        text: entry.fragmentText,
        concepts: [],
      });
    }

    const currentGroup = fragmentMap.get(entry.fragmentId);
    const matchedConcept = currentConceptHighlights.value.find((concept) => {
      return concept.trackIndex === entry.trackIndex;
    });

    if (
      matchedConcept &&
      !currentGroup.concepts.some((concept) => {
        return concept.trackIndex === matchedConcept.trackIndex;
      })
    ) {
      currentGroup.concepts.push({
        text: matchedConcept.text,
        trackIndex: matchedConcept.trackIndex,
        evidence: getEvidenceText(
          props.cueConceptEvidence?.[matchedConcept.trackIndex]
        ),
      });
    }
  });

  return Array.from(fragmentMap.values());
});

const tooltipStyle = computed(() => {
  return {
    left: `${hoverTooltip.value.left}px`,
    top: `${hoverTooltip.value.top}px`,
  };
});

const updateTooltipPosition = (targetElement) => {
  const container = targetElement?.closest?.(".show-highlight");
  if (!container || !targetElement) {
    return;
  }

  const containerRect = container.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();
  const tooltipWidth = containerRect.width * 0.8;
  const overflowAllowance = containerRect.width * 0.05;
  const targetCenter =
    targetRect.left - containerRect.left + targetRect.width / 2;
  const desiredLeft = targetCenter - tooltipWidth / 2;
  const minLeft = -overflowAllowance;
  const maxLeft = containerRect.width - tooltipWidth + overflowAllowance;

  hoverTooltip.value = {
    visible: true,
    left: Math.min(Math.max(desiredLeft, minLeft), maxLeft),
    top: targetRect.top - containerRect.top - 6,
  };
};

const cancelScheduledClear = () => {
  if (clearHoverTimeoutId) {
    clearTimeout(clearHoverTimeoutId);
    clearHoverTimeoutId = null;
  }
};

const scheduleClearHoveredPart = () => {
  cancelScheduledClear();
  clearHoverTimeoutId = setTimeout(() => {
    clearHoveredPart();
  }, 120);
};

const handleCuePartEnter = (index, event) => {
  const lineEntries = currentCueDisplayParts.value[index]?.lineEntries || [];
  if (!lineEntries.length) {
    clearHoveredPart();
    return;
  }

  cancelScheduledClear();
  hoveredPartIndex.value = index;
  emit("hover-change", {
    trackIndexes: currentCueDisplayParts.value[index]?.lineEntries?.map(
      (entry) => entry.trackIndex
    ) || [],
    fragmentIds: currentCueDisplayParts.value[index]?.lineEntries?.map(
      (entry) => entry.fragmentId
    ).filter(Boolean) || [],
  });
  updateTooltipPosition(event.currentTarget);
};

const handleCuePartMove = (event) => {
  if (hoveredPartIndex.value < 0) {
    return;
  }

  cancelScheduledClear();
  updateTooltipPosition(event.currentTarget);
};

const handleCuePartLeave = (event) => {
  const nextTarget = event?.relatedTarget;
  if (tooltipRef.value && nextTarget instanceof Node && tooltipRef.value.contains(nextTarget)) {
    return;
  }

  scheduleClearHoveredPart();
};

const handleTooltipLeave = (event) => {
  const nextTarget = event?.relatedTarget;
  if (nextTarget instanceof Node && event.currentTarget?.contains(nextTarget)) {
    return;
  }

  scheduleClearHoveredPart();
};

const handleRootMouseLeave = (event) => {
  const nextTarget = event?.relatedTarget;
  if (nextTarget instanceof Node) {
    if (tooltipRef.value?.contains(nextTarget)) {
      return;
    }

    if (event.currentTarget?.contains(nextTarget)) {
      return;
    }
  }

  scheduleClearHoveredPart();
};

const handleConceptEnter = (trackIndex) => {
  hoveredConceptTrackIndex.value = trackIndex;
};

const handleConceptLeave = () => {
  hoveredConceptTrackIndex.value = -1;
};

const clearHoveredPart = () => {
  cancelScheduledClear();
  hoveredPartIndex.value = -1;
  hoveredConceptTrackIndex.value = -1;
  emit("hover-change", {
    trackIndexes: [],
    fragmentIds: [],
  });
  hoverTooltip.value = {
    visible: false,
    left: 0,
    top: 0,
  };
};
</script>

<style scoped lang="scss">
.show-highlight {
  position: absolute;
  inset: 0;
  z-index: 3;
  padding: 5px 11px;
//   overflow: hidden;
  pointer-events: none;
  font-size: 1.2rem;

  &__cue {
    color: #333;
    font-size: 1.2rem;
    // font-style: italic;
    line-height: 1.7;
    white-space: pre-wrap;
    word-break: break-word;
  }

  &__cue-part,
  &__concept-item {
    display: inline;
    pointer-events: auto;
  }

  &__cue-part.is-linked {
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  &__cue-part.is-hovered,
  &__concept-item.is-hovered,
  &__concept-separator.is-hovered {
    color: #111;
  }

  &__cue-part.is-linked,
  &__concept-item {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }

  &__concepts {
    display: block;
    color: #333;
    font-size: 1.2rem;
    line-height: 1.6;
    padding-top: 0.1em;
    white-space: pre-wrap;
    word-break: break-word;
  }

  &__concept-item {
    display: inline;
    white-space: pre-wrap;
  }

  &__concept-separator {
    display: inline;
    color: #333;
    white-space: pre-wrap;
    pointer-events: auto;
  }

  &__tooltip {
    position: absolute;
    z-index: 20;
    width: 80%;
    max-width: 80%;
    padding: 1.1em 1.4em;
    border-radius: 12px;
    background: rgba(223, 223, 223, 1);
    // box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    font-size: 14px;
    pointer-events: auto;
    transform: translateY(-100%);
  }

  &__tooltip-group + &__tooltip-group {
    margin-top: 1em;
    padding-top: 0.9em;
    border-top: 1px solid rgba(29, 36, 51, 0.12);
  }

  &__tooltip-item + &__tooltip-item {
    margin-top: 0.9em;
  }

  &__tooltip-fragments-title {
    margin: 0 0 0.35em;
    color: #1d2433;
    font-weight: 700;
    letter-spacing: 0.02em;
    // text-transform: uppercase;
  }

  &__tooltip-fragment-text {
    margin: 0 0 0.75em;
    color: #313746;
    line-height: 1.55;
    font-weight: bold;
  }

  &__tooltip-title {
    margin: 0;
    color: #1d2433;
    font-weight: 700;
  }

  &__tooltip-reason {
    margin: 0.2em 0 0;
    color: #313746;
    font-size: 1em;
    font-style: italic;
    line-height: 1.6;
  }
}
</style>