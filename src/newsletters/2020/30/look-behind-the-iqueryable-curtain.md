---
_id: 5f188f837ea0e7003fb8376b
title: "Look Behind the IQueryable Curtain"
url: 'https://blog.jeremylikness.com/blog/look-behind-the-iqueryable-curtain/'
category: articles
slug: 'look-behind-the-iqueryable-curtain'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-07-22T19:12:03.047Z'
tags: [.net]
---

In a previous blog post, I explored the power of expressions and used them to dynamically build a rules engine based on a JSON payload. In this post I flip everything upside down and start with the expression. Given the variety of possible expression types and complexity of expression trees, what is the best way to decompose the tree? And, while we’re at it, can we mutate the expression to make it behave differently? I’ll explain why that’s important.


