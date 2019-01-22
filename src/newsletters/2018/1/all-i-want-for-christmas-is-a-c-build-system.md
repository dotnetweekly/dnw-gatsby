---
_id: 5a88e1aabd6dca0d5f0d1b1c
title: "All I want for Christmas is a C# Build System"
url: 'http://duanenewman.net/blog/post/all-i-want-for-christmas-is-a-c-sharp-build-system/'
category: articles
slug: 'all-i-want-for-christmas-is-a-c-build-system'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-12-30T05:07:13.000Z'
tags: []
---

I’ve used many tools over the years to manage builds of large .NET projects including custom BAT/CMD files, customer PowerShell scripts, NAnt, and of course MSBuild. While I’ve been happy with the solutions I provided with each of these I’ve always found them either awkward to extend or limiting in their extensibility and more recently I needed them to work on a Mac for building Xamarin projects. In the hunt to find something that would work outside of Windows I discovered Cake, and I coulnd’t be happier.


