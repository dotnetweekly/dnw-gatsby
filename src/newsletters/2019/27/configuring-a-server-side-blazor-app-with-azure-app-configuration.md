---
_id: 5d1b032af35c1a2bd64579ac
title: "Configuring a Server-side Blazor app with Azure App Configuration"
url: 'https://devblogs.microsoft.com/aspnet/configuring-a-server-side-blazor-app-with-azure-app-configuration/'
category: articles
slug: 'configuring-a-server-side-blazor-app-with-azure-app-configuration'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-07-02T08:09:30.874Z'
tags: [.net]
---

With .NET Core 3.0 Preview 6, we added authentication & authorization support to server-side Blazor apps. It only takes a matter of seconds to wire up an app to Azure Active Directory with support for single or multiple organizations. Once the project is created, it contains all the configuration elements in its appsettings.json to function. This is great, but in a team environment – or in a distributed topology – configuration files lead to all sorts of problems. In this post, we’ll take a look at how we can extract those configuration values out of JSON files and into an Azure App Configuration instance, where they can be used by other teammates or apps.


