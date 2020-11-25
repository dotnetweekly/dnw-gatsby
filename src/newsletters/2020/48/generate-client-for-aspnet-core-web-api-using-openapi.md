---
_id: 5fbe04c29ec02100302da1c0
title: "Generate Client for ASP.NET Core Web API using OpenAPI"
url: 'https://www.davidhayden.me/blog/generate-client-for-asp-net-core-web-api-using-openapi'
category: articles
slug: 'generate-client-for-aspnet-core-web-api-using-openapi'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-11-25T07:16:18.793Z'
tags: [asp.net-core]
---

Recently I talked about some of the new features in .NET 5.0 and preview versions of Visual Studio 16.8 and 16.9 with respect to ASP.NET Core Web API Projects. The first announcement I mentioned was the built-in support for OpenAPI and Swagger UI via Swashbuckle in the new ASP.NET Core 5 Web API Project Template, and the other announcement was a new feature introduced in Visual Studio 2019 that allows you to publish the web API to Azure API Management Services as part of the flow of publishing the ASP.NET Core Web API. Both of these tutorials mention Swashbuckle to generate the OpenAPI Specification Document. If you're generating an OpenAPI Specification Document for your ASP.NET Core Web API, you can use this same document to generate a client to consume your web API, which is what I will demonstrate in this ASP.NET Core Web API tutorial.


