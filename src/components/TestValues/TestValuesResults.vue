<template>
  <div style="width: 100%;">
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
          <el-tabs v-model="currentTab" @tab-click="tabSwitch">
            <el-tab-pane
              v-for="tab in resultList"
              :key="tab.index"
              :label="'&nbsp;&nbsp;&nbsp;' + tab.name + '&nbsp;&nbsp;&nbsp;'"
              :name="tab.index"
            ></el-tab-pane>
          </el-tabs>
        </div>

        <div class="chart-main" v-show="currentTab == 0">
          <div class="card-item card-print" v-if="myScoreArrValue.length > 0">
            <div class="card-left">
              <h2>Hi, {{ input ? input : "User" }}</h2>
              <h3>Your Core Values are</h3>
              <div class="tag-list">
                <span
                  class="tag"
                  v-for="(item, index) in myScoreArrValue.slice(0, 3)"
                  :key="index"
                  >{{ item.SchwartzTheoryItem }}</span
                >
              </div>
              <p>{{ resultDesc }}</p>
            </div>
            <div class="card-right">
              <img class="card-right-img" :src="cultureImg" alt="test" />
              <!-- <img class="logo-img" :src="logoImg" alt="logo" /> -->
              <p>the image powered by Microsoft Designer</p>
            </div>
            <div class="card-bottom">
              <div>
                <img class="logo-img" :src="logoImg" alt="logo" width="128" />
              </div>
              <div>
                <p>
                  Interestingly,
                  <span class="model-name-span">{{
                    spearmanArrDetailValue[0]
                      ? spearmanArrDetailValue[0].model
                      : ""
                  }}</span>
                  aligns seamlessly with your value priorities,<br>
                  <span
                    >resonating with your mindset and core belief —— much
                    like finding a close friend.</span
                  >
                </p>
              </div>
            </div>
            <!-- <div class="print" @click="print">Download</div> -->
            <div class="print">
              <button class="print-btn" @click="print">Download</button>
            </div>
          </div>
          <div class="echart-container">
            <div class="card-item">
              <h2 class="card-chart-title">Your Schwartz Theory Item Scores</h2>
              <p class="card-chart-desc">Detailed Results for Each Item</p>
              <!-- <div ref="barChart" class="bar-chart"></div> -->
              <ul class="">
                <li v-for="(item, index) in myScoreArrValue" :key="index">
                  <span>{{ item.SchwartzTheoryItem }}</span>
                  <div>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="12"
                      :percentage="(item.score / 6) * 100"
                      color="rgba(172, 210, 145, 1)"
                      :aria-label="item.SchwartzTheoryItem + 'progress'"
                    >
                      <span
                        class="score-span"
                        style="color: rgba(47, 72, 30, 1)"
                        >{{ item.score }}</span
                      >
                    </el-progress>
                  </div>
                </li>
              </ul>
            </div>
            <div class="card-item">
              <h2 class="card-chart-title">The Model Closest to Your Values</h2>
              <p class="card-chart-desc">
                Discover the Model That Best Aligns with Your Ethical
                Perspectives
              </p>
              <!-- <div ref="radarChart" class="bar-chart"></div> -->
              <ul class="model-list">
                <li
                  v-for="(item, index) in spearmanArrDetailValue.slice(0, 5)"
                  :key="index"
                >
                  <span>{{ item.model }}</span>
                  <div>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="24"
                      :percentage="item.softmaxItem * 100"
                      color="rgba(172, 210, 145, 1)"
                      :aria-label="item.model + 'progress'"
                    >
                      <span
                        class="score-span"
                        style="color: rgba(47, 72, 30, 1)"
                        >{{ (item.softmaxItem * 100).toFixed(2) }}%</span
                      >
                    </el-progress>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="chart-main" v-show="currentTab == 1">
          <div class="card-item valueSpace-container">
            <div
              class="chart"
              style="width: 1130px; height: 850px"
              ref="chartDom"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-box" v-if="showModal">
      <div class="modal-main">
        <div class="print-main" id="capture" ref="capture">
          <div class="header">
            <h2>Hi, {{ input ? input : "User" }}</h2>
            <div>
              <img src="@/assets/images/main-logo.png" alt="logo" />
              <!-- <img
                class="QRCodeImg"
                src="@/assets/images/QRCodeImg.png"
                alt=""
              /> -->
              <!-- <SvgIcon
                class="close"
                name="close"
                @click="showModal = false"
              ></SvgIcon> -->
            </div>
          </div>
          <div class="print-content card-print">
            <div class="card-left">
              <!-- <h2>Hi, {{ input ? input : "User" }}</h2> -->
              <h3>Your Core Values are</h3>
              <div class="tag-list">
                <span
                  class="tag"
                  v-for="(item, index) in myScoreArrValue.slice(0, 3)"
                  :key="index"
                  >{{ item.SchwartzTheoryItem }}</span
                >
              </div>
              <p>
                {{ resultDesc }}
              </p>
            </div>
            <div class="card-right">
              <img class="card-right-img" :src="cultureImg" alt="test" />
              <!-- <img class="logo-img" :src="logoImg" alt="logo" /> -->
              <p>the image powered by Microsoft Designer</p>
            </div>
            <div class="card-bottom">
              <div>
                <img class="logo-img" :src="logoImg" alt="logo" width="128" />
              </div>
              <div>
                <p>
                  Interestingly,
                  <span class="model-name-span">{{
                    spearmanArrDetailValue[0]
                      ? spearmanArrDetailValue[0].model
                      : ""
                  }}</span>
                  aligns seamlessly with your value priorities,
                  <span
                    >resonating with your mindset and core belief —— much like 
                    finding a close friend.</span
                  >
                </p>
              </div>
              <div>
                <img
                  class="QRCodeImg"
                  src="@/assets/images/QRCodeImg.png"
                  alt=""
                />
              </div>
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
import testData from "../../utils/test-data2.json";

const tabList = ["PVQ40 IVM", "Moral Foundations Questionnaire", "Survey"];
const currentTest = ref(testData[tabList[0]]);
import SchwartzTheoryDes from "../../utils/SchwartzTheoryDes.json";
const chwartzTheoryData = ref(SchwartzTheoryDes["chwartz Theory Item"]);


import { getKeyValue, mergeObj, getAvaData } from "../../utils/common.js";
import { calculateHumanValue } from "@/service/api";

import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import axios from "axios";
import html2canvas from "html2canvas";
import * as echarts from "echarts";
import "echarts-gl";

// const resultList = ["Overview", "Value Space"];
const resultList = [
  {
    name: "Overview",
    index: 0,
  },
  {
    name: "Value Space",
    index: 1,
  },
];


const showTest = ref(1);
const input = ref("");
const currentTab = ref(0);
var userTestData = null;
let barInstance = null;
var gl_series_data = null;
const getAssetsFile = (url) => {
  return new URL(`../../assets/${url}`, import.meta.url).href;
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
  "GPT-4-Turbo": "LOGO/OpenAI.png",
  "GPT-4o": "LOGO/OpenAI.png",
  "GPT-4o-mini": "LOGO/OpenAI.png",
  "GPT-3.5-Turbo": "LOGO/OpenAI.png",
  "LlaMA-3-70B-Instruct": "LOGO/Meta.png",
  "LlaMA-3.1-70B-Instruct": "LOGO/Meta.png",
  "LlaMA-3.1-405B-Instruct": "LOGO/Meta.png",
  "Gemini-1.5-Pro": "LOGO/Google.png",
  "Mistral-Large-Latest": "LOGO/MistralAI.png",
  "Claude-3.5-Sonnet": "LOGO/Anthropic.png",
  "Phi-3-mini-instruct-4k": "LOGO/Microsoft.png",
  "Phi-3-medium-instruct": "LOGO/Microsoft.png",
  "Phi-3.5-mini-instruct": "LOGO/Microsoft.png",
  "Phi-3.5-MoE-instruct": "LOGO/Microsoft.png",
  "SEA-lion-7b-instruct": "LOGO/aisingapore.png",
  "LLaMA3 8B CPT SEA-Lionv2.1 Instruct": "LOGO/aisingapore.png",
  "Yi-Large": "LOGO/01-AI.png",
  "Qwen-Max": "LOGO/Alibaba.png",
  Baichuan4: "LOGO/BaichuanAI.png",
  "Deepseek-v2": "LOGO/deepseek.png",
  "Moonshot-v1": "LOGO/Moonshot.png",
  "GLM-4": "LOGO/TsinghuaUniversity.png",

  "o1": "LOGO/OpenAI.png",
  "o1-mini": "LOGO/OpenAI.png",
  "o3-mini": "LOGO/OpenAI.png",
  "LlaMA-3.1-8B-Instruct": "LOGO/Meta.png",
  "LlaMA-3.3-70B-Instruct": "LOGO/Meta.png",
  "Gemini-2.0-Pro": "LOGO/Google.png",
  "Gemini-2.0-Flash": "LOGO/Google.png",
  "Claude-3.5-Haiku": "LOGO/Anthropic.png",
  "Grok-2": "LOGO/xAI.png",
  "Phi-4" : "LOGO/Microsoft.png",
  "LlaMA3-8B-CPT-SEA-Lionv2.1-Instruct":"LOGO/aisingapore.png",
  "LlaMA3.1-8B-CPT-SEA-Lionv3-Instruct":"LOGO/aisingapore.png",
  "DeepSeek-V3": "LOGO/deepseek.png",
  "DeepSeek-R1": "LOGO/deepseek.png",
};
const showModal = ref(false);
const capture = ref(null);

const mostSimilarModel = ref("");
const tabSwitch = (index) => {
  currentTab.value = index.index;
};

const print = () => {
  showModal.value = true;
};

const toPrint = async () => {
  try {
    const canvas = await html2canvas(capture.value, {
      scale: 2, // 缩放比例 这个数值根据具体需求调整
    });
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

async function sendData(inputList) {
  // let inputList = currentTest.value.userAnswerIndex;
  // inputList = inputList.map((item) => item + 1);
  // const inputList = [1, 2, 3, 4, 5, 4, 2, 1, 3, 5, 3, 2, 4, 5];
  console.log(inputList);

  try {
    calculateHumanValue({ input: inputList })
      .then((response) => {
        const data = response.data;
        showTest.value = 5;
        userTestData = data;
        console.log(data);
        mostSimilarModel.value = userTestData.most_similar_model;
        // setBarChart(userTestData.top_5_similar_culture);
        // setRadarChart(
        //   userTestData.most_similar_model_value,
        //   userTestData.human_value
        // );
        // logoImg.value = getAssetsFile(
        //   logoMappingModel[userTestData.most_similar_model]
        // );
        // cultureInfo.value =
        //   cultureMapping[userTestData.top_5_similar_culture[0][0]];
        // cultureImg.value = getAssetsFile(cultureInfo.value.img);

        const gl_data = {
          culture: [],
          human: [
            {
              // name: userTestData.tsne_human_caption,
              name: input.value ? input.value : "User",
              value: userTestData.tsne_human,
            },
          ],
          model: [],
          node: [],
        };
        // gl_data.culture = userTestData.tsne_cultures.map((item, index) => {
        //   return {
        //     name: userTestData.tsne_culture_caption[index],
        //     value: item,
        //   };
        // });
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
        // gl_data.node = userTestData.tsne_nodes.map((item, index) => {
        //   return {
        //     name: userTestData.tsne_node_captions[index],
        //     value: item,
        //     type: "node",
        //     model: userTestData.tsne_model_caption[Math.floor(index / 30)],
        //   };
        // });
        setGlChart(gl_data);
      })
      .catch((err) => {
        console.log("err");
      })
      .finally(() => {});
  } catch (error) {
    console.error("Error:", error);
    // document.getElementById("result").innerText =
    //   "Error connecting to backend.";
  }
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
  // series.push({
  //   name: "Geocultural sphere",
  //   type: "scatter3D",
  //   data: gl_data.culture,
  //   symbolSize: 18,
  //   itemStyle: {
  //     opacity: 1,
  //     color: "var(--theme-color)",
  //   },
  //   label: {
  //     show: true,
  //     formatter: "{b}",
  //     textStyle: {
  //       color: "#fff",
  //       fontSize: 16,
  //       backgroundColor: "rgba(255,255,255,0)",
  //     },
  //   },
  // });
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
      width: "1130",
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
        autoRotateSpeed: 2,
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


let flag = false;

const chartDom = ref(null);
let chartInstance = null;

import Spearman from "spearman-rho";
onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成 console.error(err);
});
const myScoreArrValue = ref([]);
const spearmanArrDetailValue = ref([]);
const resultDesc = ref("");
function getData(inputList) {
  // let inputList = currentTest.value.userAnswerIndex;
  // inputList = inputList.map((item) => item + 1);
  // const inputList = [0, 1, 3, 4, 1, 1, 1, 2, 3, 4, 1, 1, 1, 2];
  const questions = currentTest.value.questions;
  console.log(inputList, currentTest.value);
  let myScoreObj = {};
  const myScoreArr = [];
  console.log(myScoreObj,questions)
  for (let i = 0; i < questions.length; i++) {
    if (myScoreObj.hasOwnProperty(questions[i].type)) {
      myScoreObj[questions[i].type].push(inputList[i]);
    } else {
      myScoreObj[questions[i].type] = [inputList[i]];
    }
  }
  // console.log(myScoreObj )
  for (let key in myScoreObj) {
    const avgNum = calculateAverage(myScoreObj[key]);
    myScoreObj[key] = calculateAverage(myScoreObj[key]);
    myScoreArr.push({ SchwartzTheoryItem: key, score: myScoreObj[key] });
  }
  console.log(myScoreObj); // { 'Achievement': 1, 'Benevolence':2, ...}

  sendData(inputList);
  return axios
    .get("./data/Schwartz_scores.json")
    .then(async (Schwartz_datas) => {
      const Schwartz_data = getKeyValue(Schwartz_datas.data.data);
      console.log(Schwartz_data);
      const spearmanArrDetail = [];
      const spearmanArr = [];
      for (let modelName in Schwartz_data) {
        let arr = [];
        let myArr = [];
        for (let key in Schwartz_data[modelName]) {
          // console.log(key)
          arr.push(Schwartz_data[modelName][key]);
          myArr.push(myScoreObj[key]);
        }
        const spearman = new Spearman(arr, myArr);
        const result = await spearman.calc();
        spearmanArrDetail.push({
          model: modelName,
          spearman: result,
          myArr: myArr,
          modelArr: arr,
        });
        spearmanArr.push(result);
      }
      console.log(spearmanArrDetail, spearmanArr);
      const result = softmax(spearmanArr);
      console.log(result);
      spearmanArrDetail.forEach((item, index) => {
        // item.softmaxItem = result[index];
        item.softmaxItem = (item.spearman + 1) / 2;
      });

      spearmanArrDetail.sort((a, b) => b.softmaxItem - a.softmaxItem);
      spearmanArrDetailValue.value = spearmanArrDetail;
      console.log("spearmanArrDetail", spearmanArrDetail);
      myScoreArr.sort((a, b) => b.score - a.score);
      myScoreArrValue.value = myScoreArr;
      showTest.value = 5;
      console.log("myScoreArr", myScoreArr);
      logoImg.value = getAssetsFile(
        logoMappingModel[spearmanArrDetail[0].model]
      );
      console.log(spearmanArrDetail[0].model);
      cultureImg.value = getAssetsFile(
        chwartzTheoryData.value[myScoreArrValue.value[0].SchwartzTheoryItem].img
      );

      const des1 =
        chwartzTheoryData.value[myScoreArrValue.value[0].SchwartzTheoryItem]
          .des[
          Math.floor(
            Math.random() *
              chwartzTheoryData.value[
                myScoreArrValue.value[0].SchwartzTheoryItem
              ].des.length
          )
        ];
      const des2 =
        chwartzTheoryData.value[myScoreArrValue.value[1].SchwartzTheoryItem]
          .des[
          Math.floor(
            Math.random() *
              chwartzTheoryData.value[
                myScoreArrValue.value[1].SchwartzTheoryItem
              ].des.length
          )
        ];
      const des3 =
        chwartzTheoryData.value[myScoreArrValue.value[2].SchwartzTheoryItem]
          .des[
          Math.floor(
            Math.random() *
              chwartzTheoryData.value[
                myScoreArrValue.value[2].SchwartzTheoryItem
              ].des.length
          )
        ];
      resultDesc.value = `${des1} ${des2} Moreover, ${des3.replace(
        des3[0],
        des3[0].toLowerCase()
      )}`;
    });
}

function calculateAverage(arr) {
  if (arr.length === 0) return 0; // 如果数组为空，返回 0 或者其他默认值
  const sum = arr.reduce((acc, curr) => acc + curr, 0); // 求和
  return sum / arr.length; // 求平均值
}
function softmax(z) {
  const maxZ = Math.max(...z); // 为了数值稳定性，先找出最大值
  const expZ = z.map((value) => Math.exp(value - maxZ)); // 计算每个元素的指数
  const sumExpZ = expZ.reduce((acc, value) => acc + value, 0); // 计算所有指数的和
  return expZ.map((value) => value / sumExpZ); // 归一化
}

// 示例用法
// const z = [1.0, 2.0, 3.0];
// const result = softmax(z);
// console.log(result); // 输出 softmax 结果


defineExpose({
  getData,
  input
});
</script>

<style scoped lang="scss">

.chart-box {
  margin: 0 auto;
  display: flex;
  
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
    font-size: 1.5em;
    width: 100%;
    margin: 0 auto;
    padding: 0 0em 4.5em;
    flex-wrap: wrap;
    .chart-tab {
      width: 100%;
      margin-bottom: 0.8em;
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
            color: var(--theme-color);
            span {
              background: url(@/assets/images/right-arrow.svg) no-repeat;
              background-size: contain;
            }
          }
        }
      }
    }
    .chart-main {
      // width: 1130px;
      .card-item {
        border-radius: 6px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1.5em 5em;
        background-color: var(--gary-color);

       
      }
      .echart-container {
        .card-item{
          padding: 2em 2em;
        }
        display: flex;
        gap: 1.5em;
        margin-top: 2em;
        .card-item {
          display: block;
          width: 50%;
          .card-chart-title {
            width: 100%;
            font-size: 1em;
            font-weight: 600;
            text-align: center;
          }
          .card-chart-desc {
            line-height: 1.4;
            margin-top: 1.5em;
            width: 100%;
            font-size: .83em;
            font-weight: 400;
            text-align: center;
            margin-bottom: 1em;
            color: rgba(102, 102, 102, 1);
          }
          .bar-chart {
            width: 500px;
            height: 400px;
            margin-top: 1em;
          }
          ul {
            margin-top: 1em;
            padding:  0 1em;
            li {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: flex-end;
              margin-top: 2.2em;
              font-size: .83em;
              & > span {
                width: 8em;
                display: block;
                text-align: right;
                padding-right: 1em;
                font-weight: 600;
                box-sizing: border-box;
              }
              & > div {
                flex: 1;
              }
              .score-span {
                color: rgba(47, 72, 30, 1);
                font-size: 1.125rem;
                font-weight: 500;
              }
            }
            &.model-list {
              li {
                margin-top: 4em;
                & > span {
                  padding-bottom: 0.4em;
                  width: 10em;
                  // width: 100%;
                  // text-align: left;
                }
                // & > div {
                //   width: 100%;
                // }
              }
            }
          }
        }
      }
    }
  }
}
.card-print {
  display: flex;
  align-items: flex-start !important;
  flex-wrap: wrap;
  justify-content: space-between;
  
  .card-left {
    width: 68%;
    padding: 1em 0;
    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5em;
      .tag {
        display: inline-block;
       
        padding: 0 0.66em;
        background-color: rgba(172, 210, 145, 1);
        color: rgba(47, 72, 30, 1);
        border-radius: 2px;
        font-weight: 600;
        height: 2em;
        line-height: 2em;
      }
    }
    h2,
    h3 {
      font-size: 1em;
      font-weight: 600;
    }
    h3 {
      margin: .9em 0;
    }
    p {
      margin: 1.3em 0 0;
      line-height: 1.5em;
    }
  }
  .card-right {
    position: relative;
    flex: 1;
    padding-left: 5%;
    .card-right-img {
      width: 100%;
    }
    .logo-img {
      width: 3em;
      position: absolute;
      right: 0;
      top: 0;
    }
    p {
      color: rgba(102, 102, 102, 1);
      text-transform: capitalize;
      text-align: right;
      line-height: 1.2;
      padding: 0.3em 0;
      font-size: .67em;
    }
  }
  .card-bottom {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    & > div:nth-child(1) {
      width: 150px;
    }
    & > div:nth-child(2) {
      width: calc(100% - 150px);
    }
    p:nth-child(1) {
      line-height: 1.8;
      font-weight: 600;
      margin-bottom: 0.8em;
      span {
        font-weight: normal;
      }
      .model-name-span {
        background: #70BFFF;
        color: #004F8F;
        padding: 0.3em 0.5em;
        display: inline-block;
        font-weight: 600;
      }
    }
  }
   .print {
          width: 100%;
          text-align: center;
          .print-btn {
            margin-top: 40px;
            font-size: .83em;
            line-height: 1.57em;
            color: var(--theme-color);
            cursor: pointer;
            border: 1px solid var(--theme-color);
            background-color: transparent;
          }
        }
}

.modal-box {
  z-index: 5;
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
    width: 874px;
    margin: 0 auto;
    .print-main {
      display: flex;
      flex-wrap: wrap;
      font-size: 16px;
      box-sizing: border-box;
      width: 874px;
      height: 590px;
      background-color: #fff;
      padding: 30px 60px;
      color: #000;
      .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 1em;
        align-items: flex-end;
        h2 {
          font-size: 1.5em;
          font-weight: 600;
        }
        img {
          width: 114px;
        }
        img.QRCodeImg {
          width: 45px;
          margin-left: 50px;
        }
        .close {
          width: 1em;
          height: 1em;
        }
      }
      .print-content {
        font-size: 16px;
        .card-left {
          width: 61%;
          padding: 0;
          .tag-list {
            display: flex;
            gap: 0.5em;
            .tag {
              font-size: 1em;
            }
          }
          h2 {
            font-size: 1.5em;
          }
          h3 {
            font-size: 1.125em;
            margin-top: 0;
          }
          p {
            font-size: 1.125em;
          }
        }
        .card-right {
          position: relative;
          width: 35.81%;
          .card-right-img {
            width: 100%;
          }
          .logo-img {
            width: 3em;
            position: absolute;
            right: 0;
            top: 0;
          }
          p {
            font-size: 1em;
            text-align: left;
          }
        }
        .card-bottom {
          margin-top: 0.5em;
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          & > div:nth-child(1) {
            width: 100px;
          }
          img {
            width: 100px;
          }
          & > div:nth-child(2) {
            width: calc(100% - 200px);
            padding: 0 1em;
            box-sizing: border-box;
          }
          p:nth-child(1) {
            line-height: 1.5;
            font-size: 1.125em;
            font-weight: 600;
            margin-bottom: 0.8em;
            span {
              font-size: 0.9em;
              font-weight: normal;
            }
            .model-name-span {
              padding: 0.3em 0.5em;
              display: inline-block;
              font-size: 1em;
              font-weight: 600;
            }
          }
          p {
            font-size: 1em;
          }
        }
      }
      // .print-culture {
      //   display: flex;
      //   justify-content: space-between;
      //   align-items: center;
      //   .print-culture-left {
      //     padding-right: 1em;
      //     padding-top: 1em;
      //     line-height: 1.2;
      //     font-size: 1.125em;
      //     .card-bottom{
      //       margin-top: 20px;
      //       display: flex;
      //       flex-direction: row;
      //       &>div:nth-child(1){
      //         width: 70px;
      //       }
      //       &>div:nth-child(2){
      //         width: calc(100% - 70px);
      //       }
      //     }
      //   }
      //   .print-culture-right {
      //     position: relative;
      //     .culture-img {
      //       height: 200px;
      //     }
      //     .logo-img {
      //       width: 3em;
      //       position: absolute;
      //       right: 0;
      //       top: 0;
      //     }
      //     p{
      //       color: rgba(102, 102, 102, 1);
      //       text-transform: capitalize;
      //     }
      //   }
      // }
    }
    .print-btn {
      margin-top: 2em;
      display: flex;
      justify-content: space-around;
      button {
        width: 145px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
      }
      .cancel {
        border: 1px solid #fff;
        background-color: transparent;
        background: #737373;
      }
      .print {
        border: 1px solid var(--theme-color);
        background-color: var(--theme-color);
      }
    }
  }
}
:deep(.i1) {
  font-style: normal;
  display: block;
  margin-top: 2em;
}


.valueSpace-container {
  background: #121f37 !important;
  display: flex;
  flex-direction: row;
  justify-content: center !important;
}

:deep(.el-tabs__header) {
  --el-color-primary: var(--theme-color);
  --el-font-size-base: 20px;
  .el-tabs__item {
    padding: 0;
    color: var(--sub-text-color);
    &.is-active {
      color: var(--theme-color);
    }
  }
}
</style>
