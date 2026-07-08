/**
 * 判断两个字符串是否高度一致
 * @param {string} str1
 * @param {string} str2
 * @param {number} threshold - 相似度阈值，默认 0.8
 * @returns {boolean}
 */
export const isHighlySimilar = (str1, str2, threshold = 0.85) => {
  const s1 = (str1 || "").trim().toLowerCase();
  const s2 = (str2 || "").trim().toLowerCase();
  if (!s1 && !s2) return true;
  if (!s1 || !s2) return false;

  const similarity = computeSimilarity(s1, s2);
  return similarity >= threshold;
};

/**
 * 计算两个字符串的相似度（基于最长公共子序列 LCS）
 * @param {string} s1
 * @param {string} s2
 * @returns {number} 0~1
 */
function computeSimilarity(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 === 0 && len2 === 0) return 1;

  // LCS 长度
  const dp = new Array(len2 + 1).fill(0);
  for (let i = 1; i <= len1; i++) {
    let prev = 0;
    for (let j = 1; j <= len2; j++) {
      const temp = dp[j];
      if (s1[i - 1] === s2[j - 1]) {
        dp[j] = prev + 1;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      prev = temp;
    }
  }

  const lcsLen = dp[len2];
  // 相似度 = 2 * LCS / (len1 + len2)
  return (2 * lcsLen) / (len1 + len2);
}
