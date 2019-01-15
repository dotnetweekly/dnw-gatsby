---
_id: 5a88e1aebd6dca0d5f0d2834
title: "Reading and Writing Base64 in the Windows Runtime"
url: 'http://blog.jerrynixon.com/2014/11/reading-and-writing-base64-in-windows.html#more'
category: articles
slug: 'reading-and-writing-base64-in-the-windows-runtime'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-11-22T08:57:16.000Z'
tags: []
---

Sometimes it’s super-valuable to take an image and convert it to text – let’s call this encoding. This text is base64 and it’s a well-established standard for such things. It can be inserted into JSON, XAML, and even used in CSS. Conversely, it’s important to convert that text back into an image – let’s call this decoding. And, developers can do it all in the Windows Runtime. Let’s begin by recognizing that how binary information is translated into and out of text isn’t important. It’s all settled by the standards nerds – we’re just leveraging their hard work.
