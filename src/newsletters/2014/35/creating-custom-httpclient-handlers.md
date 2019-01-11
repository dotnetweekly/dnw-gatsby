---
_id: 5a88e1aebd6dca0d5f0d290a
title: "Creating Custom HTTPClient Handlers"
url: 'http://visualstudiomagazine.com/articles/2014/08/01/creating-custom-httpclient-handlers.aspx'
category: 5a88e1aebd6dca0d5f0d290a
slug: 'creating-custom-httpclient-handlers'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-08-30T10:11:03.000Z'
tags: []
---

HTTPClient is an object used for accessing request and response messages to and from Web APIs. Like traditional client-server calls, the HTTPClient calls the server using a specific URI, waits for the result, then returns a response object to the caller. As with everything else in software development, a need will eventually arise for custom development. Luckily, the HttpClient class allows for that. A single message handler, or a number of handlers, can be created and added in a specific order to the call stack using the HttpClientFactory.Create method.
