---
_id: 5c1a2bc5745cd070b3020698
title: 'How to detect nearby Bluetooth devices with .NET and Xamarin.Android'
url: 'https://jeremylindsayni.wordpress.com/2018/12/16/how-to-detect-nearby-bluetooth-devices-with-net-and-xamarin-android/'
category: 5c1a2bc5745cd070b3020698
slug: 'how-to-detect-nearby-bluetooth-devices-with-net-and-xamarinandroid'
user_id: 5c16c1d6bdff7d864b340ab8
username: 'jeremylindsay'
createdOn: '2018-12-19T11:30:13.128Z'
tags: [.net,c#,xamarin]
---

I’m working on an Xamarin.Android app at the moment – for this app, I need to detect what Bluetooth devices are available to my Android phone (so the user can choose which one to pair with).

For modern versions of Android, it’s not as simple as just using a BroadcastReceiver (although that is part of the solution). In this post I’ll write about the steps needed to successfully use the Bluetooth hardware on your Android phone with .NET.
