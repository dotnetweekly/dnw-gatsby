---
_id: 5f2dab5144b8b7004a7cf574
title: "Monitoring .NET Core applications on Kubernetes"
url: 'https://developers.redhat.com/blog/2020/08/05/monitoring-net-core-applications-on-kubernetes/'
category: articles
slug: 'monitoring-net-core-applications-on-kubernetes'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-08-07T19:28:17.930Z'
tags: [.net-core]
---

Prometheus is an open source monitoring solution that collects metrics from the system and its applications. As a developer, you can query these metrics and use them to create alerts, which you can use as a source for dashboards. One example would be using Prometheus metrics with Grafana.

In this article, I show you how to use Prometheus to monitor a .NET Core application running on Kubernetes. Note that installation instructions are not included with the article. I do include a reference for using the Prometheus Operator to create and configure Prometheus on Kubernetes.
