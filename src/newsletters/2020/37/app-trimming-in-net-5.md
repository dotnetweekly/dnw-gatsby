---
_id: 5f597bc98946f1002f8bf5d9
title: "App Trimming in .NET 5"
url: 'https://devblogs.microsoft.com/dotnet/app-trimming-in-net-5/'
category: articles
slug: 'app-trimming-in-net-5'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-09-10T01:05:13.803Z'
tags: [.net-core]
---

One of the big differences between .NET Core and .NET Framework is that .NET Core supports self-contained deployment – everything needed to run the application is bundled together. It doesn’t depend on having the framework separately installed. From an application developer perspective, this means that you know exactly which version of the runtime is being used, and the installation/setup is easier. The downside is the size – it pulls along a complete copy of the runtime & framework.


