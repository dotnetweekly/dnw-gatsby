---
_id: 5a88e1acbd6dca0d5f0d21ce
title: Parallel Test Execution
url: https://blogs.msdn.microsoft.com/visualstudioalm/2016/10/10/parallel-test-execution/
category: articles
slug: 'parallel-test-execution'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2016-10-08T07:09:48.000Z'
tags: []
---

An <a href="https://johnkoerner.com/vs2015/parallel-test-execution-in-visual-studio-2015-update-1-might-not-be-what-you-expect/">early post</a> on Parallel Test Execution drew attention to its subtle semantics. Three considerations directly contributed to that <strong>(1)</strong> Reach <strong>(2)</strong>Composability <strong>(3)</strong> Non-disruptive roll out. The Visual Studio Test Platform is open and extensible, with tests written using various test frameworks and run using a <a href="https://visualstudiogallery.msdn.microsoft.com/site/search?query=%22Test%20Adapter%22&amp;f%5B0%5D.Value=%22Test%20Adapter%22&amp;f%5B0%5D.Type=SearchText&amp;ac=4">variety of adapters</a>. To reduce on-boarding friction, the feature ought to work on existing test code. It especially needs to work on existing MSTest framework based test code – there is a huge corpus of such tests already written, and it would be unrealistic to expect users to go in and update their test code just to take advantage of the feature. The feature must acknowledge that adapters for frameworks like NUnit, and xUnit.net already enable parallel test execution.
