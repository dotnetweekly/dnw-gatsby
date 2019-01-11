---
_id: 5a88e1acbd6dca0d5f0d229c
title: '7 Ways to Look at the Values of Variables While Debugging in Visual Studio'
url: 'https://blogs.msdn.microsoft.com/visualstudioalm/2016/07/15/7-ways-to-look-at-the-values-of-variables-while-debugging-in-visual-studio/#'
category: 5a88e1acbd6dca0d5f0d229c
slug: '7-ways-to-look-at-the-values-of-variables-while-debugging-in-visual-studio'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-07-23T07:13:11.000Z'
tags: []
---

When you are running your code and something is behaving unexpectedly, how do you find out what is going wrong? When I was in school the first way I learned how to debug a wonky application was by sticking “print()” statements all over the place, running my code, and looking back through the log of output seeing if I noticed that something looked wrong. Then if I wanted to look at the value of another variable I would have to add a new “print()” statement, recompile, and re-run the application again. This can be a tedious process, so I am pleased to tell you there is a better way than littering your code with a slew of “print()” statements you’ll have to remove later. You can use the tools of the Visual Studio debugger to inspect variables on the fly.
