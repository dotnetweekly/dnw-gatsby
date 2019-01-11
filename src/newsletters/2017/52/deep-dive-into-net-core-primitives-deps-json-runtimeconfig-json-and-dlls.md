---
_id: 5a88e1aabd6dca0d5f0d1b2e
title: "Deep-dive into .NET Core primitives: deps.json, runtimeconfig.json, and dll's"
url: 'http://www.natemcmaster.com/blog/2017/12/21/netcore-primitives/'
category: 5a88e1aabd6dca0d5f0d1b2e
slug: 'deep-dive-into-net-core-primitives-deps-json-runtimeconfig-json-and-dlls'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-12-29T20:28:05.000Z'
tags: []
---

I learned to program with gcc, C++, and vim. When I started working with C# and .NET, clicking the “Start” button in Visual Studio was magical, but also dissatisfying. Dissatisfying – not because I want to write a Makefile – but because I didn’t know what “Start” did. So, I started to dig. In this post, I’ll show the most primitive tools used in .NET Core, and manually create a .NET Core app without the help of Visual Studio. If you’re new to .NET Core and want to peek under the hood, this is a good post for you. If you’re already a .NET Core developer and wonder what *.deps.json or *.runtimeconfig.json files are all about, I’ll cover those, too.
