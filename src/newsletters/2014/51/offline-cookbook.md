---
_id: 5a88e1adbd6dca0d5f0d27f6
title: Offline Cookbook
url: http://jakearchibald.com/2014/offline-cookbook/
category: articles
slug: 'offline-cookbook'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2014-12-21T01:19:40.000Z'
tags: []
---

With ServiceWorker (intro) we gave up trying to solve offline, and gave developers the moving parts to go solve it themselves. It gives you control over caching and how requests are handled. That means you get to create your own patterns. Let's take a look at a few possible patterns in isolation, but in practice you'll likely use many of them in tandem depending on URL & context.

All code examples work today in Chrome 40 beta with the cache polyfill, unless otherwise noted. This stuff will land into the stable version January/February 2015 barring any emergencies, so it won't be long until millions of real users can benefit from this stuff.
