---
_id: 5a88e1acbd6dca0d5f0d2464
title: "Handling Lists of Selectable Items in ASP.NET MVC"
url: 'https://visualstudiomagazine.com/articles/2016/01/01/handling-lists-of-selectable-items.aspx'
category: 5a88e1acbd6dca0d5f0d2464
slug: 'handling-lists-of-selectable-items-in-asp-net-mvc'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-01-23T10:04:44.000Z'
tags: []
---

You have a table on your ASP.NET MVC page, displaying information to your users. You want the first column in the table to hold checkboxes or radio buttons that a user will click to pick items in the table to process. This is a common task, but I have some bad news: There's no really simple, built-in facility to do this in ASP.NET MVC, even if you were to use the WebGrid control. But, if you use Partial Views, you can simplify the code you need tremendously.
