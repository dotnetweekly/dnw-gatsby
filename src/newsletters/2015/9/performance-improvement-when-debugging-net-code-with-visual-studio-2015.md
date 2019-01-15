---
_id: 5a88e1adbd6dca0d5f0d2768
title: "Performance Improvement When Debugging .NET Code With Visual Studio 2015"
url: 'http://blogs.msdn.com/b/visualstudioalm/archive/2015/02/23/performance-improvement-when-debugging-net-code-with-visual-studio-2015.aspx'
category: articles
slug: 'performance-improvement-when-debugging-net-code-with-visual-studio-2015'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2015-02-28T10:00:10.000Z'
tags: []
---

Nothing is more frustrating than trying to debug an application that runs significantly slower when you’re debugging it than <ins cite="mailto:John%20Kemnetz" datetime="2015-02-12T11:49">it does </ins>when it runs without a debugger attached. Over the years we’ve received numerous complaints along the lines of “when I run my application without the debugger it takes a few seconds to execute a scenario, but with the debugger it can take several minutes.” By far the most common cause is a large number of exceptions being thrown and caught somewhere in the application (we’ll look at why later in the post).
