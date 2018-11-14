---
_id: 5a88e1abbd6dca0d5f0d1f50
title: WPF - Custom UserControl datacontext binding gotcha
url: https://nikolalukovic.com/journal/WPF-Custom-UserControl-datacontext-binding-gotcha.html
category: articles
slug: 'wpf-custom-usercontrol-datacontext-binding-gotcha'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2017-04-06T21:36:51.000Z'
tags: ['wpf']
---

Creating custom user controls in WPF and as well as fully supporting MVVM with binding is a pretty straightforward process, but there are a couple of things that, at a first glance, look like they should work but they’re not. At least for me. One of those things is when you bind DataContext to code behind, or to Self.
