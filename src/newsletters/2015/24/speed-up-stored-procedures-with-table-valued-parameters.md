---
_id: 5a88e1adbd6dca0d5f0d266a
title: "Speed Up Stored Procedures with Table Valued Parameters"
url: 'https://visualstudiomagazine.com/articles/2015/06/01/table-valued-parameters.aspx'
category: 5a88e1adbd6dca0d5f0d266a
slug: 'speed-up-stored-procedures-with-table-valued-parameters'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2015-06-13T07:47:35.000Z'
tags: []
---

In an <a href="http://visualstudiomagazine.com/articles/2015/04/01/stored-procedure-and-temporary-tables.aspx" target="_blank">earlier column</a>, I suggested that one way to speed up your application was to reduce the trips you make to your database, specifically by avoiding calling a stored procedure multiple times. To enable that, I showed how to pass a stored procedure multiple parameter values in a single call and then, inside the stored procedure, load the parameters into a table where they could be integrated with other SQL statements.
