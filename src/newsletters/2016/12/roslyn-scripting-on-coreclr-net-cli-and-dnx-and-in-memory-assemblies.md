---
_id: 5a88e1acbd6dca0d5f0d23de
title: 'Roslyn scripting on CoreCLR (.NET CLI and DNX) and in memory assemblies'
url: 'http://www.strathweb.com/2016/03/roslyn-scripting-on-coreclr-net-cli-and-dnx-and-in-memory-assemblies/'
category: 5a88e1acbd6dca0d5f0d23de
slug: 'roslyn-scripting-on-coreclr-net-cli-and-dnx-and-in-memory-assemblies'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-03-19T08:20:27.000Z'
tags: []
---

For a while now, the Roslyn C# scripting APIs (<a href="https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp.Scripting">Microsoft.CodeAnalysis.CSharp.Scripting</a>) have been portable, and supported cross platform usage. However, I recently ran into a few difficulties regarding using the Roslyn Scripting APIs in .NET CLI (which is replacing DNX) context. The solution was to use a lower level unmanaged CoreCLR API – and since they it’s not that well documented, I thought it would be beneficial to document it in a blog post.
