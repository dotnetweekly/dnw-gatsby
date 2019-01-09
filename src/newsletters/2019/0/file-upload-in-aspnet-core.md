---
_id: 5c275cb5745cd075880206c9
title: 'File Upload in ASP.NET Core'
url: 'https://www.devcurry.com/2018/10/file-upload-in-aspnet-core.html'
category: articles
slug: 'file-upload-in-aspnet-core'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-12-29T11:38:29.670Z'
tags: ['asp.net-core']
---

In one of the .NET Core trainings I was conducting recently, one of my students asked about uploading files using .NET Core application. Here's a solution. When we use ASP.NET MVC to upload a file, we use the HttpPostedFileBase class. This class is used to access the files uploaded by the client in an MVC application. In .NET Core, the IFromFile interface is used to represent a file that is sent with the HttpRequest. In this article we will use the IFromFile interface to upload the file. We will use Visual Studio 2017 and .NET Core 2.1. Information about the IFromFile interface can be read from this link.

