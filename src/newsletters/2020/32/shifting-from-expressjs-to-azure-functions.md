---
_id: 5f2852a944b8b7004a7cf55c
title: "Shifting from Express.js to Azure Functions"
url: 'https://docs.microsoft.com/en-us/azure/azure-functions/shift-expressjs?tabs=javascript'
category: articles
slug: 'shifting-from-expressjs-to-azure-functions'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-08-03T18:08:41.513Z'
tags: [azure]
---

Express.js is one of the most popular Node.js frameworks for web developers and remains an excellent choice for building apps that serve API endpoints.

When migrating code to a serverless architecture, refactoring Express.js endpoints affects the following areas:

Middleware: Express.js features a robust collection of middleware. Many middleware modules are no longer required in light of Azure Functions and Azure API Management capabilities. Ensure you can replicate or replace any logic handled by essential middleware before migrating endpoints.

Differing APIs: The API used to process both requests and responses differs among Azure Functions and Express.js. The following example details the required changes.

Default route: By default, Azure Functions endpoints are exposed under the api route. Routing rules are configurable via routePrefix in the host.json file.

Configuration and conventions: A Functions app uses the function.json file to define HTTP verbs, define security policies, and can configure the function's input and output. By default, the folder name that which contains the function files defines the endpoint name, but you can change the name via the route property in the function.json file.
