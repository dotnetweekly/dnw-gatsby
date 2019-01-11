---
_id: 5a88e1aebd6dca0d5f0d2ad6
title: "Aspect-Oriented Programming with the RealProxy Class"
url: 'http://msdn.microsoft.com/en-us/magazine/dn574804.aspx'
category: 5a88e1aebd6dca0d5f0d2ad6
slug: 'aspect-oriented-programming-with-the-realproxy-class'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-02-08T00:08:09.000Z'
tags: []
---

A well-architected application has separate layers so different concerns don’t interact more than needed. Imagine you’re designing a loosely coupled and maintainable application, but in the middle of the development, you see some requirements that might not fit well in the architecture, such as:

The application must have an authentication system, used before any query or update.
The data must be validated before it’s written to the database.
The application must have auditing and logging for sensible operations.
The application must maintain a debugging log to check if operations are OK.
Some operations must have their performance measured to see if they’re in the desired range.
