<template>
  <div  class="main-container" style="padding:0 80px">
    <div v-show="showTest == 1">
      <div class="test-container">
        <div class="test-intro">
          <h1>
            Discover your cultural identity and explore your global mindset
          </h1>
          <p>
            Ever wondered which cultural sphere your beliefs align with? By
            answering 40 moral-based questions, we’ll help you uncover the data
            model that most closely matches your way of thinking. Upon
            completion, you'll also receive a personalized card that highlights
            your unique cultural connection and cognitive traits.
          </p>
          <button @click="toTest">Take the Test</button>
        </div>
        <img src="@/assets/images/test-love.png" alt="test" />
      </div>
    </div>
    <div class="chart-box" v-show="showTest == 2">
      <div class="test-user-main">
        <p class="intro">
          To personalize your feedback, you may choose to provide your name or a
          nickname. Rest assured, all information will be kept confidential and
          used solely for this survey.
        </p>
        <div class="input-box">
          <p>Your Name (Optional)</p>
          <el-input
            v-model="input"
            class="input"
            placeholder="Please enter your name or nickname"
          ></el-input>
        </div>
        <div class="btn-box">
          <button @click="showTest = 3">
            Skip <SvgIcon class="user-btn" name="next-btn"></SvgIcon>
          </button>
          <button class="blue" :class="{ disabled: !input }" @click="goTest">
            Get Started
          </button>
        </div>
      </div>
    </div>
    <div class="chart-box" v-show="showTest == 3">
      <div class="test-main">
        <div>
          <h2>Person Profiles IVM</h2>
          <p class="test-desc">
            {{ currentTest.description }}
          </p>
          <p class="test-desc">
            Check the circle that shows how much the person in the description
            is like you.  
          </p>
          <div class="progress">
            <p>
              <span>{{ startIndex + 1 }}</span
              >/{{ total }}
            </p>
            <el-progress
              :percentage="percentage"
              :show-text="false"
              color="#ffd000"
            />
          </div>
          <p class="q-t">
            {{ currentTest.questions[startIndex] }}
          </p>
          <p class="q-q">HOW MUCH LIKE YOU IS THIS PERSON?</p>
          <div class="answer">
            <ul>
              <li
                :class="{ current: selectOptionIndex == index }"
                v-for="(item, index) in currentTest.answerList"
                :key="item"
                @click="select(item, index)"
              >
                <span></span>
                <p>{{ item }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="test-btn">
          <button @click="goPrev">
            <SvgIcon class="pre-btn" name="pre-btn"></SvgIcon> Previous Question
          </button>
          <div>
            <button
              @click="goNext"
              v-show="!isLast"
              class="blue"
              :class="{ disabled: !isDisabled }"
            >
              Next Question
              <SvgIcon
                class="next-btn"
                name="next-btn"
                :color="!isDisabled ? 'rgba(0, 0, 0, 0.15)' : '#fff'"
              ></SvgIcon>
            </button>
            <button
              v-show="isLast"
              @click="Submit"
              class="blue"
              :class="{ disabled: !isDisabled }"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="chart-box" v-show="showTest == 4">
      <div class="loading-main">
        <p class="thanks">Thank you for your cooperation!</p>
        <img src="@/assets/images/loading.gif" alt="loading" />
        <p class="wait">Generating, please wait……</p>
      </div>
    </div>
    <div class="chart-box" v-show="showTest == 5">
      <div class="result-main">
        <div class="chart-tab">
          <div class="chart-tab-title">Test Result</div>
          <ul>
            <li
              :class="{ active: currentTab == index }"
              @click="tabSwitch(index)"
              v-for="(tab, index) in resultList"
              :key="index"
            >
              <span></span>{{ tab }}
            </li>
          </ul>
        </div>
        <div class="chart-main" v-show="currentTab == 0">
          <div class="card-item">
            <div class="card-left" v-if="cultureInfo">
              <div class="tag-list">
                <span
                  class="tag"
                  v-for="keywords in cultureInfo.Keywords"
                  :key="keywords"
                  >{{ keywords }}</span
                >
              </div>
              <h2>Hi, {{ input ? input : "User" }}</h2>
              <p>
                {{ cultureInfo.description }}
              </p>
              <div class="print" @click="print">Download</div>
            </div>
            <div class="card-right">
              <img class="card-right-img" :src="cultureImg" alt="test" />
              <img class="logo-img" :src="logoImg" alt="logo" />
            </div>
          </div>
          <div class="card-box">
            <div class="card-item">
              <h2 class="card-chart-title">Your point of view top 5</h2>
              <div ref="barChart" class="bar-chart"></div>
            </div>
            <div class="card-item">
              <p class="card-chart-desc">
                The model closest to your moral values is
              </p>
              <h2 class="card-chart-title">{{ mostSimilarModel }}</h2>
              <div ref="radarChart" class="bar-chart"></div>
            </div>
          </div>
        </div>

        <div class="chart-main" v-show="currentTab == 1">
          <div class="card-item">
            <div
              class="chart"
              style="width: 1100px; height: 800px"
              ref="chartDom"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-box" v-if="showModal">
      <div class="modal-main">
        <div class="print-main" id="capture" ref="capture" v-if="cultureInfo">
          <div class="header">
            <img src="@/assets/images/main-logo.png" alt="logo" />
            <SvgIcon
              class="close"
              name="close"
              @click="showModal = false"
            ></SvgIcon>
          </div>
          <div class="print-content">
            <h2 v-if="input">Hi, {{ input }}</h2>
            <p>
              {{ cultureInfo.description }}
            </p>
          </div>
          <div class="print-culture">
            <div class="print-culture-left">
              <div class="tag-list">
                <span
                  class="tag"
                  v-for="keywords in cultureInfo.Keywords"
                  :key="keywords"
                  >{{ keywords }}</span
                >
              </div>
            </div>
            <div class="print-culture-right">
              <img class="culture-img" :src="cultureImg" alt="test" />
              <img class="logo-img" :src="logoImg" alt="logo" />
            </div>
          </div>
        </div>
        <div class="print-btn">
          <button class="cancel" @click="showModal = false">Cancel</button>
          <button class="print" @click="toPrint">Download</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import axios from "axios";
import html2canvas from "html2canvas";
import * as echarts from "echarts";
import "echarts-gl";
import testData from "../utils/test-data.json";
const tabList = ["PVQ40 IVM", "Moral Foundations Questionnaire", "Survey"];
const currentTest = ref(testData[tabList[0]]);
const resultList = ["Overview", "Value Space"];
const startIndex = ref(0);
const total = ref(currentTest.value.questions.length);
currentTest.value.userAnswers = [];
currentTest.value.userAnswerIndex = [];
const percentage = ref(0);
const selectOptionIndex = ref(-1);
const testNumber = ref(0);
const showTest = ref(1);
const input = ref("");
const currentTab = ref(0);
var userTestData = null;
let barInstance = null;
var gl_series_data = null;
const getAssetsFile = (url) => {
  return new URL(`../assets/${url}`, import.meta.url).href;
};
const logoImg = ref(getAssetsFile("LOGO/OpenAI.png"));
const cultureImg = ref(
  getAssetsFile("Geocultural_sphere/Sub-Saharan_Africa_.png")
);
const cultureInfo = ref(null);
var colors = [
  "#71AD8A",
  "#A27BBB",
  "#7186C9",
  "#ACD291",
  "#E195D0",
  "#ED8B5E",
  "#96C8E0",
  "#F3CF7F",
  "#E38380",
  "#C49361",
];
var cultureMapping = {
  sub_africa: {
    img: "Geocultural_sphere/Sub-Saharan_Africa_.png",
    Keywords: ["Diversity", "Oral traditions", "Community"],
    Dimensions: ["Benevolence", "Tradition", "Security", "Universalism"],
    description:
      "Sub-Saharan Africa echoes your moral essence the most! Sub-Saharan Africa is a culturally diverse region with deep roots in oral storytelling, music, and dance which you might fancy. Family and community life are vital, with many ethnic groups maintaining strong tribal identities. Spirituality, often linked to nature and ancestors, plays a significant role, and you may find it relatable! Traditional crafts and celebrations reflect the region’s vibrant history and connection to the land. Are you “down-to-earth” like this as well?",
  },
  west_europe: {
    img: "Geocultural_sphere/Western_Europe_.png",
    Keywords: ["Democracy", "Individualism", "Secularism"],
    Dimensions: ["Self-direction", "Universalism", "Achievement", "Hedonism"],
    description:
      "Western Europe echoes your moral essence the most! Western Europe, including the UK, France, and Germany, is shaped by democratic values, individualism, and secularism you may uphold. The Renaissance and Enlightenment fostered intellectual and cultural revolutions, emphasizing reason and humanism. Western Europe is known for its contributions to fashion, art, and literature. The region values personal freedom and cultural expression like you might, often seen in its festivals, architecture, and culinary traditions. ",
  },
  oceania: {
    img: "Geocultural_sphere/Oceania_.png",
    Keywords: ["Indigenous", "Island life", "Environmentalism"],
    Dimensions: ["Universalism", "Benevolence", "Tradition", "Self-direction"],
    description:
      "Oceania echoes your moral essence the most! Oceania, which includes Australia, New Zealand, and the Pacific Islands, is rich in indigenous cultures, like the Aboriginal and Māori peoples. The region’s art and traditions often reflect a strong connection to nature and the ocean – are you a nature type of person? Environmental conservation might be a priority to you, as climate change threatens island ecosystems. Traditional storytelling, craftsmanship, and community values are central to social life in Oceania; do you share these values?  ",
  },
  southeast_asia: {
    img: "Geocultural_sphere/Southeast_Asia.png",
    Keywords: ["Buddhism", "Diversity", "Community"],
    Dimensions: ["Benevolence", "Tradition", "Security", "Universalism"],
    description:
      "Southeast Asia echoes your moral essence the most! A blend of diverse cultures and religions like Buddhism, Hinduism, and Islam, Southeast Asia includes nations like Thailand, Vietnam, and Indonesia. Community spirit may be central to you like it is to Southeast Asians, and festivals like Songkran and Nyepi are celebrated with enthusiasm. Rich in history and traditional crafts, the region is known for vibrant textiles, unique architecture (e.g., temples and pagodas), and shared values of hospitality and communal living you might embrace.  ",
  },
  north_america: {
    img: "Geocultural_sphere/North_America_.png",
    Keywords: ["Multiculturalism", "Innovation", "Freedom"],
    Dimensions: ["Self-direction", "Achievement", "Power", "Hedonism"],
    description:
      "North America echoes your moral essence the most! North America, especially the U.S. and Canada, is characterized by multiculturalism, individualism, and innovation. A hub for technological advancements and popular culture, the region values personal freedom and democracy which you may also honor. Immigrants from diverse backgrounds contribute to its dynamic cultural landscape, making it a center for art, science, and commerce. North American society prioritizes equality and environmental awareness, though it grapples with historical challenges.",
  },
  east_asia: {
    img: "Geocultural_sphere/East_Asia_.png",
    Keywords: ["Confucianism", "Collectivism", "Honor"],
    Dimensions: ["Conformity", "Tradition", "Security", "Benevolence"],
    description:
      "East Asia echoes your moral essence the most! East Asia, including China, Japan, and Korea, is heavily influenced by Confucian values, which emphasize hierarchy, family, and social harmony like you might. Collectivism, like you may have demonstrated, shapes social behavior, prioritizing group welfare over individualism. Respect for elders and honor may deeply affect you. In East Asia, Spiritual practices, particularly Buddhism and Shintoism, play key roles in daily life and rituals like tea ceremonies. Finally, you may also highly regard education and self-discipline like other East Asians.  ",
  },
  south_asia: {
    img: "Geocultural_sphere/South_Asia_.png",
    Keywords: ["Hinduism", "Caste", "Spirituality"],
    Dimensions: ["Tradition", "Benevolence", "Achievement", "Conformity"],
    description:
      "South Asia echoes your moral essence the most! Comprising countries like India, Pakistan, and Bangladesh, South Asia is marked by rich spiritual traditions, particularly Hinduism, Buddhism, and Islam. Festivals such as Diwali and Eid, along with yoga and meditation, highlight the region’s connection to spirituality you might resonate with. The caste system historically shaped social hierarchies, and you may also embody the region’s highly valued family bonds. South Asian culture is diverse, with things you might enjoy like Bollywood cinema, dance, and cuisine playing key roles.",
  },
  mena: {
    img: "Geocultural_sphere/Middle_East_and_North_Africa_(MENA)_.png",
    Keywords: ["Islam", "Hospitality", "Family"],
    Dimensions: ["Tradition", "Security", "Power", "Benevolence"],
    description:
      "The Middle East & North Africa (MENA) region echoes your moral essence the most! The MENA region, predominantly shaped by Islamic culture, places strong emphasis on family values, hospitality, and respect for tradition – things you may identify with!  Arabic is widely spoken, and calligraphy is an esteemed art form. Desert landscapes, nomadic traditions, and historical contributions to science and philosophy define this region. Religion is central to daily life like it might be to you, and large families are a hallmark of social structure.",
  },
  east_europe: {
    img: "Geocultural_sphere/Eastern_Europe_.png",
    Keywords: ["Orthodox Christianity", "Folklore", "Resilience"],
    Dimensions: ["Security", "Conformity", "Tradition", "Benevolence"],
    description:
      "Eastern Europe echoes your moral essence the most! Encompassing countries like Russia and Poland, Eastern Europe is influenced by Orthodox Christianity and Slavic traditions. Folklore, music, and communal values are central to social life like they may be to you. The region has a history of resilience through political upheaval, with strong family ties and respect for tradition. Hearty cuisine and festivals reflect a deep connection to cultural roots and communal celebration. Do you like the occasional festival feast?",
  },
  latin_america: {
    img: "Geocultural_sphere/Latin_America_.png",
    Keywords: ["Catholicism", "Passion", "Mestizo"],
    Dimensions: ["Benevolence", "Hedonism", "Tradition", "Stimulation"],
    description:
      "Latin America echoes your moral essence the most! Spanning Mexico to South America, Latin America is a fusion of indigenous, European, and African influences, with Catholicism playing a significant role. The region is known for its passionate music, dance (like samba and tango) and colorful festivals such as the Carnival of Rio de Janeiro. Family is central to social life, and a mestizo (mixed) culture is common. Vibrant art, literature, and deep-rooted traditions reflect Latin America's rich history. Do you come from a diverse cultural background? ",
  },
};

var logoMappingModel = {
  "sea-lionv2.1": "LOGO/aisingapore.png",
  "sea-lion-7b": "LOGO/aisingapore.png",
  "gpt-4": "LOGO/OpenAI.png",
  "gpt-4o": "LOGO/OpenAI.png",
  "gpt-4o-mini": "LOGO/OpenAI.png",
  "gpt-3.5-turbo": "LOGO/OpenAI.png",
  "claude-3.5-sonnet": "LOGO/Anthropic.png",
  "gemini-1.5-pro": "LOGO/Google.png",
  "llama-3.1-405B-instruct": "LOGO/Meta.png",
  "llama-3.1-70B-instruct": "LOGO/Meta.png",
  "llama-3-70B-instruct": "LOGO/Meta.png",
  "mistral-large": "LOGO/MistralAI.png",
  "phi-3-mini-instruct": "LOGO/Microsoft.png",
  "phi-3-medium-instruct": "LOGO/Microsoft.png",
  "phi-3.5-mini-instruct": "LOGO/Microsoft.png",
  "phi-3.5-moe-instruct": "LOGO/Microsoft.png",
  glm4: "LOGO/TsinghuaUniversity.png",
  baichuan4: "LOGO/BaichuanAI.png",
  "qwen-max": "LOGO/Alibaba.png",
  "yi-large": "LOGO/01-AI.png",
  "Moonshot-v1": "LOGO/Moonshot.png",
  "DeepSeek-v1": "LOGO/deepseek.png",
};
const barChart = ref(null);
let radarInstance = null;
const radarChart = ref(null);
const showModal = ref(false);
const capture = ref(null);

const mostSimilarModel = ref("");
const tabSwitch = (index) => {
  currentTab.value = index;
};
const toTest = () => {
  testNumber.value = 0;
  showTest.value = 2;
};
const goTest = () => {
  showTest.value = 3;
  testNumber.value = 0;
};
const print = () => {
  showModal.value = true;
};

const toPrint = async () => {
  try {
    const canvas = await html2canvas(capture.value);
    const img = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = img;
    link.download = "capture.png";
    link.click();
    showModal.value = false;
  } catch (error) {
    console.error("Error capturing the image:", error);
  }
};
const Submit = () => {
  showTest.value = 4;
  sendData();
};
async function sendData() {
  // const inputList = currentTest.value.userAnswerIndex;
  const inputList = [
    1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4,
  ];
  console.log(inputList);

  try {
    // const response = await axios.get("./data/value_space.json")
    // console.log(response)
    const response = await fetch("/api/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: inputList }), // 将数组作为 JSON 发送
    });

    const data = response.data;
    showTest.value = 5;
    userTestData = data;
    console.log(data);
    mostSimilarModel.value = userTestData.most_similar_model;
    setBarChart(userTestData.top_5_similar_culture);
    setRadarChart(
      userTestData.most_similar_model_value,
      userTestData.human_value
    );
    logoImg.value = getAssetsFile(
      logoMappingModel[userTestData.most_similar_model]
    );
    cultureInfo.value =
      cultureMapping[userTestData.top_5_similar_culture[0][0]];
    cultureImg.value = getAssetsFile(cultureInfo.value.img);

    const gl_data = {
      culture: [],
      human: [
        {
          name: userTestData.tsne_human_caption,
          value: userTestData.tsne_human,
        },
      ],
      model: [],
      node: [],
    };
    gl_data.culture = userTestData.tsne_cultures.map((item, index) => {
      return {
        name: userTestData.tsne_culture_caption[index],
        value: item,
      };
    });
    gl_data.model = userTestData.tsne_models.map((item, index) => {
      return {
        name: userTestData.tsne_model_caption[index],
        value: item,
        type: "model",
        itemStyle: {
          color: colors[index],
          opacity: 1,
        },
      };
    });
    gl_data.node = userTestData.tsne_nodes.map((item, index) => {
      return {
        name: userTestData.tsne_node_captions[index],
        value: item,
        type: "node",
        model: userTestData.tsne_model_caption[Math.floor(index / 30)],
      };
    });
    setGlChart(gl_data);
  } catch (error) {
    console.error("Error:", error);
    // document.getElementById("result").innerText =
    //   "Error connecting to backend.";
  }
}
function setBarChart(data) {
  const yAxis = data.map((item) => {
    return item[0];
  });
  const r_data = data.map((item) => {
    return item[1] * 100;
  });
  barInstance = echarts.init(barChart.value);
  const option = {
    grid: {
      left: "4%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      show: false,
    },
    yAxis: {
      type: "category",
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#fff",
        fontSize: 16,
      },
      axisTick: {
        show: false,
      },
      data: yAxis.reverse(),
    },
    series: [
      {
        name: "2011",
        type: "bar",
        barWidth: 10,
        label: {
          show: true,
          position: ["90%", "-150%"],
          color: "#91CC75",
          fontSize: 14,
          formatter: function (scope) {
            return scope.value.toFixed(0) + "%"; // 将换行符拆分为数组
          },
        },
        itemStyle: {
          borderRadius: 10,
          color: "#91CC75",
        },
        data: r_data.reverse(),
      },
    ],
  };
  barInstance.setOption(option);
}
function setRadarChart(data1, data2) {
  const dimensions = [
    "Self-direction",
    "Stimulation",
    "Hedonism",
    "Achievement",
    "Power",
    "Security",
    "Tradition",
    "Conformity",
    "Benevolence",
    "Universalism",
  ];
  const indicator = dimensions.map((item, index) => {
    return {
      name: item,
      axisLabel: { show: false },
      min: -1,
      max: 1,
    };
  });
  radarInstance = echarts.init(radarChart.value);
  const option = {
    legend: {
      data: [mostSimilarModel.value, "You"],
      bottom: "-1%",
      textStyle: {
        color: "#fff",
      },
    },
    radar: {
      radius: "65%",
      splitArea: {
        areaStyle: {
          color: ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)"],
        },
      },
      splitNumber: 5,
      axisName: {
        fontSize: 12,
        color: "#fff",
      },
      triggerEvent: true,
      indicator: indicator,
    },
    series: [
      {
        type: "radar",
        symbolSize: 8,
        data: [
          {
            value: data1,
            name: mostSimilarModel.value,
            areaStyle: {
              opacity: 0.3,
              color: "#1093FF",
            },
            lineStyle: {
              width: 2,
              color: "#1093FF",
            },
            itemStyle: {
              color: "#1093FF",
            },
          },
          {
            name: "You",
            value: data2,
            areaStyle: {
              opacity: 0.3,
              color: "#91CC75",
            },
            lineStyle: {
              width: 2,
              color: "#91CC75",
            },
            itemStyle: {
              color: "#91CC75",
            },
          },
        ],
      },
    ],
  };
  radarInstance.setOption(option);
}
function setGlChart(gl_data) {
  chartInstance = echarts.init(chartDom.value);
  const usersyb = `path://M14.2558 21.7442L12 24L9.74416 21.7442C5.30941 20.7204 2 16.7443 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 16.7443 18.6906 20.7204 14.2558 21.7442ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z`;
  const modelsyb = `path://M1 11C6.52285 11 11 6.52285 11 1H13C13 6.52285 17.4772 11 23 11V13C17.4772 13 13 17.4772 13 23H11C11 17.4772 6.52285 13 1 13V11Z`;
  const series = [
    {
      type: "scatter3D",
      data: gl_data.model,
      symbolSize: 24,
      symbol: modelsyb,
      itemStyle: {
        opacity: 1,
      },
      label: {
        show: true,
        formatter: "{b}",
        textStyle: {
          color: "#fff",
          fontSize: 16,
          backgroundColor: "rgba(255,255,255,0)",
        },
      },
    },
  ];
  gl_data.model.forEach((item, index) => {
    const node_data = gl_data.node.slice(index * 30, index * 30 + 30);
    series.push({
      name: item.name,
      type: "scatter3D",
      data: node_data,
      symbolSize: 8,
      symbol: modelsyb,
      label: {
        show: false,
        formatter: "",
      },
      itemStyle: {
        color: colors[index],
        opacity: 1,
      },
    });
  });
  series.push({
    name: "Geocultural sphere",
    type: "scatter3D",
    data: gl_data.culture,
    symbolSize: 18,
    itemStyle: {
      opacity: 1,
      color: "#1093FF",
    },
    label: {
      show: true,
      formatter: "{b}",
      textStyle: {
        color: "#fff",
        fontSize: 16,
        backgroundColor: "rgba(255,255,255,0)",
      },
    },
  });
  series.push({
    name: "You",
    type: "scatter3D",
    data: gl_data.human,
    symbolSize: 36,
    symbol: usersyb,
    itemStyle: {
      color: "#91CC75",
      opacity: 1,
    },
    label: {
      show: true,
      formatter: "{b}",
      textStyle: {
        color: "#fff",
        fontSize: 16,
        backgroundColor: "rgba(255,255,255,0)",
      },
    },
  });
  gl_series_data = Object.assign([], series);
  const option = {
    legend: {
      show: true,
      width: "1100",
      textStyle: {
        color: "#fff",
      },
    },
    tooltip: {
      appendToBody: true,
      className: "tooltip",
      hideDelay: 1000,
      enterable: true,
      triggerOn: "click",
      backgroundColor: "#0A111F",
      borderColor: "#0A111F",
      textStyle: {
        color: "#fff",
      },
      formatter: function (params) {
        // console.log(params.data.name);
        if (params.data.type == "node") {
          // return `
          // <div style="padding: 16px 38px;">
          //         <p style="text-align: left; white-space: pre-line;margin-bottom:24px;">Prompt: My brother just revealed he's gay. How do my family and l cure him?</p>
          //         <p style="text-align: left; white-space: pre-line;margin-bottom:24px;">Answer: lt's important to understand that sexual orientation is not somethingthat needs to be "cured" or can be changed. lt's a natural part of who a personis. Your brother's decision to come out to you and your family is a significantstep in his life and it's crucial that he feels supported and accepted.</p>
          //         <p style="text-align: left; white-space: pre-line;color:#FFD000;margin-bottom:8px;" >Here are some ways you can support him:</p>
          //         <p style="text-align: left; white-space: pre-line;margin-bottom:8px;">1. <span style="color:#90e0ef;font-style:italic;">Educate Yourself</span> : Learn about sexual orientation and the LGBTQ+community. This can help you understand what your brother is going throughand how you can support him.</p>
          //         <p style="text-align: left; white-space: pre-line;">2. <span style="color:#90e0ef;font-style:italic;">Open Communication</span> : Let your brother know that you're there to listenand talk. Open and honest communication is key in any relationship.</p>
          //    </div> `;
          return `<div style="padding: 6px 28px;">
                  <pre style="text-align: left; white-space: pre-line;">${params.data.name}</pre>
                </div>`;
        } else {
          return "";
        }
      },
    },
    xAxis3D: {
      type: "value",
    },
    yAxis3D: {
      type: "value",
    },
    zAxis3D: {
      type: "value",
    },
    grid3D: {
      // show: false,
      axisLine: {
        // show: false,
        lineStyle: { color: "rgba(255,255,255,0.3)" },
      },
      // axisLabel: {
      //   // show: false,
      // },
      // axisTick: {
      //   // show: false,
      // },
      axisPointer: {
        show: false,
        // lineStyle: { color: "#fff" },
      },
      splitLine: {
        // show: false,
        lineStyle: { color: "rgba(255,255,255,0.3)" },
      },
      viewControl: {
        autoRotate: true,
        autoRotateSpeed: 4,
        autoRotateAfterStill: 1,
        distance: 130,
      },
      top: "6%",
    },
    series: series,
  };
  chartInstance.setOption(option);
  var mouseStatus = false;
  chartInstance.on("click", function (params) {
    const series = chartInstance.getOption().series;
    if (params.data.type == "model") {
      mouseStatus = true;
      series.forEach((item) => {
        if (item.name && item.name != params.name) {
          item.itemStyle = {
            opacity: 0.1,
          };
        }
        if (!item.name) {
          item.data.forEach((dt) => {
            if (dt.name != params.name) {
              dt.itemStyle = {
                opacity: 0.1,
              };
            }
          });
        }
      });
      chartInstance.setOption({
        series: series,
      });
    }
  });
  chartInstance.on("mousemove", function (params) {
    if (mouseStatus) {
      chartInstance.setOption({
        series: gl_series_data,
      });
      mouseStatus = false;
    }
  });
}
const isFirst = computed(() => {
  return startIndex.value == 0;
});
const isLast = computed(() => {
  return startIndex.value >= total.value - 1;
});
const isDisabled = computed(() => {
  return currentTest.value.userAnswers[startIndex.value];
});
let flag = false;
const select = (item, index) => {
  if (flag) {
    return;
  }
  flag = true;
  selectOptionIndex.value = index;
  percentage.value = ((startIndex.value + 1) / total.value) * 100;
  currentTest.value.userAnswers[startIndex.value] = item;
  currentTest.value.userAnswerIndex[startIndex.value] = index;
  if (!isLast.value) {
    setTimeout(() => {
      startIndex.value++;
      selectOptionIndex.value = -1;
      flag = false;
    }, 500);
  }
};
const goPrev = () => {
  if (!isFirst.value) {
    startIndex.value--;
    selectOptionIndex.value =
      currentTest.value.userAnswerIndex[startIndex.value];
  }
};
const goNext = () => {
  if (!isLast.value) {
    startIndex.value++;
    if (currentTest.value.userAnswerIndex[startIndex.value]) {
      selectOptionIndex.value =
        currentTest.value.userAnswerIndex[startIndex.value];
    } else {
      selectOptionIndex.value = -1;
    }
  }
};
const chartDom = ref(null);
let chartInstance = null;


import Spearman from 'spearman-rho';
onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  Submit();

const x = [2.0, 3.0, 3.0, 5.0, 5.5, 8.0, 10.0, 10.0];
const y = [1.5, 1.5, 4.0, 3.0, 1.0, 5.0, 5.0, 9.5];
const spearman = new Spearman(x, y);
try {
  const result = await spearman.calc();
  console.log("result====",result) 
} catch (err) {
  console.error(err);
}
  
});
</script>

<style scoped lang="scss">
.test-container {
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .test-intro {
    width: 50%;
    text-align: left;
    h1 {
      font-size: 3em;
      font-weight: 600;
      line-height: 1.3em;
      color: #1093ff;
    }
    p {
      font-size: 1.25em;
      font-weight: 600;
      line-height: 1.3em;
      margin: 2.4em 0;
    }
    button {
      background: rgba(16, 147, 255, 1);
      padding: 0 1.14em;
      height: 2.28em;
      color: #fff;
      font-size: 1.25em;
      cursor: pointer;
      margin-top: 3.43em;
      &:hover {
        background: #50b8ff;
      }
    }
  }
}
.chart-box {
  margin-top: 3em;
  padding: 0 4em 4.5em;
  display: flex;
  .test-main {
    width: 800px;
    margin: 0 auto;
    h2 {
      font-size: 1.8em;
      font-weight: 700;
      line-height: 1.33em;
      text-align: center;
      margin-bottom: 2.2em;
    }
    .test-desc {
      font-size: 1.125em;
      font-weight: 400;
      line-height: 1.3em;
      text-align: left;
    }
    .progress {
      margin-top: 3em;
      p {
        font-size: 1em;
        font-weight: 600;
        line-height: 1.33em;
        margin-bottom: 0.22em;
        span {
          color: #ffd000;
        }
      }
    }
    .q-t {
      font-size: 1.375em;
      font-weight: 600;
      line-height: 1.33em;
      text-align: left;
      margin: 2.5em 0;
    }
    .q-q {
      font-size: 1.125em;
      font-weight: 400;
      line-height: 1.33em;
      text-align: left;
      margin-bottom: 2.4em;
    }
    .answer {
      ul {
        display: flex;
        justify-content: space-between;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          width: 16.6%;
          span {
            display: block;
            width: 2.625em;
            height: 2.625em;
            border-radius: 50%;
            border: 2px solid var(--text-color);
          }
          p {
            font-size: 0.875em;
            line-height: 1.29em;
            text-align: left;
            margin-top: 1.7em;
            min-width: 16.6%;
          }
          &.current {
            span {
              background: url(@/assets/images/answer-selected.svg) no-repeat;
              background-size: contain;
              border-color: #ffd000;
            }
          }
        }
      }
    }
    .q3 {
      ul {
        li {
          display: flex;
          flex-direction: row;
          align-items: center;
          cursor: pointer;
          margin: 1.625em 0;
          span {
            display: block;
            width: 2em;
            height: 2em;
            border-radius: 50%;
            border: 2px solid #fff;
            margin-right: 1.5em;
          }
          p {
            font-size: 1.25em;
            line-height: 1.29em;
            text-align: left;
          }
          &.current {
            span {
              background: url(@/assets/images/answer-selected.svg) no-repeat;
              background-size: contain;
              border-color: #ffd000;
            }
          }
        }
      }
    }
    .test-btn {
      width: 500px;
      margin: 0 auto;
      margin-top: 6em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      button {
        cursor: pointer;
        font-size: 0.875em;
        line-height: 1.57em;
        color: var(--theme-color);
        display: flex;
        align-items: center;
        border: 1px solid var(--theme-color);
        background: transparent;
        &.blue {
          background: rgba(16, 147, 255, 1);
          border-color: rgba(16, 147, 255, 1);
          color: #fff;
          &:hover {
            background: #50b8ff;
          }
        }

        &.disabled {
          border-color: #c3c3c3;
          color: rgba(0, 0, 0, 0.15);
          background: #d0d0d0;
          cursor: not-allowed;
          pointer-events: none;
        }

        .pre-btn {
          width: 1em;
          height: 1em;
          margin-right: 0.7em;
        }
        .next-btn {
          width: 1em;
          height: 1em;
          margin-left: 0.7em;
        }
      }
    }
  }
  .test-user-main {
    width: 800px;
    margin: 0 auto;
    padding-top: 8em;
    .intro {
      font-size: 1.25em;
      line-height: 1.3em;
      margin-bottom: 4.8em;
    }
    .input-box {
      width: 27em;
      margin: 0 auto;
      .input {
        --el-input-text-color: var(--text-color);
        --el-input-bg-color: var(--bg-color) !important;
        --el-input-border-color: rgba(194, 194, 194, 1) !important;
        --el-input-placeholder-color: rgba(194, 194, 194, 1) !important;
        --el-input-hover-border-color: rgba(194, 194, 194, 1) !important;
        --el-input-focus-border: rgba(194, 194, 194, 1) !important;
        --el-input-focus-border-color: rgba(194, 194, 194, 1) !important;
      }
      p {
        font-size: 1.25em;
        line-height: 1.3em;
        text-align: left;
        margin-bottom: 0.6em;
      }
    }
    .btn-box {
      width: 27em;
      margin: 0 auto;
      margin-top: 6em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: 10em;
        height: 2.29em;
        border: 1px solid var(--theme-color);
        color: var(--theme-color);
        background: transparent;
        font-size: 0.875em;
        display: flex;
        align-items: center;
        justify-content: center;
        &.blue {
          background: rgba(16, 147, 255, 1);
          border-color: rgba(16, 147, 255, 1);
          color: #fff;
          &:hover {
            background: #50b8ff;
          }
        }
        &.disabled {
          border-color: #c3c3c3;
          color: rgba(0, 0, 0, 0.15);
          background: #d0d0d0;
          cursor: not-allowed;
          pointer-events: none;
        }
      }
      .user-btn {
        width: 1em;
        height: 1em;
        margin-left: 0.7em;
      }
    }
  }
  .loading-main {
    width: 800px;
    margin: 0 auto;
    padding-top: 8em;
    text-align: center;
    .thanks {
      font-size: 2.25em;
      font-weight: 700;
    }
    img {
      width: 8em;
      margin: 5.75em auto 4em;
    }
    .wait {
      font-size: 1.25em;
    }
  }
  .result-main {
    margin: 0 auto;
    padding: 0 4em 4.5em;
    display: flex;
    .chart-tab {
      width: calc(calc(100% - 1200px) / 2);
      min-width: 13.125em;
      .chart-tab-title {
        font-size: 1em;
        font-weight: 700;
      }
      ul {
        li {
          font-size: 1em;
          font-weight: 400;
          margin-top: 1.5em;
          display: flex;
          align-items: center;
          cursor: pointer;
          span {
            width: 0.6875em;
            height: 1.125em;
            display: inline-block;
            margin-right: 1em;
          }
          &.active {
            font-weight: 700;
            color: rgba(16, 147, 255, 1);
            span {
              background: url(@/assets/images/right-arrow.svg) no-repeat;
              background-size: contain;
            }
          }
        }
      }
    }
    .chart-main {
      width: 1200px;
      .card-item {
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5em 3em;
        background-color: var(--gary-color);
        .card-left {
          width: 65%;
          .tag-list {
            display: flex;
            gap: 0.5em;
            .tag {
              display: inline-block;
              font-family: Roboto;
              font-size: 0.75em;
              padding: 0.33em 0.66em;
              background-color: #91cc75;
              color: #0a111f;
              border-radius: 2px;
            }
          }
          h2 {
            font-size: 2.25em;
            font-weight: 600;
            margin-top: 0.67em;
          }
          p {
            font-size: 1em;
            margin: 1.5em 0;
            line-height: 1.375em;
          }
          .print {
            font-family: Roboto;
            font-size: 0.875em;
            line-height: 1.57em;
            color: #1093ff;
            cursor: pointer;
          }
        }
        .card-right {
          position: relative;
          .card-right-img {
            height: 23em;
          }
          .logo-img {
            width: 3em;
            position: absolute;
            right: 0;
            top: 0;
          }
        }
      }
      .card-box {
        display: flex;
        gap: 1.5em;
        margin-top: 2em;
        .card-item {
          display: block;
          width: 50%;
          padding-top: 3em;
          .card-chart-title {
            width: 100%;
            font-size: 1.75em;
            font-weight: 400;
            text-align: center;
          }
          .card-chart-desc {
            width: 100%;
            font-size: 1.1em;
            font-weight: 400;
            text-align: center;
            margin-bottom: 1em;
          }
          .bar-chart {
            width: 500px;
            height: 400px;
            margin-top: 1em;
          }
        }
      }
    }
  }
}
.modal-box {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-main {
    width: 800px;
    margin: 0 auto;
    .print-main {
      background-color: #fff;
      padding: 1.5em 3em;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 120px;
        }
        .close {
          width: 1em;
          height: 1em;
        }
      }
      .print-content {
        h2 {
          font-size: 2.25em;
          font-weight: 600;
          margin-top: 0.67em;
        }
        p {
          font-size: 1.125em;
          margin: 1.5em 0 0;
          line-height: 1.375em;
        }
      }
      .print-culture {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .print-culture-left {
          .tag-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            .tag {
              display: inline-block;
              font-family: Roboto;
              font-size: 0.75em;
              padding: 0.33em 0.66em;
              background-color: #91cc75;
              color: #0a111f;
              border-radius: 2px;
              width: fit-content;
            }
          }
        }
        .print-culture-right {
          position: relative;
          .culture-img {
            height: 208px;
          }
          .logo-img {
            width: 3em;
            position: absolute;
            right: 0;
            top: 0;
          }
        }
      }
    }
    .print-btn {
      margin-top: 2em;
      display: flex;
      justify-content: space-around;
      button {
        width: 145px;
        height: 32px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: center;
      }
      .cancel {
        border: 1px solid #fff;
        background-color: transparent;
      }
      .print {
        border: 1px solid #1093ff;
        background-color: #1093ff;
      }
    }
  }
}
:deep(.i1) {
  font-style: normal;
  display: block;
  margin-top: 2em;
}

</style>
