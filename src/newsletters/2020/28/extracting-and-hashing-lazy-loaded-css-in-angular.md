---
_id: 5f06d0677ea0e7003fb83723
title: "Extracting and Hashing Lazy-Loaded CSS in Angular"
url: 'https://volosoft.com/blog/Extracting-and-Hashing-Lazy-Loaded-CSS-in-Angular'
category: articles
slug: 'extracting-and-hashing-lazy-loaded-css-in-angular'
user_id: 5e95864a72748f0034ead23c
username: 'yekuta'
createdOn: '2020-07-09T08:08:07.324Z'
tags: [angular,open-source]
---

There is no doubt that we all want our applications to load very fast. To do this, we need to keep the initial bundle size small. Lazy loading is one of the methods we use in this case. We can lazy load some third-party JavaScript files and some CSS files. In this article, we will learn how to lazy load our CSS files and how to extract them with a hash on production build to prevent browser cache.
