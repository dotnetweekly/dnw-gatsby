---
_id: "600df4361185690033456129"
title: ".NET 5: How to enable .NET 5 runtime on console apps instead of .NET Core 3.1 ?"
url: 'https://anthonygiretti.com/2021/01/24/net-5-how-to-enable-net-5-runtime-on-console-apps-instead-of-net-core-3-1/'
category: articles
slug: 'net-5-how-to-enable-net-5-runtime-on-console-apps-instead-of-net-core-31'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2021-01-22T22:27:02.210Z'
tags: [.net]
---

You may have noticed it already, but when you create a console application with Visual Studio 2019, the default runtime is not .NET 5 but .NET Core 3.1! Why ? Because .NET 5 is not LTS and therefore Microsoft has intentionally chosen to offer the latest LTS version of .NET by default, ie .NET Core 3.1.
In this article I show you how to select .NET 5 instead of .NET Core 3.1 without having to create a console application in .NET Core 3.1 and then change its runtime in the project properties afterwards.
