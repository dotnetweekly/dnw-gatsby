---
_id: 5f922f88075fce002f33e386
title: "Using encrypted access tokens in Azure with Microsoft.Identity.Web and Azure App registrations"
url: 'https://damienbod.com/2020/10/22/using-encrypted-access-tokens-in-azure-with-microsoft-identity-web-and-azure-app-registrations/'
category: articles
slug: 'using-encrypted-access-tokens-in-azure-with-microsoftidentityweb-and-azure-app-registrations'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-10-23T01:19:04.911Z'
tags: [azure]
---

This post shows how to use encrypted access tokens with Azure AD App registrations using Microsoft.Identity.Web. By using encrypted access tokens, only applications with access to the private key can decrypt the tokens. When using encrypted tokens, you can prevent access tokens data being used or read by such tools as https://jwt.ms or https://jwt.io and prevent the payload claims being read.


