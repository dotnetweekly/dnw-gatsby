---
_id: 5b3afb5c06b61136aa56ffea
title: "Garbage collection, a memorandum on memory in C#"
url: 'https://blogs.endjin.com/2018/06/garbage-collection-a-memorandum-on-memory-in-csharp/'
category: 5b3afb5c06b61136aa56ffea
slug: 'garbage-collection-a-memorandum-on-memory-in-c'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-07-03T04:28:12.134Z'
tags: [c#]
---

Not coming from a background in computer science, the inner workings of a computer have always been somewhat of a mystery to me. This is something I’ve always meant to remedy but never quite gotten around to. When I transitioned from C++ to C# my main thought surrounding memory management was “well thank god I don’t have to think about that anymore”. However, in the last few weeks I have been really drilling down into the inner workings of the language (a big thank you to Ian Griffiths for his book Programming C# 5.0). In doing this I have realised that memory management is not only something that does require some consideration, but also something that I find quite interesting.


