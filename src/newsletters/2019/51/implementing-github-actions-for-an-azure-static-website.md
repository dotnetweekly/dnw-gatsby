---
_id: 5dfdd481fb0ecc0036c35197
title: "Implementing GitHub Actions for an Azure Static Website"
url: 'https://dev.to/azure/implementing-github-actions-for-an-azure-static-website-488h'
category: articles
slug: 'implementing-github-actions-for-an-azure-static-website'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-12-19T08:14:57.781Z'
tags: [git]
---

While I was doing the work to host my Blazor search app within my website I realised I'd need to update the deployment pipeline I use for my blog. The process being used was very similar to the one used for the DDD Sydney website, but tweaked for use with Hugo. As it was setup a while ago I used the UI designer in Azure Pipelines, not the YAML approach so this seemed like the perfect opportunity for an overhaul.


