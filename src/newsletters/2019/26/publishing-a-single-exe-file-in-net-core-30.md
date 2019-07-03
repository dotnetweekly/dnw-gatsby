---
_id: 5d1af9e1f35c1a2fb54579a1
title: "Publishing A Single EXE File In .NET Core 3.0"
url: 'https://dotnetcoretutorials.com/2019/06/20/publishing-a-single-exe-file-in-net-core-3-0/'
category: articles
slug: 'publishing-a-single-exe-file-in-net-core-30'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-06-26T07:29:53.168Z'
tags: [.net-core]
---

Say I have a simple “Hello World” console application that I want to send to a friend to run. The friend doesn’t have .NET Core installed so I know I need to build a self contained application for him. Easy, I just run the following command in my project directory :

dotnet publish -r win-x64 -c Release --self-contained

