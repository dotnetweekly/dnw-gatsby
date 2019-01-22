---
_id: 5a88e1afbd6dca0d5f0d2c92
title: "Unit Testing JavaScript/JQuery in ASP.Net MVC Project using QUnit Step by Step"
url: 'http://blogs.msdn.com/b/pranab/archive/2013/06/20/unit-testing-javascript-jquery-in-asp-net-mvc-project-using-qunit.aspx'
category: articles
slug: 'unit-testing-javascriptjquery-in-asp-net-mvc-project-using-qunit-step-by-step'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-06-22T07:20:18.000Z'
tags: []
---

The latest Razor View Model of ASP.Net MVC 3/MVC 4 uses considerable amount of JavaScript/JQuery. Sometimes the ActionResult returned by the Controller methods are refined further using JQuery methods before the result in the view. It’s very common when we are returning JSON formatted output from the controller method. We have various options to run the unit test on the .Net code written within controller. But sometimes it’s required to test those JavaScript/JQuery codes as well, to check the sanity of the output especially in the situation mentioned above.
