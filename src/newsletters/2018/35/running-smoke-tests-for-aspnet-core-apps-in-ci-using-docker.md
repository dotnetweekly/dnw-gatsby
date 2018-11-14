---
_id: 5b88b136eb7bebee7989afc7
title: Running smoke tests for ASP.NET Core apps in CI using Docker
url: https://andrewlock.net/running-smoke-tests-for-asp-net-core-apps-in-ci-using-docker/
category: articles
slug: 'running-smoke-tests-for-aspnet-core-apps-in-ci-using-docker'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-08-31T03:08:38.736Z'
tags: ['asp.net-core']
---

In this post I'll discuss a technique I use occasionally to ensure that an ASP.NET Core app is able to start correctly, as part of a continuous integration (CI) build pipeline. These "smoke tests" provide an initial indication that there may be something wrong with the build, which may not be caught by other tests.


