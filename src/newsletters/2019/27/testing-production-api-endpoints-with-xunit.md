---
_id: 5d1d1e43f35c1a59734579b2
title: "Testing Production API Endpoints with xUnit"
url: 'https://ardalis.com/testing-production-api-endpoints-with-xunit'
category: articles
slug: 'testing-production-api-endpoints-with-xunit'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-07-03T22:29:39.325Z'
tags: [.net]
---

I’m a big fan of unit tests and integration tests and have written about them frequently. I also authored the original docs on writing integration tests in ASP.NET Core using TestHost and related types. However, sometimes it’s worthwhile to be able to test actual, live API endpoints. This article will lay out a relatively simple way to do this in a configurable manner using xUnit. In the past, I might have used a Visual Studio Web Test for this purpose, but Microsoft is dropping support for these (particularly in the cloud) so I needed a new solution.


