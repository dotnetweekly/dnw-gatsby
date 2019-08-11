---
_id: 5d4f792a9af861001ebfd895
title: "Effective mocking"
url: 'https://cezarypiatek.github.io/post/effective-mocking/'
category: articles
slug: 'https-cezarypiatekgithubio-post-effective-mocking'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-08-06T02:10:50.142Z'
tags: [.net]
---

Recently, I’ve been asked if Roslyn can be used for helping with writing code that involves preparing mocks with NSubstitute. Of course, my answer was "Yes" but instead of rushing into creating a new project that would implement this functionality, I performed a small research. I checked nuget.org and Visual Studio extensions marketplace, and I discovered that there was a bunch of existing analyzers and extensions that facilitated working with mocks and not only for NSubstitute but for other mocking frameworks, just like Moq or Fake It Easy, too. In this blog post, I will show you how these tools are helping to avoid common problems with mocking and boost your productivity by saving you a lot of typing. Presented examples will be mostly based on the Moq library because it’s my favoring mocking package.


