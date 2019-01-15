---
_id: 5b86a1bfeb7beb526789afc0
title: "Why You Should Use View Components, not Partial Views, in ASP.NET Core"
url: 'https://www.telerik.com/blogs/why-you-should-use-view-components-not-partial-views-aspnet-core'
category: articles
slug: 'why-you-should-use-view-components-not-partial-views-in-aspnet-core'
user_id: 5afa9e1a416efa64fa328ccd
username: 'elmira_dam'
createdOn: '2018-08-29T13:38:07.867Z'
tags: [.net,c#,asp.net,asp.net-core,.net-core]
---

Why use View Components and not Partial Views? The biggest reason is that when inserting a Partial View into a Razor page, all the ViewData associated with the calling View is automatically associated with the Partial View. This means that a Partial View may behave very differently on one Razor page than on another. With View Components, you control what gets shared to your View Components.
