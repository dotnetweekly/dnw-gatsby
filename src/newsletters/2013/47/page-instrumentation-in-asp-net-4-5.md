---
_id: 5a88e1aebd6dca0d5f0d2b76
title: 'Page Instrumentation in ASP.NET 4.5'
url: 'http://weblogs.asp.net/imranbaloch/archive/2013/11/23/page-instrumentation-in-asp-net-4-5.aspx'
category: 5a88e1aebd6dca0d5f0d2b76
slug: 'page-instrumentation-in-asp-net-4-5'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-11-23T09:55:33.000Z'
tags: []
---

ASP.NET 4.5 include a hidden gem called <i>Page Instrumentation</i>, very few people aware of this gem. You can use page instrumentation in ASP.NET 4.5 WebForm and MVC 5 or 4(assuming it targets 4.5). It allows you to inspect/instrument a web form or a mvc view during the rendering process. Page instrumentation are useful in scenarios when you have some performance issues regarding view engine rendering. In this article, I will show you how to use this feature in ASP.NET 4.5.
