---
_id: 5e9d00d672748f0034ead24a
title: "Global Exception Handling in ASP.NET Core Web API"
url: 'https://blog.jonblankenship.com/2020/04/12/global-exception-handling-in-aspnet-core-api/'
category: articles
slug: 'global-exception-handling-in-aspnet-core-web-api'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-04-17T01:54:30.220Z'
tags: [asp.net-core]
---

A good web API is consistent and follows established patterns for communicating error states to the client, leveraging the appropriate HTTP status codes. To that end, a global exception handler can be very helpful in consolidating a service’s error handling logic in one place and translating errors into the appropriate responses to send back to the client. In this post I’ll show you how you can plug custom exception-handling logic into the ASP.NET Core request pipeline to handle any exceptions that are thrown in your API.


