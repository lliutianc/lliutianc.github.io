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


4. Daiwei Zhang, **Tianci Liu**, Jian Kang. "Density Regression and Uncertainty Quantification with Bayesian Deep Noise Neural Networks", *arXiv Preprint, 2022* [paper](https://arxiv.org/abs/2206.05643)

3. **Tianci Liu**, Chun Wang, Gongjun Xu, "Estimating three- and four-parameter MIRT models with importance-weighted sampling enhanced variational auto-encoder", *Frontiers in Psychology, 13:935419, 2022* [paper](https://www.frontiersin.org/articles/10.3389/fpsyg.2022.935419/full)

2. **Tianci Liu**, Quan Zhang, Qi Lei. "PANOM: Automatic Hyper-parameter Tuning for Inverse Problems", *NeurIPS Workshop on Deep Learning and Inverse Problems, 2021* [paper](https://openreview.net/pdf?id=aOnjg9Z2vIF)

1. **Tianci Liu**, Jeffrey Regier. "An Empirical Comparison of GANs and Normalizing Flows for Density Estimation", *NeurIPS Workshop on Bayesian Deep Learning, 2021* [paper](http://bayesiandeeplearning.org/2021/papers/9.pdf)
