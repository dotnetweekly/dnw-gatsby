---
_id: 5d3fc9129af861001ebfd870
title: "Bidirectional Messages Streaming with .NET Core 3.0 Using gRPC"
url: 'https://www.codeproject.com/Articles/5163307/Bidirectional-Messages-Streaming-with-NET-Core-3-0'
category: articles
slug: 'bidirectional-messages-streaming-with-net-core-30-using-grpc'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-07-30T04:35:30.836Z'
tags: [.net]
---

One of the most important new features of .NET Core 3.0 (available now in pre-release and supposed to be released later this year) is its support for gRPC messaging. Wikipedia describes gRPC as follows:

gRPC (gRPC Remote Procedure Calls) is an open source remote procedure call (RPC) system initially developed at Google. It uses HTTP/2 for transport, Protocol Buffers as the interface description language, and provides features such as authentication, bidirectional streaming and flow control, blocking or nonblocking bindings, and cancellation and timeouts. It generates cross-platform client and server bindings for many languages. Most common usage scenarios include connecting services in microservices style architecture and connect mobile devices, browser clients to backend services.

The "killer feature" of gRPC is said to be a support of simultaneous full duplex streaming. HTTP/2 protocol is used for that matter as a transport protocol. Protocol Buffers is used for effective serialization.

As it was said above, .NET Core 3.0 Framework supports gRPC based communication. Visual Studio 2019 offers a boilerplate code for gRPC service. However, this code provides only one-way communication with no message streaming. The project acts as departure point to the current work. In my code, I tried to pick up common code for server and client and combine it to convenient infrastructure that supports bidirectional message streaming with .NET Core 3.0 using gRPC.
