---
_id: 5dc307205f78740035ea1832
title: "Implementing .NET Core Health Checks"
url: 'https://www.c-sharpcorner.com/article/implementing-net-core-health-checks/'
category: articles
slug: 'implementing-net-core-health-checks'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-11-06T17:47:12.544Z'
tags: [.net-core]
---

Generally, when we are using any uptime monitoring systems or load balancers, these systems will keep monitoring the health of the application and based on its health condition it will decide to send the request to serve it. For this earlier, we use to create a special endpoint where it will return any error message or code to indicate the health of the API/service.

