export const getAvaData = (model, filterArr, mergeData) => {
  const modelData = mergeData[model];
  let point = 0;
  let num = 0;
  if (filterArr.length > 0) {
    filterArr.forEach((item) => {
      if (modelData[item]) {
        point += modelData[item];
        num++;
      }
    });
    point = point / num;
  } else {
    const data = Object.values(modelData);
    point = data.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    point = point / data.length;
  }
  return point;
}

export const getKeyValue = (array) => {
  const result = array.reduce((acc, item) => {
    const { model, ...rest } = item; // 提取name字段，其他字段放入rest
    acc[model] = rest; // 将剩余字段放入对象
    return acc;
  }, {});
  return result;
}
export const mergeObj = (obj1, obj2, obj3, obj4) => {
  const objects = [obj1, obj2, obj3, obj4];

  const merged = objects.reduce((acc, curr) => {
    Object.entries(curr).forEach(([key, value]) => {
      acc[key] = acc[key] || {}; // 初始化累积对象的键
      acc[key] = { ...acc[key], ...value }; // 合并当前对象的值
    });
    return acc;
  }, {});
  return merged;
}

export const ensureHttps = (url) => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  return url;
};

export const extractDomain = (url) => {
  const httpsUrl = ensureHttps(url);
  const domain = new URL(httpsUrl).hostname.split('.')[0];
  return domain;
};

export const getCurrentDateTime = () => {
  var now = new Date();
  var year = now.getFullYear(); // 获取完整的年份
  var month = now.getMonth() + 1; // 获取当前月份，需要加1因为月份是从0开始的
  var day = now.getDate(); // 获取当前日
  var hours = now.getHours(); // 获取当前小时数
  var minutes = now.getMinutes(); // 获取当前分钟数
  var seconds = now.getSeconds(); // 获取当前秒数

  // 补零函数
  function addZero(i) {
    return (i < 10 ? "0" : "") + i;
  }

  // 格式化输出
  return year + "-" + addZero(month) + "-" + addZero(day) + " " +
    addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
}

// 统计中日韩字符数：每个中日韩字符都按 1 个“字”计数，不包含空格。
export const getCjkCharacterCount = (text = "") => {
  return (
    text.match(
      /[\u4e00-\u9fff\u3400-\u4dbf\u3040-\u30ff\u31f0-\u31ff\uac00-\ud7af]/g,
    ) || []
  ).length;
};

// 统计英文单词数：连续英文字母组成 1 个词，连字符和撇号连接的形式仍算 1 个词。
export const getEnglishWordCount = (text = "") => {
  return (text.match(/[A-Za-z]+(?:['-][A-Za-z]+)*/g) || []).length;
};

// 统一长度口径：中日韩 1 个字符算 1 个“字”，英文 1 个单词算 1 个“字”，空格不计。
export const getPrincipleEffectiveLength = (text = "") => {
  return getCjkCharacterCount(text) + getEnglishWordCount(text);
};

// 标准化问题文本：统一大小写、去掉标点/符号并合并空格，避免格式差异影响相似度判断。
export const normalizeQuestion = (question = "") => {
  return String(question)
    .toLowerCase()
    .replace(/[\p{P}\p{S}]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const getEditDistanceSimilarity = (left, right) => {
  const row = Array.from({ length: right.length + 1 }, (_, index) => index);

  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    let previous = row[0];
    row[0] = leftIndex;

    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      const temp = row[rightIndex];
      row[rightIndex] = Math.min(
        row[rightIndex] + 1,
        row[rightIndex - 1] + 1,
        previous + (left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1),
      );
      previous = temp;
    }
  }

  return 1 - row[right.length] / Math.max(left.length, right.length);
};

const getLcsSimilarity = (left, right) => {
  let previousRow = Array(right.length + 1).fill(0);

  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    const currentRow = Array(right.length + 1).fill(0);

    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      if (left[leftIndex - 1] === right[rightIndex - 1]) {
        currentRow[rightIndex] = previousRow[rightIndex - 1] + 1;
      } else {
        currentRow[rightIndex] = Math.max(
          previousRow[rightIndex],
          currentRow[rightIndex - 1],
        );
      }
    }

    previousRow = currentRow;
  }

  return previousRow[right.length] / Math.max(left.length, right.length);
};

// leftQuestion 是用户编辑后的问题 a，rightQuestion 是原本的候选问题 b。
// 判断规则：
// 1. a 是 b 的连续子串：直接视为不通过。
// 2. b 是 a 的连续子串：允许扩写，但仍进入编辑距离和 LCS 相似度判断。
// 3. 编辑相似度或 LCS 相似度超过 90%：不通过。
// 返回 0 到 1；调用方使用 > 0.9 判断是否不通过。
export const getQuestionSimilarity = (leftQuestion, rightQuestion) => {
  const left = normalizeQuestion(leftQuestion);
  const right = normalizeQuestion(rightQuestion);

  if (!left || !right) return 0;
  if (left === right) return 1;

  if (left.length < right.length && right.includes(left)) {
    return 1;
  }

  const editSimilarity = getEditDistanceSimilarity(left, right);
  const lcsSimilarity = getLcsSimilarity(left, right);

  return Math.max(editSimilarity, lcsSimilarity);
};


// 分组函数
export const groupByDeveloper = (data) => {
  const grouped = {};

  data.forEach(model => {
      if (!grouped[model.developer]) {
          grouped[model.developer] = [];
      }
      grouped[model.developer].push(model);
  });

  // 对每组数据根据model首字母排序
  for (const developer in grouped) {
      grouped[developer].sort((a, b) => a.model.localeCompare(b.model));
  }

  // 将分组后整个开发者对象按每组第一个model的首字母排序
  const sortedGrouped = Object.keys(grouped)
      .sort((a, b) => grouped[a][0].model.localeCompare(grouped[b][0].model))
      .reduce((obj, key) => {
          obj[key] = grouped[key];
          return obj;
      }, {});

  return sortedGrouped;
};



import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export const downloadAsPDF = async (charts, modelList, pdfName) => {
  // const charts = [
  //   [
  //     {
  //       name: "Schwartz Theory of Basic Values",
  //       chart: SchwartzTableRef.value.$el,
  //     },
  //     {
  //       name: "Moral Foundation Theory",
  //       chart: MFTTableRef.value.$el,
  //     },
  //     {
  //       name: "Safety Taxonomy",
  //       chart: RiskTableRef.value.$el,
  //     },
  //     {
  //       name: "LLMs' Unique Value System",
  //       chart: FULVaTableRef.value.$el,
  //     },
  //   ],
  //   [
  //     {
  //       name: "Schwartz Theory of Basic Values",
  //       chart: VisualizationComponentProps.value.$refs.chartDom1.$refs.chartDom,
  //     },
  //     {
  //       name: "Moral Foundation Theory",
  //       chart: VisualizationComponentProps.value.$refs.chartDom2.$refs.chartDom,
  //     },
  //     {
  //       name: "Safety Taxonomy",
  //       chart: VisualizationComponentProps.value.$refs.chartDom3.$refs.chartDom,
  //     },
  //     {
  //       name: "LLMs' Unique Value System",
  //       chart: VisualizationComponentProps.value.$refs.chartDom4.$refs.chartDom,
  //     },
  //   ],
  //   [
  //     {
  //       name: "Culture Heatmap",
  //       chart: CulturalAlignmentComponentProps.value.$refs.chartDom,
  //     },
  //     {
  //       name: "Value Space",
  //       chart: ValueSpaceComponentProps.value.$refs.chartDom,
  //     },
  //   ],
  // ];
  console.log(modelList)
  const pdf = new jsPDF("p", "mm", "a4");
  // 获取页面宽高
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 10; // 设置统一的边距
  let top = margin;
  // download text

  for (let i = 0; i < modelList.length; i++) {
    pdf.setFillColor(245, 245, 245);
    // 绘制一个矩形，设置为背景色
    pdf.roundedRect(margin, top, pageWidth - 2 * margin, 35, 2, 2, 'F'); // 'F' 表示填充矩形
    // 在矩形上绘制文字
    pdf.setTextColor(0, 0, 0);
    top += 10
    pdf.setFontSize(16);
    pdf.text(modelList[i].model_name, margin + 5, top);
    // download test end
    top += 10

    // 定义普通文本和超链接文本
    let x = margin + 5
    let text = "Developer: " + modelList[i].model_info.developer;
    pdf.setTextColor(47, 47, 47);
    pdf.setFontSize(10);
    pdf.text(text, x, top);
    x += pdf.getTextWidth(text)
    x += 10

    text = "Website/GitHub: ";
    pdf.setFontSize(10);
    pdf.text(text, x, top);
    x += pdf.getTextWidth(text)
    text = addEllipsis(pdf, modelList[i].model_info.website, 30);
    pdf.setFontSize(10);
    pdf.text(text, x, top);
    pdf.link(x, top - 5, pdf.getTextWidth(text), 10, { url: modelList[i].model_info.website });
    // 绘制下划线
    pdf.setDrawColor(47, 47, 47); // 蓝色下划线
    pdf.line(x, top + 1, x + pdf.getTextWidth(text), top + 1); // 绘制第一个链接的下划线
    x += pdf.getTextWidth(text)
    x += 10

    text = "Paper/Report: ";
    pdf.setFontSize(10);
    pdf.text(text, x, top);
    x += pdf.getTextWidth(text)
    text = addEllipsis(pdf, modelList[i].model_info.report, 30);
    pdf.setFontSize(10);
    pdf.text(text, x, top);
    pdf.link(x, top - 5, pdf.getTextWidth(text), 10, { url: modelList[i].model_info.report });
    // 绘制下划线
    pdf.setDrawColor(47, 47, 47); // 蓝色下划线
    pdf.line(x, top + 1, x + pdf.getTextWidth(text), top + 1); // 绘制第一个链接的下划线
    x += pdf.getTextWidth(text)
    x += 10

    top += 8
    x = margin + 5

    text = "Type: " + modelList[i].model_info.type + "-Source";
    pdf.setFontSize(10);
    pdf.text(text, x, top);
    x += pdf.getTextWidth(text)
    x += 10

    text = "Publish Date: " + modelList[i].model_info['release date'].split(" ")[0];
    pdf.setFontSize(10);
    pdf.text(text, x, top);
    x += pdf.getTextWidth(text)
    x += 10

    text = "Measurement Date: 2025/2";
    pdf.setFontSize(10);
    pdf.text(text, x, top);
    x += pdf.getTextWidth(text)
    x += 10

    //  pdf.textWithLink(linkText, x + pdf.getTextWidth(text), y, { url: linkUrl });
    //  y += 10; // 调整 y 坐标

    //  // 添加超链接后的普通文本
    //  pdf.text(afterLinkText, x + pdf.getTextWidth(text) + pdf.getTextWidth(linkText), y);

    top += 10
  }
  top += 20



  for (let j = 0; j < charts.length; j++) {
    pdf.setFontSize(16);
    if (j > 0) {
      pdf.addPage();
      top = margin;
    }
    for (let i = 0; i < charts[j].length; i++) {
      const canvas = await html2canvas(charts[j][i].chart);
      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const setImgWidth = pageWidth - 2 * margin;
      const setImgHeight = (imgProps.height * setImgWidth) / imgProps.width;

      if (top + setImgHeight > pageHeight - margin) {
        pdf.addPage();
        top = margin;
      }

      // 添加文字并居中
      const text = charts[j][i].name;
      const textWidth = pdf.getTextWidth(text);
      const textX = (pageWidth - textWidth) / 2;
      pdf.setTextColor(0, 0, 0);
      pdf.text(text, textX, top); // 在顶部距离上方添加文字
      top += 8; // 文字高度

      // 添加图像
      pdf.addImage(imgData, "PNG", margin, top, setImgWidth, setImgHeight);
      top += setImgHeight + margin + 5;
    }
  }

  pdf.save(pdfName + ".pdf");
};


function addEllipsis(doc, text, maxWidth) {
  let width = doc.getTextWidth(text); // 获取原始文本宽度
  if (width <= maxWidth) {
    return text; // 如果文本宽度小于最大宽度，直接返回文本
  }

  // 如果文本超出了最大宽度，则添加省略号
  let truncatedText = text;
  while (doc.getTextWidth(truncatedText + "...") > maxWidth && truncatedText.length > 0) {
    truncatedText = truncatedText.slice(0, truncatedText.length - 1);
  }

  return truncatedText + "..."; // 返回截断并添加省略号的文本
}

