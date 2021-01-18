---
_id: 60048ef911856900334560f9
title: "Understanding Microsoft's Docker Images for .NET Apps"
url: 'https://blog.sixeyed.com/understanding-microsofts-docker-images-for-net-apps/'
category: articles
slug: 'understanding-microsofts-docker-images-for-net-apps'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-01-16T19:24:41.664Z'
tags: [docker]
---

To run .NET apps in containers you need to have the .NET Framework or .NET Core runtime installed in the container image. That's not something you need to manage yourself, because Microsoft provide Docker images with the runtimes already installed, and you'll use those as the base image to package your own apps.


