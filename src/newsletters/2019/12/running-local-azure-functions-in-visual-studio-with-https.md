---
_id: 5c8f23f3e483e9e905e88c94
title: "Running Local Azure Functions in Visual Studio with HTTPS"
url: 'https://damienbod.com/2019/03/14/running-local-azure-functions-in-visual-studio-with-https/'
category: articles
slug: 'running-local-azure-functions-in-visual-studio-with-https'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-03-18T05:52:03.124Z'
tags: [azure]
---

This article shows how to setup a Visual Studio Azure Functions project to work with HTTPS for local development. HTTP is configured per default and not HTTPS. The command line arguments need to be set correctly, and then the Azure Functions can be started in Visual Studio with HTTPS and take advantage of the break point debugging without having to attach the func process in Visual Studio.


