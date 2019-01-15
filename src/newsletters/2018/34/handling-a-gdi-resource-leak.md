---
_id: 5b7c1850e629202ba0f3fe96
title: "Handling a GDI Resource Leak"
url: 'https://codingsight.com/gdi-leak-handling/'
category: articles
slug: 'handling-a-gdi-resource-leak'
user_id: 5aaa4af315c227023e22fe4b
username: 'Dandy123'
createdOn: '2018-08-21T13:49:04.067Z'
tags: [.net,c#,visual-studio]
---

GDI leak (or, simply the usage of too many GDI objects) is one of the most common problems. It eventually causes rendering problems, errors, and/or performance problems. The article describes how we debug this problem.

In 2016, when most programs are executed in sandboxes wherefrom even the most incompetent developer cannot harm the system, I am amazed to face the problem I will speak about in this article. Frankly speaking, I hoped that this problem had gone forever together with Win32Api. Nevertheless, I faced it. Before that, I just heard horror stories about it from more experienced developers.
