---
_id: 5d9a0b3158aae8001df5f58a
title: "Non-nullable references with C# 8 and .NET Core 3.0"
url: 'https://cezarypiatek.github.io/post/non-nullable-references-in-dotnet-core/'
category: articles
slug: 'non-nullable-references-with-c-8-and-net-core-30'
user_id: 5a980534877735bd0ca462de
username: 'cezarypiatek'
createdOn: '2019-10-07T15:41:37.770Z'
tags: [.net-core]
---

Two weeks ago .NET Core 3.0 was officially published. Together with the new framework version, Visual Studio 2019 got support for a long-awaited C# 8.0. The complete list of the new language features is available [here](https://docs.microsoft.com/en-US/dotnet/csharp/whats-new/csharp-8) on the MSDN, but the one that deserves special attention is [Nullable reference types](https://docs.microsoft.com/en-US/dotnet/csharp/whats-new/csharp-8#nullable-reference-types). This is a very important change in the language semantic because from now we will be able to eliminate certain class of errors related to reference `nullability` on the compilation stage. In this blog post, I will show you how to use this new language feature and how to achieve similar benefits if you still cannot use .NET Core 3.0 in your projects.
