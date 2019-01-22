---
_id: 5a88e1abbd6dca0d5f0d2048
title: "Build Your Own ASP.NET Cache with WeakReferences"
url: 'https://visualstudiomagazine.com/articles/2017/01/27/asp-net-cache-weakreferences.aspx'
category: articles
slug: 'build-your-own-asp-net-cache-with-weakreferences'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-01-28T08:56:50.000Z'
tags: []
---

I very much like the ASP.NET Cache and the more generally usable MemoryCache collections: They let me build up a set of objects (typically drawn from a database) that I can use in my application. Of course, those objects take up room in memory, which is too bad -- especially if the computer is running short on memory. However, the nice thing about these two caching objects is that they discard items in the collection when memory gets tight.
