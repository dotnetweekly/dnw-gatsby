---
_id: 5de5cf28b8c30c002fde5c39
title: "JavaScript Visualized: Event Loop"
url: 'https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif'
category: articles
slug: 'javascript-visualized-event-loop'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-12-03T02:57:44.578Z'
tags: [javascript]
---

Oh boi the event loop. It’s one of those things that every JavaScript developer has to deal with in one way or another, but it can be a bit confusing to understand at first. I’m a visual learner so I thought I’d try to help you by explaining it in a visual way through low-res gifs because it's 2019 and gifs are somehow still pixelated and blurry.

But first, what is the event loop and why should you care?

JavaScript is single-threaded: only one task can run at a time. Usually, that’s no big deal, but now imagine you’re running a task which takes 30 seconds.. Ya.. During that task we’re waiting for 30 seconds before anything else can happen (JavaScript runs on the browser’s main thread by default, so the entire UI is stuck) It’s 2019, no one wants a slow, unresponsive website
