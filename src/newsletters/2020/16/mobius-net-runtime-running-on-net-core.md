---
_id: 5e93f5ff72748f0034ead237
title: "Mobius – .NET runtime running on .NET Core"
url: 'https://tooslowexception.com/mobius-net-runtime-running-on-net-core/'
category: articles
slug: 'mobius-net-runtime-running-on-net-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-04-13T05:17:51.152Z'
tags: [.net]
---

.NET application is “just” a piece of CIL bytecode to be executed by the .NET runtime. And .NET runtime is “just” a program that is able to perform this task. It happens that currently .NET Framework/.NET Core runtimes are written in C++. I am also fully aware of CoreRT that was .NET runtime with many parts rewritten to C# (like type system) but still, crucial parts (including JIT compiler and the GC) were left written in C++.
