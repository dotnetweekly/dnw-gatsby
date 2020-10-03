---
_id: 5f777d78fba5ca002f96f271
title: "Setting environment variables for ASP.NET Core apps in a Helm chart"
url: 'https://andrewlock.net/deploying-asp-net-core-applications-to-kubernetes-part-5-setting-environment-variables-in-a-helm-chart/'
category: articles
slug: 'setting-environment-variables-for-aspnet-core-apps-in-a-helm-chart'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-10-02T19:20:24.546Z'
tags: [asp.net-core]
---

In the previous post I described the .NET solution that we're deploying. It consists of two applications, TestApp.Api which is a default ASP.NET Core web API project, and a TestApp.Service which is an empty web project. The TestApp.Service represents a "headless" service, that would be handling messages from an event queue using something like NServiceBus or MassTransit.


