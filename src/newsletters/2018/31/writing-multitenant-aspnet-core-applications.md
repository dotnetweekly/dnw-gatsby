---
_id: 5b62a91d6b826e6de6f5993e
title: Writing Multitenant ASP.NET Core Applications
url: https://stackify.com/writing-multitenant-asp-net-core-applications/
category: articles
slug: 'writing-multitenant-aspnet-core-applications'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-08-02T06:47:57.027Z'
tags: ['asp.net-core']
---

A multitenant web application is one that responds differently depending on how it is addressed – the tenant. This kind of architecture has become very popular, because a single code base and deployment can serve many different tenants. In this post, I will present some of the concepts and challenges behind multitenant ASP.NET Core apps. Let’s consider what it takes to write a multitenant ASP.NET Core app. For the sake of simplicity, let’s consider two imaginary tenants, ABC and XYZ. We won’t go into all that is involved in writing a multitenant app, but we will get a glimpse of all the relevant stuff that is involved in it.


