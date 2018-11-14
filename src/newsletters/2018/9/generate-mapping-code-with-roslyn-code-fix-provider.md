---
_id: 5a9805f9877735bd0ca462e0
title: Generate mapping code with Roslyn code fix provider.
url: https://cezarypiatek.github.io/post/generate-mapping-code-with-roslyn/
category: articles
slug: 'generate-mapping-code-with-roslyn-code-fix-provider'
user_id: 5a980534877735bd0ca462de
createdOn: '2018-03-01T10:53:04.711Z'
tags: ['.net','c#','visual-studio','tools']
---

A few weeks ago I posted about negative aspects of applying AutoMapper. As an alternative I suggested typing all mapping code by hand or utilize some kind of generator like T4Scaffoling or something Roslyn based. In the past I experimented with T4Scaffoling but it was quite tedious. It requires preparation of templates in T4 syntax, referencing it to the project and writing some PowerShell code to provide data for templates. There also was an issue with assembly locking. Then I tried to generate code with PowerShell and EnvDTE. It worked but it had some limitations and it wasn’t convenient enough to start using it on a daily basis. I gave it one more try and after publication of mentioned post I started looking for an existing Roslyn-based solution that could be a really nice substitution for AutoMapper. That’s how I found ObjectMapper project.
