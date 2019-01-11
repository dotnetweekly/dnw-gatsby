---
_id: 5a88e1adbd6dca0d5f0d249a
title: 'In-Memory Queue with Web API 2 and Websockets'
url: 'http://geekswithblogs.net/DougLampe/archive/2016/01/02/in-memory-queue-with-web-api-2-and-websockets.aspx'
category: 5a88e1adbd6dca0d5f0d249a
slug: 'in-memory-queue-with-web-api-2-and-websockets'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-01-02T19:34:32.000Z'
tags: []
---

I'm working on an application that lets users run tasks that are "long-running" (could take 5-10 seconds depending on the server load).  For one or two users, this would practically be real time.  However, when I start to scale I need to be able to let users know how long they will need to wait and optionally throttle how often they can run these tasks. 
