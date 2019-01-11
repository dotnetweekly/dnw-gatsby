---
_id: 5a88e1aebd6dca0d5f0d2842
title: "Memory Usage Tool while debugging in Visual Studio 2015"
url: 'http://blogs.msdn.com/b/visualstudioalm/archive/2014/11/13/memory-usage-tool-while-debugging-in-visual-studio-2015.aspx'
category: 5a88e1aebd6dca0d5f0d2842
slug: 'memory-usage-tool-while-debugging-in-visual-studio-2015'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-11-15T10:02:45.000Z'
tags: []
---

In Visual Studio 2013 we introduced the <a href="http://blogs.msdn.com/b/visualstudioalm/archive/2014/04/02/diagnosing-memory-issues-with-the-new-memory-usage-tool-in-visual-studio.aspx">Memory Usage tool</a> as part of the <a href="http://blogs.msdn.com/b/visualstudioalm/archive/2013/07/12/performance-and-diagnostics-hub-in-visual-studio-2013.aspx">Performance and Diagnostics hub</a>. This tool, like the rest of the profiling tools in the Performance and Diagnostics hub, is designed to work with processes without a debugger attached, leaving you without the fine-grained execution control that a debugger gives you. Full analysis only occurs after your profiling session is complete, a process we often refer to as post-mortem analysis, so you have to wait until the end to see any results and perform your investigations. We also introduced “<a href="http://blogs.msdn.com/b/visualstudioalm/archive/2013/06/20/using-visual-studio-2013-to-diagnose-net-memory-issues-in-production.aspx?wa=wsignin1.0">Debug Managed Memory</a>”, a tool that only works on .NET dump files. In <a href="http://go.microsoft.com/fwlink/?linkid=517106">Visual Studio 2015</a>, we are providing a new way of profiling your app’s memory: a Memory Usage tool you can use while debugging.
