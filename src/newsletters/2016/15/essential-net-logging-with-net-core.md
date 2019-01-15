---
_id: 5a88e1acbd6dca0d5f0d23a0
title: "Essential .NET - Logging with .NET Core"
url: 'https://msdn.microsoft.com/en-us/magazine/mt694089'
category: articles
slug: 'essential-net-logging-with-net-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-04-09T08:02:26.000Z'
tags: []
---

In the February issue, I delved into the new configuration API included in the newly named .NET Core 1.0 platform (see <a href="http://bit.ly/1OoqmkJ">bit.ly/1OoqmkJ</a>). (I assume most readers have heard about the recently renamed .NET Core 1.0, which was formerly referred to as .NET Core 5 and part of the ASP.NET 5 platform [see <a href="http://bit.ly/1Ooq7WI">bit.ly/1Ooq7WI</a>].) In that article I used unit testing in order to explore the Microsoft.Extensions.Configuration API. In this article I take a similar approach, except with Microsoft.Extensions.Logging. The key difference in my approach is that I’m testing it from a .NET 4.6 CSPROJ file rather than an ASP.NET Core project. This emphasizes the fact that .NET Core is available for you to consider using immediately—even if you haven’t migrated to ASP.NET Core projects.
