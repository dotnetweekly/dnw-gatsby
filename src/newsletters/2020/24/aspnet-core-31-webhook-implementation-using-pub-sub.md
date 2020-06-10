---
_id: 5eddcfe93a2ca400363786e9
title: "ASP.NET Core 3.1 Webhook Implementation Using Pub/Sub"
url: 'https://volosoft.com/blog/ASP.NET-CORE-3.1-Webhook-Implementation-Using-Pub-Sub'
category: articles
slug: 'aspnet-core-31-webhook-implementation-using-pub-sub'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-06-08T05:43:05.394Z'
tags: [asp.net-core]
---

In this article, I will show you the basics of the Webhook mechanism that uses a publish-subscribe pattern in the ASP.NET CORE 3.1 project.

What is Webhook
Webhooks are user-defined HTTP callbacks. They are usually triggered by some events, such as pushing code to a repository or a comment being posted to a blog. When that event occurs, the source site makes an HTTP request to the URL configured for the Webhook. Users can configure them to cause events on one site to invoke behavior on another.
