---
_id: 5b62a9046b826e68d6f5993d
title: Avoid Lazy Loading in ASP.NET
url: https://wildermuth.com/2018/07/28/Avoid-Lazy-Loading-in-ASP-NET
category: articles
slug: 'avoid-lazy-loading-in-aspnet'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-08-02T06:47:32.374Z'
tags: ['asp.net']
---

I know I am not going to make everyone happy with this post. I've been hoping to not have to make this post, but Entity Framework Core has finally added support for Lazy Loading, so it's time.

This problem is not new. Entity Framework (not Core) also has this problem. But it's far easier to accidentally do this in that version. Luckily, Entity Framework Core has made it harder to inadvertently turn it on. Let's see what's wrong with Lazy Loading in Web Apps.
