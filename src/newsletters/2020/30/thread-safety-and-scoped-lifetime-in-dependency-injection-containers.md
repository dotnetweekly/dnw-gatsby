---
_id: 5f1892277ea0e7003fb83776
title: "Thread Safety & Scoped Lifetime in Dependency Injection Containers"
url: 'https://codeopinion.com/thread-safety-scoped-lifetime-in-dependency-injection-containers/'
category: articles
slug: 'thread-safety-and-scoped-lifetime-in-dependency-injection-containers'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-07-22T19:23:19.079Z'
tags: [.net]
---

If you’re using Scoped Lifetime in a Dependency Injection containers, beware! You may be run into race conditions due to a lack of thread safety.

I was doing a live stream on Domain Events over on my YouTube Channel where I was taking advantage of Scoped Lifetime. After the stream, I realized Scoped Lifetime and thread safety isn’t mentioned much and I’m not sure why? It could be because developers aren’t using multiple threads within the top-level request (HTTP request or service bus message invocation). Or it’s because developers are writing thread-safe code by default. I tend to think it’s the former.

Either way, I figured it would be worthwhile providing an example of using Scoped Lifetime and how you can run into issues if you aren’t writing thread-safe code.
