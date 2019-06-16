---
_id: 5d0238c0f35c1a794d457956
title: "Beyond Basics - ASP.Net Core Adding Caching"
url: 'https://adamstorr.azurewebsites.net/blog/beyond-basics-aspnetcore-adding-caching'
category: articles
slug: 'beyond-basics-aspnet-core-adding-caching'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-06-13T12:51:28.360Z'
tags: [.net]
---

When I was early in my career I would read a blog or watch a video about a relatively basic concept and then the author would suggest an advanced idea and "leave it to the reader" to investigate and implement.

I was watching another great beginner video from Scott Allen "ASP.NET Core Fundamentals" (highly recommend) the other day and something similar came up again.

During the section "Building the User Interface" Scott goes on to create a View Component which can be added into individual pages or onto the layout page so that all pages get the display. The View Component gets the count of restaurants from the data store and displays it in the UI. During the development of this Scott says "If you're in a performance sensitive scenario you might want to cache this value" and this got me thinking.
