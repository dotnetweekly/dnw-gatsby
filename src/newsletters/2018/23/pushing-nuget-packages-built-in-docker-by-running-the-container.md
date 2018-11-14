---
_id: 5b169db7d15d385bc0ee6100
title: Pushing NuGet packages built in Docker by running the container
url: https://andrewlock.net/pushing-nuget-packages-built-in-docker-by-running-the-container/
category: articles
slug: 'pushing-nuget-packages-built-in-docker-by-running-the-container'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-06-05T14:27:03.985Z'
tags: ['docker']
---

In a previous post I described how you could build NuGet packages in Docker. One of the advantages of building NuGet packages in Docker is that you can don't need any dependencies installed on the build-server itself, you can install all the required dependencies in the Docker container instead. One of the disadvantages of this approach is that getting at the NuGet packages after they've been built is more tricky - you have to run the image to get at the files.
