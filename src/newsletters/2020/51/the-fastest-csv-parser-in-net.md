---
_id: 5fd9aa7a3a43aa0033108029
title: "The fastest CSV parser in .NET"
url: 'https://www.joelverhagen.com/blog/2020/12/fastest-net-csv-parsers'
category: articles
slug: 'the-fastest-csv-parser-in-net'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-12-16T06:34:34.496Z'
tags: [.net]
---

My goal was to find the fastest low-level CSV parser. Essentially, all I wanted was a library that gave me a string[] for each line where each field in the line was an element in the array. This is about as simple as you can get with a CSV parser. I don’t care about parsing headings or dynamically mapping fields to class properties. I can do all of that myself faster than reflection with C# Source Generators, rather trivially.


