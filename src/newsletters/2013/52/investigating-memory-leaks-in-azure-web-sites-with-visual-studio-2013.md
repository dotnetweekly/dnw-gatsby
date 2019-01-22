---
_id: 5a88e1aebd6dca0d5f0d2b3a
title: "Investigating Memory Leaks in Azure Web Sites with Visual Studio 2013"
url: 'http://blogs.msdn.com/b/visualstudioalm/archive/2013/12/20/investigating-memory-leaks-in-azure-web-sites-with-visual-studio-2013.aspx'
category: articles
slug: 'investigating-memory-leaks-in-azure-web-sites-with-visual-studio-2013'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-12-21T10:27:01.000Z'
tags: []
---

One of the cool new features in Visual Studio 2013 is the <a href="http://blogs.msdn.com/b/visualstudioalm/archive/2013/06/20/using-visual-studio-2013-to-diagnose-net-memory-issues-in-production.aspx">ability to analyze managed memory issues</a>. Recently, Azure Web Sites added support to programmatically get <a href="http://weblogs.asp.net/scottgu/archive/2013/06/27/windows-azure-general-availability-release-of-web-sites-mobile-services-new-autoscale-alerts-support-no-credit-card-needed-for-msdn-subscribers.aspx">mini-dumps and “diagsession” files that have heap information from Azure Web Sites in production</a>. In this walkthrough, I’ll show you how to combine these two new features to form a cool end to end scenario for investigating memory leaks in production Azure Web Sites using a little PowerShell.
