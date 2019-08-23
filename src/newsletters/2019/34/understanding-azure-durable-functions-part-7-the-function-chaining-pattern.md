---
_id: 5d5f419711b008001d74e1d6
title: "Understanding Azure Durable Functions - Part 7: The Function Chaining Pattern"
url: 'http://dontcodetired.com/blog/post/Understanding-Azure-Durable-Functions-Part-7-The-Function-Chaining-Pattern'
category: articles
slug: 'understanding-azure-durable-functions-part-7-the-function-chaining-pattern'
user_id: 5d5cc8b62c31fb001d4453f4
username: 'dnwuQTLI06qsA'
createdOn: '2019-08-22T01:29:59.608Z'
tags: [azure]
---

This is the seventh part in a series of articles. If you’re not familiar with Durable Functions you should check out the previous articles before reading this.

There are a number of patterns that Durable Functions make easier to implement, we’ll look at some more later in this series of articles.

One common scenario is the requirement to create a “pipeline” of processing where the output from one Azure Function feeds into the next function in the chain/pipeline. This pattern can be implemented without Durable Functions, for example by manually setting up different queues to pass work down the chain. One downside to this manual approach is that it’s not sometimes immediately obvious what functions are involved in the the pipeline. Function chaining with Durable Functions allows the chain/pipeline to be easy to understand because the entire pipeline is represented in code.

To implement the function chaining pattern, you simply call one activity function and pass in  the input from a previous activity function.


