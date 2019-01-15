---
_id: 5b728b27fd7ac93b819e0036
title: "Talking Texts with .NET Core, Cognitive Services and Azure Storage"
url: 'https://www.twilio.com/blog/2018/08/talking-texts-with-net-core-cognitive-services-and-azure-storage.html'
category: articles
slug: 'talking-texts-with-net-core-cognitive-services-and-azure-storage'
user_id: 5b02a7eb4c83f97061470256
username: 'Layla-P'
createdOn: '2018-08-14T07:56:23.278Z'
tags: [.net,c#,azure,.net-core]
---

Imagine you are driving along in your car and your phone beeps, letting you know that a text message has come in.  We all know it’s beyond dangerous to read a message whilst driving, it’s a pet hate of mine when I see people doing it, so why not get your text message phoned through to you? Hands-free, of course!

This post will show you how to create talking texts using Twilio, .NET Core, Cognitive Services and Azure Storage.

We will build an application that will convert incoming SMS into speech using the Speech Service, currently in preview, on Microsoft Cognitive Services.  We will then use Twilio to call your mobile and play the speech recording.

Let’s get started.
