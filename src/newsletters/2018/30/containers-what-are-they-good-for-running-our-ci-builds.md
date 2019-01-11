---
_id: 5b595f2413da0b3b01d112f5
title: "Containers - What Are They Good For? Running Our CI Builds"
url: 'https://jimmybogard.com/containers-what-are-they-good-for-ci-builds/'
category: 5b595f2413da0b3b01d112f5
slug: 'containers-what-are-they-good-for-running-our-ci-builds'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-07-26T05:41:56.786Z'
tags: [docker]
---

In the last post, I looked at creating a build environment, settling on a strategy where I used Docker Compose to create our build environment. From there, I need some way to actually run our build in an environment.

Typically, my Windows build run in some sort of hosted agent, whether it's AppVeyor or VSTS. The major advantage here is there's some pool of build agents that I don't really need to worry about, and it can run our build.
