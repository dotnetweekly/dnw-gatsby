---
_id: 5c26efcb745cd0837b0206c8
title: 'Why a func delegate in c# is not be translated to sql commands'
url: 'http://coderethinked.com/why-func-delegate-is-not-translated-to-sql/'
category: articles
slug: 'why-a-func-delegate-in-c-is-not-be-translated-to-sql-commands'
user_id: 5b8794c8eb7beb86d689afc1
createdOn: '2018-12-29T03:53:47.663Z'
tags: ['.net','c#','visual-studio']
---

This post explains why a Func delegate is not translated to appropriate SQL commands as one would except. 

The article also draws some source code from Microsoft reference source code to explain what happened when .Where() method is invoked on a func delegate.
