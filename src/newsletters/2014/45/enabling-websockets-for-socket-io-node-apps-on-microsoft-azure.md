---
_id: 5a88e1aebd6dca0d5f0d2868
title: "Enabling Websockets for Socket.io Node apps on Microsoft Azure"
url: 'http://www.hanselman.com/blog/EnablingWebsocketsForSocketioNodeAppsOnMicrosoftAzure.aspx'
category: 5a88e1aebd6dca0d5f0d2868
slug: 'enabling-websockets-for-socket-io-node-apps-on-microsoft-azure'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-11-08T10:55:38.000Z'
tags: []
---

I'm running an application called <a href="http://www.nightscout.info/">Nightscout</a> that is a node app with a MongoDB backend that presents a JSON endpoint for a diabetic's blood sugar data. I use my Dexcom G4 CGM (Continuous Glucose Meter) connected with a micro-USB OTG cable to an Android phone. An Android app bridges the device and POSTs up to the website. Azure is well suited to run an app like this for a few reasons. Node works great on Azure, MongoLabs is setup in the Azure Store and has a free sandbox, Azure supports WebSockets, and *.azurewebsites.net has a wildcard SSL cert, so I could force SSL.
