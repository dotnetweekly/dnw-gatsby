---
_id: 5a88e1aabd6dca0d5f0d1a7e
title: "Easy way to create a C# lambda expression from a string (with Roslyn)"
url: 'https://www.strathweb.com/2018/01/easy-way-to-create-a-c-lambda-expression-from-a-string-with-roslyn/'
category: articles
slug: 'easy-way-to-create-a-c-lambda-expression-from-a-string-with-roslyn'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-02-04T09:45:17.000Z'
tags: []
---

I’ve worked on quite a lot of projects over the years, with many different teams, and one of the questions that keeps coming back to me over and over with a high degree of regularity is how to load a C# lambda from a string – for example from a configuration file.

This is not surprising, because being able to do that can give you a tremendous amount of flexibility in your code, as it would (for the lack of better word) unlock the possibility to alter business logic from the configuration level, without having to recompile and redeploy your application.

Historically, this has been possible but also quite a painful task. Today I wanted to show you a remarkably simple solution to this problem – with the help of the Roslyn compiler Nuget packages.
