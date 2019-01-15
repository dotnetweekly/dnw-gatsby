---
_id: 5a88e1aebd6dca0d5f0d2992
title: "Writing a SQLite wrapper component for universal Windows apps"
url: 'http://blogs.windows.com/windows/b/buildingapps/archive/2014/07/02/writing-a-sqlite-wrapper-component-for-universal-windows-apps.aspx'
category: articles
slug: 'writing-a-sqlite-wrapper-component-for-universal-windows-apps'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-07-05T09:26:09.000Z'
tags: []
---

New to Windows Phone 8.1 is the ability to create and run <a href="http://msdn.microsoft.com/library/windows/apps/br211385.aspx">apps written in JavaScript</a> like you can on Windows 8.1. However, there are some differences in the specific APIs available to apps on Windows Phone 8.1. One such difference is that <a href="http://www.w3.org/TR/IndexedDB/">IndexedDB</a> isn’t available on the Phone and thus presents a challenge for developers writing universal Windows apps in JavaScript that need queryable structured storage. In this post we’ll see how to create a Windows Runtime component through which we can use <a href="http://www.sqlite.org/">SQLite</a>, a small, fast, and reliable database library that’s freely available and <a href="http://www.sqlite.org/oldnews.html#2012_06_11">supported in Windows Store apps</a>. We’ve also provided a <a href="http://code.msdn.microsoft.com/windowsapps/Universal-JavaScript-5728abdb">working sample app</a>.
