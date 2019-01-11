---
_id: 5b8df4cc2810131bde94a423
title: 'Fuzzing the .NET JIT Compiler'
url: 'http://mattwarren.org/2018/08/28/Fuzzing-the-.NET-JIT-Compiler/'
category: 5b8df4cc2810131bde94a423
slug: 'fuzzing-the-net-jit-compiler'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-09-04T02:58:20.781Z'
tags: [.net]
---

But before we dive into ‘Fuzzlyn’ and what it does, we’re going to take a quick look at ‘compilation’ in the .NET Framework. When you write C#/VB.NET/F# code (delete as appropriate) and compile it, the compiler converts it into Intermediate Language (IL) code. The IL is then stored in a .exe or .dll, which the Common Language Runtime (CLR) reads and executes when your program is actually run. However it’s the job of the Just-in-Time (JIT) Compiler to convert the IL code into machine code.


