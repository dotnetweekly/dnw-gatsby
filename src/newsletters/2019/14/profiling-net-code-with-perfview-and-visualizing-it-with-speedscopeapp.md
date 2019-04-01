---
_id: 5ca14d7ce483e92a1ce88ccf
title: "Profiling .NET Code with PerfView and visualizing it with speedscope.app"
url: 'https://adamsitnik.com/speedscope/'
category: articles
slug: 'profiling-net-code-with-perfview-and-visualizing-it-with-speedscopeapp'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-04-02T00:30:04.997Z'
tags: [.net]
---

According to the official web page, speedscope.app is “a fast, interactive web-based viewer for performance profiles”. But I believe it’s more than that! In my opinion, it’s one of the best visualization tools for performance profiles ever!

Some time ago I have implemented SpeedScopeExporter which allows exporting any .NET Trace file to a speedscope json file format. It was released as part of 2.0.34 TraceEvent library a few months ago, but so far it was not available for the end users from PerfView GUI/command line level.
