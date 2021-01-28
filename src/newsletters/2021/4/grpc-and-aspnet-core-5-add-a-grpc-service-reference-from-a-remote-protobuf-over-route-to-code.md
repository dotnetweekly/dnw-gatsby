---
_id: "600e491b118569003345612a"
title: "gRPC & ASP.NET Core 5: Add a gRPC service reference from a remote protobuf over Route-To-Code"
url: 'https://anthonygiretti.com/2021/01/25/grpc-asp-net-core-5-add-a-grpc-service-reference-from-a-remote-protobuf-over-route-to-code/'
category: articles
slug: 'grpc-and-aspnet-core-5-add-a-grpc-service-reference-from-a-remote-protobuf-over-route-to-code'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2021-01-22T04:29:15.790Z'
tags: [asp.net-core]
---

A while ago, I published a post that explained how to expose proto files within an ASP.NET Core gRPC app using Route-To-Code that you can find here: Exposing proto files in a gRPC service over a frameworkless and lightweight API – Anthony Giretti’s .NET blog

I only explained how to expose them and access them from a browser. But I haven’t explained how to download them from “Services References” menu in Visual Studio 2019, and I should have because there is a trick.
