---
_id: 5a88e1aebd6dca0d5f0d29a2
title: 'Resolving AngularJS paths in a ASP.NET MVC SPA and IIS'
url: 'http://jokecamp.wordpress.com/2014/06/06/resolving-angularjs-paths-in-asp-mvc-spa-iis/'
category: 5a88e1aebd6dca0d5f0d29a2
slug: 'resolving-angularjs-paths-in-a-asp-net-mvc-spa-and-iis'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-06-28T15:04:08.000Z'
tags: []
---

Routing in the development of a AngularJS SPA (single page application) inside an ASP.NET MVC application can be problematic. Trying to resolve relative file paths when developing locally vs deploying to a remote server can have different behaviors, especially when your deployed application does not live at the root of your IIS website. Below is the problem I encountered and my solution.
