---
_id: 5c26268b745cd0cb4e0206bc
title: 'Changing fundamental behavior with two lines of code'
url: 'https://ayende.com/blog/185634-C/changing-fundamental-behavior-with-two-lines-of-code'
category: 5c26268b745cd0cb4e0206bc
slug: 'changing-fundamental-behavior-with-two-lines-of-code'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-12-28T13:35:07.709Z'
tags: [azure]
---

One of the measure that we don’t care much about is the startup time of RavenDB. Whatever it takes 5 seconds or 15 seconds is of little concern to us. Whatever it takes 15 seconds or 3 minutes, however, is something that we most certainly want to pay attention to.

One of our customers has an interesting use case. They are running on Azure machines and take full advantage of the multiple storage options that they have available there. In particular, their journals are using a premium storage disk but their data is residing on a a large (and slow) disk. This is because they have quite a lot of data. One of their indexes just exceeded the 256GB mark, for example.


