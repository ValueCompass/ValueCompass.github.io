export const countryColors = {
    china: "rgba(128, 0, 0, 1)",
    "south korea": "rgba(153, 92, 78, 1)",
    japan: "rgba(204, 103, 16, 1)",
    thailand: "rgba(41, 153, 198, 1)",
    malaysia: "rgba(9, 114, 130, 1)",
    singapore: "rgba(48, 84, 142, 1)",
    indonesia: "rgba(37, 21, 146, 1)",
    "australia": "rgba(120, 0, 150, 1)"
};

export const countryColorsSub = {
    china: "rgba(242, 170, 145, 1)",
    "south korea": "rgba(224, 180, 158, 1)",
    japan: "rgba(239, 182, 107, 1)",
    thailand: "rgba(124, 220, 237, 1)",
    malaysia: "rgba(96, 217, 214, 1)",
    singapore: "rgba(133, 173, 221, 1)",
    indonesia: "rgba(174, 160, 244, 1)",
    "australia": "rgba(244, 146, 242, 1)"
};

export const countryIcon = {
    china: "1.png",
    "south korea": "1.png",
    japan: "1.png",
    thailand: "1.png",
    malaysia: "1.png",
    singapore: "1.png",
    indonesia: "1.png",
    "australia": "1.png"
};

// 提供一个取色函数，避免直接访问对象时可能出错
export function getCountryColor(country) {
    return countryColors[country.toLowerCase()] || "#000"; // 默认黑色
}

export function getCountryColorSub(country) {
    return countryColorsSub[country.toLowerCase()] || "#000"; // 默认黑色
}

export function getCountryIcon(country) {
    return countryIcon[country.toLowerCase()] || "#000"; // 默认黑色
}

export function setOpacity(color, opacity) {
  // 1. 处理 #RGB 或 #RRGGBB
  if (color.startsWith('#')) {
    let r, g, b;
    if (color.length === 4) { // #RGB 简写
      r = parseInt(color[1] + color[1], 16);
      g = parseInt(color[2] + color[2], 16);
      b = parseInt(color[3] + color[3], 16);
    } else if (color.length === 7) { // #RRGGBB
      r = parseInt(color.slice(1, 3), 16);
      g = parseInt(color.slice(3, 5), 16);
      b = parseInt(color.slice(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  // 2. 处理 rgb(...) → 转换成 rgba
  if (color.startsWith('rgb(')) {
    return color.replace('rgb(', 'rgba(').replace(')', `, ${opacity})`);
  }

  // 3. 处理 rgba(...) → 替换 alpha 值
  if (color.startsWith('rgba(')) {
    return color.replace(/[\d.]+\)$/g, `${opacity})`);
  }

  // 4. 其他情况：原样返回
  return color;
}
