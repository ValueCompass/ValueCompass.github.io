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
export const mergeObj = (obj1, obj2, obj3) => {
  const objects = [obj1, obj2, obj3];

  const merged = objects.reduce((acc, curr) => {
    Object.entries(curr).forEach(([key, value]) => {
      acc[key] = acc[key] || {}; // 初始化累积对象的键
      acc[key] = { ...acc[key], ...value }; // 合并当前对象的值
    });
    return acc;
  }, {});
  return merged;
}


