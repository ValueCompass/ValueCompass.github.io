<template>
  <div class="main-container Key-Findings-template">
    <!-- <span class="button read-report-btn" @click="downloadPdf">Read report</span> -->
    <a
      class="button read-report-btn"
      target="_blank"
      href="/data/LeaderboardReport.pdf"
    >
      Read report
    </a>
    <p class="h1">
      Insights about LLMs Values from the Value Compass Benchmarks
    </p>
    <div v-for="(section, i) in InsightsData" :key="i">
      <h2>{{ section.h2 }}</h2>
      <template v-if="section.list">
        <div class="item-list">
          <div
            v-for="(item, index) in section.list"
            :key="index"
            class="item"
            :class="item.open ? 'open' : ''"
          >
            <div class="title" @click="toggle(item)">
              <div class="left">
                <SvgIcon class="toggle-icon" name="toggle-icon"></SvgIcon>
                <SvgIcon class="star" name="star"></SvgIcon>
                <span>Finding {{ index + 1 }}</span>
              </div>
              <div class="right">
                {{ item.title }}
              </div>
            </div>
            <transition
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave"
            >
              <div v-show="item.open" class="details">
                <div v-html="item.details"></div>
              </div>
            </transition>
          </div>
        </div>
      </template>

      <template v-if="section.subTitle">
        <div v-for="(sub, j) in section.subTitle" :key="j" class="sub-section">
          <h3>
            <SvgIcon
              v-if="j <= 3"
              class="point-type-icon"
              name="point-type-icon"
            ></SvgIcon>
            <SvgIcon v-else class="square-icon" name="square-icon"></SvgIcon>
            <span>{{ sub.h3 }}</span>
          </h3>
          <div class="item-list">
            <div
              v-for="(item, index) in sub.list"
              :key="index"
              class="item"
              :class="item.open ? 'open' : ''"
            >
              <div class="title" @click="toggle(item)">
                <div class="left">
                  <SvgIcon class="toggle-icon" name="toggle-icon"></SvgIcon>
                  <SvgIcon class="star" name="star"></SvgIcon>
                  <span>Finding {{ index + 1 }}</span>
                </div>
                <div class="right">
                  {{ item.title }}
                </div>
              </div>
              <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
              >
                <div v-show="item.open" class="details">
                  <div v-html="item.details"></div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const InsightsData = ref([
  {
    h2: "1. Overall Perspectives of LLM Value Evaluation",
    list: [
      {
        title:
          "LLMs’ value orientations demonstrate high alignment with universal human values, particularly in well-aligned models.",
        details:
          "LLMs’ value orientations prioritize Universalism, Benevolence, Security, and Self-Direction, followed by moderate emphasis on Achievement, Conformity, and Tradition, with Stimulation, Hedonism, and Power receiving lower priority. Models aligned beyond instruction-tuning score significantly higher in safety-oriented value dimensions. This alignment, driven by shared training corpora, supports common human needs but struggles with cultural or personalized values. ",
      },
      {
        title:
          "Most LLMs demonstrate a clear bias towards Western cultural values.",
        details:
          "Training data dominated by Western corpora has led most LLMs to exhibit a greater degree of value similarity with Western countries such as France, the UK, and the US. Even non-Western models like Deepseek-R1 and Qwen-Max from China lack local cultural alignment, raising concerns about eroding cultural diversity and inclusiveness in AI systems. ",
      },
      {
        title: "LLMs’ values correlate with their practical behaviors.",
        details:
          "O3-mini performs relatively poorly in the Fairness/Cheating dimension of the Moral Foundation Theory, and correspondingly also underperforms in the Representation & Toxicity Harms dimension of the Safety Taxonomy. This observed correlation implies the potential of aligning LLMs from the perspective of high-level values to direct their practical manners in a more generalized and robust manner. However, the current correlations remain weak and warrant further investigation. ",
      },
      {
        title: "Static evaluation is prone to over-estimation of LLM safety. ",
        details:
          "Most advanced LLMs achieve near-perfectly scores on static safety benchmark (Safety Taxonomy) but drop significantly on dynamic Moral Foundation benchmarks. This observation reveals the existence of ceiling effects in static benchmarks as LLMs advance, as well as the overestimation of safety performance based on such benchmarks. Furthermore, these findings highlight the necessity of incorporating dynamic evaluation methods to more accurately reflect LLM behavior under varying levels of complexity. ",
      },
      {
        title:
          "Safety measurements need adaptability and context-aware capability.",
        details:
          "Current benchmarks classify adult content as harmful by default, yet such content may not be inherently unsafe in certain cultural contexts or use cases, such as sex education or legally regulated adult platforms. Therefore, safety benchmarks that account for context are necessary to avoid overly rigid or culturally misaligned evaluations. ",
      },
    ],
  },
  {
    h2: "2. Detailed Evaluation Results on Diverse Value Systems and LLMs",
    subTitle: [
      {
        h3: "Schwartz Theory of Basic Values ",
        list: [
          {
            title:
              "Most models share a value order matching the pan-cultural baseline, though subtle preference differences remain. ",
            details:
              "O3-mini scores higher on Self-Direction and Stimulation; Qwen-Max emphasizes Universalism and Benevolence; and DeepSeek-V3 demonstrates a distinctive preference for Conformity. ",
          },
          {
            title:
              "Notably, o3-mini, Qwen-Max, and Claude-3.5-Sonnet exhibit more pronounced value orientations across dimensions.",
            details:
              "This observation may be explained from two perspectives: (i) they behave in a more human-like manner, making them more likely to reflect value preferences in their responses. In contrast, other models may exhibit fewer value signals, leading to flatter profiles and lower overall scores; (ii) these models are better aligned with human benefits and, as a result, perform well on value dimensions prioritized by humans, such as Universalism. ",
          },
        ],
      },
      {
        h3: "Moral Foundation Theory",
        list: [
          {
            title:
              "On the Moral Foundation benchmark, responsibly aligned LLMs show stronger moral and safety performance.",
            details:
              "LLMs that have undergone extensive responsible alignment, such as Claude-3.5-Sonnet, significantly outperform others across all five dimensions. In contrast, LLMs relying primarily on instruction tuning rather than dedicated safety alignment, i.e. xxx-instruct versions, tend to perform worse. This demonstrates the importance of alignment efforts on safety, especially generalizability. ",
          },
          {
            title:
              "LLMs show nuanced strengths across distinct value dimensions.",
            details:
              " With the exception of Claude-3.5-Sonnet that displays a high-level performance across all moral dimensions, LLMs from OpenAI, Mistral, Qwen, and DeepSeek tend to struggle with Fairness and Sanctity, while Gemini-2.0-Flash performs relatively poorly on Loyalty and Authority. ",
          },
        ],
      },
      {
        h3: "Safety Taxonomy",
        list: [
          {
            title:
              "This static benchmark shows limited discrimination for measuring LLMs’ safety.  ",
            details:
              "Most advanced LLMs achieve very high scores—often exceeding 90 across various dimensions. Combined with the weaker results observed on the Moral Foundation benchmark, this suggests that existing static datasets may no longer be sufficient to assess more implicit risks. ",
          },
          {
            title:
              "Model performance varies by harm category, with persistent challenges in ambiguous domains. ",
            details:
              "Models generally perform best in mitigating Human Autonomy & Integrity Harms and Information & Safety Harms, followed by decent results in Malicious Use and Socioeconomic Harms. However, the most challenging categories remain Representation & Toxicity Harms and Misinformation Harms. This may be attributed to the fact that these categories tend to be more ambiguous and difficult to define consistently. Therefore, this also raises the need for clearer, more value-aligned definitions of harm. ",
          },
        ],
      },
      {
        h3: "LLM’s Unique Value System ",
        list: [
          {
            title:
              "LLMs demonstrate a strong preference for user-oriented values, potentially leading to hallucination and flattery. ",
            details:
              "Though advanced LLMs demonstrate relatively high performance across all these dimensions, a consistent trend is that they score higher on user-oriented values, such as User-Oriented over Self-Competence, Social over Idealistic, and Ethical over Professional. While this tendency may enhance user-perceived helpfulness and friendliness, it also introduces potential risks—such as generating hallucinated responses to satisfy user expectations or exhibiting excessive agreeableness, which can compromise factuality and reliability. ",
          },
          {
            title: " The top-performing models are DeepSeek-R1, o1-mini, etc.",
            details:
              "These results align well with general user feedback—models like DeepSeek and o1 are widely regarded as reliable and user-friendly in real-world usage. ",
          },
        ],
      },
      {
        h3: "Proprietary vs. Open-Source LLMs",
        list: [
          {
            title:
              "Alignment training beyond instruction tuning remains essential—especially for handling complex safety challenges ",
            details:
              "In safety evaluation, proprietary and open-source models perform comparably on simpler Safety Taxonomy benchmark. However, as scenario complexity increases in the Moral Foundation Theory (MFT) benchmark, the performance gap widens significantly. Proprietary models demonstrate far more robust and consistent safety alignment in nuanced or morally sensitive scenarios.",
          },
          {
            title:
              " Proprietary models show stronger value recognition and expression capability.",
            details:
              "In the Schwartz Theory of Basic Values benchmark, open-source models like LLaMA-3.1-8B-Instruct and Phi-3.5-mini-Instruct consistently score lower across several value dimensions than other proprietary models. This suggests that open-source models may struggle with customized value alignment, as their capability for value expression and understanding is weaker.",
          },
        ],
      },
      {
        h3: "LLM Families",
        list: [
          {
            title:
              "Within the same family, LLMs tend to exhibit highly similar patterns in both value orientation and safety performance",
            details:
              "GPT-4o and GPT-4o-mini, or Claude-3.5-Sonnet and Claude-3.5-Haiku, LLaMA-3.0/3.1/3.3-70B-Instruct, Phi-3-mini/medium-instruct, and Gemini-2.0-Flash/Pro, demonstrate aligned behaviors across various benchmarks. This can be attributed to the fact that a model’s values and safety are primarily shaped by its training data and alignment methods, which are usually shared within a family of LLMs. ",
          },
          {
            title:
              "Inter-family variation in value alignment is greater than intra-family variation.",
            details:
              "GPT-o3-mini displays noticeably different value tendencies compared to models in the Phi or LLaMA families, while models within the Phi or LLaMA series are more consistent with one another. ",
          },
        ],
      },
      {
        h3: "Reasoning vs. Normal Models",
        list: [
          {
            title:
              "Reasoning enhanced LLMs show limited improvements in their safety performance.",
            details:
              "On both Safety Taxonomy and the more challenging Moral Foundation Theory benchmarks, Claude-3.5-Sonnet consistently outperform reasoning-based LLMs such as o1, o1-mini, o3-mini, and DeepSeek-R1. Even within the same families—such as OpenAI’s or DeepSeek’s—reasoning-enhanced variants do not always surpass their counterparts.",
          },
          {
            title:
              "Reasoning enhanced LLMs tend to show slightly stronger value expression than standard LLMs.",
            details:
              "This may be attributed to enhanced reasoning capabilities, which allow these models to better articulate and reflect value-laden responses when prompted with value-evoking questions. As such, reasoning-augmented LLMs may hold potential for improved cultural or ethical alignment.",
          },
        ],
      },
    ],
  },
]);
const items = ref([
  {
    title: "标题 1",
    details:
      "这是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容是详情内容 1",
  },
  {
    title: "标题 2",
    details:
      "这是详情内容 2这是详情内容 2这是详情内容 2这是详情内容 2这是详情内容 2这是详情内容 2这是详情内容 2这是详情内容 2这是详情内容 2这是详情内容 2这是详情内容 2这是详情内容 2这是详情内容 2这是详情内容 2",
  },
  {
    title: "标题 3",
    details:
      "这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3这是详情内容 3",
  },
]);

// 存储多个展开的 index
const openIndexes = ref(new Set());

const toggle = (item) => {
  console.log(item);
  item.open = !item.open;
  // if (openIndexes.value.has(index)) {
  //   openIndexes.value.delete(index);
  // } else {
  //   openIndexes.value.add(index);
  // }
  // // 创建新的 Set 触发响应式更新
  // openIndexes.value = new Set(openIndexes.value);
};

// transition 动画：高度平滑展开/收起
const beforeEnter = (el) => {
  el.style.height = "0";
  el.style.paddingTop = "0px";
  el.style.opacity = "0";
};

const enter = (el) => {
  el.style.transition = "all 0.3s ease";
  el.style.height = el.scrollHeight + "px";
  el.style.paddingTop = "10px";
  el.style.opacity = "1";
};

const leave = (el) => {
  el.style.transition = "all 0.3s ease";
  el.style.height = "0";
  el.style.paddingTop = "0px";
  el.style.opacity = "0";
};

const downloadPdf = () => {
  const link = document.createElement("a");
  link.href = "/data/leaderboard report-DESKTOP-O9HJ7SM.docx"; // 注意路径是 public 下相对路径
  link.download = "示例文件.pdf"; // 下载时文件名
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>


<style scoped lang="scss">
.Key-Findings-template {
  position: relative;
  padding: 3em;
  color: #000;
  box-sizing: border-box;
  .h1 {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 1.1em;
  }
  h2 {
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 1.46em;
  }
  h3 {
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 1em;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 1em;
    svg {
      width: 1em;
      height: 1em;
    }
  }
  .item-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75em;
    align-self: stretch;
    margin-bottom: 2.5em;
  }
  .item {
    border-radius: 1em;
    width: 100%;
    padding: 1.5em 3em;
    background: #f5f5f5;
    box-sizing: border-box;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      // gap: 48px;
      flex: 1 0 0;
      .left {
        width: 12.5em;
        color: #004f8f;
        font-weight: 700;
        line-height: 1.5;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.75em;
        cursor: pointer;
        span {
          font-size: 1.125em;
        }
      }
      .right {
        font-weight: 700;
        color: rgba(0, 0, 0, 0.88);
        font-size: 1.25em;
        cursor: pointer;
        flex: 1 0 0;
        line-height: 1.5;
      }
    }
    .details {
      padding-left: 12.5em;
      overflow: hidden;

      line-height: 1.5;
      & > div {
        white-space: pre-line;
        font-size: 1.125em;
      }
    }

    .toggle-icon,
    .star {
      transition: all 0.2s;
      width: 1.5em;
    }
    &.open {
      .toggle-icon {
        transform: rotate(90deg);
      }
    }
  }
}
.read-report-btn {
  position: absolute;
  right: 3rem;
  top: 3.3rem;
  border: 1px solid var(--theme-color);
  background: #fff;
  color: var(--theme-color);
  line-height: 1em;
  font-size: 14px;
  font-weight: 700;
}
</style>
