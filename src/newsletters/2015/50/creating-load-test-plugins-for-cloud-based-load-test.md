---
_id: 5a88e1adbd6dca0d5f0d24c4
title: 'Creating Load Test Plugins for Cloud-based Load Test'
url: 'http://blogs.msdn.com/b/visualstudioalm/archive/2015/12/08/creating-a-load-test-plugins-for-cloud-based-load-test.aspx'
category: 5a88e1adbd6dca0d5f0d24c4
slug: 'creating-load-test-plugins-for-cloud-based-load-test'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2015-12-12T19:41:39.000Z'
tags: []
---

This week I have had two questions that involved the need to create a load test plugin.   In the latest scenario the person wanted Cloud-based load test to ramp up the user count randomly. Yes plugins work the same for both on-premises and Cloud-based load testing.  In this post i will walk through creating a load test plugin that randomly increments the user count every second (this is how often the heartbeat event is fired).
