---
_id: 5b58a80c13da0bb20bd112f3
title: "Working with Polly - Using the Context to Obtain the Retry Count for Diagnostics"
url: 'https://www.stevejgordon.co.uk/polly-using-context-to-obtain-retry-count-diagnostics'
category: articles
slug: 'working-with-polly-using-the-context-to-obtain-the-retry-count-for-diagnostics'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-07-25T16:40:44.531Z'
tags: [.net]
---

I’ve been using Polly for a number of years now. For the most part, my usage of the library has been to solve some quite basic problems; commonly to implement retry logic when calling external services for example. In this post, I want to explore a requirement I had when using Polly within a library that would be shared with various other internal projects.


