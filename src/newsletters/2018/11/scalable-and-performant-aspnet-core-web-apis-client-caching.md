---
_id: 5aa0b8921011460d21870d0d
title: "Scalable and Performant ASP.NET Core Web APIs: Client Caching"
url: 'https://www.carlrippon.com/scalable-and-performant-asp-net-core-web-apis-client-caching/'
category: articles
slug: 'scalable-and-performant-aspnet-core-web-apis-client-caching'
user_id: 5a9e151169f83ea1390e87cb
username: 'dnwuBkFzB5iuz'
createdOn: '2018-03-12T00:59:08.479Z'
tags: [.net,c#,visual-studio]
---



This is yet another post in a <a href='https://www.carlrippon.com/scalable-and-performant-asp-net-core-web-apis-introduction/' target='blank'>series</a> on creating performant and scalable web APIs using ASP.NET Core. In this post, we'll start to focus on caching. Often the slowest bit of a web API is fetching the data, so, if the data hasn't changed it makes sense to save it in a place that can be retrieved a lot quicker than a database or another API call.

We will focus on leveraging standard HTTP caching and in this post we'll focus on client side caching. There are 2 HTTP caching approaches: - <strong>expiration</strong> and <strong>validation</strong> 
