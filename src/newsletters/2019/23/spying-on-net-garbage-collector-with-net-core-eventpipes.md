---
_id: 5cf7707bf35c1ac3d9457932
title: "Spying on .NET Garbage Collector with .NET Core EventPipes"
url: 'https://medium.com/criteo-labs/spying-on-net-garbage-collector-with-net-core-eventpipes-9f2a986d5705'
category: articles
slug: 'spying-on-net-garbage-collector-with-net-core-eventpipes'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-06-05T08:34:19.192Z'
tags: [.net]
---

The previous episode of the series introduced the notion of “GC log”, well known in the Java world and how to implement it in .NET thanks to ETW and TraceEvent on Windows. This solution is easy but requires to create an ETW session (and to remember to close it)… and is also not supported on Linux. However, .NET Core 2.2 introduced the EventListener class as the best way to receive CLR events both on Windows and Linux but only from inside the process itself. As of today, TraceEvent is not supporting live session with EventPipe/EventListener, only a file-based constructor is available. This is unfortunate because it means that you can’t rely on the huge work done by TraceEvent to parse the CLR events; especially those related to garbage collections. The rest of the post will explain how to decipher raw events.


