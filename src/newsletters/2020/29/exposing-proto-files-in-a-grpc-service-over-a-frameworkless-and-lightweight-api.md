---
_id: 5f0ca88d7ea0e7003fb83740
title: "Exposing proto files in a gRPC service over a frameworkless and lightweight API"
url: 'https://anthonygiretti.com/2020/07/06/exposing-proto-files-in-a-grpc-service-over-a-frameworkless-and-lightweight-api/'
category: articles
slug: 'exposing-proto-files-in-a-grpc-service-over-a-frameworkless-and-lightweight-api'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-07-13T18:31:41.219Z'
tags: [.net]
---

A few days ago I introduced the notion of nano service in ASP.NET Core or rather how to implement a REST API without any particular framework (https://anthonygiretti.com/2020/06/29/nano-services-with-asp-net-core-or-how-to-build-a-light-api/). Since then, I have challenged myself regularly on the possibilities of relevant applications of this idea. Well, I found a very interesting use case: exposing the protobuffs of a gRPC service without using a framework and having to manage collisions with the gRPC framework of ASP.NET Core. This article will show you how to do it in the simplest way possible.
