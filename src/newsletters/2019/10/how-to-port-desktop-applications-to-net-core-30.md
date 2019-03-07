---
_id: 5c8082a6e483e9625ce88c4d
title: "How to port desktop applications to .NET Core 3.0"
url: 'https://devblogs.microsoft.com/dotnet/how-to-port-desktop-applications-to-net-core-3-0/'
category: articles
slug: 'how-to-port-desktop-applications-to-net-core-30'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-03-07T03:32:06.180Z'
tags: [.net-core]
---

In this post, I will describe how to port a desktop application from .NET Framework to .NET Core. I picked a WinForms application as an example. Steps for WPF application are similar and I’ll describe what needs to be done different for WPF as we go. I will also show how you can keep using the WinForms designer in Visual Studio even though it is under development and is not yet available for .NET Core projects.


