---
_id: "60975363d37a170033ddf056"
title: "Create an OIDC credential Issuer with MATTR and ASP.NET Core"
url: 'https://damienbod.com/2021/05/03/create-an-oidc-credential-issuer-with-mattr-and-asp-net-core/'
category: articles
slug: 'create-an-oidc-credential-issuer-with-mattr-and-aspnet-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-05-07T03:13:39.488Z'
tags: [asp.net-core]
---

This article shows how to create and issue verifiable credentials using MATTR and an ASP.NET Core. The ASP.NET Core application allows an admin user to create an OIDC credential issuer using the MATTR service. The credentials are displayed in an ASP.NET Core Razor Page web UI as a QR code for the users of the application. The user can use a digital wallet form MATTR to scan the QR code, authenticate against an Auth0 identity provider configured for this flow and use the claims from the id token to add the verified credential to the digital wallet. In a follow up post, a second application will then use the verified credentials to allow access to a second business process.


