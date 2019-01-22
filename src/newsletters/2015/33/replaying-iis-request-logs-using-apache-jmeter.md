---
_id: 5a88e1adbd6dca0d5f0d25e8
title: "Replaying IIS request logs using Apache JMeter"
url: 'http://blog.maartenballiauw.be/post/2015/08/04/Replaying-IIS-request-logs-using-Apache-JMeter.aspx'
category: libraries-tools
slug: 'replaying-iis-request-logs-using-apache-jmeter'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2015-08-12T20:15:14.000Z'
tags: []
---

How would you validate a new API is compatible with an old API? While upgrading frameworks in a web application we’re building, that was exactly the question we were asking ourselves. Sure, we could write synthetic tests on each endpoint, but is that representative? Users typically find insane better ways to test an API, so why not replay actual requests against the new API?
