---
_id: 5a88e1aebd6dca0d5f0d2bf4
title: "EF Code First Mapping Between Types &amp; Tables"
url: 'http://romiller.com/2013/09/24/ef-code-first-mapping-between-types-tables/'
category: articles
slug: 'ef-code-first-mapping-between-types-tables'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-09-28T08:03:13.000Z'
tags: []
---

Entity Framework includes the MetadataWorkspace which gives you access to the metadata EF keeps about the shape of your model. The problem is that the Mapping section of this – the bit that maps entities types to tables and properties to columns – isn’t public. We do have <a href="https://entityframework.codeplex.com/workitem/1471">a work item to make this public</a> in one of the upcoming releases, but in EF6 and earlier releases it is still internal. Why, you ask, is it internal… because the metadata APIs in EF are a mess. The metadata APIs that are already public are bad… but the mapping one is worse. Whilst we can’t justify spending the time to rewrite the whole API – we do want to clean it up a bit before making it public.
