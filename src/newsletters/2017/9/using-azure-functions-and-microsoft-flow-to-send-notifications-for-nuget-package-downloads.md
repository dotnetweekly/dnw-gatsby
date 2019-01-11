---
_id: 5a88e1abbd6dca0d5f0d1ff0
title: "Using Azure Functions and Microsoft Flow to Send Notifications for NuGet Package Downloads"
url: 'http://dontcodetired.com/blog/post/Using-Azure-Functions-and-Microsoft-Flow-to-Send-Notifications-for-NuGet-Package-Downloads'
category: 5a88e1abbd6dca0d5f0d1ff0
slug: 'using-azure-functions-and-microsoft-flow-to-send-notifications-for-nuget-package-downloads'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-03-01T20:20:43.000Z'
tags: []
---

One of the NuGet packages I maintain is approaching 100,000 downloads. I thought it would be nice to get a notification on my phone when the number of downloads hit 100,000.

To implement this I installed the Flow app on my iPhone, wrote an Azure Function that executes on a timer, and calls into Flow.
