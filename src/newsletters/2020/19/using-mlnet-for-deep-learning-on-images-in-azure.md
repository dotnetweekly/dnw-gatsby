---
_id: 5eb4c6896409bd00350b42fb
title: "Using ML.NET for deep learning on images in Azure"
url: 'https://devblogs.microsoft.com/dotnet/train-image-classification-model-azure-mlnet-model-builder/'
category: articles
slug: 'using-mlnet-for-deep-learning-on-images-in-azure'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-05-08T02:40:09.118Z'
tags: [machine-learning]
---

In March 2020, ML.NET added support for training Image Classification models in Azure. Although the image classification scenario was released in late 2019, users were limited by the resources on their local compute environments. Training in Azure enables users to scale image classification scenarios by using GPU optimized Linux virtual machines.

This post will show how to train a custom image classification model in Azure to categorize flowers using ML.NET Model Builder. Then, you can leverage your existing .NET skills to consume the trained model inside a C# .NET Core console application. Best of all, little to no prior machine learning knowledge is required. Let’s get started!
