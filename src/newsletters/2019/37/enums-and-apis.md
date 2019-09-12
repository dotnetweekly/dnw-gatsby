---
_id: 5d77371958aae8001df5f4e0
title: "Enums & APIs"
url: 'https://dev.to/timothymcgrath/enums-apis-15n4'
category: articles
slug: 'enums-and-apis'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-09-10T05:39:37.523Z'
tags: [.net]
---

Enums are a double-edged sword. They are extremely useful to create a set of possible values, but they can be a versioning problem if you ever add a value to that enum.

In a perfect world, an enum represents a closed set of values, so versioning is never a problem because you never add a value to an enum. However, we live in the real, non-perfect world and what seemed like a closed set of values often turns out to be open.

So, let's dive in.
