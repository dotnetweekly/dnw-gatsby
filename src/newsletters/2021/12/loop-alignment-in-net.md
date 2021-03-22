---
_id: "6057dff3066145002fa651eb"
title: "Loop alignment in .NET"
url: 'https://kunalspathak.github.io/2021-03-15-Loop-Alignment/'
category: articles
slug: 'loop-alignment-in-net'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-03-19T00:08:19.014Z'
tags: [.net]
---

When writing software, developers try their best to maximize the performance they can get from the code they have baked into the product. Often, there are various tools available to the developers to find that last change they can squeeze into their code to make their software run faster. But sometimes, they might notice slowness in the product because of a totally unrelated change. Even worse, when measured the performance of a feature in a lab, it might show unstable performance results that look like the following BubbleSort graph1 What could possibly be introducing such flakiness in the performance?


