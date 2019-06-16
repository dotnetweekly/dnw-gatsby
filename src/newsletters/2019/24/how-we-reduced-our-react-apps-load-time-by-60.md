---
_id: 5d02381ef35c1a4bd7457954
title: "How We Reduced Our React App’s Load Time by 60%"
url: 'https://www.infoq.com/articles/reduce-react-load-time/'
category: articles
slug: 'how-we-reduced-our-react-apps-load-time-by-60'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-06-13T12:48:46.493Z'
tags: [javascript]
---

Using React by itself will not result in a highly performant application. If you’re not careful, the application can pick up bloat easily. It’s good practice to conduct audits periodically.

Chrome DevTools offers powerful performance measurement for JavaScript applications. Learn how to read and understand performance profiles.

Code splitting is easy to setup with Webpack 4 and you should definitely use it to optimize your application.
Identify where long lists of content are rendered and optimize them with react-window.

Understand how React works internally. This will help you identify wasted renders and fix them. Use the “Highlight Updates” option in React DevTools to help you with this step.

There are several other methods to improve performance in React applications — prefetching, service workers, bundle analysis, etc. to reduce bundle sizes.
