---
_id: 5b4ed701d9e4dc2d4f97045d
title: I knew the Span<T> stuff was supposed to be fast, but this is ridiculous!
url: https://gist.github.com/Zhentar/07b92a52c619641ab61aab50b1e5ec91
category: articles
slug: 'i-knew-the-spant-stuff-was-supposed-to-be-fast-but-this-is-ridiculous'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-07-18T05:58:25.382Z'
tags: ['c#']
---

I have a program that parses data from both delimited files and Excel spreadsheets. I was trying out Span to speed up parsing the delimited files, but the ref struct restrictions mean I can't just hide the two different file formats behind an interface (without the small added overhead of repeatedly pulling Spans from Memory).


