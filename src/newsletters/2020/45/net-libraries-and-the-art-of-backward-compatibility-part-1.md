---
_id: 5f9edfe1075fce002f33e3ac
title: ".NET Libraries and the Art of Backward Compatibility – Part 1"
url: 'https://www.codeproject.com/Articles/5283688/NET-libraries-and-the-art-of-backward-compatibilit'
category: articles
slug: 'net-libraries-and-the-art-of-backward-compatibility-part-1'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-11-02T16:18:41.211Z'
tags: [.net]
---

This blog post will focus on behavioral incompatibilities in .NET libraries.
So, you wrote a .NET library, you released it to the public and now you are about to make version 2.0 or 1.1 or even just 1.0.0.0b.

Any change that you are going to make has the risk of introducing one or more of these types of backward incompatibilities:

Behavioral (your library’s behavior is changing)
Source (your users’ code may fail compiling)
Binary (your users’ application may break at runtime)
