---
_id: 5c76160de483e98a97e88c1a
title: "An Introduction to Optimising Code Using Span<T>"
url: 'https://www.stevejgordon.co.uk/an-introduction-to-optimising-code-using-span-t'
category: articles
slug: 'an-introduction-to-optimising-code-using-spant'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-02-27T05:46:05.592Z'
tags: [.net]
---

This post continues my series about writing high-performance C# code. In this post, we’ll continue from the last two posts by introducing the Span<T> type and refactor some existing code by converting it to a Span-based version. We’ll use Benchmark.NET to compare the methods and validate whether our changes have improved the code.


