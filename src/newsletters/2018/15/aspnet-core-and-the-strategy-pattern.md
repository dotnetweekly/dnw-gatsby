---
_id: 5acc3ef3b69aee002a1426aa
title: "ASP.NET Core and the Strategy Pattern"
url: 'https://adamstorr.azurewebsites.net/blog/aspnetcore-and-the-strategy-pattern'
category: articles
slug: 'aspnet-core-and-the-strategy-pattern'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-04-10T02:42:08.038Z'
tags: [asp.net-core]
---

After a review by Steve Gordan (thanks Steve!) he has pointed out that the ASP.NET Core IoC container can't handle IMathOperator[] as a depenency however it can handle IEnumerable<IMathOperator> and not require the additional factory pattern. This was a hangover from how unity did it due to it's limitations and how I had implemented the pattern previously. Sorry ASP.NET Core!
