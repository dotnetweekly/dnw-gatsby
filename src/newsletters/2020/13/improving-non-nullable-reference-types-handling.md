---
_id: 5e7e7bc40680d900352d7457
title: "Improving non-nullable reference types handling"
url: 'https://cezarypiatek.github.io/post/better-non-nullable-handling/'
category: articles
slug: 'improving-non-nullable-reference-types-handling'
user_id: 5a980534877735bd0ca462de
username: 'cezarypiatek'
createdOn: '2020-03-27T22:18:44.412Z'
tags: [.net]
---

The way how non-nullable types are handled by Roslyn seems to be a little more complex in comparison to Resharper - there are around 40 different diagnostics related to this area. This large amount of inspections is good because it very often brings your attention to the edge cases that you would probably overlook, but on the other hand, it sometimes makes the development more tedious. 
