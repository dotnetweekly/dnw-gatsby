---
_id: 5cc1607b64f6ba78aa4d4194
title: "Containerized Activities in Durable Workflows - Part 1"
url: 'https://markheath.net/post/serverless-containers-durable-workflows-1'
category: articles
slug: 'containerized-activities-in-durable-workflows-part-1'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-04-25T08:23:39.039Z'
tags: [azure]
---

In this series I want to show how we can build a serverless workflow using Azure Durable Functions, but implement some of the activities in that workflow using containers with Azure Container Instances. This is something I promised to write about a long time ago but it turned out to be fairly complex to implement. I've finally got enough working to be able to share a basic demo app (special thanks to Noel Bundick for some awesome sample code that got me through some sticky bits).


