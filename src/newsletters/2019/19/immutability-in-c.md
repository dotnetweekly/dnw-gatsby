---
_id: 5cd113af09f06d54398a07c3
title: "Immutability in C#"
url: 'https://www.codemag.com/article/1905041'
category: articles
slug: 'immutability-in-c'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-05-07T06:12:15.149Z'
tags: [c#]
---

In software development, an immutable object is one that once created, can’t change. Why would you want such an object? To answer that question, it may help to analyze the problems that result from mutating objects. Go back to the basics of what every application does: create, retrieve, update, and delete data (the CRUD operations). The core of any application manipulates objects. Whether or not an application works in a manner consistent with its specification is first answered by whether the data manipulation is correct. Any time code affects an object, you need to verify that the code works correctly.


