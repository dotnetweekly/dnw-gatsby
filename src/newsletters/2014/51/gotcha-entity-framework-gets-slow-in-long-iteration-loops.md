---
_id: 5a88e1adbd6dca0d5f0d27f4
title: 'Gotcha: Entity Framework gets slow in long Iteration Loops'
url: 'http://weblog.west-wind.com/posts/2014/Dec/21/Gotcha-Entity-Framework-gets-slow-in-long-Iteration-Loops'
category: 5a88e1adbd6dca0d5f0d27f4
slug: 'gotcha-entity-framework-gets-slow-in-long-iteration-loops'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-12-21T01:24:06.000Z'
tags: []
---

Thought I’d highlight a common problem I’ve run into a few times with a few of my customers using Entity Framework.

I spent some time today with a customer debugging a very, very slowly process using Entity Framework operation. The customer was running a long order processing task involving an order with many thousands of order items plus a boat load of child items. This task is pretty massive, but it was taking 6+ hours to complete. Yikes. Lots of items for sure, but there’s no reason this should take hours or even more than a few minutes.
