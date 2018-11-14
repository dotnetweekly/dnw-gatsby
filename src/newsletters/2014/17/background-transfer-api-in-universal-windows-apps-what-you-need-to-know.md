---
_id: 5a88e1aebd6dca0d5f0d2a16
title: 'Background transfer API in universal Windows apps: what you need to know'
url: http://blogs.windows.com/windows/b/buildingapps/archive/2014/04/25/background-transfer-api-in-universal-windows-apps-what-you-need-to-know.aspx
category: articles
slug: 'background-transfer-api-in-universal-windows-apps-what-you-need-to-know'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2014-04-26T09:45:34.000Z'
tags: []
---

With the Visual Studio 2013 Update 2, we can now build Windows Store and Windows Phone Store apps from a single source project. Because the WinRT <a href="http://msdn.microsoft.com/en-us/library/windows/apps/windows.networking.backgroundtransfer.aspx">Windows.Networking.BackgroundTransfer API</a> is available both for Windows Store and Windows Phone apps, it is the API to use for background transfers in any universal app project. However, there are a few usage and behavioral differences between the two platforms that you should be aware of.
