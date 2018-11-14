---
_id: 5a88e1aebd6dca0d5f0d291a
title: Using FiddlerCore to capture HTTP Requests with .NET
url: http://weblog.west-wind.com/posts/2014/Jul/29/Using-FiddlerCore-to-capture-HTTP-Requests-with-NET
category: libraries-tools
slug: 'using-fiddlercore-to-capture-http-requests-with-net'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2014-08-23T00:19:37.000Z'
tags: []
---

Over the last few weeks I’ve been working on my Web load testing utility West Wind WebSurge. One of the key components of a load testing tool is the ability to capture URLs effectively so that you can play them back later under load. One of the options in WebSurge for capturing URLs is to use its built-in capture tool which acts as an HTTP proxy to capture any HTTP and HTTPS traffic from most Windows HTTP clients, including Web Browsers as well as standalone Windows applications and services.
