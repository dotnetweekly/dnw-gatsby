---
_id: 5ca14d91e483e90a0de88cd0
title: "Azure Service Bus Message Deferral Implementation"
url: 'https://jamietech.com/2019/03/21/service-bus-message-deferral/'
category: articles
slug: 'azure-service-bus-message-deferral-implementation'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-04-02T00:30:25.828Z'
tags: [azure]
---

I was recently tasked to create an API that needs to be resilient and decoupled from other systems. So, we used Azure’s Service Bus for this. This API is used in a way where it receives instructions in an order, and that order matters. This part is key.
