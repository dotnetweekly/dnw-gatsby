---
_id: 5a88e1aebd6dca0d5f0d2a20
title: 'The JIT finally proposed. JIT and SIMD are getting married.'
url: 'http://blogs.msdn.com/b/dotnet/archive/2014/04/07/the-jit-finally-proposed-jit-and-simd-are-getting-married.aspx'
category: 5a88e1aebd6dca0d5f0d2a20
slug: 'the-jit-finally-proposed-jit-and-simd-are-getting-married'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-04-26T07:27:37.000Z'
tags: []
---

Processor speed no longer follows Moore’s law. So in order to optimize the performance of your applications, it’s increasingly important to embrace parallelization. Or, as Herb Sutter phrased it, the free lunch is over.

You may think that task-based programming or offloading work to threads is already the answer. While multi-threading is certainly a critical part, it’s important to realize that it’s still important to optimize the code that runs on each core. SIMD is a technology that employs data parallelization at the CPU level. Multi-threading and SIMD complement each other: multi-threading allows parallelizing work over multiple cores while SIMD allows parallelizing work within a single core.
