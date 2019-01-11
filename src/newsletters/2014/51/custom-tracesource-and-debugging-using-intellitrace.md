---
_id: 5a88e1adbd6dca0d5f0d27fe
title: "Custom TraceSource and debugging using IntelliTrace"
url: 'http://blogs.msdn.com/b/visualstudioalm/archive/2014/12/17/custom-tracesource-and-debugging-using-intellitrace.aspx'
category: 5a88e1adbd6dca0d5f0d27fe
slug: 'custom-tracesource-and-debugging-using-intellitrace'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-12-20T07:37:40.000Z'
tags: []
---

<a href="http://aka.ms/itrace">IntelliTrace</a> in Visual Studio Ultimate comes with support for tracing out of the box. All you have to do is make sure the appropriate IntelliTrace events are enabled in VS settings and IntelliTrace will capture trace statements as events. When you are not using the default Debug.Trace methods and are instead using a custom <a href="http://technet.microsoft.com/en-us/library/dd632733.aspx">TraceSource</a>, you don’t want to rewrite your tracing code just to get the trace data captured by IntelliTrace. This blog post will explain how to add support for events from a custom <a href="http://technet.microsoft.com/en-us/library/dd632733.aspx">TraceSource</a> in addition to the events listed in VS settings (see screenshot above).
