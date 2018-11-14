---
_id: 5a88e1acbd6dca0d5f0d246c
title: How to Optimize Json.NET Serialization Performance
url: http://www.tomdupont.net/2016/01/how-to-optimize-jsonnet-serialization.html
category: articles
slug: 'how-to-optimize-json-net-serialization-performance'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2016-01-16T19:24:38.000Z'
tags: []
---

By default, JsonConvert uses reflection to recursively search through the structure of an object during the serialization process. By implementing a custom JsonConverter that already knows the exact structure of the object, you can significantly increase serialization performance.
