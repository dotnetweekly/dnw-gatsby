---
_id: 5a88e1acbd6dca0d5f0d21e6
title: "Custom ASP.NET Core Middleware Example"
url: 'https://blogs.msdn.microsoft.com/dotnet/2016/09/19/custom-asp-net-core-middleware-example/'
category: articles
slug: 'custom-asp-net-core-middleware-example'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-09-24T07:03:27.000Z'
tags: []
---

One of the great things about ASP.NET Core is its extensibility. The behavior of an ASP.NET Core app’s HTTP request handling pipeline can be easily customized by specifying different <a href="https://docs.asp.net/en/latest/fundamentals/middleware.html">middleware</a> components. This allows developers to plug in request handlers like MVC middleware, static file providers, authentication, error pages, or even their own custom middleware. In this article, I will walk you through how to create custom middleware to handle requests with simple SOAP payloads.
