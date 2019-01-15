---
_id: 5a88e1aebd6dca0d5f0d29ac
title: "Test-Driven Development with Entity Framework 6"
url: 'http://visualstudiomagazine.com/articles/2014/06/01/test-driven-development.aspx'
category: articles
slug: 'test-driven-development-with-entity-framework-6'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-06-28T08:37:27.000Z'
tags: []
---

I'm a big fan of Test-Driven Development (TDD), but I recognize the issue that any reasonable business developer has with it: Testing the code that works with the database. Entity Framework (EF) provides part of the solution by letting you instantiate the EF classes that represent the tables in your database to use in your tests. This strategy also lets you instantiate entity objects targeted for specific tests -- generating a SalesOrder object that's missing specific information, or one that has no matching Customer object, or one that's in a specific status.
