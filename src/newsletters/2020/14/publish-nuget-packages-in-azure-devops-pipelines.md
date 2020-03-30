---
_id: 5e82409e72748f0034ead20c
title: "Publish Nuget packages in Azure DevOps Pipelines"
url: 'https://damienbod.com/2020/03/28/publish-nuget-packages-in-azure-devops-pipelines/'
category: articles
slug: 'publish-nuget-packages-in-azure-devops-pipelines'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-03-30T18:55:26.698Z'
tags: [azure]
---

In Azure DevOps, Pipelines can be used to build your solution, create a Nuget package and publish the Nuget package to the Nuget feed for further usage. This post shows how you can implement this and use the new Nuget package in Visual Studio.

Setup Azure DevOps project and git Repo

Open the required Azure DevOps project, or create a new Azure DevOps project. Add a Pipeline build. This demo will create a Nuget package from a .NET Standard library using .NET Core. The yml file is created and added to the git source code.

The dotnet core pipeline is used.
