---
_id: 5a88e1adbd6dca0d5f0d248c
title: Best practices for private config data and connection strings in configuration in ASP.NET and Azure
url: http://www.hanselman.com/blog/BestPracticesForPrivateConfigDataAndConnectionStringsInConfigurationInASPNETAndAzure.aspx
category: articles
slug: 'best-practices-for-private-config-data-and-connection-strings-in-configuration-in-asp-net-and-azure'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2016-01-09T08:02:49.000Z'
tags: []
---

A reader emailed asking how to avoid accidentally checking in passwords and other sensitive data into GitHub or source control in general. I think it's fair to say that we've all done this once or twice - it's a rite of passage for developers old and new. The simplest way to avoid checking in passwords and/or connection strings into source control is to (no joke) <strong>keep passwords and connection strings out of your source. </strong>Sounds condescending or funny, but it's not, it's true. You can't check in what doesn't exist on disk.
