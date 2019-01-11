---
_id: 5a88e1adbd6dca0d5f0d27ea
title: "Creating an Angular application end-2-end – Part 1"
url: 'http://lostechies.com/gabrielschenker/2015/01/05/creating-an-angular-application-end-2-end-part-1/'
category: 5a88e1adbd6dca0d5f0d27ea
slug: 'creating-an-angular-application-end-2-end-part-1'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2015-01-03T07:42:40.000Z'
tags: []
---

In this post series I want to demonstrate how to create a full blown application end-to-end which uses Angular JS on the client, ASP.NET vNext and/or Node JS on the server. Architectural patterns that I am going to use are command query responsibility segregation (CQRS), event sourcing (ES) and (some light) domain driven design (DDD). As a write store we will use GetEventStore. For our read models we use MongoDB and ElasticSearch.

I will develop the application on Linux Ubuntu 14.10 and also show that it runs without modifications on Windows 8.1 or Windows Server 2012.
