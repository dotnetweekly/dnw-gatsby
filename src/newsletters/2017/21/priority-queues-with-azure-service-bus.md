---
_id: 5a88e1abbd6dca0d5f0d1e9a
title: Priority Queues with Azure Service Bus
url: http://markheath.net/post/priority-queues-with-azure-service-bus
category: articles
slug: 'priority-queues-with-azure-service-bus'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2017-05-26T08:26:04.000Z'
tags: []
---

When you use queues, messages are read off in the order they are placed into the queue. This means that if there are 1000 messages in your queue, and now you want to send another message that is top priority, there’s no easy way to force it to the front of the queue.
