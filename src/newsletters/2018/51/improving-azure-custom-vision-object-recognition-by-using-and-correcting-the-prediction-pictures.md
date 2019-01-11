---
_id: 5c1ba852745cd009830206a1
title: 'Improving Azure Custom Vision Object Recognition by using and correcting the prediction pictures'
url: 'http://dotnetbyexample.blogspot.com/2018/12/improving-azure-custom-vision-object.html'
category: 5c1ba852745cd009830206a1
slug: 'improving-azure-custom-vision-object-recognition-by-using-and-correcting-the-prediction-pictures'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-12-20T14:33:54.998Z'
tags: [azure]
---

It turns out Custom Vision retained all the pictures I uploaded in the cause of testing. So every time I used my HoloLens and asked Custom Vision to locate toy aircraft, it stored that in the cloud with it's prediction. And the fun thing is, you can use those pictures to actually improve your model again.

After some playing around with my model my (for the previous blog post about this subject) , I clicked the prediction tab, and I found about 30 pictures - each for every time I used the model from my HoloLens. I could use those to improve my model. After that, I did some more testing using the HoloLens to show you how it's done. So, I clicked the Predictions tab and there were a couple of more pictures:
