---
layout: post
title: Negating Negatives - Alignment without Human Positive Samples via Distributional Dispreference Optimization
authors: Shitong Duan, Xiaoyuan Yi, Peng Zhang, Tun Lu, Xing Xie, Ning Gu
paper_url: https://arxiv.org/pdf/2403.03419v1
date: 2024-03-06 0
image: images/posts/basic_value_space.png
coverImage: images/posts/Weight-of-the-heart.png
tags: Alignment Dataset
status: latest 
permalink: /negating_negatives
---

Large language models (LLMs) have revolutionized the role of AI, yet also pose potential risks of propagating unethical content. Alignment technologies have been introduced to steer LLMs towards human preference, gaining increasing attention. Despite notable breakthroughs in this direction, existing methods heavily rely on high-quality positive-negative training pairs, suffering from noisy labels and the marginal distinction between preferred and dispreferred response data. Given recent LLMs' proficiency in generating helpful responses, this work pivots towards a new research focus: achieving alignment using solely human-annotated negative samples, preserving helpfulness while reducing harmfulness. For this purpose, we propose Distributional Dispreference Optimization (DO), which maximizes the discrepancy between the generated responses and the dispreferred ones to effectively eschew harmful information. We theoretically demonstrate that DO is equivalent to learning a distributional instead of instance-level preference model reflecting human dispreference against the distribution of negative responses. Besides, DO integrates an implicit Jeffrey Divergence regularization to balance the exploitation and exploration of reference policies and converges to a non-negative one during training. Extensive experiments demonstrate that our method achieves comparable generation quality and surpasses the latest baselines in producing less harmful and more informative responses with better training stability and faster convergence.