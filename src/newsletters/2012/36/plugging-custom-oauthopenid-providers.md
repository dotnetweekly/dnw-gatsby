---
_id: 5a88e1afbd6dca0d5f0d2f1a
title: "Plugging custom OAuth/OpenID providers"
url: 'http://blogs.msdn.com/b/webdev/archive/2012/08/23/plugging-custom-oauth-openid-providers.aspx'
category: libraries-tools
slug: 'plugging-custom-oauthopenid-providers'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2012-08-31T07:14:09.000Z'
tags: []
---

In the previous post, I wrote about how you can use the existing providers for Google, Facebook etc. and retrieve extra metadata about the authenticated users. Let’s assume you wanted to change the way the providers request for information. Some examples of this could be

You want to request more data about the user
You want to apply different scope levels when requesting the data
This post covers how you can write your own provider and plug it into your ASP.NET web application
