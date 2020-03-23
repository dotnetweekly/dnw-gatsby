---
_id: 5e6f1a4364be560036324bfc
title: "Building a GitHub App With Node.js"
url: 'http://thecodebarbarian.com/building-a-github-app-with-node-js.html'
category: articles
slug: 'building-a-github-app-with-nodejs'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-03-16T06:18:43.034Z'
tags: [github]
---

GitHub Apps are a GitHub's preferred way to build more sophissticated functionality on top of GitHub. GitHub apps are a separate concept from GitHub OAuth Apps, which causes a lot of confusion.

Here's how you can think of the difference: GitHub OAuth Apps can act on behalf of a user, but GitHub Apps are distinct "users" that can act on their own. If you authorize a GitHub OAuth App and that app posts on an issue, it looks as if you posted it. But if you install a GitHub App and that app posts on an issue, the post comes from a distinct user.
