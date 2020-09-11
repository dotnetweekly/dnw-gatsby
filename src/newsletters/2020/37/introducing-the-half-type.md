---
_id: 5f58fa568946f1002f8bf5cd
title: "Introducing the Half type"
url: 'https://devblogs.microsoft.com/dotnet/introducing-the-half-type/'
category: articles
slug: 'introducing-the-half-type'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-09-09T15:52:54.931Z'
tags: [.net]
---

The IEEE 754 specification defines many floating point types, including: binary16, binary32, binary64 and binary128. Most developers are familiar with binary32 (equivalent to float in C#) and binary64 (equivalent to double in C#). They provide a standard format to represent a wide range of values with a precision acceptable for many applications. .NET has always had float and double and with .NET 5 Preview 7, we’ve added a new Half type (equivalent to binary16)!


