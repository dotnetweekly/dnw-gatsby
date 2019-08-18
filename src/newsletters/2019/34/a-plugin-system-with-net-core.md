---
_id: 5d59debe9af861001ebfd8c9
title: "A plugin system with .NET Core"
url: 'https://codetherapist.com/blog/netcore3-plugin-system/'
category: articles
slug: 'a-plugin-system-with-net-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-08-19T23:26:54.912Z'
tags: [.net]
---

In this post, I show how you could implement a plugin system that can unload the plugins dynamically. I also provide some background information behind the techniques and classes involved. Unlike the AppDomain, the AssemblyLoadContext lets you unload the plugin types and the owned assemblies - sounds promising, right?
