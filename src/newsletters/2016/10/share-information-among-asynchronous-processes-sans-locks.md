---
_id: 5a88e1acbd6dca0d5f0d23f4
title: Share Information Among Asynchronous Processes Sans Locks
url: https://visualstudiomagazine.com/articles/2016/03/01/share-information.aspx
category: articles
slug: 'share-information-among-asynchronous-processes-sans-locks'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2016-03-05T10:11:51.000Z'
tags: []
---

In an <a href="https://visualstudiomagazine.com/articles/2016/02/01/asynchronous-processes.aspx" target="_blank">earlier column</a>, I discussed how creating an application as a set of cooperating, asynchronous processes can actually simplify your application while giving you all the benefits of asynchronous processing (a more responsive application, related processes that deal well with different processing speeds, plus exploiting multi-core processors). The trick is to divide your application into producers (processes that gather data) and consumers (processes that do something with that data) joined together by some asynchronous pipeline.
