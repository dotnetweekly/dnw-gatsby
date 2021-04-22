---
_id: "6081ad05d37a170033ddf00c"
title: ".NET Core Integration Tests using a Sql Server Database in Docker"
url: 'https://wrapt.dev/blog/integration-tests-using-sql-server-db-in-docker'
category: articles
slug: 'net-core-integration-tests-using-a-sql-server-database-in-docker'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-04-22T17:06:13.835Z'
tags: [.net-core]
---

So I was revamping the tests in the template projects for Wrapt and wanted to try using a real database instead of compromising for an in memory one. There’s a few reasons for this, but most notably is being able to get to your test environment as close to realistic as possible.

Setting things up with a local database isn’t terribly hard but it does require some manual steps when setting things up for the first time and requires a specific local set up. This can be automated to a degree like Jimmy Bogard does in his Contoso repo but I was aiming for something a little different.
