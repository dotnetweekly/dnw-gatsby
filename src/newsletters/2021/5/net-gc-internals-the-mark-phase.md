---
_id: "6014d4b51185690033456147"
title: ".NET GC Internals – the Mark phase"
url: 'https://tooslowexception.com/net-gc-internals-the-mark-phase/'
category: articles
slug: 'net-gc-internals-the-mark-phase'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-01-29T03:38:29.201Z'
tags: [.net]
---

Hi and welcome to the second episode of the .NET GC internals! Yesterday is was 1.5h of talking about the (non-concurrent) Mark phase. The one responsible for discovering which object are “reachable” and which may be garbage collected. I’ve covered topics like object graph traversal algorithm, the pinning and marking flag, the mark stack and mark list data structures. And obviously, some deep dive into the gc.cpp at the end.


