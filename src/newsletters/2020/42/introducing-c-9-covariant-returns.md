---
_id: 5f8a4a17fba5ca002f96f2b6
title: "Introducing C# 9: Covariant returns"
url: 'https://anthonygiretti.com/2020/10/12/introducing-c-9-covariant-returns/'
category: articles
slug: 'introducing-c-9-covariant-returns'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-10-16T01:34:15.606Z'
tags: [c#]
---

In May 20th 2020, Microsoft introduced C# 9, among the features announced, there is one that has not yet been talked about much: covariant returns. Usually in C# when we inherit from a class, it is possible to override a method if it is declared abstract or virtual but it is not possible to change the return type of this method. C# 9 allows this, In addition to overriding a virtual or abstract method, in C# 9 you can now return a covariant type of the initial type declared in the parent class. For example, you can now return a type that is inherited from the parent class. In this article I will show you how it works with a very simple example and compare with earlier versions of C# 9. This post was produced with input from Dave Brock. Dave recently posted some really interesting C # 9 articles which you can find here: https://daveabrock.com/2020/06/29/c-sharp-9-deep-dive-inits


