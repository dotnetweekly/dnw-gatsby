---
_id: 5a88e1afbd6dca0d5f0d2d8a
title: 'Giving temporary access to your ASP.NET Web API with Hawk'
url: 'http://weblogs.asp.net/cibrax/archive/2013/03/08/giving-temporary-access-to-your-asp-net-web-api-with-hawk.aspx'
category: 5a88e1afbd6dca0d5f0d2d8a
slug: 'giving-temporary-access-to-your-asp-net-web-api-with-hawk'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-03-08T22:49:15.000Z'
tags: []
---

One of the features supported by Hawk, an HTTP authentication protocol based on HMAC, is to provide read-only access to a Web API for a short period time.  That’s performed through a token called “bewit” that a Web API can provide to a client. That token is only valid for Http GET calls and it can be used for a limited period of time.
