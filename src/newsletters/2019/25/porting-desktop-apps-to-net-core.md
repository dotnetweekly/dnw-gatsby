---
_id: 5d0d9e31f35c1a93f145797f
title: "Porting desktop apps to .NET Core"
url: 'https://devblogs.microsoft.com/dotnet/porting-desktop-apps-to-net-core/'
category: articles
slug: 'porting-desktop-apps-to-net-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-06-20T04:19:13.752Z'
tags: [.net-core]
---

Since I’ve been working with the community on porting desktop applications from .NET Framework to .NET Core, I’ve noticed that there are two camps of folks: some want a very simple and short list of instructions to get their apps ported to .NET Core while others prefer a more principled approach with more background information. Instead of writing up a “Swiss Army knife”-document, we are going to publish two blog posts, one for each camp:

This post is the simple case. It’s focused on simple instructions and smaller applications and is the easiest way to move your app to .NET Core.
We will publish another post for more complicated cases. This post will focus more on non-trivial applications, such WPF application with dependencies on WCF and third-party UI packages.
