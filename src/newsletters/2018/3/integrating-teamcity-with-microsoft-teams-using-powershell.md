---
_id: 5a88e1aabd6dca0d5f0d1ade
title: Integrating TeamCity with Microsoft Teams using PowerShell
url: https://cezarypiatek.github.io/post/integrating-teamcity-with-msteams/
category: articles
slug: 'integrating-teamcity-with-microsoft-teams-using-powershell'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-01-19T12:18:24.000Z'
tags: []
---

With the beginning of new year I joined a new team where I help with project bootstrapping. I’ve been configuring TeamCity, Gitlab and webservers. It’s the first time for me to work with Gitlab, so I started looking around and checking what opportunities come to me with that tool. One of my discoveries was the “Integration” bookmark, allowing me to connect Gitlab with other systems. I checked a list of possible integrations and found that it could communicate with Microsoft Teams chat. In my company MS Teams is the basic communication channel, so I gave it a shot and tried to connect the two systems. The configuration was very easy - Gitlab communicates with MS Teams via webhooks - and as result my team receives notification related to merge request on MS Teams channel. This is really cool, but it would be more useful if my continuous integration system could send notifications to my team’s channel too. I checked all available build steps in TeamCity and there was noting related to MS Teams. Fortunately, nothing was lost - webhooks are pretty easy concepts so I was able to create this integration with little amount of work.
