---
_id: 5a88e1aabd6dca0d5f0d1ab8
title: "Signals in C#"
url: 'http://codingsight.com/signals-in-c/'
category: articles
slug: 'signals-in-c'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-01-26T06:12:52.000Z'
tags: []
---

Currently, the thread synchronization in С# causes some difficulties, in particular, when passing synchronization primitives between the objects of your application and supporting them in the future.

The current model with Task and IAsyncResult, as well as with TPL, solve all issues through a proper design. However, an author would like to create a simple class that allows sending and receiving signals with a thread lock.
