---
_id: 5a88e1aabd6dca0d5f0d1b0c
title: "Setting Up A Private Nuget Server - Part 1 : Intro &amp; Server Setup"
url: 'https://dotnetcoretutorials.com/2018/01/03/setting-private-nuget-server-part-1-intro-server-setup/'
category: 5a88e1aabd6dca0d5f0d1b0c
slug: 'setting-up-a-private-nuget-server-part-1-intro-server-setup'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-01-08T01:00:33.000Z'
tags: []
---

I’ve been having a bit of fun setting up a Nuget Server as of late, and learning the nuances of versioning a .NET Standard library. With that in mind, I thought I would document my approach to how I got things going and all the pitfalls and dead ends I ended up running into. This series will read a bit less like a stock standard tutorial and more about a brain dump of what I’ve learnt over the past few days. I should also note that in some cases, we aren’t able to go all out .NET Core mode. For example the official Nuget Server web application is full framework only – not a whole lot we can do about that.
