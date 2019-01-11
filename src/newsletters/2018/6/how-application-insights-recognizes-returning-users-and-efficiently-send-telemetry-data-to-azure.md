---
_id: 5a88e1aabd6dca0d5f0d1a74
title: 'How Application Insights recognizes returning users and efficiently send telemetry data to Azure'
url: 'https://www.patrickvankleef.com/2018/02/07/application-insights-user-telemetry-data-send-to-azure/'
category: 5a88e1aabd6dca0d5f0d1a74
slug: 'how-application-insights-recognizes-returning-users-and-efficiently-send-telemetry-data-to-azure'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-02-08T15:27:05.000Z'
tags: []
---

In this article, I’ll provide some insights of how Application Insights works under the hood. Telemetry data for user sessions and returning users is collected and sent to Azure. In order to recognize returning, users Application Insights is creating cookies. A unique identifier is stored in this cookie and send with related telemetry data to Azure. Instead of sending data directly, it’s first placed in a buffer.

After a short time period, all telemetry data in the buffer is sent all in once to Azure. By default, data sampling is enabled. This algorithm reduces the amount of data that is sent to Azure. Application Insights provides three different flavors of data sampling which I’ll cover in this blog post.
