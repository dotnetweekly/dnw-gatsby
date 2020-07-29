---
_id: 5f20e834568a69004637a4b0
title: "How to backup your Azure Storage Accounts"
url: 'https://blog.miguelbernard.com/did-you-backup-you-azure-storage-accounts/'
category: articles
slug: 'how-to-backup-your-azure-storage-accounts'
user_id: 5f0787a57ea0e7003fb8372a
username: 'miguelbernard'
createdOn: '2020-07-29T03:08:36.603Z'
tags: [azure]
---

Azure Storage Account is one of the foundation services of Azure. Pretty much all other services use it under the cover in a way or another. This service is simple, works great, and has crazy SLA and redundancy capabilities. However, it doesn't provide a point in time restore. Meaning that if you corrupt or delete some data, there's no way to recover it. There are some solutions that you can find over the internet, but unfortunately, none of them is a silver bullet. Let's explore and compare some of them.
