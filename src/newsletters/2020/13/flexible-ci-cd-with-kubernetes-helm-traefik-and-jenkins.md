---
_id: 5e7a3a650680d900352d744b
title: "Flexible CI/CD with Kubernetes, Helm, Traefik and Jenkins"
url: 'https://hands-on-tech.github.io/2020/03/15/k8s-jenkins-example.html'
category: articles
slug: 'flexible-ci-cd-with-kubernetes-helm-traefik-and-jenkins'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-03-24T16:50:45.110Z'
tags: [kubernetes]
---

The main goal is to present a flexible CI/CD solution on top of Kubernetes, with automatic application deployment, host definition and routing per environment. To make this process easy to understand, the following steps are presented and described in detail:

Setup Kubernetes and understand its basic concepts;
Install Traefik, Dashboard and Jenkins using Helm;
Create Kotlin application to show how CI/CD can be used;
Implement Jenkins pipeline to build and deploy application automatically.
To fulfill the mentioned steps and validate the presented CI/CD solution, the architecture with the following components is proposed:

Kubernetes: for containers management and orchestration;
Traefik: as proxy and load balancer to access services;
Kubernetes Dashboard: to manage Kubernetes through a web-based interface;
Jenkins: as automation server to automatically build and deploy application;
GitHub: to manage source code using Git;
DockerHub: as registry to manage the Docker image with the example application;
Application stating: example application deployment for development and testing purposes;
Application production: example application deployment to be used in production.
