---
_id: 5f026fa616b18a003f56f2ce
title: "Exposing proto files in a gRPC service over a frameworkless and lightweight API"
url: 'https://anthonygiretti.com/2020/07/06/exposing-proto-files-in-a-grpc-service-over-a-frameworkless-and-lightweight-api/'
category: articles
slug: 'exposing-proto-files-in-a-grpc-service-over-a-frameworkless-and-lightweight-api'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2020-07-06T00:26:14.881Z'
tags: [asp.net-core]
---

A few days ago I introduced the notion of nano service in ASP.NET Core or rather how to implement a REST API without any particular framework (https://anthonygiretti.com/2020/06/29/nano-services-with-asp-net-core-or-how-to-build-a-light-api/). Since then, I have challenged myself regularly on the possibilities of relevant applications of this idea. Well, I found a very interesting use case: exposing the protobuffs of a gRPC service without using a framework and having to manage collisions with the gRPC framework of ASP.NET Core. This article will show you how to do it in the simplest way possible.
