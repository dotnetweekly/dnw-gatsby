---
_id: 5caa1a8ab5cd876cc8b869f9
title: "Best practices for using PowerShell with TeamCity"
url: 'https://cezarypiatek.github.io/post/best-practices-for-using-powershell-with-teamcity/'
category: articles
slug: 'best-practices-for-using-powershell-with-teamcity'
user_id: 5a980534877735bd0ca462de
username: 'cezarypiatek'
createdOn: '2019-04-08T16:43:06.552Z'
tags: [.net,tools]
---

In the last few projects that I’ve attended, I was deeply involved in continuous integration. What I mean is that I was either fully in charge of setting up, configuring and maintaining CI or I was a consultant, helping other teams to deal with different problems related to this subject. All projects have been using TeamCity as a platform for continuous integration. It has a lot of predefined jobs that facilitate most common activities necessary to build pipelines, as well as rich UI that helps to easily configure it and examine pipeline results. For the more complicated and non-standard activities, I’ve been using PowerShell scripts. TeamCity has really good support for running PowerShell thanks to dedicated build step. However, it can cause some troubles if it’s not configured correctly. After coming across the same mistakes and issues over and over again, I finally decided to write this article that shows how to use PowerShell properly, together with TeamCity. I hope you will find it useful.
