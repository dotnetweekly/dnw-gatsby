---
_id: 5ed98aef3a2ca400363786d9
title: ".NET async/await in a single picture"
url: 'https://tooslowexception.com/net-asyncawait-in-a-single-picture/'
category: articles
slug: 'net-async-await-in-a-single-picture'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-06-04T23:59:43.688Z'
tags: [.net]
---

The main power behind async/await is that while we “await” on an ongoing I/O operation, the calling thread may be released for doing other work. And this provides a great thread re-usability. Thus, better scalability – much smaller number of threads is able to handle the same amount of operations comparing to asynchronous/waiting approach.

The main role here plays so-called overlapped I/O (in case of Windows) which allows to asynchronously delegate the I/O operation to the operating system, and only after completion the provided callback will notify us about the result. The main workforce here is so-called I/O completion port (IOCP).
