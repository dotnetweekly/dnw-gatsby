---
_id: 5a88e1afbd6dca0d5f0d2cf0
title: "Concurrency Control of WCF Service with Entity Framework"
url: 'http://www.codeproject.com/Articles/162746/Concurrency-Control-of-WCF-Service-with-Entity-Fra'
category: 5a88e1afbd6dca0d5f0d2cf0
slug: 'concurrency-control-of-wcf-service-with-entity-framework'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-05-04T00:35:21.000Z'
tags: []
---

<div>In a previous article (WCFandEF.aspx), we implemented a simple WCF service with one operation, GetProduct. That operation accepts an integer (the product ID) as the input, and connects to a backend database to retrieve the product details for the specified product ID through Entity Framework.
<div>In this article, we will enhance that WCF service with another operation, UpdateProduct, to update a product in the database through the Entity Framework. We will add concurrency control support to this operation, and we will create a test client to test the UpdateProduct operation with concurrency control support.</div>
</div>
