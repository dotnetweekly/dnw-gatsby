---
_id: 5f911647075fce002f33e381
title: "Async code smells and how to track them down with analyzers - Part II"
url: 'https://cezarypiatek.github.io/post/async-analyzers-p2/'
category: articles
slug: 'async-code-smells-and-how-to-track-them-down-with-analyzers-part-ii'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-10-22T05:19:03.722Z'
tags: [.net]
---

This blog post continues the series which is a guide through the code analyzers available on the market and their possibilities. I’m trying to help you answer the question: “Which analyzer package should I use and how to configure it to avoid problems related to async/await?". In the previous episode, I presented the first seven most common code smells related to asynchronous programming. Today, I present the next seven traps from this area. Lucky you, they can be easily avoided with an appropriate analyzer - for every issue, I provide entries for .editorconfig that configure analyzers that can detect it. Links to NuGet packages, as well as a complete list of analyzers’ rules, can be found in the previous article.


