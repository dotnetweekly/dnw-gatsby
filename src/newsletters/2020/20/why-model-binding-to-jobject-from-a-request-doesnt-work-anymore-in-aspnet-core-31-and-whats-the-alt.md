---
_id: 5eb87f6d6409bd00350b430a
title: "Why model binding to JObject from a request doesn’t work anymore in ASP.NET Core 3.1 and what’s the alternative ?"
url: 'https://anthonygiretti.com/2020/05/10/why-model-binding-to-jobject-from-a-request-doesnt-work-anymore-in-asp-net-core-3-1-and-whats-the-alternative/'
category: articles
slug: 'why-model-binding-to-jobject-from-a-request-doesnt-work-anymore-in-aspnet-core-31-and-whats-the-alt'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2020-05-11T22:25:49.826Z'
tags: [asp.net-core]
---

Json.Net (NewtonSoft) has been for a long time the most used JSON serializer in .NET world. Since .NET Core 3 and ASP.NET Core 3 Microsoft introduced a new one named System.Text.Json. JObject is a class that belongs to Json.Net (NewtonSoft) and if this latest is replaced by System.Text.Json, in this case you should expect that using JObject will no longer work. Unfortunately I have had to deal with JObject in request payloads and in this article I will show you how to live without JObject and how replace it without breaking your application.
