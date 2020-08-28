---
_id: 5f4519dde0574b00461c2b30
title: "C# 9.0: Init-only properties"
url: 'https://blog.miguelbernard.com/c-9-0-init-only-properties/'
category: articles
slug: 'c-90-init-only-properties'
user_id: 5f0787a57ea0e7003fb8372a
username: 'miguelbernard'
createdOn: '2020-08-25T14:02:05.506Z'
tags: [c#]
---

There's a lot of different ways to create an object in C# and set its state. There are the constructor, the setters on properties, and the object initializers introduced in C# 7.0. Although we have all those methods to create an object, it feels like something is missing. How do you construct an object and make it immutable after creation? C# 9.0 is solving this issue with the init-only properties.
