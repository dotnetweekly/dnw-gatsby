---
_id: 5efb6e2716b18a003f56f2b1
title: "Introducing dotnet-monitor, an experimental tool"
url: 'https://devblogs.microsoft.com/dotnet/introducing-dotnet-monitor/'
category: articles
slug: 'introducing-dotnet-monitor-an-experimental-tool'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-06-30T16:53:59.264Z'
tags: [.net]
---

dotnet-monitor is an experimental tool that makes it easier to get access to diagnostics information in a dotnet process.

When running a dotnet application differences in diverse local and production environments can make collecting diagnostics artifacts (e.g., logs, traces, process dumps) challenging. dotnet-monitor aims to simplify the process by exposing a consistent REST API regardless of where your application is run.

This blog post details how to get started with dotnet-monitor and covers the following:

How to setup dotnet-monitor
What diagnostics artifacts can be collected; and
How to collect each of the artifacts
