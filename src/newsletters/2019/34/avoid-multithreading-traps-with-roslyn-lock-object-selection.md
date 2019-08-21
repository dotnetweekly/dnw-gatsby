---
_id: 5d5abdcf9af861001ebfd8d1
title: "Avoid multithreading traps with Roslyn: Lock object selection "
url: 'https://cezarypiatek.github.io/post/avoid-multithreading-traps-p1/'
category: articles
slug: 'avoid-multithreading-traps-with-roslyn-lock-object-selection'
user_id: 5a980534877735bd0ca462de
username: 'cezarypiatek'
createdOn: '2019-08-19T15:18:39.785Z'
tags: [.net]
---

 I’ve decided to create a series of blog posts where I will present what I’ve recently learned about the traps related to the multithreading in C#. I will also show you my proposition of Roslyn analyzers that can possibly help to avoid those issues right at the stage of writing the code. This part is about choosing a suitable object for locking.
