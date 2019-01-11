---
_id: 5a88e1acbd6dca0d5f0d238a
title: 'Data Points - Handling the State of Disconnected Entities in EF'
url: 'https://msdn.microsoft.com/en-us/magazine/mt694083.aspx'
category: 5a88e1acbd6dca0d5f0d238a
slug: 'data-points-handling-the-state-of-disconnected-entities-in-ef'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-04-16T07:25:46.000Z'
tags: []
---

Disconnected data is an old problem that precedes Entity Framework and, for that matter, most data access tools. It’s never been an easy one to solve. The server sends data down the wire, not knowing what may happen to it in the client app that requested it, not even knowing if it will return. Then, suddenly, some data reappears in a request. But is it the same data? What was it up to in its absence? Did anything happen to it? Is it completely new data? So much to worry about!
