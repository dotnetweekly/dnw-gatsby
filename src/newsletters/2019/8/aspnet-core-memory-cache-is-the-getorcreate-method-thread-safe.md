---
_id: 5c6be1426ef4231796354107
title: "ASP.NET Core Memory Cache - Is the GetOrCreate method thread-safe?"
url: 'https://blog.novanet.no/asp-net-core-memory-cache-is-get-or-create-thread-safe/'
category: articles
slug: 'aspnet-core-memory-cache-is-the-getorcreate-method-thread-safe'
user_id: 5c6bd03a6ef423a6e8354105
username: 'hbrotan'
createdOn: '2019-02-19T11:58:10.696Z'
tags: [.net-core,caching]
---

Did you know that the ASP.NET Core MemoryCache is subject to race conditions? And is it really thread-safe? This blog post researches these questions, with help from the creator of LazyCache.
