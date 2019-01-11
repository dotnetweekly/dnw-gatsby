---
_id: 5a8bdf833b936a002a308a23
title: "Unit Testing with the HttpClient"
url: 'https://codedaze.io/unit-testing-with-httpclient/'
category: 5a8bdf833b936a002a308a23
slug: 'unit-testing-with-the-httpclient'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-02-19T23:55:01.890Z'
tags: [.net]
---

There has been a lot of discussion about how and even if the HttpClient class is testable. And it very much is.

So I wanted to write a quick post giving you three options that you can use when you need to write tests involving the HttpClient.

Let's assume we have a simple class which gets a list of songs from an API. I'll use this as the example class we wish to test.
