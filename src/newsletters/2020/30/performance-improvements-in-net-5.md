---
_id: 5f192c3c7ea0e7003fb83780
title: "Performance Improvements in .NET 5"
url: 'https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-5/'
category: articles
slug: 'performance-improvements-in-net-5'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-07-23T06:20:44.738Z'
tags: [.net]
---

In previous releases of .NET Core, I’ve blogged about the significant performance improvements that found their way into the release. For each post, from .NET Core 2.0 to .NET Core 2.1 to .NET Core 3.0, I found myself having more and more to talk about. Yet interestingly, after each I also found myself wondering whether there’d be enough meaningful improvements next time to warrant another post. Now that .NET 5 is shipping preview releases, I can definitively say the answer is, again, “yes”. .NET 5 has already seen a wealth of performance improvements, and even though it’s not scheduled for final release until later this year and there’s very likely to be a lot more improvements that find their way in by then, I wanted to highlight a bunch of the improvements that are already available now. In this post, I’ll highlight ~250 pull requests that have contributed to myriad of performance improvements across .NET 5.


