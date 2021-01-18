---
_id: 60048e1b11856900334560f5
title: "My preferred .NET console stack"
url: 'https://www.devlead.se/posts/2021/2021-01-15-my-preferred-console-stack'
category: articles
slug: 'my-preferred-net-console-stack'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-01-16T19:20:59.716Z'
tags: [.net]
---

There's type of application that has followed me since I learned to code in the mid-'80s, and that's the console application. For years they looked the same a Main(string[] args) and some naive inconsistent command line parser. That gradually improved with the adoption of various OSS helper libraries. In this post, I'll walk through what today is my alternative starting point to dotnet new console, a way that greatly reduces the boilerplate code needed for logging, parsing, and validation of arguments, letting me focus on the problem to solve and not the plumbing.


