---
_id: 5a88e1acbd6dca0d5f0d237c
title: 'How to host your own NuGet Server and Package Feed'
url: 'http://www.hanselman.com/blog/HowToHostYourOwnNuGetServerAndPackageFeed.aspx'
category: 5a88e1acbd6dca0d5f0d237c
slug: 'how-to-host-your-own-nuget-server-and-package-feed'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-04-23T08:16:39.000Z'
tags: []
---

Hosting your own NuGet Server, particularly when you're a company or even a small workgroup is a super useful thing. It's a great way to ensure that the build artifacts of each team are NuGet Packages and that other teams are consuming those packages, rather than loose DLLs. A lot of folks (myself included a minute ago) don't realize <a href="https://marketplace.visualstudio.com/items?itemName=ms.feed">that Visual Studio Team Services also offers private NuGet Feeds for your team</a> so that's pretty sweet. But I wanted to try out was setting up my own quick NuGet Server. I could put it on a web server in my closet or up in Azure.
