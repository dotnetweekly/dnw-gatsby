---
_id: 5a88e1aabd6dca0d5f0d1c68
title: "Passing a String Where It Isn’t Expected"
url: 'https://bengribaudo.com/blog/2017/10/13/3871/passing-a-string-where-it-isnt-expectedexploring-the-implicit-conversion-alternative'
category: articles
slug: 'passing-a-string-where-it-isnt-expected'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-10-14T11:28:17.000Z'
tags: []
---

Since the goal is to construct instances of the main class by passing a string, it seems the way to implement this request is to give the main class a constructor that accepts a string as its argument.

Surprisingly, adding a constructor isn’t the only way to achieve the desired effect!
