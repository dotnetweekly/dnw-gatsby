---
_id: 5e58931c7f965400359f2a83
title: "Web Workers, comlink, TypeScript and React"
url: 'https://blog.johnnyreilly.com/2020/02/web-workers-comlink-typescript-and-react.html'
category: articles
slug: 'web-workers-comlink-typescript-and-react'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-02-28T04:12:12.843Z'
tags: [javascript]
---

JavaScript is famously single threaded. However, if you're developing for the web, you may well know that this is not quite accurate. There are Web Workers:

A worker is an object created using a constructor (e.g. Worker()) that runs a named JavaScript file — this file contains the code that will run in the worker thread; workers run in another global context that is different from the current window.

Given that there is a way to use other threads for background processing, why doesn't this happen all the time? Well there's a number of reasons; not the least of which is the ceremony involved in interacting with Web Workers. Consider the following example that illustrates moving a calculation into a worker:
