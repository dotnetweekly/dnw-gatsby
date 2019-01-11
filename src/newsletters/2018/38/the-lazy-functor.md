---
_id: 5b9fb12a7a4fc4b76fdaab8b
title: 'The Lazy functor'
url: 'http://blog.ploeh.dk/2018/09/10/the-lazy-functor/'
category: 5b9fb12a7a4fc4b76fdaab8b
slug: 'the-lazy-functor'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-09-17T13:50:34.707Z'
tags: [c#]
---

This article is an instalment in an article series about functors. Previous articles have covered Maybe, rose trees, and other functors. This article provides another example.

Most programming languages are eagerly evaluated. Sometimes, however, you'd like to defer execution of an expensive operation. On .NET, you can use Lazy<T> to achieve that goal. This generic type, like so many others, forms a functor.


