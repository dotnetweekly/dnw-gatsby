---
_id: 5c64f95f6ef423fdb63540ee
title: "How to Debug .NET Core Lambda Functions Locally with the Serverless Framework"
url: 'https://itnext.io/how-to-debug-net-core-lambda-functions-locally-with-the-serverless-framework-dd1670bc22e2'
category: articles
slug: 'how-to-debug-net-core-lambda-functions-locally-with-the-serverless-framework'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-02-14T06:15:11.486Z'
tags: [azure]
---

As most developers would know, debugging is one of those tasks which can make life a whole lot easier when trying to identify that mind boggling issue occurring in code. For some time now the Serverless Framework has had the ability to locally invoke Lambda Functions written in NodeJS, Python, Java and Ruby or run them locally using the serverless-offline plugin (and a number of variants such as the one for Python). To date, this has seemed extremely difficult for .NET Core developers to do. Myself and other developers I know of who write in .NET have resorted to just logging everything to console, building and deploying to AWS to see what is going wrong.


