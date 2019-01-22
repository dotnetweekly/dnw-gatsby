---
_id: 5a88e1aabd6dca0d5f0d1b1e
title: "Live Unit Testing in Visual Studio 2017"
url: 'https://www.calvinallen.net/archive/2017/12/23/live-unit-testing-in-visual-studio-2017/'
category: articles
slug: 'live-unit-testing-in-visual-studio-2017'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2017-12-30T05:02:52.000Z'
tags: []
---

You may be curious what "live unit testing" means, so let’s dive into that a little bit.

"Live" unit testing is simply the automated execution of unit tests that may have been impacted by a code change, and provides the results of that test run back into the IDE (in this case, Visual Studio) in real time.

There are products out there that have provided this mechanism for quite some time - most notably, NCrunch, which is a fantastic tool.

However, Microsoft has recently given us this capability directly inside the Visual Studio IDE, without the need for external tooling/extensions!
