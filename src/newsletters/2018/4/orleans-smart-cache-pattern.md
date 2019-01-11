---
_id: 5a88e1aabd6dca0d5f0d1aac
title: "Orleans Smart Cache Pattern"
url: 'https://codeopinion.com/orleans-smart-cache-pattern/'
category: 5a88e1aabd6dca0d5f0d1aac
slug: 'orleans-smart-cache-pattern'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-01-27T15:03:43.000Z'
tags: []
---

I discovered the Orleans Smart Cache Pattern by listening to a talk by John Azariah and Sergey Bykov.  The idea is that you can use Orleans as a distributed cache in front of (permanent) storage.  This is really ideal if you have a read heavy system, which most are.  You could optionally also choose to buffer your writes when you make state changes.  Ultimately you will reduce load on your storage by accessing data/state from memory.
