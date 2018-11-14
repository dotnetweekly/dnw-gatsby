---
_id: 5a88e1aabd6dca0d5f0d1a5e
title: Understanding Cancellation Callbacks
url: https://bengribaudo.com/blog/2018/02/08/4360/understanding-cancellation-callbacks
category: articles
slug: 'understanding-cancellation-callbacks'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-02-10T10:43:42.000Z'
tags: []
---

In the ideal world, all .Net asynchronous methods support cancellation tokens: When invoking a method, simply pass it a cancellation token. Then, at the appropriate time, cancel the token and the asynchronous operation terminates.

Alas! We don’t live in the ideal world. Not every method we might asynchronously invoke works with cancellation tokens. When faced with an asynchronous operation we want to be able to cancel that doesn’t support cancellation tokens, one option is to implement our own cancellation logic by registering a callback with the token. When the token is cancelled, callbacks registered with it are executed.
