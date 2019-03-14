---
_id: 5c89e5e1e483e9d595e88c7c
title: "Stop Wasting Connections, Use HTTP Keep-Alive"
url: 'https://lob.com/blog/use-http-keep-alive'
category: articles
slug: 'stop-wasting-connections-use-http-keep-alive'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-03-14T06:25:53.398Z'
tags: [.net]
---

With the proliferation of third-party APIs and microservice architectures, modern web servers can make as many outgoing HTTP requests as the number of incoming HTTP requests they serve. A typical web application can interact with third-party APIs to handle payment processing, send email, track analytics, dispatch text messages, verify mailing addresses, or even deliver physical mail. A server can also rely on internal APIs to fetch account information, start asynchronous processes, or perform complex searches. Programs that initiate a high volume of outgoing HTTP requests must minimize the overhead of each in order to remain performant and optimize resource utilization. 


