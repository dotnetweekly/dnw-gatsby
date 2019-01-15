---
_id: 5a88e1aebd6dca0d5f0d29da
title: "How To Refactor for Dependency Injection"
url: 'http://visualstudiomagazine.com/articles/2014/05/01/how-to-refactor-for-dependency-injection.aspx'
category: articles
slug: 'how-to-refactor-for-dependency-injection'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-05-24T10:33:57.000Z'
tags: []
---

Dependency Injection is a programming paradigm that has recently been gaining considerable popularity within the Microsoft .NET Framework community. Applying it will force decisions to be made about how objects interact and depend on each other and will bring to light some of the problems that make code difficult to maintain. One such problem is that of circular dependencies, where two objects rely on each other. Another is complex branching: methods full of nested control statements that are almost impossible to follow. While the use of dependency injection doesn't make those problems go away, it can make them easier to spot and correct.
