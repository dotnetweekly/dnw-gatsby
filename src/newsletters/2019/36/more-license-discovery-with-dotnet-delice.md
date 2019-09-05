---
_id: 5d6fb8d811b008001d74e23b
title: "More License Discovery With dotnet-delice"
url: 'https://www.aaron-powell.com/posts/2019-08-30-more-license-discovery-with-dotnet-delice/'
category: articles
slug: 'more-license-discovery-with-dotnet-delice'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-09-04T13:15:04.313Z'
tags: [.net]
---

In my last post, I introduced you to a tool for looking up licenses of .NET projects called delice.

This week I released the first update, version 1.1.0, that brings a big improvement to the license detection for the legacy licensing format of many NuGet packages.

Determine Licenses via the GitHub API
By-and-large the dependencies we rely on are the output of an OSS project and that project is more often than not hosted on GitHub. Because of this, we can use the GitHub License API to try and get the license information of a project, which delice now supports:


