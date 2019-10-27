---
_id: 5db5fec85f78740035ea17ef
title: ".NET Vector Performance"
url: 'https://praeclarum.org/2019/10/15/vector-performance.html'
category: articles
slug: 'net-vector-performance'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-10-28T20:32:08.286Z'
tags: [.net]
---

TLDR; I wanted to know what the fastest vector types were on .NET. Turns out, performance varies wildly across platforms. System.Numerics.Vector4 and friends give good performance overall, especially for .NET Core apps, while homemade vector types do not get auto-vectorized. Avoid Vector<T> like the plague. Oh, and iPhone 11s are stupid fast.
