---
_id: 5b98837cd0894962396ca3f0
title: Implementing Multiple Identities in your .NET Core Web App
url: https://blogs.msdn.microsoft.com/azuredev/2018/09/10/implementing-multiple-identities-in-your-net-core-web-app-part-2/
category: articles
slug: 'implementing-multiple-identities-in-your-net-core-web-app'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-09-12T03:09:48.087Z'
tags: ['.net-core']
---


Last week we got started implementing multiple identities in a .NET Core web app by using Azure AD B2C:
https://blogs.msdn.microsoft.com/azuredev/2018/09/03/implementing-multiple-identities-in-your-net-core-web-app-part-1/

We were able to very quickly get going logging in with both social and corporate identities by clicking through guided wizards. However this approach fell short when we decided to support multiple Azure AD tenants without having to add every single one of them manually. The conclusion was basically that we need to up our game by using custom policies.
