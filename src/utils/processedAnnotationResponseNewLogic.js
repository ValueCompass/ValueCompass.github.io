/**
 * 新逻辑：构建带高亮的 HTML 文本
 * 与旧逻辑结构一致，唯一区别：edit 状态的 cue 内部做字符级 diff
 *
 * @param {string} response - 原始完整文本（originalResponse）
 * @param {string[]} originalCues - 原始 cue 数组
 * @param {string[]} currentCues - 当前 cue 数组
 * @param {string[]} highlightCuesStatus - cue 状态数组 (keep/delete/edit/add/null)
 * @param {string[]} keyConceptsStatus - concept 状态数组
 * @param {number} currentCueIndex - 当前选中的 cue 索引
 * @returns {string} HTML 字符串
 */
export const buildProcessedAnnotationDataResponseNewLogic = (
  response,
  originalCues,
  currentCues,
  highlightCuesStatus,
  keyConceptsStatus,
  currentCueIndex
) => {
  if (!response) return "";

  // 1. 在 response 中定位原始 cue 的位置
  const positions = getFilteredCuePositions(response, originalCues);

  // 2. 构建 HTML
  let result = "";
  let lastEnd = 0;

  positions.forEach(({ start, end, cue, index }) => {
    // 添加未处理的普通文本
    result += response.slice(lastEnd, start);

    const status = highlightCuesStatus[index];
    const currentCue = currentCues[index] || "";

    // 与旧逻辑一致的类名
    let className = "highlight-keyword";
    if (currentCueIndex === index) className += " current";
    if (status === "edit") className += " edit";
    else if (status === "add") className += " add";
    else if (status === "keep") className += " keep";
    else if (status === "delete") className += " delete";

    if (
      highlightCuesStatus[index] !== null &&
      keyConceptsStatus[index] !== null
    ) {
      className += " processed";
    }

    // 所有 cue 都跟 original 对比 diff
    const diffHtml = buildCueDiffHtml(cue, currentCue, index);
    result += `<span class="${className}" data-cue="${cue}" data-index="${index}">${diffHtml}</span>`;

    lastEnd = end;
  });

  // 添加最后一段普通文本
  result += response.slice(lastEnd);

  // 追加 add 状态的 cue（新 cue，不在原始 response 中）
  currentCues.forEach((cue, index) => {
    if (highlightCuesStatus[index] === "add" && cue) {
      let className = "highlight-keyword add";
      if (currentCueIndex === index) className += " current";
      if (
        highlightCuesStatus[index] !== null &&
        keyConceptsStatus[index] !== null
      ) {
        className += " processed";
      }
      result += `<div class="added-cue-wrapper"><span class="${className}" data-cue="${cue}" data-index="${index}">${cue}</span></div>`;
    }
  });

  return result;
};

/**
 * 字符级 diff：对比 oldCue 和 newCue，返回带 diff 标记的 HTML
 */
function buildCueDiffHtml(oldCue, newCue, index) {
  const lcs = lcsMatrix(oldCue, newCue);

  let result = "";
  let i = oldCue.length;
  let j = newCue.length;

  const segments = [];
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldCue[i - 1] === newCue[j - 1]) {
      segments.unshift({ type: "same", char: oldCue[i - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || lcs[i][j - 1] >= lcs[i - 1][j])) {
      segments.unshift({ type: "add", char: newCue[j - 1] });
      j--;
    } else if (i > 0) {
      segments.unshift({ type: "del", char: oldCue[i - 1] });
      i--;
    }
  }

  // 合并连续相同类型的段
  const merged = [];
  for (const seg of segments) {
    if (merged.length > 0 && merged[merged.length - 1].type === seg.type) {
      merged[merged.length - 1].text += seg.char;
    } else {
      merged.push({ type: seg.type, text: seg.char });
    }
  }

  for (const block of merged) {
    const escaped = escapeHtml(block.text);
    switch (block.type) {
      case "same":
        result += escaped;
        break;
      case "add":
        result += `<span class="diff-add" data-index="${index}">${escaped}</span>`;
        break;
      case "del":
        result += `<span class="diff-del" data-index="${index}">${escaped}</span>`;
        break;
    }
  }

  return result;
}

/**
 * 计算 LCS 矩阵
 */
function lcsMatrix(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * 从原文中定位 cue 位置
 */
function getFilteredCuePositions(response, highlightCues) {
  const cuesWithIndex = highlightCues.map((cue, index) => ({ cue, index }));

  const positions = [];
  const lastPositions = new Map();

  cuesWithIndex.forEach(({ cue, index }) => {
    let start = lastPositions.get(cue) || 0;
    const foundIndex = response.indexOf(cue, start);

    if (foundIndex !== -1) {
      positions.push({
        start: foundIndex,
        end: foundIndex + cue.length,
        cue,
        index,
      });
      lastPositions.set(cue, foundIndex + 1);
    }
  });

  positions.sort((a, b) => {
    if (b.cue.length !== a.cue.length) {
      return b.cue.length - a.cue.length;
    }
    return a.start - b.start;
  });

  const filteredPositions = [];
  const usedRanges = [];
  positions.forEach((pos) => {
    const isOverlapping = usedRanges.some(
      (range) => pos.start < range.end && pos.end > range.start
    );
    if (!isOverlapping) {
      filteredPositions.push(pos);
      usedRanges.push({ start: pos.start, end: pos.end });
    }
  });

  filteredPositions.sort((a, b) => a.start - b.start);
  return filteredPositions;
}
