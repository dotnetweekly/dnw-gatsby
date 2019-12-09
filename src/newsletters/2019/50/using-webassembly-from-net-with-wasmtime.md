---
_id: 5dedcc04b8c30c002fde5c56
title: "Using WebAssembly from .NET with Wasmtime"
url: 'https://hacks.mozilla.org/2019/12/using-webassembly-from-dotnet-with-wasmtime/'
category: articles
slug: 'using-webassembly-from-net-with-wasmtime'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-12-09T04:22:28.715Z'
tags: [.net]
---

Wasmtime, the WebAssembly runtime from the Bytecode Alliance, recently added an early preview of an API for .NET Core, Microsoft’s free, open-source, and cross-platform application runtime. This API enables developers to programmatically load and execute WebAssembly code directly from their .NET programs.

.NET Core is already a cross-platform runtime, so why should .NET developers pay any attention to WebAssembly?

There are several reasons to be excited about WebAssembly if you’re a .NET developer, such as sharing the same executable code across platforms, being able to securely isolate untrusted code, and having a seamless interop experience with the upcoming WebAssembly interface types proposal.
