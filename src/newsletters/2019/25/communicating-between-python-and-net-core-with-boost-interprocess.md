---
_id: 5d0d9e79f35c1aec9e457980
title: "Communicating between Python and .NET Core with Boost Interprocess"
url: 'https://jaredrhodes.com/2019/06/17/communicating-between-python-and-net-core-with-boost-interprocess/'
category: articles
slug: 'communicating-between-python-and-net-core-with-boost-interprocess'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-06-20T04:20:25.855Z'
tags: [.net]
---

With the new previews of dotnetcore there are new project templates but also a more generic hosting system, instead of having a Web specific host builder or Worker/services host builder there is a new "generic" host which they are all based on. These are all brought together under IHost.

With this and other patterns/practices there are now multiple ways of registering your services. Let's take a look.
