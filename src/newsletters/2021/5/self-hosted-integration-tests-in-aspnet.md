---
_id: "60120cc3118569003345613e"
title: "Self-hosted integration tests in ASP.NET"
url: 'https://blog.ploeh.dk/2021/01/25/self-hosted-integration-tests-in-aspnet/'
category: articles
slug: 'self-hosted-integration-tests-in-aspnet'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-01-28T01:00:51.388Z'
tags: [asp.net]
---

In 2020 I developed a sizeable code base for an online restaurant REST API. In the spirit of outside-in TDD, I found it best to test the HTTP behaviour of the API by actually interacting with it via HTTP.

Sometimes ASP.NET offers more than one way to achieve the same end result. For example, to return 200 OK, you can use both OkObjectResult and ObjectResult. I don't want my tests to be coupled to such implementation details, so by testing an API via HTTP instead of using the ASP.NET object model, I decouple the two.

You can easily self-host an ASP.NET web API and test it using an HttpClient. In this article, I'll show you how I went about it.
