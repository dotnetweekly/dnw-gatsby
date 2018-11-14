---
_id: 5b62a7bb6b826ede24f5993c
title: 'The ASP.NET Core Generic Host: namespace clashes and extension methods'
url: https://andrewlock.net/the-asp-net-core-generic-host-namespace-clashes-and-extension-methods/
category: articles
slug: 'the-aspnet-core-generic-host-namespace-clashes-and-extension-methods'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-08-02T06:42:03.402Z'
tags: ['asp.net-core']
---

ASP.NET Core 2.1 introduced the ASP.NET Core Generic Host for non-HTTP scenarios. In standard HTTP ASP.NET Core applications, you configure your app using the WebHostBuilder in ASP.NET Core, but for non-HTTP scenarios (e.g. messaging apps, background tasks) you use the generic HostBuilder.


