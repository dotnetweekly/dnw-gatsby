---
_id: 5ffc59a63a43aa0033108092
title: "Fixing memory leaks in web applications"
url: 'https://nolanlawson.com/2020/02/19/fixing-memory-leaks-in-web-applications/'
category: articles
slug: 'fixing-memory-leaks-in-web-applications'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-01-07T13:59:02.258Z'
tags: [javascript]
---

Part of the bargain we struck when we switched from building server-rendered websites to client-rendered SPAs is that we suddenly had to take a lot more care with the resources on the user’s device. Don’t block the UI thread, don’t make the laptop’s fan spin, don’t drain the phone’s battery, etc. We traded better interactivity and “app-like” behavior for a new class of problems that don’t really exist in the server-rendered world.


