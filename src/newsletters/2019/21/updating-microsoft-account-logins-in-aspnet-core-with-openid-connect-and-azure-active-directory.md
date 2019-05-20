---
_id: 5ce18205f35c1a7cfc4578ec
title: "Updating Microsoft Account Logins in ASP.NET Core with OpenID Connect and Azure Active Directory"
url: 'https://damienbod.com/2019/05/17/updating-microsoft-account-logins-in-asp-net-core-with-openid-connect-and-azure-active-directory/'
category: articles
slug: 'updating-microsoft-account-logins-in-aspnet-core-with-openid-connect-and-azure-active-directory'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-05-18T17:19:17.514Z'
tags: [asp.net-core]
---

This article shows how to implement an Azure Active Directory login for an ASP.NET Core application. The Microsoft identity platform (v2.0) is now Open ID Connect certified and the Microsoft Account logins can now be replaced with this. By using OpenID Connect instead of Microsoft Accounts, it is easy to force a login, or a consent screen as well as following a standard. A full signout can also be supported if required. The AddOpenIdConnect OIDC extension method should now be used instead of the AddMicrosoftAccount method. This replaces the existing post: Adding an external Microsoft login to IdentityServer4. It is still possible to use the https://apps.dev.microsoft.com if only Microsoft accounts are required.


