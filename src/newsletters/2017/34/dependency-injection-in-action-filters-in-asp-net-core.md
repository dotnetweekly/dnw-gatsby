---
_id: 5a88e1abbd6dca0d5f0d1d2e
title: Dependency Injection in action filters in ASP.NET Core
url: https://www.devtrends.co.uk/blog/dependency-injection-in-action-filters-in-asp.net-core
category: articles
slug: 'dependency-injection-in-action-filters-in-asp-net-core'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2017-08-24T14:28:32.000Z'
tags: []
---

It is quite common to decorate ASP.NET MVC controller actions with filter attributes to separate cross cutting concerns from the main concern of the action. Sometimes these filters need to use other components but attributes are quite limited in their functionality and dependency injection into an attribute is not directly possible. This post looks at a few different techniques for injecting dependencies into action filters in ASP.NET Core. We discuss when each method should be used before taking a step back and examining if we can approach the problem in a different way for a cleaner solution.
