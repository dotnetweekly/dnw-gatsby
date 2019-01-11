---
_id: 5a88e1afbd6dca0d5f0d2dec
title: "My Take on HTML/JS vs. C#/XAML vs. C++/DirectX (choosing a language for a Windows Store app)"
url: 'http://kraigbrockschmidt.com/blog/?p=304'
category: 5a88e1afbd6dca0d5f0d2dec
slug: 'my-take-on-htmljs-vs-cxaml-vs-cdirectx-choosing-a-language-for-a-windows-store-app'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-01-18T10:57:03.000Z'
tags: []
---

A long time ago this question came up within my team at Microsoft, long before we did any public disclosure of the new system. Before Windows 8, there was really only one choice to write a native app without taking a dependency on an external framework or other middleware of some kind: C++ (or C) with UI layers like WinForms or DirectX. Windows 8, however, introduced other choices for native Windows Store apps, by which I mean one that has direct access to the system’s API without relying on middleware to expose it (and thus require that middleware to be updated to take advantage of new system features). Those choices include using JavaScript with HTML/CSS as the presentation layer; using C#, Visual Basic, or C++ with XAML as the presentation layer; or going the C++ and DirectX route.
