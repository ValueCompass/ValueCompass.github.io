<template>
  <div style="width: 100%; flex: 1; z-index: auto; position: static">
    <div class="chart-box">
      <div class="result-main">
        <!-- <div class="chart-tab">
          <el-tabs v-model="currentTab" @tab-click="tabSwitch">
            <el-tab-pane
              v-for="tab in resultList"
              :key="tab.index"
              :label="'&nbsp;&nbsp;&nbsp;' + tab.name + '&nbsp;&nbsp;&nbsp;'"
              :name="tab.index"
            ></el-tab-pane>
          </el-tabs>
        </div> -->

        <div class="chart-main" v-show="currentTab == 0">
          <div class="result-top">
            <!-- <img
              class="bg"
              style="width: 100%; height: 100%"
              fit="cover"
              :src="
                getAssetsFile(
                  'SchwartzTheory/' +
                    chwartzTheoryData[sortedValueScore[0].name].img
                )
              "
              alt="test"
            /> -->
            <img
              class="bg"
              style="width: 100%"
              fit="cover"
              :src="
                getAssetsFile('TestYourValues/result/bj/Self-direction.png')
              "
              alt="test"
            />

            <img
              class="bottom-bg"
              style="width: 100%"
              fit="cover"
              :src="getAssetsFile('TestYourValues/result/bottom.png')"
              alt="test"
            />

            <div class="main-container">
              <img
                class="robi-img"
                fit="cover"
                :src="
                  getAssetsFile('TestYourValues/result/robi/Self-direction.png')
                "
                alt="test"
              />
              <div class="box">
                <div class="tag-list">
                  <span
                    class="tag"
                    v-for="(item, index) in sortedValueScore.slice(0, 3)"
                    :key="index"
                    :class="item.name + '_tag'"
                    >{{ item.name }}{{ index < 2 ? "&nbsp;·&nbsp;" : "" }}</span
                  >
                </div>
                <h2>
                  The
                  <span style="text-transform: capitalize">{{
                    robiNameObj[sortedValueScore[0].name]["juese"]
                  }}</span>
                </h2>
                <p>{{ valuesRecults?.short_comment }}</p>
                <div class="print">
                  <button class="print-btn" @click="print">Download</button>
                </div>
              </div>
            </div>
          </div>
          <div class="result-item Overview-container">
            <p class="title">Overview</p>
            <div>
              <div class="left">
                <p style="font-size: 1.2em">
                  Your personality core is Expansion and Acquisition.
                </p>
                <ul>
                  <li
                    v-for="(item, index) in sortedValueScore.slice(0, 3)"
                    :key="index"
                  >
                    <div>
                      <img :src="imgs[index]" alt="" />
                    </div>
                    <div>
                      <p>{{ item.name }}/{{ item.value }}</p>
                      <p>
                        Seeking pleasure or sensual gratification. This value
                        drives the individual to immediately experience the
                        enjoyment and thrills of life.
                      </p>
                    </div>
                  </li>
                </ul>

                <p class="summury-p">
                  Your top combination Power-Achievement-Hedonism reflects an
                  extreme Self-Enhancement tendency. You view the elevation of
                  social status (Power) as the ultimate expression of
                  self-worth, and strive to achieve it through personal effort
                  and performance (Achievement). The direct reward of this
                  success model is high-quality life enjoyment (Hedonism).
                </p>
              </div>

              <div class="right">
                <div class="radar-container">
                  <div>
                    <Radar :value="valuesRecults?.value_score"></Radar>
                  </div>
                </div>
                <p>Your Schwartz Theory Item Scores</p>
              </div>
            </div>
          </div>
          <div class="result-item Best-Fit-Model-container">
            <p class="title">Best Fit Model</p>
            <div>
              <div class="left">
                <div style="width: 50%" class="model-container">
                  <img
                    class="img-1"
                    :src="getAssetsFile('images/BestFitModelIcon-1.png')"
                    alt=""
                  />
                  <span>{{
                    valuesRecults &&
                    valuesRecults.closest_model &&
                    valuesRecults?.closest_model.length > 0
                      ? valuesRecults?.closest_model[0][0]
                      : ""
                  }}</span>
                </div>
                <div style="width: 50%">
                  <p style="margin-bottom: 1em">
                    Interestingly,
                    <span>{{
                      valuesRecults &&
                      valuesRecults.closest_model &&
                      valuesRecults?.closest_model.length > 0
                        ? valuesRecults?.closest_model[0][0]
                        : ""
                    }}</span>
                    turns out to be the model that aligns most closely with your
                    decision style. This model is often characterized as direct,
                    safety-oriented, and highly structured in its reasoning.
                  </p>
                  <p>
                    In your answers, we consistently observed clear rule-based
                    reasoning, a preference for caution over risk, and a
                    tendency to justify choices with explicit principles rather
                    than intuition — all traits that closely mirror how Qwen-3
                    32B processes dilemmas.
                  </p>
                </div>
                <p class="summury-p">
                  Because of this shared pattern of thinking, you and
                  <span class="model-name-span">{{
                    valuesRecults?.closest_model[0][0]
                  }}</span>
                  exhibit a surprisingly natural resonance. If models could make
                  friends, this would be the one most likely to feel like a
                  reliable, steady companion who “gets” how you think.
                </p>
              </div>
              <div class="right">
                <ul class="model-list">
                  <li
                    v-for="(item, index) in valuesRecults?.closest_model.slice(
                      0,
                      5
                    )"
                    :key="index"
                  >
                    <span
                      >{{ item[0] }}
                      <text style="font-size: 0.9em; margin-left: 0.5em"
                        >{{ (item[1] * 100).toFixed(2) }}%</text
                      ></span
                    >
                    <div>
                      <el-progress
                        :stroke-width="12"
                        :percentage="item[1] * 100"
                        color="rgba(102, 191, 236, 1)"
                        :aria-label="item[0] + 'progress'"
                        :show-text="false"
                      >
                        <!-- <span
                        class="score-span"
                        style="color: rgba(47, 72, 30, 1)"
                        >{{ (item[1] * 100).toFixed(2) }}%</span
                      > -->
                      </el-progress>
                    </div>
                  </li>
                </ul>
                <p>
                  Discover the Model That Best Aligns with Your Ethical
                  Perspectives
                </p>
              </div>
            </div>
          </div>
          <div class="result-item Best-Fit-Culture-container">
            <p class="title">Best Fit Culture</p>
            <div>
              <div class="left">
                <div style="width: 45%; margin: 0 auto">
                  <D3BubblePack
                    :value="valuesRecults?.closest_culture"
                  ></D3BubblePack>
                </div>
                <p class="summury-p">
                  Discover the Cultural Sphere That Best Reflects Your Beliefs
                  and Perspectives
                </p>
              </div>
              <div class="right">
                <p>
                  Interestingly, your profile shows a strong resonance with
                  Latin American culture. This cultural tradition is often
                  characterized by warm interpersonal connection, expressive
                  communication, and a strong orientation toward community and
                  relational harmony.<br />
                  In your responses, we observed open emotional expression, a
                  tendency to value personal relationships over strict formal
                  rules, and a consistent preference for trust, empathy, and
                  shared experience — all of which mirror key dimensions of
                  Latin American cultural norms.<br />
                  Because of this alignment in values and interaction style, you
                  and Latin American culture display a natural compatibility. If
                  cultures could choose companions, this one would likely feel
                  like a vibrant, welcoming friend who understands your way of
                  engaging with the world.
                </p>
              </div>
            </div>
          </div>

          <!-- 滚动按钮 -->
          <div class="scroll-btn" @click="scrollView" v-show="showScrollBtn">
            <div><span>Scroll to explore more</span> <i class="icon"></i></div>
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
    <div class="print-modal-box" v-if="showModal">
      <div class="modal-main">
        <div
          class="print-main"
          :style="{
            'background-color': robiNameObj[sortedValueScore[0].name]['color1'],
          }"
          id="capture"
          ref="capture"
        >
          <div class="card-print">
            <div
              class="left"
              :style="{
                'border-color': robiNameObj[sortedValueScore[0].name]['color2'],
              }"
            >
              <h2
                class="bg"
                :style="{
                  'background-color':
                    robiNameObj[sortedValueScore[0].name]['color2'],
                  'border-color':
                    robiNameObj[sortedValueScore[0].name]['color2'],
                }"
              >
                The
                <span style="text-transform: capitalize">{{
                  robiNameObj[sortedValueScore[0].name]["juese"]
                }}</span>
              </h2>
              <h2
                :style="{
                  'border-color':
                    robiNameObj[sortedValueScore[0].name]['color3'],
                }"
              >
                The
                <span style="text-transform: capitalize">{{
                  robiNameObj[sortedValueScore[0].name]["juese"]
                }}</span>
              </h2>
              <img
                class="robi-img"
                fit="cover"
                :src="
                  getAssetsFile('TestYourValues/result/robi/Self-direction.png')
                "
                alt="test"
              />
              <ul>
                <li
                  v-for="(item, index) in sortedValueScore.slice(0, 3)"
                  :key="index"
                >
                  <div>
                    <img :src="imgs[index]" alt="" />
                  </div>
                  <div
                    :style="{
                      color:
                        index == 0
                          ? robiNameObj[sortedValueScore[0].name]['color2']
                          : '#000',
                    }"
                  >
                    <p>{{ item.name }}/{{ item.value }}</p>
                    <p>
                      Seeking pleasure or sensual gratification. This value
                      drives the individual to immediately experience the
                      enjoyment and thrills of life.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="right">
              <div class="top">
                <div>
                  <img
                    class="logo"
                    src="@/assets/images/main-logo.png"
                    alt="logo"
                  />
                </div>

                <div>
                  <img
                    class="QRCodeImg"
                    src="@/assets/images/QRCodeImg.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="bottom">
                <div class="model-container">
                  <img src="@/assets/images/BestFitModelIcon.png" alt="" />
                  <span class="model-name-span">{{
                    valuesRecults?.closest_model[0][0]
                  }}</span>
                </div>
                <p class="summury-p">
                  Interestingly,
                  <span class="model-name-span">{{
                    valuesRecults?.closest_model[0][0]
                  }}</span>
                  turns out to be the model that aligns most closely with your
                  decision style.
                </p>
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
import D3BubblePack from "./D3BubblePack.vue";
import Radar from "./Radar.vue";

import SchwartzTheoryDes from "../../utils/SchwartzTheoryDes.json";
const chwartzTheoryData = ref(SchwartzTheoryDes["chwartz Theory Item"]);

import { getKeyValue, mergeObj, getAvaData } from "../../utils/common.js";
import { calculateHumanValue } from "@/service/api";

import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import axios from "axios";
import html2canvas from "html2canvas";
import * as echarts from "echarts";
import "echarts-gl";

const props = defineProps({
  valuesRecults: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

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

const robiNameObj = {
  Achievement: {
    juese: "Achiever",
    color1: "#FDE7D8",
    color2: "#931A22",
    color3: "#DB4B3D",
  },
  Benevolence: {
    juese: "benevolent",
    color1: "#FEFDE9",
    color2: "#786C1C",
    color3: "#FCF294",
  },
  Conformity: {
    juese: "conformist",
    color1: "#FAF7EC",
    color2: "#644427",
    color3: "#AE9A7C",
  },
  Hedonism: {
    juese: "Hedonist",
    color1: "#FCF0DD",
    color2: "#722A18",
    color3: "#C67B4E",
  },
  Power: {
    juese: "Dominator",
    color1: "#E7FCFE",
    color2: "#2A588B",
    color3: "#85CDF1",
  },
  Security: {
    juese: "Protector",
    color1: "#EFE5CA",
    color2: "#876B2C",
    color3: "#E9D38A",
  },
  "Self-direction": {
    juese: "Visionary",
    color1: "#F2E9E4",
    color2: "#794E4A",
    color3: "#A99893",
  },
  Stimulation: {
    juese: "Adventurer",
    color1: "#F5F5E1",
    color2: "#5E5C29",
    color3: "#A3A282",
  },
  Tradition: {
    juese: "custodian",
    color1: "#FCF7EF",
    color2: "#793C31",
    color3: "#D2AE9B",
  },
  Universalism: {
    juese: "Universalist",
    color1: "#FEDEE4",
    color2: "#05408C",
    color3: "#0B70C3",
  },
};

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

  o1: "LOGO/OpenAI.png",
  "o1-mini": "LOGO/OpenAI.png",
  "o3-mini": "LOGO/OpenAI.png",
  "LlaMA-3.1-8B-Instruct": "LOGO/Meta.png",
  "LlaMA-3.3-70B-Instruct": "LOGO/Meta.png",
  "Gemini-2.0-Pro": "LOGO/Google.png",
  "Gemini-2.0-Flash": "LOGO/Google.png",
  "Claude-3.5-Haiku": "LOGO/Anthropic.png",
  "Grok-2": "LOGO/xAI.png",
  "Phi-4": "LOGO/Microsoft.png",
  "LlaMA3-8B-CPT-SEA-Lionv2.1-Instruct": "LOGO/aisingapore.png",
  "LlaMA3.1-8B-CPT-SEA-Lionv3-Instruct": "LOGO/aisingapore.png",
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
// onMounted(async () => {
//   await nextTick(); // 确保DOM已经渲染完成 console.error(err);
// });
const myScoreArrValue = ref([
  { SchwartzTheoryItem: "Achievement", score: 1 },
  { SchwartzTheoryItem: "Security", score: 2 },
  { SchwartzTheoryItem: "Benevolence", score: 3 },
]);
const spearmanArrDetailValue = ref([
  { softmaxItem: 0.88, model: "GPT-4o" },
  { softmaxItem: 0.97, model: "Qwen2.5-72B-Instruct" },
  { softmaxItem: 0.88, model: "Step-2-16K" },
]);
const resultDesc = ref(
  "You’re driven by a desire to succeed and be recognized for your hard work. Feeling secure and maintaining harmony is essential for your peace of mind. Moreover, helping others and fostering a sense of community is deeply fulfilling for you. These primary values shape how you interact with the world, reflecting your unique approach to life."
);
function getData(inputList) {
  // let inputList = currentTest.value.userAnswerIndex;
  // inputList = inputList.map((item) => item + 1);
  // const inputList = [0, 1, 3, 4, 1, 1, 1, 2, 3, 4, 1, 1, 1, 2];
  const questions = currentTest.value.questions;
  console.log(inputList, currentTest.value);
  let myScoreObj = {};
  const myScoreArr = [];
  console.log(myScoreObj, questions);
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
  input,
});

// 排序后的数组
const sortedValueScore = computed(() => {
  const scoreObj = props.valuesRecults?.value_score || {};
  // 转数组并排序
  return Object.entries(scoreObj)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value); // 按 value 降序
});

onMounted(() => {
  // handleGlData();

  contentEl = document.getElementById("content");
  if (contentEl) {
    contentEl.addEventListener("scroll", handleScroll, { passive: true });
  }
});

onUnmounted(() => {
  contentEl?.removeEventListener("scroll", handleScroll);
});

const handleGlData = () => {
  console.log("????", props.valuesRecults);
  const gl_data = {
    culture: [],
    human: [
      {
        // name: userTestData.tsne_human_caption,
        name: props.valuesRecults?.user_name
          ? props.valuesRecults?.user_name
          : "User",
        value: props.valuesRecults?.tsne_human,
      },
    ],
    model: [],
    node: [],
  };
  // gl_data.culture = props.valuesRecults?.tsne_cultures.map((item, index) => {
  //   return {
  //     name: props.valuesRecults?.tsne_culture_caption[index],
  //     value: item,
  //   };
  // });
  gl_data.model = props.valuesRecults?.tsne_models.map((item, index) => {
    return {
      name: props.valuesRecults?.tsne_model_caption[index],
      value: item,
      type: "model",
      itemStyle: {
        color: colors[index],
        opacity: 1,
      },
    };
  });
  // gl_data.node = props.valuesRecults?.tsne_nodes.map((item, index) => {
  //   return {
  //     name: props.valuesRecults?.tsne_node_captions[index],
  //     value: item,
  //     type: "node",
  //     model: props.valuesRecults?.tsne_model_caption[Math.floor(index / 30)],
  //   };
  // });
  setGlChart(gl_data);
};

const showScrollBtn = ref(true);
let contentEl = null;

const handleScroll = () => {
  if (!contentEl) return;
  showScrollBtn.value = contentEl.scrollTop <= 20;
};

const scrollView = () => {
  if (!contentEl) return;
  // 滚动到下一屏高度
  contentEl.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
  showScrollBtn.value = false;
};

const imgs = [
  new URL("@/assets/images/rank_1.png", import.meta.url).href,
  new URL("@/assets/images/rank_2.png", import.meta.url).href,
  new URL("@/assets/images/rank_3.png", import.meta.url).href,
];
</script>

<style scoped lang="scss">
.chart-box {
  color: #000;
  margin: 0 auto;
  display: flex;
  padding: 1em 0;

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
    font-size: 1.25em;
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
    }

    .scroll-btn {
      position: fixed;
      width: 100%;
      height: 8rem;
      background: linear-gradient(
        180deg,
        rgba(11, 112, 195, 0) 0%,
        #0b70c3 81.6%
      );
      cursor: pointer;
      left: 0;
      bottom: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      color: #fff;
      padding: 1em;
      box-sizing: border-box;
      font-size: 1.25rem;
      &:hover {
        .icon {
          animation: bounce 0.8s infinite;
        }
      }
      @keyframes bounce {
        0%,
        100% {
          transform: translateY(-3px) rotate(90deg);
        }
        50% {
          transform: translateY(3px) rotate(90deg);
        }
      }
      & > div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        text-transform: capitalize;
      }
      .icon {
        width: 1em;
        height: 1em;
        background: url(@/assets/images/arrow-right.png) no-repeat center;
        background-size: 60% auto;
        display: inline-block;
        transform: rotate(90deg);
        transition: all 0.2s;
      }
    }
  }
}

.print-modal-box {
  overflow: auto;
  z-index: 2005;
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
    margin: 0 auto;
    .print-main {
      transform: translateY(-10%) scale(0.75);
      font-size: 24px;
      width: 1600px;
      height: 864px;
      padding: 2em;
      box-sizing: border-box;
      position: relative;
      background: #add4ed;
      color: #000;
      .card-print {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .left {
          margin-top: 2em;
          padding: 1.5em;
          background: #fff;
          border-radius: 2em;
          border: 3px solid #05408c;
          width: 925px;
          box-sizing: border-box;
          position: relative;
          .robi-img {
            width: 44.8%;
            margin: 0 auto 1em;
            position: absolute;
            top: -11%;
            right: -8%;
          }
          h2 {
            position: absolute;
            background: #fff;
            top: -52px;
            left: -11px;
            font-size: 2em;
            font-weight: 900;
            border: 6px solid #fcf294;
            border-radius: 1em;
            // height: 96px;
            box-sizing: border-box;
            line-height: 84px;
            padding: 0 30px;
            &.bg {
              transform: translate(5px, 8px);
              border-color: #786c1c;
              background: #786c1c;
            }
          }
          ul {
            margin-top: 1.5em;
            display: flex;
            flex-direction: column;
            gap: 1em;
            li {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              gap: 0.3em;

              & > div:nth-child(1) {
                padding: 0.3em 0.5em;
                img {
                  width: 1.5em;
                }
              }
              & > div:nth-child(2) {
                p {
                  font-size: 1em;
                  line-height: 1.5;
                }
                p:nth-child(1) {
                  font-weight: 700;
                  font-size: 1.5em;
                }
                p:nth-child(2) {
                  font-style: italic;
                }
              }

              &:nth-child(1) {
                width: 62%;
                p:nth-child(1) {
                  font-weight: 900 !important;
                }
                p:nth-child(2) {
                  font-weight: 600;
                }
              }
            }
          }
        }
        .right {
          width: 543px;
          display: flex;
          flex-direction: column;
          gap: 1em;
          img {
            width: 200px;
          }
          .top,
          .botttom {
            width: 543px;
          }
          .top {
            padding: 1em;
            box-sizing: border-box;
            background: #fff;
            border-radius: 2em;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .logo {
              width: 314px;
              display: block;
            }
            .QRCodeImg {
              width: 164px;
              display: block;
            }
          }
          .bottom {
            min-height: 532px;
            background: rgba(0, 0, 0, 0.05);
            border-radius: 2em;
            padding: 36px;
            box-sizing: border-box;
            .model-container {
              margin: 0 auto;
              width: 318px;
              position: relative;
              img {
                width: 100%;
              }
              span {
                font-size: 1em;
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-weight: 600;
              }
            }
            p {
              line-height: 1.4;
            }
          }
        }
      }
    }
    .print-btn {
      margin-top: -180px;
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

:deep(.el-progress) {
  .el-progress-bar__outer {
    background: rgba(194, 194, 194, 1);
    overflow: visible;
  }
  .el-progress-bar__innerText {
    transform: translateY(-25px);
    position: absolute;
    right: 0;
  }
}

.result-item {
  color: #000;
  width: 80%;
  max-width: 1600px;
  margin: 0 auto;
  margin-top: 2em;
  .title {
    font-size: 2.4em;
    font-weight: 600;
    width: 13.48em;
    border-bottom: 1px solid #c2c2c2;
    line-height: 1.458;
    margin-bottom: 0.5em;
  }
  .model-list {
    li {
      padding: 0.5em 0;
      height: 3em;
      & > span {
        padding-bottom: 0.3em;
        // width: 100%;
        // text-align: left;
        font-weight: 600;
        display: block;
        display: flex;
        justify-content: space-between;
      }
      // & > div {
      //   width: 100%;
      // }
    }
  }

  &.Overview-container {
    & > div {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      .left {
        width: 50%;
      }
      .right {
        width: 50%;
        text-align: center;
        p {
          font-weight: 600;
        }
        .radar-container {
          width: 100%;
          padding-bottom: 70%;
          position: relative;
          & > div {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
          }
        }
      }
    }
    ul {
      margin: 1em 0;
      display: flex;
      flex-direction: column;
      gap: 1em;
      li {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 0.3em;
        & > div:nth-child(1) {
          padding: 0.3em 0.5em;
          img {
            width: 1.5em;
          }
        }
        & > div:nth-child(2) {
          p {
            font-size: 1em;
            line-height: 1.5;
          }
          p:nth-child(1) {
            font-weight: 700;
          }
          p:nth-child(2) {
            font-style: italic;
          }
        }
      }
    }
    .summury-p {
      font-size: 1em;
      line-height: 1.5;
    }
  }
  &.Best-Fit-Model-container {
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      & > div {
        padding: 2em;
        line-height: 1.5;
        box-sizing: border-box;
        background: #ccf0fc;
        border-radius: 12px;
        &.left {
          width: 64%;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          div.model-container {
            position: relative;
            margin: 0 auto;
            .img-1 {
              width: 100%;
              position: relative;
              // z-index: 2;
            }
            span {
              position: absolute;
              left: 40%;
              top: 38%;
              transform: translate(-50%, -50%);
              font-weight: 700;
              font-size: 1em;
              text-align: center;
              max-width: 80%;
              line-height: 1.3;
            }
          }
          .summury-p {
            font-size: 1em;
            line-height: 1.5;
          }
        }
        &.right {
          flex: 1;
          background: #fff;
          p {
            font-size: 1em;
            line-height: 1.5;
            color: #666666;
            text-align: center;
          }
        }
      }
    }
  }

  &.Best-Fit-Culture-container {
    .summury-p {
      font-size: 1em;
      line-height: 1.5;
      text-align: center;
      color: #666666;
    }
    & > div {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;

      justify-content: space-around;
      .left,
      .right {
        width: 48.5%;
      }
      .right {
        p {
          line-height: 1.5;
        }
      }
    }
  }
}

.result-top {
  position: relative;

  .bottom-bg {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  .main-container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    .robi-img {
      position: absolute;
      width: 24.75em;
      left: 50%;
      bottom: 6%;
      transform: translateX(40%);
    }
    .box {
      /* 关键 */
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 1em;
      padding: 2em;
      box-sizing: border-box;
      width: 33.2em;
      max-width: 42%;
      position: absolute;
      left: 50%;
      top: 4em;
      transform: translateX(-80%);
      line-height: 1.5;
      font-size: 1em;
    }
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    .tag {
      display: inline-block;
      font-weight: 600;
      &:nth-child(1) {
        color: #032d71;
      }
      &:nth-child(2) {
        color: #0856a7;
      }
      &:nth-child(3) {
        color: #409ddb;
      }

      // padding: 0 0.66em;
      // background-color: rgba(172, 210, 145, 1);
      // color: rgba(47, 72, 30, 1);
      // border-radius: 2px;
      // font-weight: 600;
      // height: 2em;
      // line-height: 2em;

      // & {
      //   &.Self-direction_tag {
      //     background: rgba(251, 248, 204, 1);
      //   }
      //   &.Stimulation_tag {
      //     background: rgba(253, 228, 207, 1);
      //   }
      //   &.Hedonism_tag {
      //     background: rgba(255, 207, 210, 1);
      //   }
      //   &.Achievement_tag {
      //     background: rgba(241, 192, 232, 1);
      //   }
      //   &.Power_tag {
      //     background: rgba(207, 186, 240, 1);
      //   }
      //   &.Security_tag {
      //     background: rgba(163, 196, 243, 1);
      //   }
      //   &.Tradition_tag {
      //     background: rgba(144, 219, 244, 1);
      //   }
      //   &.Conformity_tag {
      //     background: rgba(142, 236, 245, 1);
      //   }
      //   &.Benevolence_tag {
      //     background: rgba(152, 245, 225, 1);
      //   }
      //   &.Universalism_tag {
      //     background: rgba(185, 251, 192, 1);
      //   }
      // }
    }
  }
  h2 {
    font-size: 2.4em;
    font-weight: 600;
    margin: 0.25em 0;
  }

  .print {
    width: 100%;
    text-align: right;
    .print-btn {
      margin-top: 1em;
      margin-right: 1em;
      font-size: 1em;
      line-height: 1.57em;
      color: var(--theme-color);
      cursor: pointer;
      border: 2px solid var(--theme-color);
      background-color: #fff;
    }
  }
}
</style>
