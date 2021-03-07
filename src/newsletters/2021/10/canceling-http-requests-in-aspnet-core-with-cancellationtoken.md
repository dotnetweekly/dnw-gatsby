---
_id: "60443b06066145002fa651ac"
title: "Canceling HTTP Requests in ASP.NET Core with CancellationToken"
url: 'https://code-maze.com/canceling-http-requests-in-asp-net-core-with-cancellationtoken/'
category: articles
slug: 'canceling-http-requests-in-aspnet-core-with-cancellationtoken'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-03-06T02:31:34.259Z'
tags: [asp.net-core]
---

It is quite a possible situation to have a user navigating to the client application’s page that sends an HTTP request to the server. While our app processing the request, a user can navigate away from that page. In such a case, we want to cancel the HTTP request since the response is no longer important to that user. Of course, this is just one of many situations that could happen in a real-world application where we would want to cancel our request. So, in this article, we are going to learn how to use CancellationToken to cancel HTTP requests in our client application.


