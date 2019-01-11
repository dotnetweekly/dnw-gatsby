---
_id: 5a8bdf983b936a002a308a24
title: 'C# internals: iterators'
url: 'http://foreverframe.net/c-internals-iterators/'
category: 5a8bdf983b936a002a308a24
slug: 'c-internals-iterators'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-02-19T23:55:01.890Z'
tags: [.net]
---

Despite the fact that iterators (using yield keyword) were introduced back in C# 2.0, many folks are still confused how they work. Honestly, I’m not surprised at all, because to me this mechanism was a mystery for a long time. Of course, we have to clearly distinguish two things here:

How does yield return work? (on C# level)
How does yield return actually work THIS way? (this is the topic of today’s article)
Let’s start with the first question. Asking a statistical C# developer, what’s the advantage of using yield return statement we could probably hear the following answer:
