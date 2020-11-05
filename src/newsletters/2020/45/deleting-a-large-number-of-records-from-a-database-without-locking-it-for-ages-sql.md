---
_id: 5f9edf86075fce002f33e3a9
title: "Deleting a large number of records from a database without locking it (for ages) #SQL"
url: 'https://blog.dotnetframework.org/2020/10/31/deleting-a-large-number-of-records-from-a-database-without-locking-it-for-ages-sql/'
category: articles
slug: 'deleting-a-large-number-of-records-from-a-database-without-locking-it-for-ages-sql'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-11-02T16:17:10.117Z'
tags: [sql-server]
---

If you have a large database, with millions of rows, and you need to run an batch operation on it, like deleting lots of old records, then you’ll quickly find that the operation often will lock the table, and prevent users get at their data – as well as bloating the transaction log table.

So, the trick is to break it down into manageable chunks. Let’s say the operation I want to run is this;

delete from log where success=0
