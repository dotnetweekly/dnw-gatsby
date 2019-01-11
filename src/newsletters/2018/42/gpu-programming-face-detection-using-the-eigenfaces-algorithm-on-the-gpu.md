---
_id: 5bc849be1ff6e75d1187fb28
title: "GPU Programming - Face Detection Using the Eigenfaces Algorithm on the GPU"
url: 'https://msdn.microsoft.com/magazine/mt830358'
category: 5bc849be1ff6e75d1187fb28
slug: 'gpu-programming-face-detection-using-the-eigenfaces-algorithm-on-the-gpu'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-10-18T08:52:14.424Z'
tags: [machine-learning]
---

Computer vision is an area of computer science that involves the identification or labeling of regions in an image. Images are large 2-D arrays of pixels that can be operated upon in parallel. GPUs are ideally suited for accelerating algorithms that entail large amounts of data parallelism, a kind of parallelism in which different portions of a dataset can be operated upon at the same time on multiple processors. Therefore, it should be possible to apply GPUs to the task of implementing efficient computer vision algorithms. In this article I’ll use the GPU to implement facial detection, a popular problem in computer vision.


