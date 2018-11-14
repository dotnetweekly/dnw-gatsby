---
_id: 5a88e1aebd6dca0d5f0d28b0
title: Perform diagnostic search across your Application Insights telemetry
url: http://blogs.msdn.com/b/visualstudioalm/archive/2014/10/06/perform-diagnostic-search-across-your-application-insights-telemetry.aspx
category: articles
slug: 'perform-diagnostic-search-across-your-application-insights-telemetry'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2014-10-11T07:18:24.000Z'
tags: []
---

In Application Insights, we’ve just upgraded <a href="http://azure.microsoft.com/documentation/articles/app-insights-search-diagnostic-logs/">Diagnostic Search</a> so that you can search all the raw telemetry such as page views, as well as the trace log calls that you can insert. This makes it a lot easier to find and follow chains of events in your app. So for example, if you inserted some log4Net, NLog or System.Diagnostics trace calls in your app, you can easily see which user requests are triggering them, and tie them up to any custom event calls you’ve set up.
