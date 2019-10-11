---
_id: 5d9f644358aae8001df5f5ad
title: "Avoid 100vh On Mobile Web"
url: 'https://chanind.github.io/javascript/2019/09/28/avoid-100vh-on-mobile-web.html'
category: articles
slug: 'avoid-100vh-on-mobile-web'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-10-10T17:02:59.970Z'
tags: [tools]
---

Viewport units in CSS sound great. If you want to style an element to take up the full screen height, you can just set height: 100vh and voila - you have a perfect fullscreen element, which resizes as the viewport changes! Sadly, this is not the case. 100vh is broken in a subtle but fundamental way on mobile browsers that makes it nearly useless. It’s best to avoid 100vh and instead rely on javascript to set heights for a full viewport experience.

The core issue is that mobile browsers (I’m looking at you, Chrome and Safari) have a “helpful” feature where the address bar is sometimes visible and sometimes hidden, changing the visible size of the viewport. Rather than adjusting the height of 100vh to be the visible portion of the screen as the viewport height changes, these browsers instead have 100vh set to the height of the browser with address the address bar hidden. The result is that the bottom portion of the screen will be cut off when the address bar is visible, thus defeating the purpose of 100vh to begin with.
