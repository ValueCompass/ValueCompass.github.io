---
layout: paper-list
title: Taxonomy about Alignment Algorithms
subtitles: 
    - title: RL-based Alignment
      id: "#rl-based-alignment"
    - title: SFT-based Alignment
      id: "#sft-based-alignment"
    - title: In-Context Alignment
      id: "#in-context-alignment"
    - title: Personalized Alignment
      id: "#personalized-alignment"
    - title: Multimodal Alignment
      id: "#multimodal-alignment"
permalink: alignment_algorithms
---

### RL-based Alignment 
1. **Deep reinforcement learning from human preferences.** *Christiano et al.* Neurips 2017. [[paper](https://proceedings.neurips.cc/paper_files/paper/2017/file/d5e2c0adad503c91f91df240d0cd4e49-Paper.pdf)]
2. **Learning to summarize with human feedback**. *Stiennon et al.* Neurips 2020. [[Paper](https://proceedings.neurips.cc/paper/2020/file/1f89885d556929e98d3ef9b86448f951-Paper.pdf)][[Project](https://github.com/openai/summarize-from-feedback)][[Data](https://openaipublic.blob.core.windows.net/summarize-from-feedback/website/index.html#/)]
3. **Webgpt: Browser-assisted question-answering with human feedback**. *Nakano et al.* arXiv 2021. [[Paper](https://arxiv.org/pdf/2112.09332.pdf)][[Data](https://huggingface.co/datasets/openai/webgpt_comparisons)]
4. **Training language models to follow instructions with human feedback**. *Ouyang et al.* Neurips 2022. [[Paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/b1efde53be364a73914f58805a001731-Paper-Conference.pdf)]
5. **Improving alignment of dialogue agents via targeted human judgements**. *Glaese et al.* arXiv 2022. [[Paper](https://arxiv.org/pdf/2209.14375.pdf)][[Data](https://storage.googleapis.com/deepmind-media/DeepMind.com/Authors-Notes/sparrow/sparrow.html)]
6. **Glm: General language model pretraining with autoregressive blank infilling.** *Du et al.* ACL 2022. [[Paper](https://aclanthology.org/2022.acl-long.26.pdf)][[Project](https://github.com/THUDM/GLM)]
7. **Training a helpful and harmless assistant with reinforcement learning from human feedback**. *Bai et al.* arXiv 2022. [[Paper](https://arxiv.org/pdf/2204.05862.pdf)][[Checkpoint](https://huggingface.co/Dahoas/gptj-rm-static/tree/main)]
8. **Constitutional ai: Harmlessness from ai feedback**. *Bai et al.* arXiv 2022. [[Paper](https://arxiv.org/pdf/2212.08073.pdf)][[Data](https://github.com/anthropics/ConstitutionalHarmlessnessPaper)]
9. **Aligning Large Language Models through Synthetic Feedback**. *Kim et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.13735.pdf)]
10. **Reinforced self-training (rest) for language modeling.** *Gulcehre et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2308.08998.pdf)]

### SFT-based Alignment

**MLE-based**

1. **Lima: Less is more for alignment.** *Zhou et al.* Neurips 2023. **[[Paper](https://openreview.net/pdf?id=KBMOKmX2he)]
2. **Self-instruct: Aligning language model with self generated instructions**. *Wang et al.* arXiv 2022. [[Paper](https://arxiv.org/pdf/2212.10560.pdf)][[Data](https://github.com/yizhongw/self-instruct)]
3. **Principle-driven self-alignment of language models from scratch with minimal human supervision**. *Sun et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.03047.pdf)][[Project](https://github.com/IBM/Dromedary)][[Data](https://huggingface.co/datasets/zhiqings/dromedary-65b-verbose-clone-v0)]
4. **Chain of hindsight aligns language models with feedback.** *Hao et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2302.02676.pdf)][[Project](https://github.com/lhao499/chain-of-hindsight)]
5. **Second thoughts are best: Learning to re-align with human values from text edits.** *Liu et al.* Neurips 2022. [[Paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/01c4593d60a020fed5607944330106b1-Paper-Conference.pdf)]
6. **Training Socially Aligned Language Models in Simulated Human Society**. *Liu et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.16960.pdf)][[Project](https://github.com/agi-templar/Stable-Alignment)]
7. **Red-teaming large language models using chain of utterances for safety-alignment.** *Bhardwaj et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2308.09662.pdf)][[Project](https://github.com/declare-lab/red-instruct)][[Data](https://huggingface.co/datasets/declare-lab/HarmfulQA)][[Checkpoint](https://huggingface.co/declare-lab/starling-7B)]

**Ranking-based**

1. **Rrhf: Rank responses to align language models with human feedback without tears.** *Yuan et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2304.05302v2.pdf)][[Project](https://github.com/GanjinZero/RRHF)]
2. **Direct preference optimization: Your language model is secretly a reward model**. *Rafailov et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.18290.pdf?trk=public_post_comment-text)]
3. **Preference ranking optimization for human alignment.** *Song et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2306.17492.pdf)][[Project](https://github.com/AlibabaResearch/DAMO-ConvAI/tree/main/PRO)]
4. **Slic-hf: Sequence likelihood calibration with human feedback.** *Zhao et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.10425.pdf)]
5. **A general theoretical paradigm to understand learning from human preferences.** *Azar et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2310.12036.pdf)]
6. **Contrastive preference learning: Learning from human feedback without rl.** *Hejna et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2310.13639.pdf)][[Project](https://github.com/jhejna/cpl)]

### In-Context Alignment

1. **The capacity for moral self-correction in large language models.** *Ganguli et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2302.07459.pdf)]
2. **Critic: Large language models can self-correct with tool-interactive critiquing.** Gou et al. arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.11738.pdf)][[Project](https://github.com/microsoft/ProphetNet/tree/master/CRITIC)]
3. **Rain: Your language models can align themselves without finetuning.** *Li et al.* ICLR 2024. [[Paper](https://openreview.net/pdf?id=pETSfWMUzy)][[Project](https://github.com/SafeAILab/RAIN)]
4. **An explanation of in-context learning as implicit bayesian inference.** *Xie et al.* ICLR 2021. [[Paper](https://openreview.net/pdf?id=RdJVFCHjUMI)][[Project](https://github.com/p-lambda/incontext-learning)][[Data](https://github.com/p-lambda/incontext-learning)]
5. **In-context alignment: Chat with vanilla language models before fine-tuning.** *Han et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2308.04275.pdf)][[Project](https://github.com/xhan77/in-context-alignment)]
6. **The unlocking spell on base llms: Rethinking alignment via in-context learning.** *Lin et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2312.01552.pdf)][[Project](https://allenai.github.io/re-align/)]
7. **Align on the fly: Adapting chatbot behavior to established norms.** *Xu et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2312.15907.pdf)][[Project](https://github.com/GAIR-NLP/OPO)]

### Personalized Alignment

1. **Recommendation as instruction following: A large language model empowered recommendation approach.** *Zhang et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.07001.pdf)][[Project](https://github.com/GAIR-NLP/OPO)]
2. **Tallrec: An effective and efficient tuning framework to align large language model with recommendation.** *Bao et al.* RecSys 2023. [[Paper](https://arxiv.org/pdf/2305.00447.pdf)][[Project](https://github.com/SAI990323/TALLRec)]
3. **Zero-shot next-item recommendation using large pretrained language models.** *Zhang et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2304.03153.pdf)][[Project](https://github.com/AGI-Edgerunners/LLM-Next-Item-Rec)]
4. **Palr: Personalization aware llms for recommendation.** *Chen et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.07622.pdf)]
5. **Llm-empowered chatbots for psychiatrist and patient simulation: Application and evaluation.** *Chen et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.13614.pdf)]
6. **Misc: A mixed strategy-aware model integrating comet for emotional support conversation.** *Tu et al.* ACL 2023. [[Paper](https://aclanthology.org/2022.acl-long.25.pdf)][[Project](https://github.com/morecry/MISC)]
7. **Augesc: Large-scale data augmentation for emotional support conversation with pre-trained language models.** *Zheng et al.* ACL 2023. [[Paper](https://aclanthology.org/2023.findings-acl.99.pdf)][[Project](https://github.com/thu-coai/AugESC)]
8. **Control globally, understand locally: A global-to-local hierarchical graph network for emotional support conversation.** *Peng et al. IJCAI* 2022. [[Paper](https://www.ijcai.org/proceedings/2022/0600.pdf)]
9. **Polise: Reinforcing politeness using user sentiment for customer care response generation.** *Firdaus et al.* COLING 2022. [[Paper](https://aclanthology.org/2022.coling-1.538.pdf)]
10. **Social simulacra: Creating populated prototypes for social computing systems.** *Park et al.* UIST 2022. [[Paper](https://arxiv.org/pdf/2208.04024.pdf)]
11. **Generative agents: Interactive simulacra of human behavior.** *Park et al.* UIST 2023. [[Paper](https://arxiv.org/pdf/2304.03442.pdf)][[Project](https://github.com/joonspk-research/generative_agents)]
12. **Can large language models transform computational social science?** *Ziems et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.03514.pdf)][[Project](https://github.com/SALT-NLP/LLMs_for_CSS/tree/main/css_data)]
13. **Whose opinions do language models reflect?** *Santurkar et al.* ICML 2023. [[Paper](https://openreview.net/pdf?id=7IRybndMLU)][[Project](https://github.com/tatsu-lab/opinions_qa)]
14. **Lamp: When large language models meet personalization.** *Salemi et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2304.11406.pdf)][[Project](https://github.com/LaMP-Benchmark/LaMP)]
15. **Chatplug: Open-domain generative dialogue system with internet-augmented instruction tuning for digital human.** *Tian et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2304.07849.pdf)][[Project](https://github.com/X-PLUG/ChatPLUG)]

### Multimodal Alignment

1. **Visual instruction tuning**. *Liu et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2304.08485.pdf)][[Project](https://llava-vl.github.io/)]
2. **Llavar: Enhanced visual instruction tuning for text-rich image understanding**. *Zhang et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2306.17107.pdf)][[Project](https://llavar.github.io/)]
3. **Visual Instruction Tuning with Polite Flamingo**. *Chen et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2307.01003.pdf)][[Project](https://github.com/ChenDelong1999/polite_flamingo)][[Data](https://huggingface.co/datasets/chendelong/PF-1M/tree/main)]
4. **Aligning large multi-modal model with robust instruction tuning.** *Liu et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2306.14565.pdf)][[Project](https://fuxiaoliu.github.io/LRV/)]
5. **Better aligning text-to-image models with human preference.** *Wu et al.* ICCV 2023. [[Paper](https://openaccess.thecvf.com/content/ICCV2023/papers/Wu_Human_Preference_Score_Better_Aligning_Text-to-Image_Models_with_Human_Preference_ICCV_2023_paper.pdf)][[Project](https://github.com/tgxs002/align_sd)]
6. **Minigpt-4: Enhancing vision-language understanding with advanced large language models.** *Zhu et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2304.10592.pdf)][[Project](https://minigpt-4.github.io/)]
7. **Otter: A multi-modal model with in-context instruction tuning. ***Li et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.03726.pdf)][[Project](https://github.com/Luodian/Otter)]
8. **Multimodal-gpt: A vision and language model for dialogue with humans.** *Gong et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2305.04790.pdf)][[Project](https://github.com/open-mmlab/Multimodal-GPT)]
9. **Instructblip: towards general-purpose vision-language models with instruction tuning.** *Dai et al.* Neurips 2023. [[Paper](https://openreview.net/pdf?id=vvoWPYqZJA)][[Project](https://github.com/salesforce/LAVIS/tree/main/projects/instructblip)]
10. **Aligning text-to-image models using human feedback.** *Lee et al.* arXiv 2023. [[Paper](https://arxiv.org/pdf/2302.12192.pdf)]