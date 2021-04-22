---
_id: "60790d8dd37a170033ddefef"
title: "Announcing .NET 6 Preview 3"
url: 'https://devblogs.microsoft.com/dotnet/announcing-net-6-preview-3/'
category: articles
slug: 'announcing-net-6-preview-3'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-04-16T04:07:41.596Z'
tags: [.net]
---

Today, we are delighted to release .NET 6 Preview 3. This release is dedicated almost entirely to low-level performance features. These are the types of improvements that many folks don’t necessarily always fully appreciate, but they help a lot for many apps. Most of these improvements apply to the CLR type system directly, either making it function faster or better interplay with modern CPUs (think “hardware accelerate the type system”). In the last few years, there have been a few key performance trends with .NET, including: using structs more liberally in libraries, and moving runtime code to C#. Both of trends are visible (directly or indirectly) in these changes. It also demonstrates continued efforts on a focused set of performance strategies.


