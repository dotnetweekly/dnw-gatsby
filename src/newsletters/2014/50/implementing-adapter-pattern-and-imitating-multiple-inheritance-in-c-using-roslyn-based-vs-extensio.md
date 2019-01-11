---
_id: 5a88e1adbd6dca0d5f0d280c
title: "Implementing Adapter Pattern and Imitating Multiple Inheritance in C# using Roslyn based VS Extension Wrapper Generator"
url: 'http://www.codeproject.com/Articles/850799/Implementing-Adapter-Pattern-and-Imitating-Multipl'
category: 5a88e1adbd6dca0d5f0d280c
slug: 'implementing-adapter-pattern-and-imitating-multiple-inheritance-in-c-using-roslyn-based-vs-extensio'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-12-13T11:19:39.000Z'
tags: []
---

The new <a style="color: #800080;" href="https://roslyn.codeplex.com/" target="_blank">Roslyn</a> functionality coming with VS 2015 creates enormous potential for analyzing the existing code and building various VS extensions. We use the Roslyn based single file generator to generate the wrapper properties, methods and events. As was mentioned above, our multiple inheritance implementation is based on creating wrappers around objects contained within a class. Creating wrappers can also be employed for implementing other patterns e.g. an adapter patter as will be shown below.
