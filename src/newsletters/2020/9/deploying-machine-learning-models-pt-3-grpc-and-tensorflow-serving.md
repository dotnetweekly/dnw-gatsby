---
_id: 5e5887137f965400359f2a80
title: "Deploying Machine Learning Models – pt. 3: gRPC and TensorFlow Serving"
url: 'https://rubikscode.net/2020/02/24/deploying-machine-learning-models-pt-3-grpc-and-tensorflow-serving/'
category: articles
slug: 'deploying-machine-learning-models-pt-3-grpc-and-tensorflow-serving'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-02-28T03:20:51.748Z'
tags: [tools]
---

In the previous articles, we explored how we can serve TensorFlow Models with Flask and how we can accomplish the same thing with Docker in combination with TensorFlow Serving. Both of these approaches utilized REST API. We were able to explore some good things regarding this approach. However, we also detected some shortcomings. The major ones are scalability and speed. In this article, we address both of those problems. Also, sometimes it feels unnatural to serve deep learning models with REST API because these are usually embedded within some kind of microservice. That is where gRPC comes into the picture. First, let’s get familiar with this technology and then we explore how we can use it in combination with TensorFlow Serving.


