---
_id: 5fa09510075fce002f33e3b3
title: "Additional HTTP, Sockets, DNS and TLS Telemetry in .NET 5"
url: 'https://www.stevejgordon.co.uk/additional-http-sockets-dns-and-tls-telemetry-in-dotnet-5'
category: articles
slug: 'additional-http-sockets-dns-and-tls-telemetry-in-net-5'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-11-02T23:24:00.653Z'
tags: [.net]
---

.NET has been steadily adding support for improved cross-platform diagnostics tracing for applications. In .NET Core 3.0, we saw the introduction of EventCounters, used for observing metric measurements over time. These counters can be consumed out-of-process as well as in-process and are cross-platform in their design.

I’ve used counters from ASP.NET Core in a few applications, to track the number of HTTP requests handled by a service over time.

As .NET 5 has been progressing, I’ve been watching some of the work in the runtime repository which adds new telemetry counters and events to some of the core components involved in making external HTTP requests. This includes, HttpClient, Sockets, DNS and Security.  
