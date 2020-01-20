---
_id: 5e25d288fb0ecc0036c35206
title: "Create fake user for ASP.NET Core controller tests"
url: 'https://gunnarpeipman.com/aspnet-core-test-controller-fake-user/'
category: articles
slug: 'create-fake-user-for-aspnet-core-controller-tests'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-01-16T16:17:12.578Z'
tags: [asp.net-core]
---

I think most of ASP.NET Core applications have authentication enabled. When writing unit tests for controllers we have one set of tests that need authenticated user and other set of tests that need anonymous user. Faking User property of controller is a little bit tricky. This blog post shows how to do it.
