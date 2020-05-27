---
_id: 5ece9a25f2bd8f0036781939
title: " Refresh Tokens in ASP.NET Core APIs – JWT Authentication"
url: 'https://www.codewithmukesh.com/blog/refresh-tokens-in-aspnet-core/'
category: articles
slug: 'refresh-tokens-in-aspnet-core-apis-jwt-authentication'
user_id: 5ece91c4f2bd8f0036781938
username: 'iammukeshm'
createdOn: '2020-05-27T16:49:41.505Z'
tags: [.net-core]
---

To enhance the security of APIs that already use JWT Tokens, even more, we use something called Refresh Tokens.

What are they?

Refresh Tokens are random numbers/strings/combinations that are sent as a response along with the JSON Web Token back to the client, with which a user can request for valid JWT.

Issues it solves.

What if an attacker gets hold of your JWT Token? With this token, he could potentially access a secured API mimicking your usage, and compromise the entire service if he wants to. This is bad.

With JWT Token, it is advised that they must expire is less than a day (due to the above security concern). Usually, the standard is a few hours tops. So what happens when the token expires? The user get's logged out of the system and is prompted to log in again with his/her credentials. Now that is bad user experience in today's world.

I have written a detailed Article/ Guide on Refresh Tokens in ASP.NET Core APIs. Give it a look.
