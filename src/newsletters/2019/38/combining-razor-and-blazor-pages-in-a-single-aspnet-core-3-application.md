---
_id: 5d7ee4b058aae8001df5f50d
title: "Combining Razor and Blazor Pages in a Single ASP.NET Core 3 Application"
url: 'https://mikaelkoskinen.net/post/combining-razor-blazor-pages-single-asp-net-core-3-application'
category: articles
slug: 'combining-razor-and-blazor-pages-in-a-single-aspnet-core-3-application'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-09-16T01:26:08.657Z'
tags: [asp.net]
---

First RTM release of Blazor should happen in two weeks. Things are still changing quite rapidly, and the latest preview 9 made the interop between Razor Pages and Blazor components much harder: It’s not possible anymore to pass parameters from a Razor Page to a Blazor component using Html.RenderComponentAsync. This may change in future but it’s quite likely that .NET Core 3.0 will arrive with this limitation.

If you still would like to enhance your existing Razor Pages based application with some Blazor magic, one solution is completely create your pages in Blazor. This post shows you can add Blazor based pages into an existing Razor Pages application, where parts of the app are created using Razor Pages and parts of the app are created using Blazor Pages. Same layout is used for both types of pages.
