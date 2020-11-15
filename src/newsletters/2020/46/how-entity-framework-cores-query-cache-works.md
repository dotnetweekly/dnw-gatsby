---
_id: 5fa85856075fce002f33e3d0
title: "How Entity Framework Core’s query cache works "
url: 'https://www.tabsoverspaces.com/233841-how-entity-framework-core-query-cache-works'
category: articles
slug: 'how-entity-framework-cores-query-cache-works'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-11-09T20:43:02.904Z'
tags: [.net]
---

Last week, when speaking at .NET Developer Days, I got a question about the query cache in Entity Framework Core – is it shared across DbContexts or is it per instance? With this question I realized I know how the cache work(ed) in Entity Framework 6, but I’m not entirely sure how it’s done in Entity Framework Core. Time to explore! And you can go with me.


