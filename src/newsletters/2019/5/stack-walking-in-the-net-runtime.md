---
_id: 5c4dfe89974c8f3f6e4ec918
title: "Stack Walking in the .NET Runtime"
url: 'https://mattwarren.org/2019/01/21/Stackwalking-in-the-.NET-Runtime/'
category: articles
slug: 'stack-walking-in-the-net-runtime'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-01-28T19:55:05.552Z'
tags: [.net]
---

The CLR makes heavy use of a technique known as stack walking (or stack crawling). This involves iterating the sequence of call frames for a particular thread, from the most recent (the thread’s current function) back down to the base of the stack.

The rest of this post will explore what ‘Stack Walking’ is, how it works and why so many parts of the runtime need to be involved.
