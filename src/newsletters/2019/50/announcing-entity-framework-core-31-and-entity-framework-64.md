---
_id: 5dedccf9b8c30c002fde5c58
title: "Announcing Entity Framework Core 3.1 and Entity Framework 6.4"
url: 'https://devblogs.microsoft.com/dotnet/announcing-entity-framework-core-3-1-and-entity-framework-6-4/'
category: libraries-tools
slug: 'announcing-entity-framework-core-31-and-entity-framework-64'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-12-09T04:26:33.812Z'
tags: [ef]
---

EF Core 3.1 is distributed exclusively as a set of NuGet packages. For example, to add the SQL Server provider to your project, you can use the following command using the dotnet tool:

dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 3.1.0
When upgrading applications that target older versions of ASP.NET Core to 3.1, you may also have to add the EF Core packages as an explicit dependency.

Starting in 3.0 and continuing for 3.1, the dotnet ef command-line tool is no longer included in the .NET Core SDK. Before you can execute EF Core migration or scaffolding commands, you’ll have to install this package as either a global or local tool. To install the final version of our 3.1.0 tool as a global tool, use the following command:

dotnet tool install --global dotnet-ef --version 3.1.0
It’s possible to use this new version of dotnet ef with projects that use older versions of the EF Core runtime. However, older versions of the tool will not work with EF Core 3.1.
