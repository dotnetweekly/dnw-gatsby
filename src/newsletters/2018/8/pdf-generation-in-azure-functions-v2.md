---
_id: 5a8b3df33bdd6c002abd3c0b
title: 'PDF Generation in Azure Functions V2'
url: 'https://odetocode.com/blogs/scott/archive/2018/02/14/pdf-generation-in-azure-functions-v2.aspx'
category: 5a8b3df33bdd6c002abd3c0b
slug: 'pdf-generation-in-azure-functions-v2'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-02-19T21:05:45.755Z'
tags: [azure]
---

PDF generation.

Yawn.

But, every enterprise application has an “export to PDF” feature.

There are obstacles to overcome when generating PDFs from Azure Web Apps and Functions. The first obstacle is the sandbox Azure uses to execute code. You can read about the sandbox in the “Azure Web App sandbox” documentation. This article explicitly calls out PDF generation as a potential problem. The sandbox prevents an app from using most of the kernel’s graphics API, which many PDF generators use either directly or indirectly.
