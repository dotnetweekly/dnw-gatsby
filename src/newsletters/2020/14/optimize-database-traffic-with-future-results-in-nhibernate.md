---
_id: 5e8241a372748f0034ead20f
title: "Optimize database traffic with future results in NHibernate"
url: 'https://gunnarpeipman.com/nhibernate-future-results/'
category: articles
slug: 'optimize-database-traffic-with-future-results-in-nhibernate'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-03-30T18:59:47.206Z'
tags: [performance]
---

One nice feature that NHibernate has is future results. It is technically a capability to put queries on hold until data is actually asked. When data is asked from one delayed query then all queries are sent to database server as one batch and results are read also as one batch of multiple result sets. This blog post explains how to use future results with NHibernate.
