---
_id: 5fa8592d075fce002f33e3d2
title: "GraphQL.NET and endpoint authorization in ASP.NET Core 3.1"
url: 'https://danielwertheim.se/graphql-net-and-endpoint-authorization-in-asp-net-core-3-1/'
category: articles
slug: 'graphqlnet-and-endpoint-authorization-in-aspnet-core-31'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-11-09T20:46:37.583Z'
tags: [asp.net-core]
---

Had my first experience with setting up a GraphQL API in ASP.NET Core 3.1 today using GraphQL-DotNet. Using their examples as inspiration to get started you'll find that there's nothing in the .NET Core sample regarding on how-to protect the endpoint that their middleware maps to. So in this post I'll show how you can leverage the ASP.NET Core Routing & Endpoints construct to require authorization against a middleware.


