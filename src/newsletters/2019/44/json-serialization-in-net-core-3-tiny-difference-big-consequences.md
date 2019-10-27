---
_id: 5db600595f78740035ea17f4
title: "JSON Serialization in .NET Core 3: Tiny Difference, Big Consequences"
url: 'https://weblogs.asp.net/rweigelt/json-serialization-in-net-core-3-tiny-difference-big-consequences'
category: articles
slug: 'json-serialization-in-net-core-3-tiny-difference-big-consequences'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-10-28T20:38:49.859Z'
tags: [.net-core]
---

Recently, I migrated a web API from .NET Core 2.2 to version 3.0 (following the documentation by Microsoft). After that, the API worked fine without changes to the (WPF) client or the controller code on the server – except for one function that looked a bit like this (simplified naming, obviously).

The Thing class has an Items property of type List<Item>, the Item class has a SubItems property of type List<SubItem>.
What I didn’t expect was that after the migration, all SubItems lists were empty, while the Items lists contained, well, items.
But it worked before! I didn’t change anything!

In fact, I didn’t touch my code, but something else changed: ASP.NET Core no longer uses Json.NET by NewtonSoft. Instead, JSON serialization is done by classes in the new System.Text.Json namespace.


