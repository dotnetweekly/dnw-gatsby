---
_id: 5f9edfb2075fce002f33e3aa
title: "LINQ gems: Indexed Select"
url: 'https://mydevtricks.com/linq-gems-indexed-select'
category: articles
slug: 'linq-gems-indexed-select'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-11-02T16:17:54.627Z'
tags: [.net]
---

Here's another LINQ gem, which is very useful if you plan to base your projection or filtering logic on the element's index in a sequence.

From the MSDN page for Enumerable.Select():

Projects each element of a sequence into a new form by incorporating the element's index.

What the "incorporating the element's index" part means is that you get an extra parameter inside of the Select method's selector, which gets incremented with each processed element. As is common in C#, the index is zero-based.


