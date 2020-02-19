---
_id: 5e4d628436deea0036c54b71
title: "Clean up your .NET with the Dispose Pattern"
url: 'https://www.automationmission.com/2020/02/15/clean-up-your-net-with-the-dispose-pattern/'
category: articles
slug: 'clean-up-your-net-with-the-dispose-pattern'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-02-19T16:29:56.717Z'
tags: [.net]
---

In the managed-code world of .NET, we can be sometimes spoiled by the seamless intervention of Garbage Collection which quite happily waits until our objects are no longer referenced and then scoops them up and destroys them. That ‘Person’ object you’re no longer referencing? Gone. That ‘Tesla’ object you lovingly inherited from ‘Car’ and then added loads of ‘door’ properties to? Obliterated. See ya.

What about when our old-buddy-old-pal the collector can’t pick up our trash? What do we do when we are using a resource which is unmanaged and therefore cannot be picked up for us?

In these scary, less comfortable unmanaged situations, it’s time for us to roll up our sleeves and muck in with the dispose pattern.
