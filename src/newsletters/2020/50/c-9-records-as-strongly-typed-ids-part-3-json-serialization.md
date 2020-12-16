---
_id: 5fd1cdc09ec02100302da209
title: "C# 9 records as strongly-typed ids - Part 3: JSON serialization"
url: 'https://thomaslevesque.com/2020/12/07/csharp-9-records-as-strongly-typed-ids-part-3-json-serialization/'
category: articles
slug: 'c-9-records-as-strongly-typed-ids-part-3-json-serialization'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-12-10T07:26:56.813Z'
tags: [c#]
---

In the previous post in this series, we noticed that the strongly-typed id was serialized to JSON in an unexpected way.

When you think about it, it’s not really unexpected: the strongly-typed id is a “complex” object, not a primitive type, so it makes sense that it’s serialized as an object. But it’s clearly not what we want… Let’s see how to fix that.


