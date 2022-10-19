---
layout: archive
title: "Publications"
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


4. Daiwei Zhang, **Tianci Liu**, Jian Kang. "Density Regression and Uncertainty Quantification with Bayesian Deep Noise Neural Networks", *arXiv Preprint, 2022*

3. **Tianci Liu**, Chun Wang, Gongjun Xu, 

2. **Tianci Liu**, Quan Zhang, Qi Lei. "PANOM: Automatic Hyper-parameter Tuning for Inverse Problem", *NeurIPS Workshop on Deep Learning and Inverse Problems, 2021*

1. **Tianci Liu**, Jeffrey Regier. "An Empirical Comparison of GANs and Normalizing Flows for Density Estimation", *NeurIPS Workshop on Bayesian Deep Learning, 2021*
