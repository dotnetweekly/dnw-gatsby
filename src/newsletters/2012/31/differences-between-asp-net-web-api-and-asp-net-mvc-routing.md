---
_id: 5a88e1afbd6dca0d5f0d2f94
title: "Differences Between ASP.NET Web API and ASP.NET MVC – Routing"
url: 'http://www.cloudydeveloper.com/?p=1971'
category: articles
slug: 'differences-between-asp-net-web-api-and-asp-net-mvc-routing'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2012-07-27T07:21:19.000Z'
tags: []
---

I’ve done a fair amount of work with ASP.NET MVC over the years, and I understand how routing works in that world. Routing with ASP.NET Web API is bit different though and when I first started with it, some of the basics escaped me. Primarily, there’s an additional level of logic that executes when doing request to route matching. Specifically, the HTTP verb used in the request plays a critical role in determining which controller action method is invoked. Let’s see what happens when I try to simply add an additional method (i.e., endpoint) to a Web API controller.
