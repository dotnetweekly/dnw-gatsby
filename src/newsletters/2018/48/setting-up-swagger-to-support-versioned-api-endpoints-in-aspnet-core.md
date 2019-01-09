---
_id: 5bfd19c8d9a593515bf70e5a
title: 'Setting up Swagger to support versioned API endpoints in ASP.NET Core'
url: 'https://dejanstojanovic.net/aspnet/2018/november/setting-up-swagger-to-support-versioned-api-endpoints-in-aspnet-core/'
category: articles
slug: 'setting-up-swagger-to-support-versioned-api-endpoints-in-aspnet-core'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-11-27T10:17:44.700Z'
tags: ['.net']
---

Versioning of your endpoints is important especially if you have 3rd party dependent clients of your REST API service. Any change in your endpoint, for example in data structure may impact clients even if it is backward compatible, clients may process your endpoint data in different ways, so even adding one additional property to your model may also impact functionality of the client which is consuming your endpoint.


