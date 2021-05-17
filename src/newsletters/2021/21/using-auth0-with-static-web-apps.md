---
_id: "60a2942ad37a170033ddf072"
title: "Using Auth0 with Static Web Apps"
url: 'https://techcommunity.microsoft.com/t5/apps-on-azure/using-auth0-with-static-web-apps/ba-p/2353653'
category: articles
slug: 'using-auth0-with-static-web-apps'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-05-18T16:04:58.512Z'
tags: [azure]
---

One of my favorite features of (the now General Available) Azure Static Web Apps (SWA) is that in the Standard Tier you can now provide a custom OpenID Connect (OIDC) provider. This gives you a lot more control over who can and can’t access your app.

In this post, I want to look at how we can use Auth0 and an OIDC provider for Static Web Apps.

For this, you’ll need an Auth0 account, so if you don’t already have one go sign up and maybe have a read of their docs, just so you’re across everything.
