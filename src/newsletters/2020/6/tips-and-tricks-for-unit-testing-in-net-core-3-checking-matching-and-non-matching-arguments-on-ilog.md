---
_id: 5e3a535636deea0036c54b29
title: "Tips & tricks for unit testing in .NET Core 3: Checking matching and non matching arguments on ILogger"
url: 'http://anthonygiretti.com/2020/02/05/tips-tricks-for-unit-testing-in-net-core-3-checking-matching-and-non-matching-arguments-on-ilogger/'
category: articles
slug: 'tips-and-tricks-for-unit-testing-in-net-core-3-checking-matching-and-non-matching-arguments-on-ilog'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2020-02-05T05:32:06.172Z'
tags: [.net-core]
---

You must have been like me for a long time unable to do one thing with ILogger: test the arguments that are passed to its methods during your unit tests. You must most likely use extension methods such as LogDebug, logError etc …… and indeed you can neither mock nor test the arguments passed to them. We will see in this article how to get around this difficulty in order to finally be able to test arguments passed to extension methods of ILogger.
