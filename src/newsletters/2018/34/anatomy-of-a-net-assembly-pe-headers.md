---
_id: 5b7b7b9ce6292013fef3fe95
title: "Anatomy of a .NET Assembly - PE Headers"
url: 'https://www.red-gate.com/simple-talk/blogs/anatomy-of-a-net-assembly-pe-headers/'
category: articles
slug: 'anatomy-of-a-net-assembly-pe-headers'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-08-21T02:40:28.085Z'
tags: [.net]
---

Today, I’ll be starting a look at what exactly is inside a .NET assembly – how the metadata and IL is stored, how Windows knows how to load it, and what all those bytes are actually doing. First of all, we need to understand the PE file format.


