---
_id: 5e9cffed72748f0034ead246
title: "When to Mock"
url: 'https://enterprisecraftsmanship.com/posts/when-to-mock/'
category: articles
slug: 'when-to-mock'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-04-17T01:50:37.173Z'
tags: [testing]
---

The use of mocks in unit testing is a controversial topic (maybe less so now than several years ago). I remember how, throughout my programming career, I went from mocking almost every dependency, to the "no-mocks" policy, and then to "only mock external dependencies".

None of this practices are good enough. In this article, I’ll show you which dependencies to mock, and which to use as is in your tests.
