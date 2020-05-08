---
_id: 5eb4b5a06409bd00350b42fa
title: "Configure a domain for an Azure App Service using Cloudflare"
url: 'https://damienbod.com/2020/05/05/configure-domain-for-azure-app-service-using-cloudflare/'
category: articles
slug: 'configure-a-domain-for-an-azure-app-service-using-cloudflare'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-05-08T01:28:00.775Z'
tags: [.net]
---

This blog shows how to create an Azure App Service with a custom domain using Cloudflare to configure the domain name servers. The post used the following blog from Matteo for the original setup: Serving your Azure App Service under your custom domain

To create a custom domain for an Azure App Service, you require three things:

A domain which maps to a domain name server
TXT, A records for the root domain, CNAME records for sub domains
A hosting service to host the application which maps to the A, TXT, CNAME records.
