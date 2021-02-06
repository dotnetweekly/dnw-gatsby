---
_id: "601e83a01185690033456160"
title: "Tracing and Profiling a .NET Core Application on Azure Kubernetes Service with a Sidecar Container"
url: 'https://thecloudblog.net/post/tracing-and-profiling-a-net-core-application-on-azure-kubernetes-service-with-a-sidecar-container/'
category: articles
slug: 'tracing-and-profiling-a-net-core-application-on-azure-kubernetes-service-with-a-sidecar-container'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-02-04T11:55:12.632Z'
tags: [azure]
---

Imagine running a .NET Core application in Kubernetes, which suddenly starts being sluggish, and the telemetry fails to give you a complete picture of the issue. To remediate performance issues of applications, starting with .NET Core 3, Microsoft introduced several .NET Core runtime diagnostics tools to diagnose application issues.

dotnet-counters to view Performance Counters.
dotnet-dump to capture and analyze Dumps.
dotnet-trace to capture runtime events and sample CPU stacks.
dotnet-gcdump to collect Garbage Collector dumps of application.

