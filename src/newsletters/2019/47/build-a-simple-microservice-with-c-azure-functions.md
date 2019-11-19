---
_id: 5dd429f95f78740035ea1880
title: "Build a Simple Microservice with C# Azure Functions"
url: 'https://developer.okta.com/blog/2019/11/13/build-simple-microservice-csharp-azure-functions'
category: articles
slug: 'build-a-simple-microservice-with-c-azure-functions'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-11-19T17:44:25.105Z'
tags: [c#]
---

I’ve always liked microservices because they embrace small, well-encapsulated building blocks. They mitigate deployment hell by treating each component of a software system as its own product, with versions, testing, and releases.

A microservice is “micro” because of the narrow scope of its functionality, not necessarily because the length of its code is very short. A microservice’s functionality, so long as it’s kept to the limited scope, can go as deep as required by the business. By limiting scope, we isolate different bits of logic in our software by vertical niche; our client application can still get to all the functionality it needs, through several small APIs, each of which scales independently. Much better than a single, monolithic API!
