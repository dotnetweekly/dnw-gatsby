---
_id: "6050e726066145002fa651d7"
title: "TestServer & ASP.NET Core 5: Fix “System.InvalidOperationException : Solution root could not be located using application root” with a custom Startup file"
url: 'https://anthonygiretti.com/2021/03/16/testserver-asp-net-core-5-fix-system-invalidoperationexception-solution-root-could-not-be-located-using-application-root-with-a-custom-startup-file/'
category: articles
slug: 'testserver-and-aspnet-core-5-fix-systeminvalidoperationexception-solution-root-could-not-be-located'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2021-03-16T17:13:10.951Z'
tags: [asp.net-core]
---

I am very happy to write this post today because I have had a lot of trouble over the last few days getting my integration tests with TestServer to work on ASP.NET Core 5. I usually use a dedicated Startup.cs file to my integration tests rather than using the web application’s one.Tthe simple good reason is that I do not like to replace instances of services or other configuration, I prefer a dedicated file for that. With each version of ASP.NET Core comes a change in the behavior of integration tests and in this post I will show you how to fix the external “System.InvalidOperationException : Solution root could not be located using application root” error when we use a Startup.cs file dedicated to our integration tests.
