---
_id: 5a88e1acbd6dca0d5f0d21d0
title: 'Universal Windows Platform - Working with Memory Limits and Task Priorities in the UWP'
url: 'https://msdn.microsoft.com/magazine/mt742869'
category: 5a88e1acbd6dca0d5f0d21d0
slug: 'universal-windows-platform-working-with-memory-limits-and-task-priorities-in-the-uwp'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-10-08T07:08:45.000Z'
tags: []
---

Far more than any other app platform, the Universal Windows Platform (UWP) supports a vast range of background activities. If these were allowed to compete for resources in an uncontrolled manner, it would degrade the foreground experience to an unacceptable level. All concurrent processes compete for system resources—memory, CPU, GPU, disk and network I/O, and so on. The system Resource Manager encapsulates rules for arbitrating this contention, and the two most important mechanisms are memory limits and task priorities.
