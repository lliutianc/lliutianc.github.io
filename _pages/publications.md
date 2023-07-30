---
layout: archive
title: "Publications ($$\ast$$ indicates equal contributions)"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

- Daiwei Zhang, **Tianci Liu**, Jian Kang. "Density Regression and Uncertainty Quantification with Bayesian Deep Noise Neural Networks.", 
*Stat, in press* 

- **Tianci Liu$$^\ast$$**, Tong Yang$$^\ast$$, Quan Zhang, Qi Lei, “Optimization for Amortized Inverse Problems.”
*40th International Conference on Machine Learning (ICML 2023), Honolulu, Hawaii, Jul 2023.*

- Zichi, Laura, **Tianci Liu**, Elizabeth Drueke, Liuyan Zhao, and Gongjun Xu. “Physically informed
machine-learning algorithms for the identification of two-dimensional atomic crystals.” 
*Scientific Reports 13, no. 1 (2023): 6143.* 

- **Tianci Liu**, Chun Wang, Gongjun Xu, "Estimating three- and four-parameter MIRT models with importance-weighted sampling enhanced variational auto-encoder." 
*Frontiers in Psychology, 13:935419, 2022* 

- **Tianci Liu**, Quan Zhang, Qi Lei. "PANOM: Automatic Hyper-parameter Tuning for Inverse Problems." 
*NeurIPS Workshop on Deep Learning and Inverse Problems, 2021*. 

- **Tianci Liu**, Jeffrey Regier. "An Empirical Comparison of GANs and Normalizing Flows for Density Estimation."
*NeurIPS Workshop on Bayesian Deep Learning, 2021*.
