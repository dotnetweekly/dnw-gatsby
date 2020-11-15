---
_id: 5fb17658075fce002f33e3f3
title: "Using Azure WebJobs in .NET Applications"
url: 'https://code-maze.com/azure-webjobs-in-app-service/'
category: articles
slug: 'using-azure-webjobs-in-net-applications'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-11-16T18:41:28.025Z'
tags: [azure]
---

It is a very common requirement for web applications to be able to run background tasks. Scheduling tasks to run at specific times or intervals, triggering jobs to run based on certain events, etc are common scenarios that we encounter while developing applications. In this article, we are going to learn about Azure WebJobs which provides an excellent way of accomplishing this in a cloud environment.

We’ll start by learning what an Azure WebJob is. Then we’ll look at different types of WebJobs. After that, we’ll learn how to use the Azure WebJobs SDK to create a triggered background job that runs when a new message arrives in the Azure Storage Queue. We’ll test it locally by creating a queue and adding a message. Finally, we’ll deploy it to Azure and test it.
