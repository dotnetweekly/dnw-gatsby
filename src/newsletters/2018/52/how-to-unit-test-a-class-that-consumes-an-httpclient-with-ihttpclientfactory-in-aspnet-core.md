---
_id: 5c262660745cd015010206bb
title: 'How to unit test a class that consumes an HttpClient with IHttpClientFactory in ASP.NET Core?'
url: 'http://anthonygiretti.com/2018/09/06/how-to-unit-test-a-class-that-consumes-an-httpclient-with-ihttpclientfactory-in-asp-net-core/'
category: 5c262660745cd015010206bb
slug: 'how-to-unit-test-a-class-that-consumes-an-httpclient-with-ihttpclientfactory-in-aspnet-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-12-28T13:34:24.096Z'
tags: [.net-core]
---

A few years ago, Microsoft introduced the HttpClient class as a modern substitute for HttpWebRequest to make web requests from .NET applications. Not only is this new API much easier to use, cleaner, and asynchronous, but it is also easily expandable.

The HttpClient class has a constructor that accepts a HttpMessageHandler.
The latter is an object that accepts a request (HttpRequestMessage) and returns a response (HttpResponseMessage); the way it does it is completely dependent on the implementation. By default, HttpClient uses HttpClientHandler, a handler that sends a request to a server on the network and returns the response from the server. In this article we will create our own implementation of an HttpMessageHandler by inheriting an abstract class named DelegatingHandler.

Finally, for all this to be possible,  HttpClient must not be used directly, but used with the dependency injection that allow mocking by using IHttpClientFactory interface.
