---
_id: 5a88e1adbd6dca0d5f0d2744
title: 'C# Multithreading and Events'
url: 'http://www.codeproject.com/Articles/886223/Csharp-Multithreading-and-Events'
category: 5a88e1adbd6dca0d5f0d2744
slug: 'c-multithreading-and-events'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2015-03-14T10:38:01.000Z'
tags: []
---

First let’s start off with there is no perfectly safe multithreaded event handling as there are caveats/conditions that must be handled. So it’s really if the particular method you plan to use is safe for the uses you require. I’m going to show there is another problem to contend with and I will offer some classes to help handle some scenarios plus propose some alternative options you could use, but it depends on if your events can be used that way. Ultimately it depends on what you need to do, and implementation/use and the complexity you wish to manage.
