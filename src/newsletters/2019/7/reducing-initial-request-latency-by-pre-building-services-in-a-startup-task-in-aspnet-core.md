---
_id: 5c6120e16ef4235ad83540d5
title: "Reducing initial request latency by pre-building services in a startup task in ASP.NET Core"
url: 'https://andrewlock.net/reducing-latency-by-pre-building-singletons-in-asp-net-core/'
category: articles
slug: 'reducing-initial-request-latency-by-pre-building-services-in-a-startup-task-in-aspnet-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-02-11T08:14:41.201Z'
tags: [asp.net-core]
---

This post follows on somewhat from my recent posts on running async startup tasks in ASP.NET Core. Rather than discuss a general approach to running startup tasks, this post discusses an example of a startup task that was suggested by Ruben Bartelink. It describes an interesting way to try to reduce the latencies seen by apps when they've just started, by pre-building all the singletons registered with the DI container.


