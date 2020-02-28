---
_id: 5e5888647f965400359f2a81
title: "Null API Responses and HTTP 204 Results in ASP.NET Core"
url: 'https://weblog.west-wind.com/posts/2020/Feb/24/Null-API-Responses-and-HTTP-204-Results-in-ASPNET-Core'
category: articles
slug: 'null-api-responses-and-http-204-results-in-aspnet-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-02-28T03:26:28.764Z'
tags: [asp.net-core]
---

ASP.NET Core 3.x has a behavior that results in API results that return null from the controller action returning a HTTP 204 - No Content response rather than a null JSON result. Presumably the idea is that if you return null from an API, your intention is to return 'no content' and that sort of make sense in some cases. Except... when you're building an API null may actually have a meaning on the client or the client at minimum may be expecting a proper JSON response.


