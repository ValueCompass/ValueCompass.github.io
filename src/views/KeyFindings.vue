<template>
  <div class="main-container Key-Findings-template">
    <!-- <span class="button read-report-btn" @click="downloadPdf">Read report</span> -->
    <a
      class="button read-report-btn"
      target="_blank"
      href="/data/leaderboard report-DESKTOP-O9HJ7SM.docx"
      >Read report</a
    >
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
            <div v-for="(item, index) in sub.list" :key="index" class="item">
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
          "LLMs’ value orientations demonstrate high alignment with general human values, especially for those well-aligned models.",
        details:
          "As shown in the figure of Schwartz value results, LLMs share similar priorities: Universalism, Benevolence, Security, Self-Direction with high importance; Achievement, Conformity, Tradition with the moderate importance; Stimulation, Hedonism and Power with low importance. Well-aligned LLMs, i.e. those aligned beyond instruction-tuning such as Claude-3.5-Sonnet, achieve much higher scores on the most important value dimensions. Though fine-grained priorities vary within each group, the whole hierarchical order of these values is similar to the pan-cultural baseline observed in human value surveys [1]. We infer this is due to the overlap among the training corpus of various LLMs, which embeds the universal values. <b>This results in baseline LLM values that benefit the most common requirements of humans such as universalism and security, while these LLMs struggle to fit cultural or personalized value orientations.</b>",
      },
      {
        title:
          "Most LLMs demonstrate a clear bias towards Western cultural values.",
        details:
          "As shown in the heatmap, most LLMs achieve the highest value similarities with France, the UK, and the US, followed by China. We infer this is due to that the pre-train and alignment data are heavily dominated by Western corpora. In non-English data, a significant portion is often translated from English sources. Furthermore, even models developed by China (a non-western country), i.e., Deepseek-R1 and Qwen-max, do not lead to stronger alignment with Chinese value orientation. This suggests that existing LLMs lack dedicated alignment from the cultural perspective. <b>While this cultural value bias does not necessarily impact task performance or general capabilities, it raises concerns about eroding cultural diversity and inclusiveness in AI systems.</b>",
      },
      {
        title:
          "There are correlations between LLMs’ values and their practical behaviors, implying the potential of value evaluation for LLMs’ future behavior prediction.",
        details:
          "In the following figure, given a prompt comparing innovative experiential learning with traditional structured methods, o3-mini prioritizing Self-Direction and Stimulation advocates experiential learning that fosters creativity and critical thinking. In contrast, DeepSeek-R1 favors Conformity then prefers stability and predictability, supporting standardized instruction to ensure foundational knowledge.\n <b>Moreover, there is consistency among relevant dimensions across these diverse value systems.</b> For example, o3-mini performs relatively poorly in the Fairness/Cheating dimension of the Moral Foundation Theory, and correspondingly also underperforms in the Representation & Toxicity Harms dimension of the Safety Taxonomy.\nSuch correlation implies the potential of aligning LLMs from the perspective of high-level values to direct their practical manners in a more generalized and robust manner. However, current correlations are still weak and require further exploration. This benchmarks provides the signal about both the cases and values, as a foundation for further alignment research.",
      },
      {
        title: "Static evaluation is prone to over-estimation of LLM safety.",
        details:
          "On static safety benchmark (Safety Taxonomy), most advanced LLMs achieve near-perfect scores, no matter how well they perform on other complex tasks. For example, Phi-3-Medium achieves even higher scores than o3-mini. Nevertheless, on the dynamic Moral Foundation benchmark with evolving difficulties, the performance of all LLMs drops significantly. For example, the best performed Claude-3.5-Sonnet only obtain a score of 68.36. <b>This observation confirms the existence of ceiling effects of static benchmarks as LLMs advance and the necessity for dynamic evaluation. Furthermore, the poor performance on Moral Foundation benchmark also suggests current over-estimation of LLM safety.</b>",
      },
      {
        title:
          "The measurement of safety and definition of LLM risks need to be more adaptive and context-aware.",
        details:
          " For instance, in Safety Taxonomy benchmark, the generation of adult content is currently categorized into a Representative & Toxicity Harm, and leads to a low safety score. However, such responses are not inherently unsafe in some specific cultures or use cases, such as sex education or within legal adult platforms. Therefore, safety benchmarks accounting for context is necessary to avoid overly rigid evaluations. ",
      },
    ],
  },
  {
    h2: "2. Detailed Evaluation Results on Diverse Value Systems and LLMs",
    subTitle: [
      {
        h3: "Schwartz Value Theory",
        list: [
          {
            title:
              "Most models exhibit shared hierarchy order of values that aligns with the pan-cultural baseline observed in Schwartz human survey.",
            details:
              "<b>Meanwhile, value nuances still exist across models.</b> For instance, o3-mini scores higher in Self-Direction and Stimulation, Qwen-Max emphasizes Universalism and Benevolence, while DeepSeek-V3 shows a distinctive preference for Conformity. ",
          },
          {
            title:
              "Notably, o3-mini, Qwen-Max, and Claude-3.5-Sonnet exhibit stronger value orientations across dimensions. ",
            details:
              "This could be explained from two perspectives:\n(i) <b>they behave in a more human-like manner, making them more likely to reflect value preferences in their responses.</b> In contrast, other models may exhibit fewer value signals, leading to flatter profiles and lower overall scores;\n(ii) <b>these models are better aligned towards human benefits, and therefore perform well on human-prioritized value dimensions like Universalism.</b>",
          },
        ],
      },
      {
        h3: "Moral Foundation Theory",
        list: [
          {
            title:
              "On the Moral Foundation Theory benchmark that primarily evaluates a model’s morality and safety, LLMs that have undergone extensive responsible alignment, such as Claude-3.5-Sonnet, significantly outperform others across all five dimensions. ",
            details:
              "In contrast, LLMs relying primarily on instruction tuning rather than dedicated safety alignment, i.e. xxx-instruct versions, tend to perform worse. This demonstrates the importance of alignment efforts on safety, especially generalizability.",
          },
          {
            title:
              "LLMs show nuanced strengths across distinct value dimensions.",
            details:
              "Except for Claude-3.5-Sonnet that displays a high-level performance across all moral dimensions, LLMs from OpenAI, Mistral, Qwen, and DeepSeek tend to struggle with Fairness and Sanctity, while Gemini-2.0-Flash performs relatively poorly on Loyalty and Authority.",
          },
        ],
      },
      {
        h3: "Safety Taxonomy",
        list: [
          {
            title:
              "This static benchmark shows limited discrimination for measuring LLMs’ safety. ",
            details:
              "Most advanced LLMs achieve very high scores—often exceeding 90 across various dimensions. Combined with the weaker results observed on the Moral Foundation benchmark, this suggests that existing static datasets may no longer be sufficient to assess more implicit risks.",
          },
          {
            title:
              "From a categorical perspective, models generally perform best in mitigating Human Autonomy & Integrity Harms and Information & Safety Harms, followed by decent results in Malicious Use and Socioeconomic Harms.",
            details:
              "However, the most challenging categories remain Representation & Toxicity Harms and Misinformation Harms. We infer this is because these categories tend to be more ambiguous and difficult to define consistently. Therefore, this also raises the need for clearer, more value-aligned definitions of harm.",
          },
        ],
      },
      {
        h3: "LLM’s Unique Value System",
        list: [
          {
            title:
              "LLMs display strong preference towards user-oriented values, but may risk hallucination and flattery.",
            details:
              "Though advanced LLMs demonstrate relatively great performance across all these dimensions, a consistent trend is that they score higher on user-oriented values, such as User-Oriented over Self-Competence, Social over Idealistic, and Ethical over Professional. While this may enhance user-perceived helpfulness and friendliness, it also introduces potential risks—such as generating hallucinated responses to satisfy user expectations or exhibiting excessive agreeableness (i.e., flattery), which can compromise factuality and reliability.",
          },
          {
            title: "The top-performing models are DeepSeek-R1, o1-mini, etc.",
            details:
              "These results align well with general user feedback—models like DeepSeek and o1 are widely regarded as reliable and user-friendly in real-world usage.",
          },
        ],
      },
      {
        h3: "Proprietary vs. Open-Sourcing LLMs",
        list: [
          {
            title:
              "Regarding safety evaluation, proprietary and open-source models perform similarly on simpler Safety Taxonomy benchmark.",
            details:
              "However, as scenario difficulty increases in the Moral Foundation Theory (MFT) benchmark, the performance gap widens significantly. <b>Proprietary models demonstrate far more robust and consistent safety alignment in nuanced or morally sensitive scenarios.</b> This indicates that alignment training beyond instruction tuning remains essential—especially for handling complex safety challenges.",
          },
          {
            title:
              "Regarding pluralistic value evaluation, proprietary models also show stronger value recognition and expression capability.",
            details:
              "In the Schwartz Theory of Basic Values benchmark, open-source models like LLaMA-3.1-8B-Instruct and Phi-3.5-mini-Instruct consistently score lower across several value dimensions than other proprietary models. <b>This suggests that open-source models may struggle with customized value alignment, as their capability for value expression and understanding is weaker.</b>",
          },
        ],
      },
      {
        h3: "LLM Families",
        list: [
          {
            title:
              " Within the same family, LLMs tend to exhibit highly similar patterns in both value orientation and safety performance. ",
            details:
              "For example, models like GPT-4o and GPT-4o-mini, or Claude-3.5-Sonnet and Claude-3.5-Haiku, LLaMA-3.0/3.1/3.3-70B-Instruct, Phi-3-mini/medium-instruct, and Gemini-2.0-Flash/Pro, demonstrate aligned behaviors across various benchmarks. <b>This can be attributed to that a model’s values and safety are primarily shaped by its training data and alignment methods, which are usually shared within a family of LLMs.</b>",
          },
          {
            title:
              " In contrast, differences between model families are more pronounced than differences within a family.",
            details:
              "For instance, o3-mini displays noticeably different value tendencies compared to models in the Phi or LLaMA families, while models within the Phi or LLaMA series are more consistent with one another.",
          },
        ],
      },
      {
        h3: "Reasoning vs. Normal Model",
        list: [
          {
            title:
              "Reasoning enhanced LLMs show limited gain in their safety performance.",
            details:
              "On both  Safety Taxonomy and the more challenging Moral Foundation Theory benchmarks, Claude-3.5-Sonnet consistently outperform reasoning-based LLMs such as o1, o1-mini, o3-mini, and DeepSeek-R1. Even within the same family—such as OpenAI’s or DeepSeek’s—reasoning-enhanced variants do not always surpass their counterparts (e.g., o3-mini does not clearly outperform GPT-4o, and DeepSeek-R1 does not consistently exceed DeepSeek-V3).",
          },
          {
            title:
              "Reasoning enhanced LLMs tend to show slightly stronger value expression than standard LLMs. ",
            details:
              "This may be because enhanced reasoning capabilities allow these models to better articulate and reflect value-laden responses when prompted with value-evoking questions. As such, <b>reasoning-augmented LLMs may hold potential for improved cultural or ethical alignment.</b>",
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
