---
_id: 5ef195f50a4131004ad991a8
title: "Securing ASP.NET Core APIs with IdentityServer4"
url: 'https://referbruv.com/blog/posts/implementing-resource-owner-password-credentials-(ropc)-using-identityserver4'
category: articles
slug: 'securing-aspnet-core-apis-with-identityserver4'
user_id: 5ee0fc223a2ca4003637875a
username: 'referbruv'
createdOn: '2020-06-23T05:41:09.320Z'
tags: [.net-core,asp.net-core]
---

A SecureTokenServer (STS) is a service that issues tokens to clients. These tokens can be used to access an API or represent an authenticated user Identity against a userstore. Using a SecureTokenServer (STS) delegates the responsibility of session management or user authentication against a variety of Identity Providers. IdentityServer4 is a popular open source library for developing a Secure Token Server for user applications that runs on the standards of OAuth2 and OpenId Connect and issues Tokens to clients for access. In this article, let's talk about configuring IdentityServer4 to secure ASP.NET Core APIs.
