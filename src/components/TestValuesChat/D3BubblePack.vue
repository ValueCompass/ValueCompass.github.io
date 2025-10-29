<template>
  <div class="bubble-pack">
    <svg ref="svgRef" width="100%" height="100%" viewBox="0 0 500 500"></svg>
  </div>
</template>

<script setup>
import * as d3 from "d3";
import { onMounted, ref } from "vue";

const props = defineProps({
  value: {
    type: Array,
    required: false,
    default: [],
  },
});

const svgRef = ref(null);

onMounted(() => {
  // const data = [
  //   { name: "East Asian Culture", value: 90, color: "#9BDDF9" },
  //   { name: "South Asian Culture", value: 10, color: "#0856A7" },
  //   { name: "Latin American Culture", value: 12, color: "#0B70C3" },
  //   { name: "Western Culture", value: 18, color: "#66BFEC" },
  //   { name: "Middle Eastern Culture", value: 15, color: "#409DDB" },
  //   { name: "African Culture", value: 10, color: "#05408C" },
  // ];
  console.log("!!!,", props.value);
  const data = formatCultures(props.value);
  console.log(data);
  const svgWidth = 500;
  const svgHeight = 500;
  const packSize = Math.min(svgWidth, svgHeight); // 布局尺寸

  const root = d3.hierarchy({ children: data }).sum((d) => d.value);
  const pack = d3.pack().size([packSize, packSize]).padding(5);
  pack(root);

  const svg = d3.select(svgRef.value);
  svg.selectAll("*").remove(); // 清空
  //   svg.style("background-color", "red"); // 背景红色

  function getTextColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "#000" : "#fff";
  }

  // 计算圆边界，实现完全居中
  const leaves = root.leaves();
  const minX = d3.min(leaves, (d) => d.x - d.r);
  const maxX = d3.max(leaves, (d) => d.x + d.r);
  const minY = d3.min(leaves, (d) => d.y - d.r);
  const maxY = d3.max(leaves, (d) => d.y + d.r);

  const offsetX = (svgWidth - (maxX - minX)) / 2 - minX;
  const offsetY = (svgHeight - (maxY - minY)) / 2 - minY;

  // 创建圆
  const nodes = svg
    .selectAll("g")
    .data(leaves)
    .enter()
    .append("g")
    .attr("transform", (d) => `translate(${d.x + offsetX},${d.y + offsetY})`);

  nodes
    .append("circle")
    .attr("r", (d) => d.r)
    .attr("fill", (d) => d.data.color)
    .attr("stroke", "#333")
    .attr("stroke-width", 0);

  // 自动换行函数
  function wrapText(text, radius) {
    const words = text.split(/\s+/);
    const maxChars = Math.floor(radius / 7);
    let lines = [];
    let line = "";
    words.forEach((word) => {
      if ((line + " " + word).trim().length > maxChars) {
        lines.push(line.trim());
        line = word;
      } else {
        line += " " + word;
      }
    });
    if (line) lines.push(line.trim());
    return lines;
  }

  // 绘制文字
  nodes.each(function (d) {
    const g = d3.select(this);
    const textColor = getTextColor(d.data.color);
    const linesName = wrapText(d.data.name, d.r);
    const linesValue = [d.data.value.toString() + "%"];
    const allLines = linesName.concat(linesValue);

    const text = g
      .append("text")
      .attr("fill", textColor)
      .attr("text-anchor", "middle");

    allLines.forEach((line, i) => {
      //   const fontSize = d.r / 4; // 根据圆半径自动调整文字大小
      const fontSize = 18; // 根据圆半径自动调整文字大小
      text
        .append("tspan")
        .attr("x", 0)
        .attr("y", (i - allLines.length / 2 + 0.5) * (fontSize + 2))
        .attr("font-size", fontSize)
        .attr("font-weight", "600") // ✅ 加粗文字
        .text(line);
    });
  });
});

/**
 * 将 closest_culture 数据转为带 name、value、color 的数组，并按分数降序排列
 * @param {Array} data - 原始的 closest_culture 数组，例如 [["East Asian Culture", 0.91], ...]
 * @returns {Array} 格式化后的数组
 */
// function formatCultures(data = []) {
//   // 自定义颜色映射
//   const colorMap = {
//     "East Asian Culture": "#9BDDF9",
//     "South Asian Culture": "#0856A7",
//     "Latin American Culture": "#0B70C3",
//     "Western Culture": "#66BFEC",
//     "Middle Eastern Culture": "#409DDB",
//     "African Culture": "#05408C",
//   };
//   const colors = ['#9BDDF9',"#0856A7","#0B70C3","#66BFEC", "#409DDB","#05408C"]

//   // 转换并排序
//   return data

//     .sort((a, b) => b.value - a.value).map(([name, score]) => ({
//       name,
//       value: Math.round((score ?? 0) * 100),
//       color: colorMap[name] || "#0b70c3",
//     })); // 按 value 从高到低排序
// }

function formatCultures(data = []) {
  const colors = [
    "#9BDDF9",
    "#66BFEC",
    "#409DDB",
    "#0B70C3",
    "#0856A7",
    "#05408C",
  ];

  // 1. 排序（从高到低）
  const sorted = data.sort((a, b) => b[1] - a[1]);

  // 2. 依次映射颜色（按照排序后的顺序）
  return sorted.map(([name, score], index) => ({
    name,
    value: Math.round((score ?? 0) * 100),
    color: colors[index % colors.length], // 循环使用颜色，防止数量超出
  }));
}
</script>

<style scoped>
.bubble-pack {
  width: 100%;
  /* height: 500px; 可根据需求调整高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
