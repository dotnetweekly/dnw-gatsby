---
_id: 5a88e1adbd6dca0d5f0d2626
title: "Finding swallowed and async exceptions using IntelliTrace in VS2015"
url: 'http://blogs.msdn.com/b/visualstudioalm/archive/2015/07/20/finding-swallowed-and-async-exceptions-using-intellitrace-in-vs2015.aspx'
category: articles
slug: 'finding-swallowed-and-async-exceptions-using-intellitrace-in-vs2015'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2015-07-18T08:37:44.000Z'
tags: []
---

In this blog post I am going to walk you through using IntelliTrace in Visual Studio 2015 to deal with two exception-related scenarios:
<ol>
	<li>Finding swallowed exceptions and fixing the bad exception handling</li>
	<li>Finding the source of exceptions in async code</li>
</ol>
If you haven’t done so already, check out the announcement of IntelliTrace in Visual Studio 2015 which gives you an <a href="http://blogs.msdn.com/b/visualstudioalm/archive/2015/01/16/intellitrace-in-visual-studio-ultimate-2015.aspx">overview of IntelliTrace and its improved UI</a>.
