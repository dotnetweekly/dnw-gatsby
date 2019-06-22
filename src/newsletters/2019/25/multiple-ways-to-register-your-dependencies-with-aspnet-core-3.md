---
_id: 5d0d9ea8f35c1aeba6457981
title: "Multiple Ways to Register Your Dependencies with ASP.NET Core 3"
url: 'https://adamstorr.azurewebsites.net/blog/multiple-ways-to-register-your-dependencies-with-aspnet-core-3'
category: articles
slug: 'multiple-ways-to-register-your-dependencies-with-aspnet-core-3'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-06-20T04:21:12.987Z'
tags: [.net-core]
---

With the new previews of dotnetcore there are new project templates but also a more generic hosting system, instead of having a Web specific host builder or Worker/services host builder there is a new "generic" host which they are all based on. These are all brought together under IHost.

With this and other patterns/practices there are now multiple ways of registering your services. Let's take a look.


