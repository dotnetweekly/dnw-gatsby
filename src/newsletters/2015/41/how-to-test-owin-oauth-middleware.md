---
_id: 5a88e1adbd6dca0d5f0d255c
title: How to test OWIN OAuth Middleware
url: http://benfoster.io/blog/how-to-test-owin-oauth-middleware
category: articles
slug: 'how-to-test-owin-oauth-middleware'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2015-10-10T18:27:40.000Z'
tags: []
---

f you're familiar with the OWIN authentication middleware you'll know you need to provide some kind of callback URL to handle the response from the third-party provider i.e. Vimeo. A simplified version of our handler looks like so:
