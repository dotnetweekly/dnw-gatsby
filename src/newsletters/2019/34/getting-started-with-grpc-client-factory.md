---
_id: 5d59df689af861001ebfd8cb
title: "Getting Started with gRPC Client Factory"
url: 'https://www.stevejgordon.co.uk/getting-started-with-grpc-client-factory-in-asp-net-core'
category: articles
slug: 'getting-started-with-grpc-client-factory'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-08-19T23:29:44.027Z'
tags: [.net]
---

Regular visitors of my blog will know that I’ve written a lot of posts about the HttpClientFactory feature, available in the Microsoft.Extensions.Http package which simplifies the consumption and proper lifetime usage of HttpClient instances.

Recently, I’ve begun digging into gRPC and I’m pleased to see a similar pattern is available for gRPC-based communication.

In this post, I want to show a quick example of how to get started with the gRPC Client Factory. I’m going to focus on adding this to an ASP.NET Core 3.0 web project, which will act as a client of an external gRPC service. This post assumes a little knowledge about gRPC. You can read my earlier blog post (slightly outdated now) which covers some extra ground.
