---
_id: 5a88e1adbd6dca0d5f0d250a
title: "Your First MVC 6 And EF 7 Application (Dependency Injection) : Part 3"
url: 'http://www.binaryintellect.net/articles/57e3fdc1-1dcd-4d70-953a-a6d7906402b8.aspx'
category: 5a88e1adbd6dca0d5f0d250a
slug: 'your-first-mvc-6-and-ef-7-application-dependency-injection-part-3'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2015-11-15T01:16:24.000Z'
tags: []
---

In Part 1 and Part 2 of this series you developed a simple database driven application that displays a list of customers and also allows you to modify the customer details. Although the application is working as expected, it relies on the local instances of the NorthwindDbContext to get its job done. In this article we will use the Dependency Injection (DI) features of MVC 6 to inject the NorthwindDbContext into the controller class. Later we will also add repository support in the application.
