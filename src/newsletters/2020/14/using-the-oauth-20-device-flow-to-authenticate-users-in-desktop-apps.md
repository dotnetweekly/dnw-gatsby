---
_id: 5e82407e72748f0034ead20b
title: "Using the OAuth 2.0 device flow to authenticate users in desktop apps"
url: 'https://thomaslevesque.com/2020/03/28/using-the-oauth-2-0-device-flow-to-authenticate-users-in-desktop-apps/'
category: articles
slug: 'using-the-oauth-20-device-flow-to-authenticate-users-in-desktop-apps'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-03-30T18:54:54.129Z'
tags: [.net]
---

OpenID Connect is an authentication layer built on top of OAuth 2.0, which means that you have to use one of the OAuth 2.0 authorization flows. A few years ago, there were basically two possible flows that you could use in a desktop client application to authenticate a user:

Resource Owner Password Credentials
Authorization Code
The password flow is pretty easy to use (basically, just exchange the user’s login and password for a token), but it requires that the client app is highly trusted, since it gets to manipulate the user’s credentials directly. This flow is now disallowed by OAuth 2.0 Security Best Current Practice.
