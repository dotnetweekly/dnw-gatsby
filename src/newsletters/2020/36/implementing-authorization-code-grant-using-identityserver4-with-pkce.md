---
_id: 5f4e4514e0574b00461c2b4d
title: "Implementing Authorization Code grant using Identityserver4 with PKCE"
url: 'https://referbruv.com/blog/posts/implementing-authorization-code-grant-using-identityserver4-with-pkce'
category: articles
slug: 'implementing-authorization-code-grant-using-identityserver4-with-pkce'
user_id: 5ee0fc223a2ca4003637875a
username: 'referbruv'
createdOn: '2020-09-01T12:56:52.866Z'
tags: [.net-core]
---

In this article, let's look at one of the most commonly used OAuth flow which involves a user interaction with the Authorization Server for accessing a resource. This is called as the Authorization Code flow, provided by the Authorization Code grant type. This flow is further strengthened by PKCE aka Proof Key for Code Exchange, which adds another layer of security by means of code_challenge and code_verifier concept.
