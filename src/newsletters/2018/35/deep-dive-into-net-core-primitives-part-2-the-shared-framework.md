---
_id: 5b88b0cbeb7beb823289afc6
title: 'Deep-dive into .NET Core primitives, part 2: the shared framework'
url: https://natemcmaster.com/blog/2018/08/29/netcore-primitives-2/
category: articles
slug: 'deep-dive-into-net-core-primitives-part-2-the-shared-framework'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-08-31T03:06:51.895Z'
tags: ['.net-core']
---

Shared frameworks have been an essential part of .NET Core since 1.0. ASP.NET Core shipped as a shared framework for the first time in 2.1. You may not have noticed if things are working smoothly, but there have been some bumps and ongoing discussion about its design. In this post, I will dive deep into the shared frameworks and talk about some common developer pitfalls.
