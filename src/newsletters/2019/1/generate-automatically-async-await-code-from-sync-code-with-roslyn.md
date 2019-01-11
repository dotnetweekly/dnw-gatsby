---
_id: 5c30bdcb4acc3262b32fe4bd
title: 'Generate automatically async/await code from sync code with Roslyn'
url: 'http://xoofx.com/blog/2018/12/26/generate-async-from-sync-code-with-roslyn/'
category: 5c30bdcb4acc3262b32fe4bd
slug: 'generate-automatically-async-await-code-from-sync-code-with-roslyn'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-01-05T14:23:07.606Z'
tags: [.net]
---

This is a quick post to give you some feedback about an experiment I just made with the Scriban Text Templating Library to add support for async/await automatically from the existing synchronous code, all of this done by using Roslyn.

If you have an existing code base that works beautifully in a synchronous manner, but you would like also to provide a path for async/await patterns, you don’t want to rewrite your entire code base to the async/await pattern, or to drop synchronous code for async/await only. It would either be a huge burden to maintain two code paths doing almost the same thing, or the use async/await only would actually perform significantly worse than the synchronous version, even if you are using the recently introduced ValueTask<T>
