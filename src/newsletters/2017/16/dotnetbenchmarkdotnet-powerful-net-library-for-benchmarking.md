---
_id: 5a88e1abbd6dca0d5f0d1f34
title: "dotnet/BenchmarkDotNet: Powerful .NET library for benchmarking"
url: 'https://github.com/dotnet/BenchmarkDotNet'
category: libraries-tools
slug: 'dotnetbenchmarkdotnet-powerful-net-library-for-benchmarking'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-04-15T21:36:31.000Z'
tags: []
---

Benchmarking is really hard (especially microbenchmarking), you can easily make a mistake during performance measurements. BenchmarkDotNet will protect you from the common pitfalls (even for experienced developers) because it does all the dirty work for you: it generates an isolated project per each benchmark method, does several launches of this project, run multiple iterations of the method (include warm-up), and so on. Usually, you even shouldn't care about a number of iterations because BenchmarkDotNet chooses it automatically to achieve the requested level of precision.
