---
_id: 5a88e1aabd6dca0d5f0d1bf4
title: "Handling conditional requests in ASP.NET Core MVC"
url: 'https://www.tpeczek.com/2017/11/handling-conditional-requests-in-aspnet.html'
category: articles
slug: 'handling-conditional-requests-in-asp-net-core-mvc'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-11-04T05:30:11.000Z'
tags: []
---

This is another post resulting from my work on sample ASP.NET Core MVC powered Web API. This time I'm going to focus on conditional requests. Conditional requests have three main use cases: cache revalidation, concurrency control and range requests. Range requests are primarily used for media like video or audio and I'm not going to write about them here (I did in the past in context of ASP.NET MVC), but the other two are very useful for a Web API.
