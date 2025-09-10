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
    china: "China.png",
    "south korea": "South-Korea.png",
    japan: "japan.png",
    thailand: "Thailand.png",
    malaysia: "malaysia.png",
    singapore: "Singapore.png",
    indonesia: "indonesia.png",
    "australia": "Australia.png"
};

export const countryIconBig = {
    china: "2-China.png",
    japan: "2-japan.png",
    singapore: "2-Singapore.png",
};

// 提供一个取色函数，避免直接访问对象时可能出错
export function getCountryColor(country) {
    return countryColors[country.toLowerCase()] || "#000"; // 默认黑色
}

export function getCountryColorSub(country) {
    return countryColorsSub[country.toLowerCase()] || "#000"; // 默认黑色
}

export function getCountryIcon(country) {
    return countryIcon[country.toLowerCase()] || "China.png"; // 默认黑色
}

export function getCountryIconBig(country) {
    return countryIconBig[country.toLowerCase()] || "China.png"; // 默认黑色
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


export const modelsList = [
    {
        value: "gpt-4o-mini",
    },
    {
        value: "ChatGPT-4o",
    },
    {
        value: "Claude Opus 4",
    },
    {
        value: "DeepSeek-R1",
    },
    {
        value: "Gemini-2.5-Pro",
    },
    {
        value: "Grok-4-0709",
    },
    {
        value: "Llama-3.1",
    },
    {
        value: "Phi-3-Medium",
    },
    {
        value: "Qwen3",
    },
]

export const countriesList = [
    {
        countryName: "China",
        countryValue: "China",
    },
    {
        countryName: "Japan",
        countryValue: "Japan",
    },
    {
        countryName: "Thailand",
        countryValue: "Thailand",
    },
    {
        countryName: "Malaysia",
        countryValue: "Malaysia",
    },
    {
        countryName: "South Korea",
        countryValue: "South_Korea",
    },
    {
        countryName: "Singapore",
        countryValue: "Singapore",
    },
    // {
    //     countryName: "indonesia",
    //     countryValue: "indonesia",
    // },
    {
        countryName: "Australia",
        countryValue: "Australia",
    },
];


export const findCategoryAndTopic = (data, question) => {
  for (const [category, topics] of Object.entries(data)) {
    for (const [topic, questions] of Object.entries(topics)) {
      if (questions.includes(question)) {
        return { category, topic }
      }
    }
  }
  return null
}


export const  getRandomQuestion = (data)=> {
  // 随机选一个第一层
  const categories = Object.keys(data)
  const randomCategory = categories[Math.floor(Math.random() * categories.length)]

  // 随机选一个第二层
  const topics = Object.keys(data[randomCategory])
  const randomTopic = topics[Math.floor(Math.random() * topics.length)]

  // 随机选一个第三层问题
  const questions = data[randomCategory][randomTopic]
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

  return {
    category: randomCategory,
    topic: randomTopic,
    currQuestion: randomQuestion,
    questionList: questions
  }
}
