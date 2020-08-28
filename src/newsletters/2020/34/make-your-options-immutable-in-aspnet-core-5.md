---
_id: 5f3d29ee5f299c0046cea130
title: "Make your options immutable in ASP.NET Core 5"
url: 'https://anthonygiretti.com/2020/08/19/asp-net-core-5-make-your-options-immutable/'
category: articles
slug: 'make-your-options-immutable-in-aspnet-core-5'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2020-08-19T13:32:30.316Z'
tags: [asp.net-core]
---

If you’ve been using ASP.NET Core 5 for a while, you’ll be delighted to learn that a major improvement of C# 9, in other words C# 9 (delivered with .NET 5) that allows the creation of immutable objects through Init-only properties. As a result, you’ll have the ability to set up your application options so that they’re immutable. After all, these are a kind of constants that you don’t necessarily want to change after initialization, or even ban it. So it’s possible with ASP.NET Core 5 and C# 9.
