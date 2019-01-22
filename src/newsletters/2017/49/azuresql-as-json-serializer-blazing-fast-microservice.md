---
_id: 5a88e1aabd6dca0d5f0d1b80
title: "AzureSql as Json Serializer : Blazing fast microservice"
url: 'https://avantlive.wordpress.com/2017/11/13/azuresql-as-json-serializer-blazing-fast-microservice/'
category: articles
slug: 'azuresql-as-json-serializer-blazing-fast-microservice'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-12-02T04:51:14.000Z'
tags: []
---

To amplify engagement with users, we needed an elegant but simple commenting system. Users when logged in can comment on a course they have taken and providers can reply to it – akin to airbnb or expedia site. As most startups’ backend architecture starts as a monolith API with an eye for future scalability, our startup site treads the same path but with two stern demands.

design for exit, so that a future standalone microservice from monolith is a easier transition
extract the max out of the given cloud resources and make this API as scalable now and then.

We’ll explore how we accomplished the above two tenets using AzureSql and ASP.NET Core tweaking ‘design &amp; infra’ choices. We utilized a 5 eDTU 2GB Sql Server Db (costing $5/month, cheapest hosted db in azure) and a spare windows VM that can host this microservice. Backend was EF Core with hierarchical LINQ &amp; Newtonsoft as Json Serializer. Performance was dismal and this necessitated a redesign to use AzureSql’s native JSON capability to hierarchical-ize and serialize results. Artillery.io proved nifty in load testing the API and triage the problem areas and achieve our goals.
