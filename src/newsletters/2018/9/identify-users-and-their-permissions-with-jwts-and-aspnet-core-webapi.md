---
_id: 5a99f7b15045f3c957b3fc9d
title: "Identify users and their permissions with JWTs and ASP.NET Core WebAPI"
url: 'https://jonhilton.net/identify-users-permissions-with-jwts-and-asp-net-core-webapi/'
category: articles
slug: 'identify-users-and-their-permissions-with-jwts-and-aspnet-core-webapi'
user_id: 5a99f5eb5045f3c957b3fc98
username: 'ahoskins'
createdOn: '2018-03-02T22:29:21.764Z'
tags: [asp.net]
---

When you use JWTs (Json Web Tokens) to secure your ASP.NET Core Web API you can restrict parts of your API to authenticated users (by requiring a valid JWT for certain requests).

In the last post we saw how to block unauthorised users from accessing your API actions and conversely how to let authenticated users through.

But what about when you need a bit more information? Maybe you need a few more details about the user because George has access to delete users but Susan doesn’t. We don’t want to accidentally let Susan delete everyone from the system!
