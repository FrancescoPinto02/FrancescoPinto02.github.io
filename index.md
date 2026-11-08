---
layout: default
title: About
permalink: /
---

<!-- =========================================================
     BIO — scrivi qui in Markdown (**grassetto**, *corsivo*, [link](url)).
     Interessi, "Currently" e News si modificano in _data/:
       interests.yml · currently.yml · news.yml
     ========================================================= -->
<div class="bio" markdown="1">

Hi! I'm **Francesco Alessandro Pinto**, a researcher in Software Engineering at the [SeSa Lab](https://sesalabunisa.github.io/en/index.html) of the [University of Salerno](https://www.unisa.it), where I also earned both my B.Sc. and M.Sc. in Computer Science.

My work sits where **Software Engineering for AI (SE4AI)** meets **AI for Software Engineering (AI4SE)**: how to build better ML-enabled systems, and how AI, especially Large Language Models, can help developers write better code. My bachelor's thesis introduced *CAMILLE*, a chatbot that helps ML engineers detect and refactor ML-specific code smells; my master's thesis studied how the readability of developers' prompts relates to the quality of the code LLMs generate.

When I'm not staring at code, I'm probably swimming laps, kneading pizza dough, adding bricks to a LEGO castle or starting yet another Skyrim playthrough.

</div>

{% include currently.html %}

<h2 class="block-title"><i class="fa-solid fa-microscope"></i> Research Interests</h2>
<div class="interests">
  {% for i in site.data.interests %}
  <article class="interest">
    <div class="interest-icon"><i class="{{ i.icon }}"></i></div>
    <div>
      <h3>{{ i.name }}</h3>
      <p>{{ i.description }}</p>
    </div>
  </article>
  {% endfor %}
</div>

{% include news.html %}
