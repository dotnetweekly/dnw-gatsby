---
_id: 5d774cbb58aae8001df5f4e5
title: "Building Messaging Endpoints in Azure: WebJobs"
url: 'https://jimmybogard.com/building-messaging-endpoints-in-azure-webjobs/'
category: articles
slug: 'building-messaging-endpoints-in-azure-webjobs'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-09-10T07:11:55.931Z'
tags: [azure]
---

In the last post, I looked at creating a generic host endpoint that many of the deployed versions in Azure can share. By using a hosted service, we can then host NServiceBus in just about anything that can work with the .NET Core generic host. The differences then come to hosting and scaling models.

First up is the closest we have to "Platform-as-a-Service" for background tasks - Azure WebJobs. WebJobs can be any executable/script, but a very common model for building is to use the Azure WebJobs SDK.
