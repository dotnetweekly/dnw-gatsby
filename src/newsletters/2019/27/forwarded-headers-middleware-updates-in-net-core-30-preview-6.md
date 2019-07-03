---
_id: 5d1b00d6f35c1ad99e4579a9
title: "Forwarded Headers Middleware Updates in .NET Core 3.0 preview 6"
url: 'https://devblogs.microsoft.com/aspnet/forwarded-headers-middleware-updates-in-net-core-3-0-preview-6/'
category: articles
slug: 'forwarded-headers-middleware-updates-in-net-core-30-preview-6'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-07-02T07:59:34.759Z'
tags: [.net-core]
---

With the ASP.NET Core 2.1 release, we included UseHsts and UseHttpRedirection by default. These methods put a site into an infinite loop if deployed to an Azure Linux App Service, Azure Linux virtual machine (VM), or behind any other reverse proxy besides IIS. TLS is terminated by the reverse proxy, and Kestrel isn’t made aware of the correct request scheme.


