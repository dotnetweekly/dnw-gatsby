---
_id: 5e4d603236deea0036c54b6c
title: "Elastic Jobs in Azure SQL Database – What and Why"
url: 'https://techcommunity.microsoft.com/t5/azure-sql-database/elastic-jobs-in-azure-sql-database-what-and-why/ba-p/1177902'
category: articles
slug: 'elastic-jobs-in-azure-sql-database-what-and-why'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-02-19T16:20:02.294Z'
tags: [sql-server]
---

Elastic Jobs is a feature of Azure SQL Database that lets you run a set of T-SQL scripts against a collection of servers or databases, as a one-time job, in an ad-hoc manner, or according to a pre-defined schedule.  This feature allows regular maintenance and any action that must be repeated – either across a set of databases or over time, much simpler. Set it up one time, and it will continue to run on any cadence you decide, across any scope you decide, for as long as you wish.

I am releasing a series of posts that will demonstrate and explain the basics of setting up Elastic Jobs to work with a set of databases, including both a General Purpose database and a Hyperscale database. You will understand the fundamental concepts needed to properly create Elastic Jobs, how to create, run, and schedule them using PowerShell or T-SQL, as well as some troubleshooting basics. 
