---
_id: 5a88e1afbd6dca0d5f0d2fb4
title: "Test-Driving ASP.NET MVC"
url: 'http://msdn.microsoft.com/el-gr/magazine/jj190803(en-us).aspx'
category: articles
slug: 'test-driving-asp-net-mvc'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2012-07-14T16:18:35.000Z'
tags: []
---

At the core of the Model-View-Controller (MVC) pattern is the segregation of UI functions into three components. The model represents the data and behavior of your domain. The view manages the display of the model and handles interactions with users. The controller orchestrates the interactions between the view and the model. This separation of inherently difficult-to-test UI logic from the business logic makes applications implemented with the MVC pattern extremely testable. In this article I’ll discuss best practices and techniques for enhancing the testability of your ASP.NET MVC applications, including how to structure your solution, architecting your code to handle the injection of dependencies and implementing dependency injection with StructureMap.
