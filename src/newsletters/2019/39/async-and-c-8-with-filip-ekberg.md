---
_id: 5d8d303158aae8001df5f542
title: "Async and C# 8 with Filip Ekberg"
url: 'https://devchat.tv/adventures-in-dotnet/net-006-async-and-c-8-with-filip-ekberg/'
category: videos
slug: 'async-and-c-8-with-filip-ekberg'
user_id: 5d8d2da258aae8001df5f541
username: 'Devchat.tv'
createdOn: '2019-09-26T21:40:01.184Z'
tags: [.net]
---

In this week’s episode of Adventures in .NET the panel interviews Filip Ekberg, Microsoft MVP, about using async, await, and the new features in C# 8. They begin by discussing the evolution of running tasks and multithreading in async. Filip describes the evolution beginning with background workers, through task parallel libraries finally to async and await. The panel considers how managing tasks has been made almost too easy.

Filip explains that there has been a drive to make everything asynchronous but explains that this approach doesn’t always make sense. The panel asks Filip when a developer should use async and await. If an application has a UI, Filip encourages the use of async and await and he outlines the benefits. He also explains that if someone wants to be a full-stack developer they need to understand async and await on both the serverside and clientside.

The panel wonders what the most common async and await mistakes are in .NET. Filip shares a couple of the most common mistakes he sees. The first is deadlocking an application because of the inappropriate methods such as .result and .wait on tasks. The second is marking methods as async without running the await keyword. He explains what these mistakes do to your application and gives advice on avoiding these mistakes.

The panel expresses past frustrations in making all methods especially tops methods when in ASP.NET. Filip gives the panel advice on making it asynchronous top to bottom and ways to handle those aggravating top methods. He also explains how to use the await keyword and state machines effectively.

Debugging in async is the next topic the panel considers. Filip explains why debugging is so tricky in asynchronous applications. He gives a few tips, his biggest piece of advice is to update Visual Studio and you should get more help in debugging than from older versions.

The panel moves on to discuss C# 8. Filip explains that C# is his language, he loves it! He shares three new changes to the language features in C# 8. They made changes to how tuples work, pattern matching and null reference types.

Tuples are the first change the panel considers. Filip explains what tuples are and what they do. Tuples allow you to represent a type without actually using that type. The panel considers how tuples have changed in C# 8, they are still position based but are more flexible in calling them.

Next, the panel discusses null reference types. The control null reference types allow over nulls is considered. Filip shares some recommendations for using null reference types. The panel considers what might happen if someone were to use null reference types in an existing application. The wonder if it would have any benefit or if it would break the whole application.

The final feature they discuss is pattern matching. Filip explains the benefit of using the new pattern matching with the new tuples feature in C# 8. The new pattern matching can be used to find tupple patterns, position patterns, and property patterns.
