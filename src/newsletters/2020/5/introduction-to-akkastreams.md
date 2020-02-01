---
_id: 5e35f54e36deea0036c54b18
title: "Introduction to Akka.Streams"
url: 'https://petabridge.com/blog/introduction-akkadotnet-streams/'
category: articles
slug: 'introduction-to-akkastreams'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-01-31T22:01:50.161Z'
tags: [akka.net]
---

Building High-Level Streaming Worklows in Akka.NET
The goal of this blog post is to give you a glimpse of the idea and basics behind Akka.Streams. What they are and why you may find them useful addition in your day to day job.

In short: Akka.Streams is a library build on top of Akka.NET, which allows you to consume and process potentially infinite streams of data in type-safe and resource-safe way.

To make it easier to visualize, let’s take an example: we have a queue (i.e. RabbitMQ), that sends us a documents, which we have to parse, turn into structured data and save in the database.
