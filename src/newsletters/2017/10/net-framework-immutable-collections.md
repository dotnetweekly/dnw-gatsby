---
_id: 5a88e1abbd6dca0d5f0d1fca
title: ".NET Framework - Immutable Collections"
url: 'https://msdn.microsoft.com/en-us/magazine/mt795189'
category: articles
slug: 'net-framework-immutable-collections'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-03-04T09:18:14.000Z'
tags: []
---

Side effects compromise the understandability and correctness of code. A method that mutates global or static variables has side effects. A method that mutates some of its parameters has side effects. If you want to understand a piece of code, you have to go through the code of all methods that are called and have side effects. Methods with side effects require thread synchronization to execute correctly when there are multiple threads.
