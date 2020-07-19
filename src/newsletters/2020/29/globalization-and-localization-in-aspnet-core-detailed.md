---
_id: 5f0ca5f07ea0e7003fb8373b
title: "Globalization and Localization in ASP.NET Core – Detailed"
url: 'https://www.codewithmukesh.com/blog/globalization-and-localization-in-aspnet-core/'
category: articles
slug: 'globalization-and-localization-in-aspnet-core-detailed'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-07-13T18:20:32.509Z'
tags: [asp.net-core]
---

In this article, we will go through a less-talked about topic in the ASP.NET Core Community. We will discuss in detail, Globalization and Localization in ASP.NET Core Application and go through various approaches on changing the Culture of the Application via Request. We will also do some advanced configuration where we store the Selected Language Information to the Cookie in the client browser. You can see the complete source code of this implementation on my Github.

While starting to build an ASP.NET Core application, or any other application, There are few considerations to take care of. One of them is, “Will our Application be Multi-Lingual?”. According to me, it is highly important to make your application Multi-Lingual, if you are not able to anticipate the future of your application. Down the line, there can be an instance where you have already completed the application, but suddenly it needs to be multilingual as well. Trust me, you do not want to be in that place.
