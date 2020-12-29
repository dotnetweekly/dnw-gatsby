---
_id: 5feaeea83a43aa003310804d
title: "Configure Free Wildcard SSL Certificate on AWS Application Load Balancer (ALB) Through Terraform"
url: 'https://www.tugberkugurlu.com/archive/configure-free-wildcard-ssl-certificate-on-aws-application-load-balancer-through-terraform'
category: articles
slug: 'configure-free-wildcard-ssl-certificate-on-aws-application-load-balancer-alb-through-terraform'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-12-29T08:54:00.479Z'
tags: [tools]
---

Last week, I have moved all my personal compute and storage from Azure to AWS, and started managing it through terraform. While doing so, I discovered that you can actually have SSL for your web application without any additional charges when using AWS Application Load Balancer. Setting it up required a few pieces to stich together, and I wanted to share how I configured it through Terraform.

