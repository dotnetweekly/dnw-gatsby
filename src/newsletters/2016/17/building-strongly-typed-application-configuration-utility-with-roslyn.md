---
_id: 5a88e1acbd6dca0d5f0d237a
title: 'Building strongly typed application configuration utility with Roslyn'
url: 'http://www.strathweb.com/2016/04/building-strongly-typed-application-configuration-utility-with-roslyn/'
category: 5a88e1acbd6dca0d5f0d237a
slug: 'building-strongly-typed-application-configuration-utility-with-roslyn'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-04-23T08:18:50.000Z'
tags: []
---

In this post we will have a look at how, with just several lines of Roslyn code, you can build an extremely cool and powerful utility – a library allowing you to provide configuration for your application as a strongly typed C# script file. This post was inspired by the <a href="https://github.com/config-r/config-r">ConfigR</a> library, which provides this type of functionality through scriptcs (I also blogged about ConfigR <a href="http://www.strathweb.com/2014/10/using-configr-configuration-source-asp-net-vnext/">before</a>). We will, however, deal with marshalling configuration data between the C# configuration and the parent app differently than ConfigR does.
