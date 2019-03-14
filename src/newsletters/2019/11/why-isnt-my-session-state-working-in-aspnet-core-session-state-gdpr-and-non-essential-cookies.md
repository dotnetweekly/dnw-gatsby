---
_id: 5c89e4b3e483e9de4de88c79
title: "Why isn't my session state working in ASP.NET Core? Session state, GDPR, and non-essential cookies"
url: 'https://andrewlock.net/session-state-gdpr-and-non-essential-cookies/'
category: articles
slug: 'why-isnt-my-session-state-working-in-aspnet-core-session-state-gdpr-and-non-essential-cookies'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-03-14T06:20:51.741Z'
tags: [asp.net-core]
---

In this post I describe a problem that I've been asked about several times related to session state. The scenario goes something like this:

Scaffold a new ASP.NET Core application
Set a string in session state for a user, e.g. HttpContext.Session.SetString("theme", "Dark");
On the next request, try to load the value from session using HttpContext.Session.GetString("theme"); but get back null!
"Gah, this stupid framework doesn't work"
