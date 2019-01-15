---
_id: 5a88e1acbd6dca0d5f0d231a
title: ".NET Compiler Platform - Language-Agnostic Code Generation with Roslyn"
url: 'https://msdn.microsoft.com/en-us/magazine/mt707527'
category: articles
slug: 'net-compiler-platform-language-agnostic-code-generation-with-roslyn'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-06-04T07:35:10.000Z'
tags: []
---

The Roslyn code base providespowerful APIs you can leverage to perform rich code analysis over your source code. For instance, analyzers and code refactorings can walk through a piece of source code and replace one or more syntax nodes with new code you generate with the Roslyn APIs. A common way to perform code generation is via the SyntaxFactory class, which exposes factory methods to generate syntax nodes in a way that compilers can understand. The SyntaxFactory class is certainly very powerful because it allows generating any possible syntax element, but there are two different SyntaxFactory implementations: Microsoft.CodeAnalysis.CSharp.SyntaxFactory and Microsoft.Code­Analysis.VisualBasic.SyntaxFactory.
