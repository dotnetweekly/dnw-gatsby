---
_id: 5b45944510ce4454db856a7a
title: "Adding validation to strongly typed configuration objects in ASP.NET Core"
url: 'https://andrewlock.net/adding-validation-to-strongly-typed-configuration-objects-in-asp-net-core/'
category: articles
slug: 'adding-validation-to-strongly-typed-configuration-objects-in-aspnet-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-07-11T05:23:17.679Z'
tags: [asp.net-core]
---

In this post I describe an approach you can use to ensure your strongly typed configuration objects have been correctly bound to your configuration when your app starts up. By using an IStartupFilter, you can validate that your configuration objects have expected values early, instead of at some point later when your app is running.


