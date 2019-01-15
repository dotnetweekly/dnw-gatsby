---
_id: 5a88e1aebd6dca0d5f0d2978
title: "What To Do When SaveChanges() Fails?"
url: 'http://www.binaryintellect.net/articles/c1bff938-1789-4501-8161-3f38bc465a8b.aspx'
category: articles
slug: 'what-to-do-when-savechanges-fails'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-07-19T02:11:35.000Z'
tags: []
---

Beginners often ask this question - "What course of action should I take when a call to SaveChanges() fails?" The answer may vary based on a given situation and requirement. However, in many cases the following course of actions can be performed:

Trap the exception caused by the failed call to SaveChanges().
Find out all the errors that occurred during the SaveChanges() call.
Find out which entities caused the errors.
Either display the errors and entities causing errors to the user or log that information somewhere.
Based on whether an entity was added, modified or deleted rollback its effect.
