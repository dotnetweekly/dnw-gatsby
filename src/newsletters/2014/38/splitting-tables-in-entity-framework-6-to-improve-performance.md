---
_id: 5a88e1aebd6dca0d5f0d28ea
title: "Splitting Tables in Entity Framework 6 to Improve Performance"
url: 'http://visualstudiomagazine.com/articles/2014/09/01/splitting-tables.aspx'
category: articles
slug: 'splitting-tables-in-entity-framework-6-to-improve-performance'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-09-20T08:32:22.000Z'
tags: []
---

The first rule of speeding up your application is "Manage your database access." Unfortunately, using Entity Framework (EF) means giving up some control around managing access -- specifically, in generating your SQL. As a reader pointed out in a <a href="http://visualstudiomagazine.com/articles/2014/03/01/whats-new-in-entity-framework-6.aspx" target="_blank">recent column</a>, taking all the defaults of EF can result in an application that runs very slowly, indeed.
