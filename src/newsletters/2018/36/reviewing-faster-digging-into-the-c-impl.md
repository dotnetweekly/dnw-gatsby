---
_id: 5b8df1b1281013813894a420
title: 'Reviewing FASTER: Digging into the C++ impl'
url: https://ayende.com/blog/184321-A/reviewing-faster-digging-into-the-c-impl
category: articles
slug: 'reviewing-faster-digging-into-the-c-impl'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-09-04T02:45:05.713Z'
tags: ['performance']
---

After going over the paper and the managed implementation, I’m ready to start with the C++ implementation. I have higher hopes for this code. As I started browsing the C++ code, it occurred to me that the way the C#’s implementation handles dynamic code generation is pretty much how templates in C++ work. I wonder if this was the trigger for that.


