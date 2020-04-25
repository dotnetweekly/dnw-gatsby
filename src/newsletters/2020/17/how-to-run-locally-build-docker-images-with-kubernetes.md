---
_id: 5ea49a9c6409bd00350b42b8
title: "How to run locally build docker images with Kubernetes"
url: 'https://www.talkingdotnet.com/how-to-run-locally-build-docker-images-with-kubernetes/'
category: articles
slug: 'how-to-run-locally-build-docker-images-with-kubernetes'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-04-24T20:16:28.928Z'
tags: [kubernetes]
---

To run Kubernetes in your local environment, Minikube is your choice. Minikube is a lightweight Kubernetes implementation that creates a Virtual Machine on your local machine and deploys a simple cluster containing only one node. By default, Minikube will always pull the docker images from the docker repository. To test locally build docker images with Minikube, you got to tell Minikube to refer them from your local system, instead of fetching from the docker registry. There are various ways to tell Minikube to look for local docker images. In this post, we’ll see how to run locally build docker images with Kubernetes.


