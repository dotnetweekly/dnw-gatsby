---
_id: 5a88e1afbd6dca0d5f0d2d1a
title: 'WebAPI: Getting Headers, QueryString and Cookie Values'
url: http://www.west-wind.com/weblog/posts/2013/Apr/15/WebAPI-Getting-Headers-QueryString-and-Cookie-Values
category: articles
slug: 'webapi-getting-headers-querystring-and-cookie-values'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2013-04-13T17:38:02.000Z'
tags: []
---

Say what you will about how nice WebAPI is, but a few things in the internal APIs are not exactly clean to use. If you decide you want to access a few of the simple Request collections like Headers, QueryStrings or Cookies, you'll find some pretty inane and inconsistent APIs to retrieve values from them. It's not anywhere as easy as ASP.NET's simple Request.Headers[]/QueryString[]/Cookies[] collections. Instead you have to wade through various different implementations  of nested IEnumerable collections which are used to return collections - presumably for multiple values which is the .0005% use case. Each one of these collections need to be accessed differently and not exactly in the way you'd expect from any other Web platform tool.
