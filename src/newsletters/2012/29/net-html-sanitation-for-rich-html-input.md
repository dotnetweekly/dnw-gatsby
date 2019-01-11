---
_id: 5a88e1afbd6dca0d5f0d2fa8
title: '.NET HTML Sanitation for rich HTML Input'
url: 'http://www.west-wind.com/weblog/posts/2012/Jul/19/NET-HTML-Sanitation-for-rich-HTML-Input'
category: 5a88e1afbd6dca0d5f0d2fa8
slug: 'net-html-sanitation-for-rich-html-input'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2012-07-20T07:11:43.000Z'
tags: []
---

Recently I was working on updating a legacy application to MVC 4 that included free form text input. When I set up the new site my initial approach was to not allow any rich HTML input, only simple text formatting that would respect a few simple HTML commands for bold, lists etc. and automatically handles line break processing for new lines and paragraphs. This is typical for what I do with most multi-line text input in my apps and it works very well with very little development effort involved.
