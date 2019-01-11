---
_id: 5a88e1aebd6dca0d5f0d2af6
title: 'Introducing Windows Azure WebJobs'
url: 'http://www.hanselman.com/blog/IntroducingWindowsAzureWebJobs.aspx'
category: 5a88e1aebd6dca0d5f0d2af6
slug: 'introducing-windows-azure-webjobs'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-01-25T10:50:24.000Z'
tags: []
---

I'm currently running 16 web sites on Windows Azure. I have a few Virtual Machines, but I prefer to run things using "platform as a service" where I don't have to sweat the underlying Virtual Machine. That means, while I know I <em>can </em>run a Virtual Machine and put "cron" jobs on it, I'm less likely to because I don't want to mess with VMs or Worker Roles. There are a few ways to run stuff on Azure, first, there's IAAS (Infrastructure as a Service) which is VMs. Then there's Cloud Applications (Cloud Services) where you can run anything in an Azure-managed VM. It's still a VM, but you have a lot of choice and can run Worker Roles and background stuff. However, there's a lot of ceremony if you just want to run your small "job" either on a regular basis or via a trigger.
