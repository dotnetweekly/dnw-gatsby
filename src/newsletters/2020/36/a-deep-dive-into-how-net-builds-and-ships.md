---
_id: 5f507295e0574b00461c2b53
title: "A Deep Dive into How .NET Builds and Ships"
url: 'https://devblogs.microsoft.com/dotnet/a-deep-dive-into-how-net-builds-and-ships/'
category: articles
slug: 'a-deep-dive-into-how-net-builds-and-ships'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-09-03T04:35:33.054Z'
tags: [.net]
---

This is a deep technical dive into the machinery and processes used by the .NET Team to build and ship .NET. It will be of interest to those who wish to know about such topics as:

How .NET builds a product developed across many repos.
Safely handles security patches.
Preps and validates a product for release.
This post begins by laying out the multi-repository world that makes up the .NET product, its inherent challenges, and how we deal with them. This is a review of some of the information presented in The Evolving Infrastructure of .NET Core. Then it takes a close look at how we build, prep, and ship the product, especially around releases that include security fixes.
