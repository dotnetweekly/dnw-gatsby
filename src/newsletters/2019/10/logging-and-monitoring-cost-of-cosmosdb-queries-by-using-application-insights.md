---
_id: 5c7e142fe483e91b79e88c43
title: "Logging and monitoring cost of CosmosDB queries by using Application Insights"
url: 'https://www.jankowskimichal.pl/en/2019/03/logging-and-monitoring-cost-of-cosmosdb-queries-by-using-application-insights/'
category: articles
slug: 'logging-and-monitoring-cost-of-cosmosdb-queries-by-using-application-insights'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-03-05T07:16:15.522Z'
tags: [azure]
---

Each time when creating an application that is using document databases like CosmosDB we are facing a challenge of estimation of its costs and later optimisation. Both tasks are not so easy to do. To solve the first one we can use cost calculator. We just need to provide main characteristics of our solution (like a number of documents, information about actions per seconds, …) and also we need to provide sample documents that will be stored in our database. After doing that we will be able to read the estimated cost of our solution
