---
_id: 5bdfe3cb1428e6e17794daea
title: "Don't use Func delegate on the Entity Framework entities"
url: 'http://coderethinked.com/don-t-use-func-delegate-on-the-ef-entities/'
category: articles
slug: 'dont-use-func-delegate-on-the-entity-framework-entities'
user_id: 5b8794c8eb7beb86d689afc1
username: 'karthikchintala'
createdOn: '2018-11-05T06:31:39.265Z'
tags: [.net,c#,entity-framework]
---

I have seen a case where a developer wrote a LINQ query with Func delegate which will get the data from the database and returns back to the UI.

The query was working fine but it needs performance tuning as it is taking more time for a simple query.


