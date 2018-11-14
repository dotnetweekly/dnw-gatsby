---
_id: 5b84cb85eb7bebc95189afb6
title: Building a CachedRepository in ASPNET Core
url: https://ardalis.com/building-a-cachedrepository-in-aspnet-core
category: articles
slug: 'building-a-cachedrepository-in-aspnet-core'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-08-28T04:11:49.315Z'
tags: ['asp.net-core']
---

I’m a fan of proper use of design patterns, and you can get big gains from layering multiple patterns together. One prime example of this in web applications is the combination of the Strategy, Repository, and Proxy/Decorator patterns to create the CachedRepository pattern. This pattern separates caching responsibility from persistence responsibility and makes it simple to add caching to an application globally, or on a per-type basis. You can learn more about the CachedRepository here. In this article we’ll drill into a sample application I’ve made available on GitHub that demonstrates how to use the CachedRepository pattern in ASP.NET Core with Entity Framework Core.


