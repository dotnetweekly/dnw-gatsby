---
_id: 5a88e1aebd6dca0d5f0d288e
title: "Writing Cleaner Code with Reactive Extensions"
url: 'http://visualstudiomagazine.com/articles/2014/10/01/writing-cleaner-code-with-reactive-extensions.aspx'
category: articles
slug: 'writing-cleaner-code-with-reactive-extensions'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-10-25T10:20:45.000Z'
tags: []
---

With most methods you just call them and get back a single result. Some processes don't work this way: These processes run for long periods of time. It gets worse: you also have the methods that not only run for a long time, but sporadically return results while they run. Of course, this is why the Microsoft .NET Framework provides events: Events are a way for one object to run a method in a second object, allowing the first object to pass information to the second object when there's something to share.
