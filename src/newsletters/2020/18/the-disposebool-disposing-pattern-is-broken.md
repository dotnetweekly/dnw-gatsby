---
_id: 5eaf88716409bd00350b42dd
title: "The Dispose(bool disposing) Pattern is Broken"
url: 'https://www.codeproject.com/Articles/5266619/The-Dispose-bool-disposing-Pattern-is-Broken'
category: articles
slug: 'the-disposebool-disposing-pattern-is-broken'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-05-01T03:13:53.687Z'
tags: [.net]
---

In .NET, the relationship between Dispose() and finalizers is confusing. In this post, we take a look at the Dispose pattern, the snowball effect of the pattern and why the pattern is broken. Then, we take a look at one of the solutions, namely, SafeHandles. Finally, we reanalyze the problem.
