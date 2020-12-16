---
_id: 5fcdcbb39ec02100302da1f2
title: "Securing an ASP.NET Core API which uses multiple access tokens"
url: 'https://damienbod.com/2020/12/03/securing-an-asp-net-core-api-which-uses-multiple-access-tokens/'
category: articles
slug: 'securing-an-aspnet-core-api-which-uses-multiple-access-tokens'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-12-07T06:29:07.997Z'
tags: [asp.net-core]
---

This post shows how an ASP.NET Core API can authorize API calls which use different access tokens from different identity providers or different access tokens from the same identity provider but created for different clients and containing different claims. The access tokens are validated using JWT Bearer authentication as well as an authorization policy which can validate the specific claims in the access tokens.


