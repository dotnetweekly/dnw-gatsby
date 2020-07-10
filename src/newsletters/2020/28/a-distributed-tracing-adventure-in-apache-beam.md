---
_id: 5f03da63f164e3003f913810
title: "A Distributed Tracing Adventure in Apache Beam"
url: 'http://rion.io/2020/07/04/a-distributed-tracing-adventure-in-apache-beam/'
category: articles
slug: 'a-distributed-tracing-adventure-in-apache-beam'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-07-07T02:13:55.962Z'
tags: [tools]
---

Distributed systems are hard, and things can often get much more difficult when problems arise. This is only exacerbated by the fact that many of these systems can be notoriously difficult to dig into when they are actually out in the wild and not just running "on your machine".

They say that a picture is worth a thousand words, but in the world of distributed systems, a picture can easily be worth a thousand hours. While I can't promise you that this post will in any way save you a thousand hours, I hope that you find value in the thought process that I explored when introducing tracing and visibility into an Apache Beam pipeline.
