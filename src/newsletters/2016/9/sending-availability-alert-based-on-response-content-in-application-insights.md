---
_id: 5a88e1acbd6dca0d5f0d2400
title: "Sending availability alert based on response content in Application Insights"
url: 'http://dailydotnettips.com/2016/02/29/sending-availability-alert-based-on-response-content-in-application-insights/'
category: articles
slug: 'sending-availability-alert-based-on-response-content-in-application-insights'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-02-27T09:14:33.000Z'
tags: []
---

With <a href="http://dailydotnettips.com/tag/application-insights/" target="_blank">Application Insights</a> you can also test the <strong>web availability</strong> by adding  <strong>Web Test</strong> with your hosted applications. <a href="http://dailydotnettips.com/tag/application-insights/" target="_blank">Application Insights</a> sends the request to the hosted services endpoint in a regular intervals  and sends alerts based on the criteria specified for it. While configuring the <strong>Web Test</strong>, we can setup the <strong>Success Criteria</strong> by specifying the <strong>HTTP Response Code</strong>.  By default the <em>Status Code is set to 200</em>,and you can change it as per your need.
