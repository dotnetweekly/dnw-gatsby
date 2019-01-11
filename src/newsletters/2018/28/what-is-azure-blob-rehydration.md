---
_id: 5b4ade13d9e4dccece97044f
title: 'What is Azure Blob Rehydration'
url: 'https://dailydotnettips.com/azure-blob-rehydration/'
category: 5b4ade13d9e4dccece97044f
slug: 'what-is-azure-blob-rehydration'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-07-14T05:39:31.282Z'
tags: [azure]
---

In this post, we will learn about Azure Blob rehydration. Azure Storage support three different level of storage tiers Hot storage tier, Cool storage tier, and Archive storage tier.  With the different level of storage tiers, you can choose what types of tier needs for your data.  We use hot storage tier for those data which are accessed very frequently. Cool tier intended to access less than hot tiers, in general for at least 30 days. Archive tier is intended for long-term data backup or archival purpose and will remain in the tier for at least 180 days.  Hot tier has the highest storage cost and lowest access cost, whereas the archive tier has the lowest storage cost and highest access cost. You may read more about these access tier from here.



