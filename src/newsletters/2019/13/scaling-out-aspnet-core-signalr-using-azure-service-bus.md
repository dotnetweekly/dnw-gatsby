---
_id: 5c971c75e483e9461ae88cad
title: "Scaling out ASP.NET Core SignalR using Azure Service Bus"
url: 'https://thomaslevesque.com/2019/03/18/scaling-out-asp-net-core-signalr-using-azure-service-bus/'
category: articles
slug: 'scaling-out-aspnet-core-signalr-using-azure-service-bus'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-03-25T06:58:13.147Z'
tags: [azure]
---

ASP.NET Core SignalR is a super easy way to establish two-way communication between an ASP.NET Core app and its clients, using WebSockets, Server-Sent Events, or long polling, depending on the client’s capabilities. For instance, it can be used to send a notification to all connected clients. However, if you scale out your application to multiple server instances, it no longer works out of the box: only the clients connected to the instance that sent the notification will receive it. Microsoft has two documented solutions to this problem:


