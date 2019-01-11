---
_id: 5a88e1afbd6dca0d5f0d2f1e
title: 'Using JSON.NET for dynamic JSON parsing'
url: 'http://www.west-wind.com/weblog/posts/2012/Aug/30/Using-JSONNET-for-dynamic-JSON-parsing'
category: 5a88e1afbd6dca0d5f0d2f1e
slug: 'using-json-net-for-dynamic-json-parsing'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2012-08-31T07:02:12.000Z'
tags: []
---

With the release of ASP.NET Web API as part of .NET 4.5 and MVC 4.0, JSON.NET has effectively pushed out the .NET native serializers to become the default serializer for Web API. JSON.NET is vastly more flexible than the built in DataContractJsonSerializer or the older JavaScript serializer. The DataContractSerializer in particular has been very problematic in the past because it can't deal with untyped objects for serialization - like values of type object, or anonymous types which are quite common these days. The JavaScript Serializer that came before it actually does support non-typed objects for serialization but it can't do anything with untyped data coming in from JavaScript and it's overall model of extensibility was pretty limited (JavaScript Serializer is what MVC uses for JSON responses).
