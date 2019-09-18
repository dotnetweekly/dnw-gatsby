---
_id: 5d7e8bf458aae8001df5f506
title: "Avoid thread synchronization problems with Roslyn: Synchronization primitives traps"
url: 'https://cezarypiatek.github.io/post/avoid-multithreading-traps-p2/'
category: articles
slug: 'avoid-thread-synchronization-problems-with-roslyn-synchronization-primitives-traps'
user_id: 5a980534877735bd0ca462de
username: 'cezarypiatek'
createdOn: '2019-09-11T19:07:32.464Z'
tags: [.net]
---

Multithreading is one of the most difficult aspects of programming and can cause a lot of headaches. The main source of problems is often the improper usage of synchronization mechanisms, which can result in deadlocks or a complete lack of synchronization despite our expectations. The effect of the broken synchronization can be analyzed with various runtime tools, but it would be nice to have an asset that is able to report all those issues in the design time right on the stage of writing code. This blog post continues the series Avoid thread synchronization problems with Roslyn and this part is about the traps related to the usage of synchronization primitives.
