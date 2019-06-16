---
_id: 5d023905f35c1afba0457958
title: "Ordered queue processing in Azure Functions with Sessions"
url: 'https://medium.com/@jeffhollan/ordered-queue-processing-in-azure-functions-with-sessions-c42ee21e689d'
category: articles
slug: 'ordered-queue-processing-in-azure-functions-with-sessions'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-06-13T12:52:37.980Z'
tags: [azure]
---

Let’s chat about ordering. It’s one of my favorite topics, and something I’ve blogged about extensively before. Previously ordered processing in Azure Functions was only possible with event streams like Azure Event Hubs, but today I want to show how you can preserve order for Service Bus queues and topics as well.

On the surface it seems pretty straight-forward: I want to be able to process messages from a queue in the exact order that I received them. For a simple service running on a machine, it’s pretty easy to achieve. However, how do I preserve the ordering of queue messages when I want to process at scale? With something like Azure Functions I may be processing messages across dozens of active instances, how can I preserve ordering?
