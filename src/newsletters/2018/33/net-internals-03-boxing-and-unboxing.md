---
_id: 5b73078bfd7ac944329e003c
title: '[.NET Internals 03] Boxing and unboxing'
url: http://www.dsibinski.pl/2018/08/net-internals-03-boxing-and-unboxing/
category: articles
slug: 'net-internals-03-boxing-and-unboxing'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-08-14T16:47:07.504Z'
tags: ['.net']
---

As we are already familiar with the basics of memory and data structures used by .NET applications, in this third post from .NET Internals series we’re going to dig into boxing and unboxing and their performance implications.
 
What is boxing and unboxing?
In the previous post we learnt what are value and reference types and got to know that the former are stored on the stack, whereas the latter are stored on the managed heap. So why should we care? Isn’t it .NET runtime which correctly manages these data structures and what’s stored on them so we don’t need to worry about that?
