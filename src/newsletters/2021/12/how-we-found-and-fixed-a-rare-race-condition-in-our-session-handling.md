---
_id: "6057e056066145002fa651ed"
title: "How we found and fixed a rare race condition in our session handling"
url: 'https://github.blog/2021-03-18-how-we-found-and-fixed-a-rare-race-condition-in-our-session-handling/'
category: articles
slug: 'how-we-found-and-fixed-a-rare-race-condition-in-our-session-handling'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-03-19T00:09:58.292Z'
tags: [.net]
---

On March 8, we shared that, out of an abundance of caution, we logged all users out of GitHub.com due to a rare security vulnerability. We believe that transparency is key in earning and keeping the trust of our users and want to share more about this bug. In this post we will share the technical details of this vulnerability and how it happened, what we did to respond to it, and the steps we are taking to ensure this does not happen again.


