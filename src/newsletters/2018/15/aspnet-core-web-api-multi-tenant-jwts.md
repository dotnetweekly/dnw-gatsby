---
_id: 5acee39dbaa51d004e9a2c81
title: "ASP.NET Core Web API Multi-Tenant JWTs"
url: 'https://www.carlrippon.com/asp-net-core-web-api-multi-tenant-jwts/'
category: articles
slug: 'aspnet-core-web-api-multi-tenant-jwts'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-04-10T08:19:49.299Z'
tags: [asp.net-core]
---

Authentication via a JWT is pretty much standard practice these days and there are lots of blog posts and sample code showing how to do this in ASP.NET Core. However, what if we are implementing a multi-tenant API and want the JWT signing key secret to be different for each tenant? In this post we go through how to implement a multi-tenant JWT.


