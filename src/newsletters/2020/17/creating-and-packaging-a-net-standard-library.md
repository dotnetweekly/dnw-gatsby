---
_id: 5ea49b736409bd00350b42bb
title: "Creating and Packaging a .NET Standard library"
url: 'https://devblogs.microsoft.com/visualstudio/creating-and-packaging-net-standard-library/'
category: articles
slug: 'creating-and-packaging-a-net-standard-library'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-04-24T20:20:03.392Z'
tags: [.net]
---

In this post we will cover how you can create a .NET Standard library and then share that with other developers via NuGet. We will be demonstrating this with Visual Studio for Mac, but you can also follow along with Visual Studio, or Visual Studio Code when using the dotnet CLI. If you are on macOS, and haven’t already download Visual Studio for Mac you can download it here. We will create a new .NET Standard library from scratch, configure it for NuGet and then publish to nuget.org. The sample library will be a logging package.
