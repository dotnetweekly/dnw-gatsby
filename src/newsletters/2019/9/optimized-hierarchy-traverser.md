---
_id: 5c73989fe483e92bd2e88c10
title: "Optimized hierarchy traverser"
url: 'https://gunnarpeipman.com/sharepoint/traverse-hierarchy-optimized/'
category: articles
slug: 'optimized-hierarchy-traverser'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-02-25T08:26:23.735Z'
tags: [.net]
---

My first draft of hierarchy traversing component got some serious feedback and it’s time to make some changes before moving on to next challenges. Hierarchy traverser is not optimal yet as it uses tail-call recursion and it’s easy to run to stack overflow with it. This blog post solves this problem and prepares for next challenges like node cache and continue-from-given-node.
