---
_id: 5fdae79b3a43aa003310802d
title: "Should I use self-contained or framework-dependent publishing in Docker images?"
url: 'https://andrewlock.net/should-i-use-self-contained-or-framework-dependent-publishing-in-docker-images/'
category: articles
slug: 'should-i-use-self-contained-or-framework-dependent-publishing-in-docker-images'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-12-17T05:07:39.291Z'
tags: [.net]
---

ASP.NET Core has two different publishing modes, framework-dependent and self-contained. In this post I compare the impact of the publishing mode on Docker image size. I compare an image published using both approaches and take into account the size of cached layers to decide which approach is the best for Docker images.

I'm only comparing Docker image size in this post, as that's the main thing that changes between the modes. As self-contained mode uses app-trimming it's a little less "safe" as you may accidentally trim assemblies or methods you need. It also takes a little longer to build trimmed self-contained apps, as the SDK has to do the app trimming. For the purposes of this post I'm ignoring those differences.
