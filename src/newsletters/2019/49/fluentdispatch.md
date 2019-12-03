---
_id: 5de5cf73b8c30c002fde5c3b
title: "FluentDispatch"
url: 'https://github.com/bbougot/FluentDispatch'
category: articles
slug: 'fluentdispatch'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-12-03T02:58:59.959Z'
tags: [.net]
---

FluentDispatch is a .NET Standard 2.1 framework which makes easy to scaffold distributed systems and dispatch incoming load into units of work in a deterministic way. This framework is useful whenever you want to process a heavy workload coming from a specific source of data (i.e message broker, web endpoint, ...) in a non-blocking way (fire-and-forget pattern) but still being able to benefit from resiliency features (circuit beaking, back pressure, ...). The framework can be used to dispatch load into units of work locally (using .NET Threadpool) or remotely (using Remote Procedure Calls).


