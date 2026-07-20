/**
 * 统一计算可用的 cue 位置，保证渲染和编辑替换使用同一套坐标
 * @param {string} response - 原始文本
 * @param {string[]} highlightCues - 高亮 cue 数组
 * @returns {{ start: number, end: number, cue: string, index: number }[]}
 */
export const getFilteredCuePositions = (response, highlightCues) => {
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
};

/**
 * 构建带高亮的 HTML 文本
 * @param {string} response - 原始文本
 * @param {string[]} highlightCues - 高亮 cue 数组
 * @param {string[]} highlightCuesStatus - cue 状态数组 (keep/delete/edit/add/null)
 * @param {string[]} keyConceptsStatus - concept 状态数组
 * @param {number} currentCueIndex - 当前选中的 cue 索引
 * @returns {string} HTML 字符串
 */
export const buildProcessedAnnotationDataResponse = (
  response,
  highlightCues,
  highlightCuesStatus,
  keyConceptsStatus,
  currentCueIndex
) => {
  const filteredPositions = getFilteredCuePositions(response, highlightCues);

  let result = "";
  let lastEnd = 0;

  filteredPositions.forEach(({ start, end, cue, index }) => {
    result += response.slice(lastEnd, start);

    let className = "highlight-keyword";
    if (currentCueIndex === index) className += " current";
    if (highlightCuesStatus[index] === "edit") className += " edit";
    else if (highlightCuesStatus[index] === "add") className += " add";
    else if (highlightCuesStatus[index] === "keep") className += " keep";
    else if (highlightCuesStatus[index] === "delete") className += " delete";

    if (
      highlightCuesStatus[index] !== null &&
      keyConceptsStatus[index] !== null
    ) {
      className += " processed";
    }

    result += `<span class="${className}" data-cue="${cue}" data-index="${index}">${cue}</span>`;
    lastEnd = end;
  });

  result += response.slice(lastEnd);
  return result;
};
