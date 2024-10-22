---
layout: post
title: CLAVE - An Adaptive Framework for Evaluating Values of LLM Generated Responses
authors: Jing Yao, Xiaoyuan Yi, Xing Xie
paper_url: https://arxiv.org/abs/2407.10725v1
date: 2024-07-15 0
image: images/posts/clave_evaluator.png
coverImage: images/posts/paper-cutting-doll.png
tags: Dataset Evaluation
status: latest 
permalink: /clave_evaluator
---

The rapid progress in Large Language Models (LLMs) poses potential risks such as generating unethical content. Assessing LLMs' values can help expose their misalignment, but relies on reference-free evaluators, e.g., fine-tuned LLMs or close-source ones like GPT-4, to identify values reflected in generated responses. Nevertheless, these evaluators face two challenges in open-ended value evaluation: they should align with changing human value definitions with minimal annotation, against their own bias (adaptability), and detect varying value expressions and scenarios robustly (generalizability). To handle these challenges, we introduce CLAVE, a novel framework which integrates two complementary LLMs, a large one to extract high-level value concepts from a few human labels, leveraging its extensive knowledge and generalizability, and a smaller one fine-tuned on such concepts to better align with human value understanding. This dual-model approach enables calibration with any value systems using <100 human-labeled samples per value type. Then we present ValEval, a comprehensive dataset comprising 13k+ (text,value,label) tuples across diverse domains, covering three major value systems. We benchmark the capabilities of 12+ popular LLM evaluators and analyze their strengths and weaknesses. Our findings reveal that combining fine-tuned small models and prompt-based large ones serves as a superior balance in value evaluation.