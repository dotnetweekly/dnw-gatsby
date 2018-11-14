---
_id: 5a88e1abbd6dca0d5f0d1f76
title: 'Using Resilient Entity Framework Core Sql Connections and Transactions: Retries with Exponential Backoff'
url: https://blogs.msdn.microsoft.com/cesardelatorre/2017/03/26/using-resilient-entity-framework-core-sql-connections-and-transactions-retries-with-exponential-backoff/
category: articles
slug: 'using-resilient-entity-framework-core-sql-connections-and-transactions-retries-with-exponential-bac'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2017-03-30T21:36:27.000Z'
tags: ['entity-framework']
---

In regards the Azure SQL DB case, Entity Framework Core already provides internal database connection resiliency and retry logic, but you need to enable your desired execution strategy per DbContext connection if you want to have resilient EF Core connections.
