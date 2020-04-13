---
_id: 5e8ff5d472748f0034ead22f
title: "Building End-to-End Diagnostics and Tracing: Trace Context"
url: 'https://jimmybogard.com/building-end-to-end-diagnostics-and-tracing-a-primer-trace-context/'
category: articles
slug: 'building-end-to-end-diagnostics-and-tracing-trace-context'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-04-09T04:28:04.308Z'
tags: [.net]
---

In the last post, I walked through the overall problem we run into with diagnosing issues in distributed systems - mainly that it can be difficult to determine causality because we don't have that "stack trace" with a single in-process application.

To create a sort of "trace" in a distributed system, we need some way to build breadcrumbs into our communications. When one system communicates with another, and that system calls another, we need some way to link those requests together:
