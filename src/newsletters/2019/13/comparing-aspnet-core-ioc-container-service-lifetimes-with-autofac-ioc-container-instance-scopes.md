---
_id: 5c971d4ee483e94ce7e88cb2
title: "Comparing ASP.NET Core IoC container service lifetimes with Autofac IoC container instance scopes"
url: 'https://devblogs.microsoft.com/cesardelatorre/comparing-asp-net-core-ioc-service-life-times-and-autofac-ioc-instance-scopes/'
category: articles
slug: 'comparing-aspnet-core-ioc-container-service-lifetimes-with-autofac-ioc-container-instance-scopes'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-03-25T07:01:50.353Z'
tags: [.net]
---

In ASP.NET Core you can use the simple built-in IoC container or you can also plug any other more advanced IoC container like Autofac.

When plugin an external container like Autofac, you can still use ASP.NET Core methods like services.AddTransient<> or services.AddSingleton<> or you can also use the more granular methods in Autofac based on its instance scopes, which offer a larger set of possibilities.
