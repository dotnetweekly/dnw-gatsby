---
_id: 5a88e1afbd6dca0d5f0d2ff2
title: "Basic Spatial Data with SQL Server and Entity Framework 5.0"
url: 'http://www.west-wind.com/weblog/posts/2012/Jun/21/Basic-Spatial-Data-with-SQL-Server-and-Entity-Framework-50'
category: 5a88e1afbd6dca0d5f0d2ff2
slug: 'basic-spatial-data-with-sql-server-and-entity-framework-5-0'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2012-06-22T12:07:43.000Z'
tags: []
---

In my most recent project we needed to do a bit of geo-spatial referencing. While spatial features have been in SQL Server for a while using those features inside of .NET applications hasn't been as straight forward as could be, because .NET natively doesn't support spatial types. There are workarounds for this with a few custom project like SharpMap or a hack using the Sql Server specific Geo types found in the Microsoft.SqlTypes assembly that ships with SQL server.

While these approaches work for manipulating spatial data from .NET code, they didn't work with database access if you're using Entity Framework. Other ORM vendors have been rolling their own versions of spatial integration. In Entity Framework 5.0 running on .NET 4.5 the Microsoft ORM finally adds support for spatial types as well.
