---
_id: 5a920d39d873e8002a88eb2f
title: "Trimming Unnecessary Dependencies from Projects"
url: 'https://dfederm.com/trimming-unnecessary-dependencies-from-projects/'
category: articles
slug: 'trimming-unnecessary-dependencies-from-projects'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-02-25T01:08:07.710Z'
tags: [.net]
---

When you’re working in large repositories with hundreds of MsBuild projects, you’re bound to have fairly complex build graphs. Over time, these can devolve and you may end up with lots of dependencies between projects which are no longer needed. This can cause builds to slow down as they are less parallelizable, and the developer experience can suffer as you unnecessarily rebuild libraries which have falsely depend on libraries you changed.
