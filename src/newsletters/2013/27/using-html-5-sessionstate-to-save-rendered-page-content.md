---
_id: 5a88e1afbd6dca0d5f0d2c80
title: "Using HTML 5 SessionState to save rendered Page Content"
url: 'http://www.west-wind.com/weblog/posts/2013/Jul/01/Using-HTML-5-SessionState-to-save-rendered-Page-Content'
category: articles
slug: 'using-html-5-sessionstate-to-save-rendered-page-content'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2013-07-05T18:41:27.000Z'
tags: []
---

HTML 5 SessionState and LocalStorage are very useful and super easy to use to manage client side state. For building rich client side or SPA style applications it's a vital feature to be able to cache user data as well as HTML content in order to swap pages in and out of the browser's DOM. What might not be so obvious is that you can also use the <em>sessionState</em> and <em>localStorage</em> objects even in classic server rendered HTML applications to provide caching features between pages. These APIs have been around for a long time and are supported by most relatively modern browsers and even all the way back to IE8, so you can use them safely in your Web applications.
