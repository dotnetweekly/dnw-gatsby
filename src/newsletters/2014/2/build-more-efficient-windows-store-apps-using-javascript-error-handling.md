---
_id: 5a88e1aebd6dca0d5f0d2b16
title: "Build More Efficient Windows Store Apps Using JavaScript: Error Handling"
url: 'http://msdn.microsoft.com/en-us/magazine/dn519922.aspx'
category: 5a88e1aebd6dca0d5f0d2b16
slug: 'build-more-efficient-windows-store-apps-using-javascript-error-handling'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-01-11T09:50:44.000Z'
tags: []
---

Believe it or not, sometimes app developers write code that doesn’t work. Or the code works but is terribly inefficient and hogs memory. Worse yet, inefficient code results in a poor UX, driving users crazy and compelling them to uninstall the app and leave bad reviews.

I’m going to explore common performance and efficiency problems you might encounter while building Windows Store apps with JavaScript. In this article, I take a look at best practices for error handling using the Windows Library for JavaScript (WinJS). In a future article, I’ll discuss techniques for doing work without blocking the UI thread, specifically using Web Workers or the new WinJS.Utilities.Scheduler API in WinJS 2.0, as found in Windows 8.1. I’ll also present the new predictable-object lifecycle model in WinJS 2.0, focusing particularly on when and how to dispose of controls.
