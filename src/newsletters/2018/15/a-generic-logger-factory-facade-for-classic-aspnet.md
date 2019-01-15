---
_id: 5ad2b7f8325044006eb6d65e
title: "A generic logger factory facade for classic ASP.NET"
url: 'https://asp.net-hacker.rocks/2018/04/13/generic-logger-factory-facade.html'
category: articles
slug: 'a-generic-logger-factory-facade-for-classic-aspnet'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-04-13T04:04:08.787Z'
tags: [asp.net]
---

ASP.NET Core already has this feature. There is a ILoggerFactory to create a logger. You are able to inject the ILoggerFactory to your component (Controller, Service, etc.) and to create a named logger out of it. During testing you are able to replace this factory with a mock, to not test the logger as well and to not have an additional dependency to setup.
