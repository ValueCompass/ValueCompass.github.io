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
