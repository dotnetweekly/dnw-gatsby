---
_id: 5a88e1aabd6dca0d5f0d1b3a
title: "Building ASP.NET Core apps using Cake in Docker"
url: 'https://andrewlock.net/building-asp-net-core-apps-using-cake-in-docker/'
category: 5a88e1aabd6dca0d5f0d1b3a
slug: 'building-asp-net-core-apps-using-cake-in-docker'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-12-22T00:18:20.000Z'
tags: []
---

In a previous post, I showed how you can use Docker Hub to automatically build a Docker image for a project hosted on GitHub. To do that, I created a Dockerfile that contains the instructions for how to build the project by calling the dotnet CLI.

In this post, I show an alternative way to build your ASP.NET Core app, by using Cake to build your project inside the Docker container. We'll create a Cake build script that lets you both build outside and inside Docker, while taking advantage of the layer-caching optimization inherant to Docker.
