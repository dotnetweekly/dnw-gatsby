---
_id: 60048e0911856900334560f4
title: "A Practical Intro to Covariance and Contravariance in C#"
url: 'https://vkontech.com/a-practical-intro-to-covariance-and-contravariance-in-c/'
category: articles
slug: 'a-practical-intro-to-covariance-and-contravariance-in-c'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-01-16T19:20:41.929Z'
tags: [c#]
---

When defining a generic interface, have you received a hint from Resharper like “The type parameter T could be declared as covariant” (or “contravariant”)? If so, have you then blindly applied the proposed refactoring which decorates your generic parameter with the in or out keyword? Like so:

public interface ISomeGenericInterface<in T>

I know I’ve done this a few times before deciding to dig deeper into what these terms actually mean and how they affect my type’s behavior. Type variance is one of the topics developers work with pretty much on a daily basis but don’t always understand it well.
