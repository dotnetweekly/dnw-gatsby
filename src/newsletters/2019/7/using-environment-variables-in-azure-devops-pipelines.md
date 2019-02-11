---
_id: 5c6121d16ef423ee083540d9
title: "Using Environment Variables in Azure DevOps Pipelines"
url: 'https://odetocode.com/blogs/scott/archive/2019/02/08/using-environment-variables-in-azure-devops-pipelines.aspx'
category: articles
slug: 'using-environment-variables-in-azure-devops-pipelines'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-02-11T08:18:41.043Z'
tags: [azure]
---

Of course the dependency might not be so explicit. You could have a test that calls into code, that calls some other code, and the other code needs an environment variable. Or, maybe you have a script or tool that needs an environment variable. The question is - how do you setup environment variables in a DevOps pipeline?

The answer is easy - when a pipeline executes, Azure will place all pipeline variables into environment variables, so any tools, scripts, tasks, or processes you run as part of the build can access parameters through the environment
