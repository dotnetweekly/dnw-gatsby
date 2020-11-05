---
_id: 5f9edfc4075fce002f33e3ab
title: "Using C# 9 records as strongly-typed ids"
url: 'https://thomaslevesque.com/2020/10/30/using-csharp-9-records-as-strongly-typed-ids/'
category: articles
slug: 'using-c-9-records-as-strongly-typed-ids'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-11-02T16:18:12.221Z'
tags: [.net]
---

Entities typically have integer, GUID or string ids, because those types are supported directly by databases. However, if all your entities have ids of the same type, it becomes pretty easy to mix them up, and use the id of a Product where the id of an Order was expected. This is actually a pretty common source of bugs.
