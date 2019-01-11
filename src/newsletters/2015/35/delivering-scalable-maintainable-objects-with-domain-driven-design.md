---
_id: 5a88e1adbd6dca0d5f0d25ca
title: 'Delivering Scalable, Maintainable Objects with Domain-Driven Design'
url: 'https://visualstudiomagazine.com/articles/2015/08/01/delivering-scalable-maintainable-objects.aspx'
category: 5a88e1adbd6dca0d5f0d25ca
slug: 'delivering-scalable-maintainable-objects-with-domain-driven-design'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2015-08-29T08:41:56.000Z'
tags: []
---

If you create ASP.NET MVC applications you've probably gotten into the habit of creating a "model class" that holds all the data that a View needs. In other kinds of applications, these classes are referred to as Data Transfer Objects (DTOs). In ASP.NET MVC developers typically pass these DTOs to Views in one method and then get the DTO back through one of the parameters of another method that handles the View's updates. Here are the typical ASP.NET MVC action methods that implement this pattern.
