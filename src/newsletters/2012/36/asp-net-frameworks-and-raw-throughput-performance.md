---
_id: 5a88e1afbd6dca0d5f0d2efc
title: ASP.NET Frameworks and Raw Throughput Performance
url: http://www.west-wind.com/weblog/posts/2012/Sep/04/ASPNET-Frameworks-and-Raw-Throughput-Performance
category: articles
slug: 'asp-net-frameworks-and-raw-throughput-performance'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2012-09-07T07:31:20.000Z'
tags: []
---

A few days ago I had a curious thought: With all these different technologies that the ASP.NET stack has to offer, what's the fastest technology overall to return raw data for a server request? When I started this it was mere curiosity rather than a real practical need or result. Different tools are used for different problems and so performance differences are to be expected. But still I was curious to see how the various technologies performed relative to each orher just for raw throughput of the request getting to the endpoint and back out to the client with as little processing in the actual endpoint logic as possible  (aka Hello World).
