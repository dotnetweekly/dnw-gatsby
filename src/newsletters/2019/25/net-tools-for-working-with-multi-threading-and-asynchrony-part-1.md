---
_id: 5d0d9d68f35c1a6d87457977
title: ".NET: Tools for working with multi-threading and asynchrony – Part 1"
url: 'https://habr.com/en/post/455252'
category: articles
slug: 'net-tools-for-working-with-multi-threading-and-asynchrony-part-1'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-06-20T04:15:52.612Z'
tags: [.net]
---

The need to do things in an asynchronous way – that is, dividing big tasks between multiple working units – was present long before the appearance of computers. However, when they did appear, this need became even more obvious. It is now 2019, and I’m writing this article on a laptop powered by an 8-core Intel Core CPU which, in addition to this, is simultaneously working on hundreds of processes, with the number of threads being even larger. Next to me, there lies a slightly outdated smartphone which I bought a couple of years ago – and it also houses an 8-core processor. Specialized web resources contain a wide variety of articles praising this year’s flagship smartphones equipped with 16-core CPUs. For less then $20 per hour, MS Azure can give you access to a 128-core virtual machine with 2 TB RAM. But, unfortunately, you cannot get the most out of this power unless you know how to control interaction between threads.

