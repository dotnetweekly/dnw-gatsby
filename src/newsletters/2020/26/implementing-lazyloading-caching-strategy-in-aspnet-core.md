---
_id: 5ef194ce0a4131004ad991a7
title: "Implementing Lazyloading Caching Strategy in ASP.NET Core"
url: 'https://referbruv.com/blog/posts/in-memory-caching-strategies-lazyloading-cache-in-aspnet-core'
category: articles
slug: 'implementing-lazyloading-caching-strategy-in-aspnet-core'
user_id: 5ee0fc223a2ca4003637875a
username: 'referbruv'
createdOn: '2020-06-23T05:36:14.812Z'
tags: [asp.net-core,caching]
---

A perfect implementation of a Cache resides with choosing the best Caching strategy for the application. It depends on the frequency in which the data to be cached will be modified and the possibilities of data modifications from external agencies, such as worker jobs and others. In general, there are two important caching strategies or implementations which are used for building a robust caching tier for applications. In this article, let's discuss about the first caching strategy that optimizes the GETs of an API - a Lazy loading cache. 
