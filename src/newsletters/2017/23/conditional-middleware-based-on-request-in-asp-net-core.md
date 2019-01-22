---
_id: 5a88e1abbd6dca0d5f0d1e8e
title: "Conditional middleware based on request in ASP.NET Core"
url: 'https://www.devtrends.co.uk/blog/conditional-middleware-based-on-request-in-asp.net-core'
category: articles
slug: 'conditional-middleware-based-on-request-in-asp-net-core'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-06-03T02:55:08.000Z'
tags: [asp.net-core]
---

This post looks at how to configure <a href="http://asp.net/" target="_blank" rel="noopener noreferrer" data-saferedirecturl="https://www.google.com/url?q=http://ASP.NET&amp;source=gmail&amp;ust=1496760943570000&amp;usg=AFQjCNE3amtKSoc7ow9YzH25CaRtkvL8GQ">ASP.NET</a> Core middleware in a way that allows you to have different middleware for different types of request. There are many use-cases for this but one common example for this requirement is a project with both MVC and API actions where you want to error handling to be different for each.
