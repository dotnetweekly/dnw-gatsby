---
_id: 5a88e1aebd6dca0d5f0d2a18
title: "Let’s Code: Build your own FlipView Page Indicator "
url: 'http://blog.jerrynixon.com/2014/04/lets-code-build-your-own-flipview-page.html'
category: articles
slug: 'lets-code-build-your-own-flipview-page-indicator'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-04-26T09:42:19.000Z'
tags: []
---

XAML data binding is pretty powerful. One of the benefits of XAML data binding is that it lets different elements on one UI use the same data. The WinRT-XAML FlipView inherits from ItemsControl, the base class for all XAML repeaters. It shows a single record at a time. But how many records are before the current record? How many records are after it? Without some type of page or context indicator, the FlipView is a mystery to the user. And, that’s what we’re after today – building our own page indicator for the FlipView control.
