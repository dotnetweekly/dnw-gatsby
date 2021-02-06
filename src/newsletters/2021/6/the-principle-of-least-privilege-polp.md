---
_id: "601e83e31185690033456161"
title: "The Principle of Least Privilege (POLP)"
url: 'https://techcommunity.microsoft.com/t5/azure-sql/security-the-principle-of-least-privilege-polp/ba-p/2067390'
category: articles
slug: 'the-principle-of-least-privilege-polp'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-02-05T11:56:19.007Z'
tags: [sql-server]
---

The first security principle that I am going to discuss is one that most System Administrators are familiar with: the “principle of least privilege” (short: POLP). It demands that the required permissions for a task shall only grant access to the needed information or resources that a task requires. When permissions are granted, we shall grant the least privileges possible.

POLP is so crucial because initially it is the privileges that any attacker is targeting. When developing an application, using a least-privileged user account (LUA) is the first rule of engagement.
