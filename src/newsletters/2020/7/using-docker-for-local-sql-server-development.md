---
_id: 5e3f8b6936deea0036c54b41
title: "Using Docker for Local SQL Server Development"
url: 'https://www.codeproject.com/Articles/5258260/Using-Docker-for-Local-SQL-Server-Development'
category: articles
slug: 'using-docker-for-local-sql-server-development'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-02-10T04:32:41.106Z'
tags: [docker]
---

Using docker images for development is a super power, you don’t need SQL installed on your development machine, yet you still have the full power of SQL there for you when you need it. Also, if you want specific versions for different projects, you can simply spin up the version you want, and keep all the configuration inside a dockerfile in your repository for that project.

In this article, we are going to:

Download the latest SQL Server docker image locally
Create a docker container and connect to it from SQL Server Management Studio
Setup a volume mount to store the database files outside of the container so we can persist the data when we tear down our container
Set this up with a docker-compose file
