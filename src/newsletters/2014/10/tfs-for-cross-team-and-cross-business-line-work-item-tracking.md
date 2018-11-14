---
_id: 5a88e1aebd6dca0d5f0d2a8a
title: TFS for cross team and cross business line work item tracking
url: http://nakedalm.com/tfs-cross-team-cross-business-line-work-item-tracking/
category: articles
slug: 'tfs-for-cross-team-and-cross-business-line-work-item-tracking'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2014-03-08T09:47:00.000Z'
tags: []
---

I was asked by current customer to come up with a solution, within TFS, to allow an entire division to work together in delivering software for a bank. This divisions made up of over 10 teams than work on many pieces of software. Some have simple requirements while others require harsh security and compliance. This is a standard problem and not unique to this company, however the perception still prevails with both TFS users and administrators, that one must have a single Team Project for each [Project | Team | Product] under way. This perception is not only incorrect but Team Foundation Server was designed to be used differently. The Developer Division (DevDiv) at Microsoft, who built the product, uses a single 20+ terabyte Team Project for their Work Items, Source Code and Builds for over 2k people. Team Foundation Server was designed and built to be used with fewer large Team Projects rather than many small Team Projects.
