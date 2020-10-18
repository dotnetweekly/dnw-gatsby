---
_id: 5f83ba8efba5ca002f96f29c
title: "Covariant returns in C# 9"
url: 'https://anthonygiretti.com/2020/10/12/introducing-c-9-covariant-returns/'
category: articles
slug: 'covariant-returns-in-c-9'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2020-10-12T02:08:14.131Z'
tags: [.net]
---

In May 20th 2020, Microsoft introduced C# 9, among the features announced, there is one that has not yet been talked about much: covariant returns. Usually in C# when we inherit from a class, it is possible to override a method if it is declared abstract or virtual but it is not possible to change the return type of this method. C# 9 allows this, In addition to overriding a virtual or abstract method, in C# 9 you can now return a covariant type of the initial type declared in the parent class. For example, you can now return a type that is inherited from the parent class. In this article I will show you how it works with a very simple example and compare with earlier versions of C# 9.
