---
_id: 5a88e1adbd6dca0d5f0d27b4
title: "Understanding Azure website auto-scale magic"
url: 'http://www.troyhunt.com/2015/01/understanding-azure-website-auto-scale.html'
category: articles
slug: 'understanding-azure-website-auto-scale-magic'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2015-01-30T23:22:05.000Z'
tags: []
---

I was helping out a consumer of Have I been pwned? (HIBP) earlier today as they were trying to build up a profile of the pwnage state of their client base. This mean firing a heap of requests at the API so that they could assess a vey large number of accounts. I’m always interested in how far this service can be stretched and indeed what the thresholds are before Azure starts applying auto-scale magic.
