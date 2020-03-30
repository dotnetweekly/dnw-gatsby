---
_id: 5e8235cc72748f0034ead208
title: "Offline storage in a PWA"
url: 'https://blog.johnnyreilly.com/2020/03/offline-storage-in-pwa.html'
category: articles
slug: 'offline-storage-in-a-pwa'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-03-30T18:09:16.606Z'
tags: [javascript]
---

When you are building any kind of application it's typical to want to store information which persists beyond a single user session. Sometimes that will be information that you'll want to live in some kind of centralised database, but not always.

Also, you may want that data to still be available if your user is offline. Even if they can't connect to the network, the user may still be able to use the app to do meaningful tasks; but the app will likely require a certain amount of data to drive that.

How can we achieve this in the context of a PWA?


