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


**Tianci Liu**, Quan Zhang, QI Liu. "PANOM: Automatic Hyper-parameter Tuning for Inverse Problem", <i>NeurIPS Workshop on Deep Learning and Inverse Problems </i>. 2021.

**Tianci Liu**, Jeffrey Regier. "An Empirical Comparison of GANs and Normalizing Flows for Density Estimation", <i>NeurIPS Workshop on Bayesian Deep Learning </i>. 2021.
