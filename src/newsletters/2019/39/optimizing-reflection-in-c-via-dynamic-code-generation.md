---
_id: 5d9181f058aae8001df5f55b
title: "Optimizing reflection in C# via dynamic code generation"
url: 'https://medium.com/@SergioPedri/optimizing-reflection-with-dynamic-code-generation-6e15cef4b1a2'
category: articles
slug: 'optimizing-reflection-in-c-via-dynamic-code-generation'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-09-26T04:17:52.245Z'
tags: [c#]
---

I have recently been spending a lot of time working on ComputeSharp, a .NET Standard 2.1 library written in C# 8.0 that lets you run code in parallel on the GPU through DX12 and dynamically generated HLSL compute shaders. That is a somewhat unintuitive description for a library that does something conceptually simple: it runs code in parallel in a manner similar to Parallel.

