---
_id: 5a88e1aabd6dca0d5f0d1b22
title: Using an EF Core database for the IdentityServer4 configuration data
url: https://damienbod.com/2017/12/30/using-an-ef-core-database-for-the-identityserver4-configuration-data/
category: articles
slug: 'using-an-ef-core-database-for-the-identityserver4-configuration-data'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2018-01-01T00:43:26.000Z'
tags: []
---

This article shows how to implement a database store for the IdentityServer4 configurations for the Client, ApiResource and IdentityResource settings using Entity Framework Core and SQLite. This could be used, if you need to create clients, or resources dynamically for the STS, or if you need to deploy the STS to multiple instances, for example using Service Fabric. To make it scalable, you need to remove all session data, and configuration data from the STS instances and share this in a shared resource, otherwise you can run it only smoothly as a single instance.
