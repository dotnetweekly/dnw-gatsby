---
_id: 5c262a5c745cd060bc0206c5
title: 'Spying on .NET Garbage Collector with TraceEvent'
url: 'https://medium.com/criteo-labs/spying-on-net-garbage-collector-with-traceevent-f49dc3117de'
category: 5c262a5c745cd060bc0206c5
slug: 'spying-on-net-garbage-collector-with-traceevent'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-12-28T13:51:24.430Z'
tags: [.net]
---

The allocator and garbage collector components of the CLR may have a real impact on the performances of your application. The Book of the Runtime describes the allocator/collector design goals in the must read Garbage Collection Design page written by Maoni Stephens, lead developer of the GC. In addition, Microsoft provides large garbage collection documentation. And if you want more details about .NET garbage collector, take a look at Pro .NET Memory Management by Konrad Kokosa. In this post, I will focus on the events emitted by the CLR and how you could use them to better understand how your application is behaving, related to its memory consumption.


