---
_id: 5fc456c89ec02100302da1d4
title: "Common async pitfalls—part one"
url: 'https://jamiemagee.co.uk/blog/common-async-pitfalls-part-one/'
category: articles
slug: 'common-async-pitfallspart-one'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-11-30T02:19:52.332Z'
tags: [.net]
---

The .NET Framework provides a great programming model that enables high performance code using an easy to understand syntax. However, this can often give developers a false sense of security, and the language and runtime aren’t without pitfalls. Ideally static analysers, like the Microsoft.VisualStudio.Threading.Analyzers Roslyn analysers, would catch all these issues at build time. While they do help catch a lot of mistakes, they can’t catch everything, so it’s important to understand the problems and how to avoid them.


