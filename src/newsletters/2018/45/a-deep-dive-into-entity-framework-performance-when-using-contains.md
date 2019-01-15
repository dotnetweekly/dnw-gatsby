---
_id: 5be5333127cd2392335935f1
title: "A Deep Dive into Entity Framework Performance When Using Contains"
url: 'https://www.toptal.com/dot-net/entity-framework-performance-using-contains'
category: articles
slug: 'a-deep-dive-into-entity-framework-performance-when-using-contains'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-11-09T07:11:45.117Z'
tags: [ef]
---

During my everyday work, I use Entity Framework. It is very convenient, but in some cases, its performance is slow. Despite there being lots of good articles on EF performance improvements, and some very good and useful advice is given (e.g., avoid complex queries, parameters in Skip and Take, use views, select needed fields only, etc.), not that much can really be done when you need to use complex Contains on two or more fields—in other words, when you join data to a memory list.


