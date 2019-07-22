---
_id: 5d351a749af861001ebfd856
title: "Operating a Large, Distributed System in a Reliable Way: Practices I Learned"
url: 'https://blog.pragmaticengineer.com/operating-a-high-scale-distributed-system/'
category: articles
slug: 'operating-a-large-distributed-system-in-a-reliable-way-practices-i-learned'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-07-22T02:07:48.899Z'
tags: [.net]
---

For the past few years, I've been building and operating a large distributed system: the payments system at Uber. I've learned a lot about distributed architecture concepts during this time and seen first-hand how high-load and high-availability systems are challenging not just to build, but to operate as well. Building the system itself is a fun job. Planning how the system will handle 10x/100x traffic increase, ensuring data is durable, regardless of hardware failures is intellectually rewarding. However, operating a large, distributed system has been an eye-opening experience for myself.


