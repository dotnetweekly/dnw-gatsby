---
_id: 5a88e1acbd6dca0d5f0d2358
title: 'Tooling to Facilitate Framework Migrations'
url: 'https://blogs.msdn.microsoft.com/dotnet/2016/05/05/tooling-to-facilitate-framework-migrations/'
category: 5a88e1acbd6dca0d5f0d2358
slug: 'tooling-to-facilitate-framework-migrations'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-05-07T08:36:42.000Z'
tags: []
---

In <a href="https://blogs.msdn.microsoft.com/dotnet/2016/03/03/net-framework-compatibility-diagnostics/">this recent post</a>, Taylor introduced the <a href="https://www.nuget.org/packages/Microsoft.DotNet.FrameworkCompatibilityDiagnostics/">.NET Framework Compatibility Diagnostics</a>, a set of <a href="http://github.com/dotnet/roslyn/">Roslyn</a>-based code analyzers for detecting when an app is likely to encounter compatibility issues between two versions of the .NET Framework. This article gives a little behind-the-scenes look into why we chose to use Roslyn for those tools and the benefits Roslyn gives compared to just walking IL.
