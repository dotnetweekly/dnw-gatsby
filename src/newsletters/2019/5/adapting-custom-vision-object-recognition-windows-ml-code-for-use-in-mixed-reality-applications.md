---
_id: 5c51eada974c8f0c624ec922
title: "Adapting Custom Vision Object Recognition Windows ML code for use in Mixed Reality applications"
url: 'http://dotnetbyexample.blogspot.com/2019/01/adapting-custom-vision-object.html'
category: articles
slug: 'adapting-custom-vision-object-recognition-windows-ml-code-for-use-in-mixed-reality-applications'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-01-30T19:20:10.042Z'
tags: [machine-learning]
---

In November I wrote about a Custom Vision Object Detection experiment that I did, which allowed the HoloLens I was wearing to recognize not only what objects where in view, but also where they approximately were in space. You might remember this picture.

Apart from being a very cool new project type, it also showed a great limitation. You could only use an online model. You could not download it in the form of, for instance, an ONNX model to use with Windows ML. It worked pretty well, don't get me wrong, but maybe you are out and about and your device can't always reach the online model. Well guess what recently changed:

Yay! Custom Vision Object Detection now support downloadable models that can be use in Windows ML.
