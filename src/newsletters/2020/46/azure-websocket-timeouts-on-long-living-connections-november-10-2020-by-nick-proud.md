---
_id: 5fab17e5075fce002f33e3de
title: "Azure Websocket Timeouts on Long-Living Connections November 10, 2020 By Nick Proud "
url: 'https://www.automationmission.com/2020/11/10/azure-websocket-timeouts-on-long-living-connections/'
category: articles
slug: 'azure-websocket-timeouts-on-long-living-connections-november-10-2020-by-nick-proud'
user_id: 5f5a202e8946f1002f8bf5dc
username: 'nickproud180'
createdOn: '2020-11-10T22:44:53.387Z'
tags: [.net,.net-core,azure,c#,websockets]
---

I’ve been recently working on a gateway service hosted in Azure that is primarily a TCP server. One of the key requirements of the project is that it allows clients running a desktop-based windows service to initiate a handshake over TCP when their respective service is started, and then keeps a connection open between the client and server for the receipt of messages at any given time.

However, this presented a problem. Azure doesn’t like me doing this.
