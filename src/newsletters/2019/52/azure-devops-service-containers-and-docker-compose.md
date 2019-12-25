---
_id: 5e033372fb0ecc0036c351aa
title: "Azure DevOps - Service Containers & Docker Compose"
url: 'https://danielwertheim.se/azure-devops-service-containers-docker-compose/'
category: articles
slug: 'azure-devops-service-containers-and-docker-compose'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-12-25T10:01:22.755Z'
tags: [.net]
---

I've been wrestling a bit with using service containers in an Azure DevOps pipeline. The idea is to spin up some services (in my case three instances of NATS) that I then use to run my tests against. I failed miserably. I spent several hours trying different combinations. And finally gave up and used Docker Compose instead.


