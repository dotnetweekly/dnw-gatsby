---
_id: 5c3d82165e8f0d07138d0c64
title: "Running async tasks on app startup in ASP.NET Core (Part 1)"
url: 'https://andrewlock.net/running-async-tasks-on-app-startup-in-asp-net-core-part-1/'
category: articles
slug: 'running-async-tasks-on-app-startup-in-aspnet-core-part-1'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-01-15T06:47:50.051Z'
tags: [asp.net-core]
---

Sometimes you need to perform one-off initialisation logic before your app starts up properly. For example, you might want to validate your configuration is correct, populate a cache, or run database migrations. In this post, I look at the options available and show some simple methods and extension points that I think solve the problem well.

I start by describing the built-in solution to running synchronous tasks with IStartupFilter. I then walk through the various options for running asynchrnous tasks. You could (but possibly shouldn't) use IStartupFilter or IApplicationLifetime events to run asynchronous tasks. You could use the IHostedService interface to run one-off tasks without blocking app startup. However the only real solution is to run the tasks manually in program.cs. In my next post I'll show a suggested proposal that makes this process a little easier.
