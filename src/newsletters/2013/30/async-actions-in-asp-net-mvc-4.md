---
_id: 5a88e1aebd6dca0d5f0d2c66
title: "Async Actions in ASP.NET MVC 4"
url: 'http://visualstudiomagazine.com/articles/2013/07/23/async-actions-in-aspnet-mvc-4.aspx'
category: 5a88e1aebd6dca0d5f0d2c66
slug: 'async-actions-in-asp-net-mvc-4'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-07-27T08:01:04.000Z'
tags: []
---

The .NET 4.5 Framework introduced the new async/await asynchronous programming model. With ASP.NET MVC 4 comes the application of the async/await model to controller actions. A traditional ASP.NET MVC control action will be synchronous by nature; this means a thread in the ASP.NET Thread Pool is blocked until the action completes. Calling an asynchronous controller action will not block a thread in the thread pool.
