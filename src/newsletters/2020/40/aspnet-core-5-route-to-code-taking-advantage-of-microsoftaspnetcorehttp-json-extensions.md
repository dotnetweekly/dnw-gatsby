---
_id: 5f728c89fba5ca002f96f25d
title: "ASP.NET Core 5 Route to Code: Taking advantage of Microsoft.AspNetCore.Http json extensions"
url: 'https://anthonygiretti.com/2020/09/29/asp-net-core-5-route-to-code-taking-advantage-of-microsoft-aspnetcore-http-json-extensions/'
category: articles
slug: 'aspnet-core-5-route-to-code-taking-advantage-of-microsoftaspnetcorehttp-json-extensions'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2020-09-29T01:23:21.332Z'
tags: [asp.net-core]
---

A while ago, I have introduced a cool feature of ASP.NET Core: how to build a lightweight API without using a framework. I named it like this: Nano service with ASP.NET Core: which you can find here: https://anthonygiretti.com/2020/06/29/nano-services-with-asp-net-core-or-how -to-build-a-light-api, I still like this feature and Microsoft called it: Route to Code, how could I not have thought about it before?
In this article I will tell you about an improvement made by ASP.NET Core 5: a simpler writing of Route to Code services thanks to JSON extensions for HttpRequest and HttpResponse based on System.Text.Json brought by ASP. NET Core 3 in 2019.
