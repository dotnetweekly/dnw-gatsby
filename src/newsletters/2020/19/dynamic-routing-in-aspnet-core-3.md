---
_id: 5eb4b5316409bd00350b42f7
title: "Dynamic Routing in ASP.NET Core 3"
url: 'https://weblogs.asp.net/ricardoperes/dynamic-routing-in-asp-net-core-3'
category: articles
slug: 'dynamic-routing-in-aspnet-core-3'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-05-08T01:26:09.816Z'
tags: [asp.net-core]
---

ASP.NET Core 3 introduced a not so talked about feature which is dynamic routing. In a nutshell, it means that it is possible to decide at runtime the controller, action and route tokens that a request will be dispatched to. The idea is to map a route pattern to a dynamic route handler, like this:

app.UseEndpoints(endpoints =>
{
    endpoints.MapDynamicControllerRoute<SearchValueTransformer>("search/{**product}");
});
