---
_id: 5eaf3a626409bd00350b42d6
title: "Buidling a conditional caching middleware instead of an attribute"
url: 'https://anthonygiretti.com/2020/05/03/buidling-a-conditional-caching-middleware-instead-of-an-attribute/'
category: articles
slug: 'buidling-a-conditional-caching-middleware-instead-of-an-attribute'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2020-05-01T21:40:50.381Z'
tags: [asp.net-core]
---

It was not that long ago that I had to manage the cache to get informations that rarely change. My goal was to avoid making HTTP hits to the server, so I had to eliminate the distributed cache and the memory cache. So I only had as solution the HTTP response cache by attributes because client side caching. But something bothered me, I wanted to have the possibility of benefiting from a greater flexibility in parameters management, for example by using dependency injection to inject parameters rather than using caching profiles. So I had the idea of building a caching middleware, conditional on the route used, in order to have the same behavior as an action or controller attribute. In this article I wanted to explain to you how I did it.
