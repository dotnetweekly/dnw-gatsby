---
_id: 5d5f422911b008001d74e1d8
title: "JazSharp"
url: 'https://github.com/Sellorio/JazSharp'
category: articles
slug: 'jazsharp'
user_id: 5d5cc8b62c31fb001d4453f4
username: 'dnwuQTLI06qsA'
createdOn: '2019-08-22T01:32:25.969Z'
tags: [.net]
---

JazSharp is heavily inspired by Jasmine - the JavaScript unit testing framework. Angular developers will be very familiar with it since that is the unit testing framework used in a CLI created default app.

Why was this made?
Originally, JazSharp was only aiming to be a mocking framework but after the initial implementation attempts proved to be unreliable, the scope increased to be a full unit testing framework.

The benefits of JazSharp over other mocking frameworks are:

No reliance on interfaces or similar layers of separation that are not motivated by clean development practises.
No issues when testing code that changes static/global values for the app - statics methods and properties can be mocked just like any method.
An alternative approach to defining mocks. This is less of a benefit and more of a personal preference. For example, parameters can be checked after a mock is called and defining a mock is quick and easy.
The syntax used to define test methods is also very different from other .Net testing frameworks and allows test names (or descriptions in the case of JazSharp) to read more clearly both to technical and non-technical persons.
