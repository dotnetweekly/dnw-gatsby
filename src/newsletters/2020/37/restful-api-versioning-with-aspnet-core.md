---
_id: 5f597aa48946f1002f8bf5d6
title: "RESTful API versioning with ASP.NET Core"
url: 'https://dotnetthoughts.net/restful-web-api-versioning-with-asp-net-core/'
category: articles
slug: 'restful-api-versioning-with-aspnet-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-09-10T01:00:20.105Z'
tags: [asp.net-core]
---

This blog post will discuss about the commonly used API Versioning strategies and how to implement them in ASP.NET Core Web API.

For the demo purposes I am creating an ASP.NET Core WEB API project using dotnet new webapi command. To implement versioning we need to add reference of the Microsoft.AspNetCore.Mvc.Versioning nuget package, which we can do by running ` dotnet add package Microsoft.AspNetCore.Mvc.Versioning` command.

Once the package reference is added, in the ConfigureServices method, Versioning support can be added using AddApiVersioning(); method, like this.
