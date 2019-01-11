---
_id: 5a88e1afbd6dca0d5f0d2db4
title: "Building a Simple Comet Application in the Microsoft .NET Framework"
url: 'http://msdn.microsoft.com/en-us/magazine/jj891053.aspx'
category: 5a88e1afbd6dca0d5f0d2db4
slug: 'building-a-simple-comet-application-in-the-microsoft-net-framework'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-02-08T18:03:05.000Z'
tags: []
---

Comet is a technique for pushing content from a Web server to a browser without an explicit request, using long-lived AJAX connections. It allows for a more interactive UX and uses less bandwidth than the typical server round-trip triggered by a page postback to retrieve more data. Although there are plenty of Comet implementations available, most are Java-based. In this article I’ll focus on building a C# service based on the cometbox code sample available at <a id="ctl00_MTContentSelector1_mainContentContainer_ctl03" href="http://code.google.com/p/cometbox">code.google.com/p/cometbox</a>.
