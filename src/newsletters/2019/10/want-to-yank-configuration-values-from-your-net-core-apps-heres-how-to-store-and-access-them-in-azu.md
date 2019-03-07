---
_id: 5c80831de483e98862e88c4e
title: "Want to yank configuration values from your .NET Core apps? Here’s how to store and access them in Azure and AWS."
url: 'https://seroter.wordpress.com/2019/03/04/want-to-yank-configuration-values-from-your-net-core-apps-heres-how-to-store-and-access-them-in-azure-and-aws/'
category: articles
slug: 'want-to-yank-configuration-values-from-your-net-core-apps-heres-how-to-store-and-access-them-in-azu'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-03-07T03:34:05.449Z'
tags: [azure]
---

Creating new .NET apps, or modernizing existing ones? If you’re following the 12-factor criteria, you’re probably keeping your configuration out of the code. That means not stashing feature flags in your web.config file, or hard-coding connection strings inside your classes. So where’s this stuff supposed to go? Environment variables are okay, but not a great choice; no version control or access restrictions. What about an off-box configuration service? Now we’re talking. Fortunately AWS, and now Microsoft Azure, offer one that’s friendly to .NET devs. I’ll show you how to create and access configurations in each cloud, and as a bonus, throw out a third option.


