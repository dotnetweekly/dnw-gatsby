---
_id: 5bfd1a0dd9a5939a74f70e5c
title: 'Compiling C# to WASM with Mono and Blazor then Debugging .NET Source with Remote Debugging in Chrome DevTools'
url: 'https://www.hanselman.com/blog/CompilingCToWASMWithMonoAndBlazorThenDebuggingNETSourceWithRemoteDebuggingInChromeDevTools.aspx '
category: articles
slug: 'compiling-c-to-wasm-with-mono-and-blazor-then-debugging-net-source-with-remote-debugging-in-chrome-'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-11-27T10:18:53.660Z'
tags: ['blazor']
---

Blazor quietly marches on. In case you haven't heard (I've blogged about Blazor before) it's based on a deceptively simple idea - what if we could run .NET Standard code in the browsers? No, not Silverlight, Blazor requires no plugins and doesn't introduce new UI concepts. What if we took the AOT (Ahead of Time) compilation work pioneered by Mono and Xamarin that can compile C# to Web Assembly (WASM) and added a nice UI that embraced HTML and the DOM?


