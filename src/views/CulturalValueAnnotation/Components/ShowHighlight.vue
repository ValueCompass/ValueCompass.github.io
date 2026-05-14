<template>
  <!-- 整个 overlay 覆盖在输入框上方，鼠标离开时统一清空所有 hover 状态 -->
  <div class="show-highlight" @mouseleave="handleRootMouseLeave">
    <!-- cue 模式：在 Text fragment 输入框上覆盖显示带下划线联动的 cue 文本 -->
    <div
      v-if="!isAddingNew && isCueMode && currentCueDisplayParts.length"
      class="show-highlight__cue"
    >
      <!-- 父组件共享 tooltip：concept hover 时也在 cue 区渲染弹窗，保证位置固定统一
           - resolvedCueTooltipGroups：cue hover 场景，展示 cue 片段 + 关联 concept
           - resolvedConceptTooltipData：concept hover 场景，展示 concept + 对应 cue 片段 -->
      <div
        v-if="sharedTooltipVisible"
        ref="tooltipRef"
        class="show-highlight__tooltip"
        @mouseenter="cancelScheduledClear"
        @mouseleave="handleTooltipLeave"
      >
        <!-- cue hover：每个 fragment×concept 对渲染一个条目 -->
        <template
          v-for="(group, gIndex) in resolvedCueTooltipGroups"
          :key="`cue-group-${group.fragmentId}-${gIndex}`"
        >
          <div
            v-for="(concept, cIndex) in group.concepts"
            :key="`cue-item-${group.fragmentId}-${concept.trackIndex}-${cIndex}`"
            class="show-highlight__tooltip-entry"
          >
            <span class="show-highlight__tooltip-bullet">•</span>
            <div class="show-highlight__tooltip-body">
              <p class="show-highlight__tooltip-label">Text Fragment:</p>
              <p class="show-highlight__tooltip-fragment-text">{{ group.text }}</p>
              <p class="show-highlight__tooltip-concept-line">
                <span class="show-highlight__tooltip-label">Value Concept:</span> {{ concept.text }}
              </p>
              <p class="show-highlight__tooltip-label">Evidence:</p>
              <p class="show-highlight__tooltip-evidence-text">{{ concept.evidence || "-" }}</p>
            </div>
          </div>
        </template>

        <!-- concept hover：每个 cue 片段渲染一个条目 -->
        <template v-if="resolvedConceptTooltipData">
          <div
            v-for="(fragment, index) in resolvedConceptTooltipData.fragments"
            :key="`concept-frag-${resolvedConceptTooltipData.trackIndex}-${index}`"
            class="show-highlight__tooltip-entry"
          >
            <span class="show-highlight__tooltip-bullet">•</span>
            <div class="show-highlight__tooltip-body">
              <p class="show-highlight__tooltip-label">Text Fragment:</p>
              <p class="show-highlight__tooltip-fragment-text">{{ fragment }}</p>
              <p class="show-highlight__tooltip-concept-line">
                <span class="show-highlight__tooltip-label">Value Concept:</span> {{ resolvedConceptTooltipData.text }}
              </p>
              <p class="show-highlight__tooltip-label">Evidence:</p>
              <p class="show-highlight__tooltip-evidence-text">{{ resolvedConceptTooltipData.evidence || "-" }}</p>
            </div>
          </div>
        </template>
      </div>

      <!-- 本地 cue tooltip：未接入父组件共享 tooltip（即没有传 sharedTooltip）时的回退渲染 -->
      <div
        v-else-if="localCueTooltipVisible"
        ref="tooltipRef"
        class="show-highlight__tooltip"
        @mouseenter="cancelScheduledClear"
        @mouseleave="handleTooltipLeave"
      >
        <template
          v-for="(group, gIndex) in hoveredTooltipGroups"
          :key="`local-group-${group.fragmentId}-${gIndex}`"
        >
          <div
            v-for="(concept, cIndex) in group.concepts"
            :key="`local-item-${group.fragmentId}-${concept.trackIndex}-${cIndex}`"
            class="show-highlight__tooltip-entry"
          >
            <span class="show-highlight__tooltip-bullet">•</span>
            <div class="show-highlight__tooltip-body">
              <p class="show-highlight__tooltip-label">Text Fragment:</p>
              <p class="show-highlight__tooltip-fragment-text">{{ group.text }}</p>
              <p class="show-highlight__tooltip-concept-line">
                <span class="show-highlight__tooltip-label">Value Concept:</span> {{ concept.text }}
              </p>
              <p class="show-highlight__tooltip-label">Evidence:</p>
              <p class="show-highlight__tooltip-evidence-text">{{ concept.evidence || "-" }}</p>
            </div>
          </div>
        </template>
      </div>

      <span
        v-for="(part, index) in currentCueDisplayParts"
        :key="`${part.start}-${index}`"
        class="show-highlight__cue-part"
        :class="{
          'is-linked': part.lineEntries.length > 0,
          'is-hovered': isCuePartHovered(part, index),
          'is-dimmed': isCuePartDimmed(part, index),
        }"
        :style="getUnderlineStyle(
          part.lineEntries,
          part.activeTrackCount,
          hoveredFragmentIds,
          getCuePartActiveTrackIndexes(part, index),
          isCueHighlightActive
        )"
        @mouseenter="handleCuePartEnter(index, $event)"
        @mousemove="handleCuePartMove($event)"
        @mouseleave="handleCuePartLeave"
      >{{ part.text }}</span>
    </div>

    <!-- concept 模式：在 Value Concepts 输入框上覆盖显示可 hover 的 concept 文本 -->
    <div
      v-if="!isAddingNew && isConceptMode && currentConceptHighlights.length"
      class="show-highlight__concepts"
    >
      <template v-for="(concept, index) in currentConceptHighlights" :key="`${concept.text}-${index}`">
        <span
          class="show-highlight__concept-item"
          :class="{
            'is-hovered': hoveredTrackIndexes.includes(concept.trackIndex),
            'is-dimmed': hoveredTrackIndexes.length > 0 && !hoveredTrackIndexes.includes(concept.trackIndex),
          }"
          :style="getUnderlineStyle(
            [{ color: concept.color, hoverColor: concept.hoverColor, dimColor: concept.dimColor, trackIndex: 0 }],
            1,
            [],
            hoveredTrackIndexes.includes(concept.trackIndex) ? [0] : [],
            hoveredTrackIndexes.length > 0
          )"
          @mouseenter="handleConceptEnter(concept.trackIndex)"
          @mouseleave="handleConceptLeave"
        >{{ concept.text }}</span><span
          v-if="concept.separator"
          class="show-highlight__concept-separator"
          :class="{
            'is-hovered': hoveredTrackIndexes.includes(concept.trackIndex),
            'is-dimmed': hoveredTrackIndexes.length > 0 && !hoveredTrackIndexes.includes(concept.trackIndex),
          }"
          @mouseenter="handleConceptEnter(concept.trackIndex)"
          @mouseleave="handleConceptLeave"
        >{{ concept.separator }}&nbsp;</span>
      </template>
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
  // 父组件统一管理的 tooltip 数据。cue 侧实例用它渲染弹窗，保证 cue / concept hover 时弹窗位置一致。
  sharedTooltip: {
    type: Object,
    default: () => ({
      visible: false,
      cueGroups: [],
      conceptData: null,
    }),
  },
  // 为 true 时禁用本实例的本地 tooltip 渲染，由 cue 侧统一显示（用于 concept 实例）。
  disableLocalTooltip: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["hover-change"]);

// 组件同时服务于 cue overlay 和 concept overlay，通过 overlayMode 区分两种渲染模式。
const isCueMode = computed(() => {
  return props.overlayMode === "all" || props.overlayMode === "cue";
});

const isConceptMode = computed(() => {
  return props.overlayMode === "all" || props.overlayMode === "concepts";
});

// 为不同 concept 轨道分配稳定颜色，三种状态：
// - base：默认，透明度 0.7
// - hover：当前高亮轨道，透明度 1.0
// - dim：有其他轨道被高亮时，非高亮轨道降至透明度 0.3
const highlightColors = [
  {
    base: "rgba(75, 122, 63, 0.7)",
    hover: "rgba(75, 122, 63, 1)",
    dim: "rgba(75, 122, 63, 0.3)",
  },
  {
    base: "rgba(192, 106, 43, 0.7)",
    hover: "rgba(192, 106, 43, 1)",
    dim: "rgba(192, 106, 43, 0.3)",
  },
  {
    base: "rgba(107, 76, 154, 0.7)",
    hover: "rgba(107, 76, 154, 1)",
    dim: "rgba(107, 76, 154, 0.3)",
  },
  {
    base: "rgba(47, 93, 159, 0.7)",
    hover: "rgba(47, 93, 159, 1)",
    dim: "rgba(47, 93, 159, 0.3)",
  },
  {
    base: "rgba(178, 58, 58, 0.7)",
    hover: "rgba(178, 58, 58, 1)",
    dim: "rgba(178, 58, 58, 0.3)",
  },
];

// hoveredPartIndex：当前鼠标停留的 cue 文本分段索引，-1 表示未 hover。
const hoveredPartIndex = ref(-1);
// hoveredConceptTrackIndex：当前鼠标停留的 concept 轨道索引，-1 表示未 hover。
const hoveredConceptTrackIndex = ref(-1);
// tooltipRef：用于判断鼠标是否移动到了 tooltip 内部，防止误触发关闭。
const tooltipRef = ref(null);
// clearHoverTimeoutId：延迟清空 hover 的定时器 ID，鼠标移入 tooltip 时会取消。
let clearHoverTimeoutId = null;
// hoverTooltip：本地 tooltip 显示状态，配合 localCueTooltipVisible 判断是否渲染回退弹窗。
const hoverTooltip = ref({
  visible: false,
});

// splitConcepts：把逗号分隔的 concept 字符串拆成带 separator 信息的结构化数组。
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

// 把 concept 字符串转换成可渲染列表，并为每个 concept 分配颜色和关联的 cue 片段。
const currentConceptHighlights = computed(() => {
  const concepts = splitConcepts(props.conceptText);

  return concepts.map((concept, index) => ({
    text: concept.text,
    separator: concept.separator,
    trackIndex: index,
    color: highlightColors[index % highlightColors.length].base,
    hoverColor: highlightColors[index % highlightColors.length].hover,
    dimColor: highlightColors[index % highlightColors.length].dim,
    fragments: Array.isArray(props.cueConceptCorrespondence?.[index])
      ? props.cueConceptCorrespondence[index]
          .map((item) => item?.trim?.() || "")
          .filter(Boolean)
      : [],
  }));
});

// 把 cue 文本切成若干可渲染分段，并为每段附带命中的 concept 轨道信息（用于多轨下划线和 hover 联动）。
const currentCueDisplayParts = computed(() => {
  const cueText = props.cueText;
  if (!cueText) {
    return [];
  }

  const matchedFragments = [];
  // searchOffsets：记录每个片段的上次匹配终点，防止同一片段文本被重复匹配到同一位置。
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
        dimColor: concept.dimColor,
        conceptTrackIndex: concept.trackIndex,
      });

      searchOffsets.set(searchKey, start + fragment.length);
    });
  });

  // 按文本位置排序，保证后续切分边界稳定，重叠片段按长度靠后。
  matchedFragments.sort((left, right) => {
    if (left.start !== right.start) {
      return left.start - right.start;
    }

    if (left.end !== right.end) {
      return left.end - right.end;
    }

    return left.conceptTrackIndex - right.conceptTrackIndex;
  });

  // 对有重叠的片段分配不同 displayTrackIndex，避免下划线互相覆盖。
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

  // 没有任何命中片段时，回退成整段普通文本。
  if (!ranges.length) {
    return [{ text: cueText, lineEntries: [], start: 0 }];
  }

  // 用所有片段的 start/end 作为切分边界，把 cue 拆成连续文本段。
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
            dimColor: currentEntry.dimColor,
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

  // 为每个可见分段补充左右延伸信息，让同一轨道的下划线在相邻分段之间看起来连续。
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
      // activeTrackCount：该分段最大轨道数，用于计算多轨下划线的垂直偏移量。
      activeTrackCount: Math.max(maxDisplayTrackIndex + 1, 1),
      lineEntries: part.lineEntries.map((entry) => {
        const displayTrackIndex = entry.displayTrackIndex;
        return {
          ...entry,
          // extendLeft/extendRight：相邻分段有相同轨道时，下划线需要跨越分段间隙对齐。
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

// 根据命中的片段轨道信息，用多层 background-image 模拟多轨下划线样式。
const getUnderlineStyle = (
  lineEntries = [],       // 当前分段覆盖的所有轨道条目
  totalTracks = 1,        // 该分段最大轨道数，决定下划线总高度
  activeFragmentIds = [], // 当前高亮的 fragmentId 列表（cue hover 场景）
  activeTrackIndexes = [], // 当前高亮的 trackIndex 列表（concept hover 场景）
  isAnyHovered = false    // 当前是否有任意轨道处于 hover 状态，用于决定非高亮轨道是否变暗
) => {
  if (!lineEntries.length) {
    return {};
  }

  const lineGap = 4;       // 多轨下划线之间的垂直间距（px）
  const thickness = 2;     // 单条下划线的粗细（px）
  const joinOverlap = 2;   // 相邻分段下划线的衔接扩展量（px），让下划线看起来连续
  const normalizedTrackCount = Math.max(totalTracks, 1);

  return {
    backgroundImage: lineEntries
      .map((entry) => {
        // fragmentId 命中（cue hover 场景）或 trackIndex 命中（concept hover 场景），任意一个成立则高亮。
        const isHovered =
          (entry.fragmentId && activeFragmentIds.includes(entry.fragmentId)) ||
          activeTrackIndexes.includes(entry.trackIndex);
        // 三态颜色：高亮 → 1.0；有其他轨道被高亮时本轨道降暗 → 0.3；默认 → 0.7
        const lineColor = isHovered
          ? entry.hoverColor || entry.color
          : isAnyHovered
            ? entry.dimColor || entry.color
            : entry.color;
        return `linear-gradient(${lineColor}, ${lineColor})`;
      })
      .join(", "),
    backgroundRepeat: lineEntries.map(() => "no-repeat").join(", "),
    // 向左右各延伸 joinOverlap px，让相邻分段的下划线视觉上连接成一根线。
    backgroundSize: lineEntries
      .map((entry) => {
        const extraWidth =
          (entry.extendLeft ? joinOverlap : 0) +
          (entry.extendRight ? joinOverlap : 0);
        return `calc(100% + ${extraWidth}px) ${thickness}px`;
      })
      .join(", "),
    // 不同 displayTrackIndex 的下划线向上逐层错开，形成多轨展示效果。
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
    // paddingBottom 撑开多轨下划线所需的垂直空间，防止下划线被文字遮挡。
    paddingBottom: `${Math.max(0, normalizedTrackCount - 1) * lineGap + thickness}px`,
  };
};

// 本地 hover 的轨道列表：concept hover 优先，其次是 cue 分段 hover。
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

// 本地 hover 的 fragmentId 列表：只有 cue 分段 hover 时才有值。
const localHoveredFragmentIds = computed(() => {
  if (hoveredPartIndex.value < 0) {
    return [];
  }

  return currentCueDisplayParts.value[hoveredPartIndex.value]?.lineEntries?.map(
    (entry) => entry.fragmentId
  ).filter(Boolean) || [];
});

// 合并外部（concept 实例传来的）和本地的 hover 轨道，保证两侧 overlay 高亮同步。
const hoveredTrackIndexes = computed(() => {
  return Array.from(
    new Set([
      ...props.externalActiveTrackIndexes,
      ...localHoveredTrackIndexes.value,
    ])
  );
});

// 合并外部和本地的 fragmentId，确保 cue 侧 tooltip 与下划线高亮一致。
const hoveredFragmentIds = computed(() => {
  return Array.from(
    new Set([
      ...props.externalActiveFragmentIds,
      ...localHoveredFragmentIds.value,
    ])
  );
});

// cue hover 和 concept hover 的高亮规则不同：
// - cue hover：只高亮鼠标所在的 cue fragmentId，避免同一 concept 对应的其他 cue 片段也亮起来；
// - concept hover：没有本地 cue fragmentId 时，才按 concept trackIndex 高亮所有关联 cue 片段。
const hasLocalCueFragmentHover = computed(() => {
  return localHoveredFragmentIds.value.length > 0;
});

const isCueHighlightActive = computed(() => {
  return hoveredFragmentIds.value.length > 0 || hoveredTrackIndexes.value.length > 0;
});

const cuePartHasActiveFragment = (part) => {
  return part.lineEntries.some((entry) => {
    return entry.fragmentId && hoveredFragmentIds.value.includes(entry.fragmentId);
  });
};

const cuePartHasActiveTrack = (part) => {
  return part.lineEntries.some((entry) => {
    return hoveredTrackIndexes.value.includes(entry.trackIndex);
  });
};

const isCuePartHovered = (part, index) => {
  if (hoveredPartIndex.value === index || cuePartHasActiveFragment(part)) {
    return true;
  }

  return !hasLocalCueFragmentHover.value && cuePartHasActiveTrack(part);
};

const isCuePartDimmed = (part, index) => {
  return isCueHighlightActive.value && !isCuePartHovered(part, index);
};

const getCuePartActiveTrackIndexes = (part, index) => {
  // 本地 cue hover 时，cue 侧只通过 fragmentId 高亮当前片段；trackIndex 仅用于同步 concept 侧。
  if (hasLocalCueFragmentHover.value) {
    return [];
  }

  if (hoveredPartIndex.value === index || cuePartHasActiveTrack(part)) {
    return hoveredTrackIndexes.value;
  }

  return [];
};

// evidence 可能是数组或字符串，统一转为可展示的纯文本。
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

// cue hover 时，把当前 hover 分段的 lineEntries 整理成 tooltip 分组数据：
// 每个 fragmentId 对应一组「cue 片段文本 + 关联 concept 列表」。
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

// concept hover 时整理该 concept 对应的 cue 片段列表和 evidence，用于上报给父组件或本地 tooltip 渲染。
const hoveredConceptTooltipData = computed(() => {
  if (hoveredConceptTrackIndex.value < 0) {
    return null;
  }

  const matchedConcept = currentConceptHighlights.value.find((concept) => {
    return concept.trackIndex === hoveredConceptTrackIndex.value;
  });

  if (!matchedConcept) {
    return null;
  }

  return {
    text: matchedConcept.text,
    trackIndex: matchedConcept.trackIndex,
    fragments: matchedConcept.fragments,
    evidence: getEvidenceText(
      props.cueConceptEvidence?.[matchedConcept.trackIndex]
    ),
  };
});

// 从父组件传入的共享 tooltip 中提取 cue 分组数据，在 cue 区统一渲染。
const resolvedCueTooltipGroups = computed(() => {
  return Array.isArray(props.sharedTooltip?.cueGroups)
    ? props.sharedTooltip.cueGroups
    : [];
});

// 从父组件传入的共享 tooltip 中提取 concept 数据，在 cue 区统一渲染（concept hover 时使用）。
const resolvedConceptTooltipData = computed(() => {
  return props.sharedTooltip?.conceptData || null;
});

// cue 实例：优先使用父组件共享 tooltip，有内容时在 .show-highlight__cue 顶部渲染统一弹窗。
const sharedTooltipVisible = computed(() => {
  return (
    isCueMode.value &&
    props.sharedTooltip?.visible === true &&
    (resolvedCueTooltipGroups.value.length > 0 || !!resolvedConceptTooltipData.value)
  );
});

// 未接入共享 tooltip 时的回退方案：本地 cue hover 触发的弹窗。
const localCueTooltipVisible = computed(() => {
  return !props.disableLocalTooltip && hoverTooltip.value.visible && hoveredTooltipGroups.value.length > 0;
});

// 取消延迟清空定时器，用于鼠标进入 tooltip 或重新 hover 时保持显示。
const cancelScheduledClear = () => {
  if (clearHoverTimeoutId) {
    clearTimeout(clearHoverTimeoutId);
    clearHoverTimeoutId = null;
  }
};

// 延迟 120ms 清空 hover，给用户从 cue/concept 移动到 tooltip 留出时间窗口。
const scheduleClearHoveredPart = () => {
  cancelScheduledClear();
  clearHoverTimeoutId = setTimeout(() => {
    clearHoveredPart();
  }, 120);
};

// cue 分段进入时：记录 hover 分段，向父组件上报高亮轨道和 tooltip 内容。
const handleCuePartEnter = (index) => {
  const lineEntries = currentCueDisplayParts.value[index]?.lineEntries || [];
  // 无关联轨道的纯文本分段不触发 tooltip，直接清空。
  if (!lineEntries.length) {
    clearHoveredPart();
    return;
  }

  cancelScheduledClear();
  hoveredPartIndex.value = index;
  // 把当前 hover 到的 cue 分段的轨道、fragmentId 和 tooltip 数据一并上报给父组件，
  // 让父组件驱动另一侧实例的下划线高亮，并在 cue 区统一位置渲染弹窗。
  emit("hover-change", {
    trackIndexes: currentCueDisplayParts.value[index]?.lineEntries?.map(
      (entry) => entry.trackIndex
    ) || [],
    fragmentIds: currentCueDisplayParts.value[index]?.lineEntries?.map(
      (entry) => entry.fragmentId
    ).filter(Boolean) || [],
    tooltip: {
      visible: true,
      cueGroups: hoveredTooltipGroups.value,
      conceptData: null,
    },
  });
  hoverTooltip.value = {
    visible: true,
  };
};

// cue 分段内移动时只需续期定时器，不重新触发 tooltip。
const handleCuePartMove = () => {
  if (hoveredPartIndex.value < 0) {
    return;
  }

  cancelScheduledClear();
};

// cue 分段离开时：如果鼠标移入了 tooltip 则保持显示，否则延迟清空。
const handleCuePartLeave = (event) => {
  const nextTarget = event?.relatedTarget;
  if (tooltipRef.value && nextTarget instanceof Node && tooltipRef.value.contains(nextTarget)) {
    return;
  }

  scheduleClearHoveredPart();
};

// tooltip 内离开时：如果鼠标仍在 tooltip 子元素内则不处理，否则延迟清空。
const handleTooltipLeave = (event) => {
  const nextTarget = event?.relatedTarget;
  if (nextTarget instanceof Node && event.currentTarget?.contains(nextTarget)) {
    return;
  }

  scheduleClearHoveredPart();
};

// 整个 overlay 根元素离开时的兜底：鼠标进入 tooltip 或仍在 overlap 内则不清空。
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

// concept 进入时：
// 1. 记录当前 hover 的轨道，驱动本实例的下划线高亮
// 2. 把轨道和 tooltip 数据向父组件上报，让父组件同步 cue 侧下划线高亮，并在 cue 区渲染弹窗
const handleConceptEnter = (trackIndex) => {
  hoveredConceptTrackIndex.value = trackIndex;
  cancelScheduledClear();
  emit("hover-change", {
    trackIndexes: [trackIndex],
    fragmentIds: [],
    tooltip: {
      visible: true,
      cueGroups: [],
      // 优先使用计算好的 hoveredConceptTooltipData，若 computed 尚未更新则回退到直接取值
      conceptData: currentConceptHighlights.value.find((concept) => {
        return concept.trackIndex === trackIndex;
      })
        ? hoveredConceptTooltipData.value || {
            text: currentConceptHighlights.value.find((concept) => {
              return concept.trackIndex === trackIndex;
            })?.text || "",
            trackIndex,
            fragments:
              currentConceptHighlights.value.find((concept) => {
                return concept.trackIndex === trackIndex;
              })?.fragments || [],
            evidence: getEvidenceText(props.cueConceptEvidence?.[trackIndex]),
          }
        : null,
    },
  });
  hoverTooltip.value = {
    visible: true,
  };
};

// concept 离开时：如果鼠标移向了 tooltip 则保持显示，否则延迟清空 hover 状态。
const handleConceptLeave = (event) => {
  const nextTarget = event?.relatedTarget;
  if (tooltipRef.value && nextTarget instanceof Node && tooltipRef.value.contains(nextTarget)) {
    return;
  }

  scheduleClearHoveredPart();
};

const clearHoveredPart = () => {
  cancelScheduledClear();
  hoveredPartIndex.value = -1;
  hoveredConceptTrackIndex.value = -1;
  // 重置所有 hover 状态，通知父组件清空高亮和弹窗。
  emit("hover-change", {
    trackIndexes: [],
    fragmentIds: [],
    tooltip: {
      visible: false,
      cueGroups: [],
      conceptData: null,
    },
  });
  hoverTooltip.value = {
    visible: false,
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
  font-size: 1rem;

  &__cue {
    position: relative;
    color: #222;
    font-size: 1rem;
    // font-style: italic;
    line-height: 1.7;
    white-space: pre-wrap;
    word-break: break-word;
    font-style: italic;
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
    color: #000;
  }

  &__cue-part.is-dimmed,
  &__concept-item.is-dimmed,
  &__concept-separator.is-dimmed {
    color: #999;
  }

  &__cue-part.is-linked,
  &__concept-item {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }

  &__concepts {
    position: relative;
    display: block;
    color: #222;
    font-size: 1rem;
    line-height: 1.6;
    padding-top: 0.1em;
    white-space: pre-wrap;
    word-break: break-word;
  }

  &__concept-item {
    display: inline;
    white-space: pre-wrap;
    cursor: pointer;
  }

  &__concept-separator {
    display: inline;
    color: #222;
    white-space: pre-wrap;
    pointer-events: auto;
    cursor: pointer;
  }

  &__tooltip {
    position: absolute;
    top: -8px;
    left: 50%;
    z-index: 20;
    width: 100%;
    // box-sizing: border-box;
    padding: 0 .8em;
    border-radius: 12px;
    background: rgba(235, 237, 240, 1);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    font-size: 14px;
    // tooltip 位于 cue 容器内部，cue 容器本身是斜体；这里先重置为正常字体，
    // 只在 Text Fragment 的 cue 片段上单独设置 italic。
    font-style: normal;
    pointer-events: auto;
    transform: translate(-50%, -100%);
  }

  &__tooltip-entry {
    display: flex;
    gap: 0.55em;
    padding: 0.85em 0;

    & + & {
      border-top: 1px solid rgba(29, 36, 51, 0.12);
    }
  }

  &__tooltip-bullet {
    flex-shrink: 0;
    color: #1d2433;
    font-weight: 700;
    line-height: 1.5;
    margin-top: 0.05em;
  }

  &__tooltip-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.12em;
  }

  &__tooltip-label {
    margin: 0;
    color: rgba(5, 64, 140, 1);
    font-weight: 700;
    line-height: 1.5;
  }

  &__tooltip-fragment-text {
    margin: 0 0 0.25em;
    // color: rgba(5, 64, 140, 1);
    font-style: italic;
    font-weight: 700;
    line-height: 1.5;
  }

  &__tooltip-concept-line {
    margin: 0 0 0.2em;
    color: rgba(10, 17, 31, 1);
    line-height: 1.5;
  }

  &__tooltip-evidence-text {
    margin: 0;
    color: rgba(10, 17, 31, 1);
    line-height: 1.6;
  }
}
</style>