---
_id: 5a88e1aebd6dca0d5f0d2bf2
title: 'New Filter Overrides feature in ASP.NET MVC 5 and ASP.NET Web API 2'
url: 'http://weblogs.asp.net/imranbaloch/archive/2013/09/25/new-filter-overrides-in-asp-net-mvc-5-and-asp-net-web-api-2.aspx'
category: 5a88e1aebd6dca0d5f0d2bf2
slug: 'new-filter-overrides-feature-in-asp-net-mvc-5-and-asp-net-web-api-2'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-09-28T08:05:15.000Z'
tags: []
---

ASP.NET MVC 5 and ASP.NET Web API 2 added a very important feature called <i>Filter Overrides</i>. A good definition of filter overrides is available in <a href="http://www.asp.net/visual-studio/overview/2013/release-notes-%28release-candidate%29">release notes</a>, <i>"You can now override which filters apply to a given action method or controller, by specifying an override filter. Override filters specify a set of filter types that should not run for a given scope (action or controller). This allows you to add global filters, but then exclude some from specific actions or controllers"</i>. In this quick article, I will tell you the problem that filter overrides is trying to solve (with an example). I will also show you a quick fix of a bug that I found in ASP.NET MVC 5 regarding filter overrides.
