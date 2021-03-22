---
_id: "6057e1c4066145002fa651f3"
title: "Exploring the async/await State Machine – Synchronization Context"
url: 'https://vkontech.com/exploring-the-async-await-state-machine-synchronization-context/'
category: articles
slug: 'exploring-the-async-await-state-machine-synchronization-context'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-03-19T00:16:04.531Z'
tags: [.net]
---

In this article, I’ll start exploring some of the most popular questions related to async/await.

Concretely, in the next couple of posts, I’ll clarify the misconceptions around the Synchronization Context and the usage of ConfigureAwait in nested and sequential async calls.

First, it’s essential to understand why and when we need the Synchronization Context and the role it plays in the async/await workflow.
