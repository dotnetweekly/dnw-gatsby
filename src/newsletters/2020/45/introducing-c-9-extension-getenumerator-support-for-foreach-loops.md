---
_id: 5f9e24d2075fce002f33e3a7
title: "Introducing C# 9: Extension GetEnumerator support for foreach loops"
url: 'https://anthonygiretti.com/2020/11/01/introducing-c-9-extension-getenumerator-support-for-foreach-loops/'
category: articles
slug: 'introducing-c-9-extension-getenumerator-support-for-foreach-loops'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2020-11-02T03:00:34.878Z'
tags: [.net]
---

As you may know, in order to be able to iterate on a collection in C# with the foreach loop the collection must expose a public method GetEnumerator() which doesn’t exist on IEnumerator<T> and IAsyncEnumerator<T> interfaces. C# 9 allows to create an extension method to allow foreach loops on those interfaces. Let’s see in this article how to proceed.
