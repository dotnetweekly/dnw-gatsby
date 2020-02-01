---
_id: 5e33909636deea0036c54b07
title: "Remove unwanted instances from ServiceCollection in ASP.NET Core 3.1"
url: 'http://anthonygiretti.com/2020/01/20/remove-unwanted-instances-from-servicecollection-in-asp-net-core-3-1/'
category: articles
slug: 'remove-unwanted-instances-from-servicecollection-in-aspnet-core-31'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2020-01-31T02:27:34.015Z'
tags: [.net,asp.net-core]
---

At first glance this article sounds strange or has no sense. Well, this is wrong because it’s based on an unfortunate experience of recent times. I recently had the following experience: I was developing my Web API without too much pain until the moment when I discovered an unexpected behavior, I realized that one of my services did not have the desired behavior , and I discovered that its interface was registered with another instance than the one I coded for my Web API. This could have happened because I reused a legacy layer and I used an extension method which allows to automatically register instances by scanning the assemblies of my application. I am writing this article in order to show you how I managed to solve my problem other than simply renaming my interface, by simply deleting the registration of my service in the dependency injection container. This article will go a little further, I will show you how to unregister any type of service.
