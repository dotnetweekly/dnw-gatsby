---
_id: "6081b454d37a170033ddf012"
title: "Async and Await In C#"
url: 'https://www.c-sharpcorner.com/article/async-and-await-in-c-sharp/'
category: articles
slug: 'async-and-await-in-c'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2021-04-22T17:37:24.320Z'
tags: [c#]
---

Basics of C# async await. In this article, you'll learn what C# async and C# await keywords are and how to use async and await in C# code.
 
Nowadays, Asynchronous programming is very popular with the help of the async and await keywords in C#. When we are dealing with UI, and on button click, we use a long-running method like reading a large file or something else which will take a long time, in that case, the entire application must wait to complete the whole task. In other words, if any process is blocked in a synchronous application, the whole application gets blocked, and our application stops responding until the whole task completes.
Asynchronous programming is very helpful in this condition. By using Asynchronous programming, the Application can continue with the other work that does not depend on the completion of the entire task.
