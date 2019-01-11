---
_id: 5bc848f41ff6e7826987fb22
title: 'ASP.NET Core - check missing dependencies on startup'
url: 'https://engineering.gigpin.com/2018-10-08-asp-net-core-check-dependencies/'
category: 5bc848f41ff6e7826987fb22
slug: 'aspnet-core-check-missing-dependencies-on-startup'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-10-18T08:48:52.635Z'
tags: [asp.net-core]
---

When using DI without automatic interface/service registrations, it is easy to forget to register a service in Startup.cs. This is easy to fix, but sometimes hard to detect. It will be triggered once the code path requiring the newly used service is triggered, but that might be some time after the code is built.


