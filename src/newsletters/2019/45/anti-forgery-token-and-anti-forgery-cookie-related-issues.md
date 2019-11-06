---
_id: 5dc306245f78740035ea182f
title: "Anti-forgery token and anti-forgery cookie related issues"
url: 'https://techcommunity.microsoft.com/t5/IIS-Support-Blog/Anti-forgery-token-and-anti-forgery-cookie-related-issues/ba-p/984870'
category: articles
slug: 'anti-forgery-token-and-anti-forgery-cookie-related-issues'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-11-06T17:43:00.825Z'
tags: [.net]
---

Anti-forgery token is used to prevent CSRF (Cross-Site Request Forgery) attacks. Here is how it works in high-level:

IIS server associates this token with the current user’s identity before sending it to the client
In the next client request, the server expects to see this token
If the token is missing or it is different, then the server rejects the request (Reference)
