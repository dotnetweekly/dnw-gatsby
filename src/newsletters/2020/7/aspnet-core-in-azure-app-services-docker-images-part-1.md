---
_id: 5e3f896a36deea0036c54b3c
title: "ASP.NET Core in Azure App Services Docker Images - Part 1"
url: 'http://wildermuth.com/2020/01/27/ASP-NET-Core-in-Azure-App-Services-Docker-Images---Part-1'
category: articles
slug: 'aspnet-core-in-azure-app-services-docker-images-part-1'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-02-10T04:24:10.441Z'
tags: [azure]
---

I've been using Azure App Services (e.g. WebApps) for a few years now. I've been mostly happy with the result. Though I've had some trouble with the way that the App Service environment works from time to time (mostly with the version of .NET Core that is running).

To try and eliminate that (and possibly save some cost), I decided to switch my apps to use Docker Containers. I thought I'd share how I did it in case you want to do this as well.

This will be a three part series:

Getting an ASP.NET Core project running on Docker Desktop (this post)

Deploying Docker Images to Azure App Services (here)

Automating Docker Image Deployment with GitHub Actions (coming soon)
