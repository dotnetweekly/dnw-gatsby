---
_id: 5a88e1afbd6dca0d5f0d2d90
title: 'Migrating ASP.NET Web Forms to the MVC Pattern with the ASP.NET Web API'
url: 'http://msdn.microsoft.com/en-us/magazine/jj991978.aspx'
category: 5a88e1afbd6dca0d5f0d2d90
slug: 'migrating-asp-net-web-forms-to-the-mvc-pattern-with-the-asp-net-web-api'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-03-02T21:45:18.000Z'
tags: []
---

While ASP.NET MVC tends to get most of the attention these days, ASP.NET Web Forms and its related controls allow developers to generate powerful, interactive UIs in a short period of time—which is why there are so many ASP.NET Web Forms applications around. What ASP.NET Web Forms doesn’t support is implementing the Model-View-Controller (MVC) and Model-View-ViewModel (MVVM) patterns, which can enable test-driven development (TDD).

The ASP.NET Web API (“Web API” hereafter) provides a way to build or refactor ASP.NET Web Forms applications to the MVC pattern by moving code from the codebehind file to a Web API controller. This process also enables ASP.NET applications to leverage Asynchronous JavaScript and XML (AJAX), which can be used to create a more responsive UI and improve an application’s scalability by moving logic into the client and reducing communication with the server. This is possible because the Web API leverages the HTTP protocol and (through coding by convention) automatically takes care of several low-level tasks. The Web API paradigm for ASP.NET that this article proposes is to let ASP.NET generate the initial set of markup sent to the browser but handle all of the user’s interactions through AJAX calls to a standalone, testable controller.
