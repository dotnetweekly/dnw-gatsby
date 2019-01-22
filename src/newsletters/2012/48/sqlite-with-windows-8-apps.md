---
_id: 5a88e1afbd6dca0d5f0d2e42
title: "SQLite with Windows 8 apps"
url: 'http://timheuer.com/blog/archive/2012/08/07/updated-how-to-using-sqlite-from-windows-store-apps.aspx'
category: articles
slug: 'sqlite-with-windows-8-apps'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2012-11-24T18:36:09.000Z'
tags: []
---

The great folks on the <a href="http://www.sqlite.org/"><strong>SQLite</strong></a> team, they’ve packaged the binaries up (for Windows 8 apps) in a nice installer using the Extension SDK format.  What this means is you now add a ‘reference’ to the SQLite binary and based on the architecture being built for your package, it will pull in the right DLL without you having to manage that yourself.  Here’s some step-by-step…
