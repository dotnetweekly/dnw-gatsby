---
_id: 5d674f1d11b008001d74e209
title: "Dependency Injection in Vue.js Applications"
url: 'https://markus.oberlehner.net/blog/dependency-injection-in-vue-applications/'
category: articles
slug: 'dependency-injection-in-vuejs-applications'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-08-29T04:05:49.790Z'
tags: [javascript]
---

I often wonder how to best decouple certain parts of an application. At first this seems pretty straightforward in the context of Vue.js applications. You have components and components pass down properties and emit events, that’s it. Right? Yeah, kinda. But also kinda not. Soon there will be the need to access global state or retrieve data from an external resource via an API. If we don’t be careful how we tackle these challenges, there will be the time when we realize that our components, which we planned to be nicely decoupled, use many external dependencies and are really anything but decoupled.
