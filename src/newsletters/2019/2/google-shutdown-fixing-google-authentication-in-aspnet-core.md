---
_id: 5c384e2c5e8f0d99e58d0c4a
title: "Google+ shutdown: fixing Google authentication in ASP.NET Core"
url: 'https://www.thomaslevesque.com/2019/01/10/google-shutdown-fixing-google-authentication-in-asp-net-core/'
category: 5c384e2c5e8f0d99e58d0c4a
slug: 'google-shutdown-fixing-google-authentication-in-aspnet-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-01-11T08:05:00.223Z'
tags: [asp.net-core]
---

A few months ago, Google decided to shutdown Google+, due to multiple data leaks. More recently, they announced that the Google+ APIs will be shutdown on March 7, 2019, which is pretty soon! In fact, calls to these APIs might start to fail as soon as January 28, which is less than 3 weeks from now. You might think that it doesn’t affect you as a developer; but if you’re using Google authentication in an ASP.NET Core app, think again! The built-in Google authentication provider (services.AddAuthentication().AddGoogle(...)) uses a Google+ API to retrieve information about the signed-in user, which will soon stop working. You can read the details in this Github thread. Note that it also affects classic ASP.NET MVC.
