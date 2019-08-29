---
_id: 5d674a0711b008001d74e203
title: "Integration Testing with xUnit"
url: 'https://jimmybogard.com/integration-testing-with-xunit/'
category: libraries-tools
slug: 'integration-testing-with-xunit'
user_id: 5d5cc8b62c31fb001d4453f4
username: 'dnwuQTLI06qsA'
createdOn: '2019-08-29T03:44:07.546Z'
tags: [testing]
---

A few years back, I had given up on xUnit in favor of Fixie because of the flexibility that Fixie provides. The xUnit project is highly opinionated and geared strictly towards unit tests. It's great for that.

A broader testing strategy includes much more than just unit tests. With Fixie, I can implement any of the XUnit Test Patterns to implement a comprehensive automated test strategy (rather than, say, having different test frameworks for different kinds of tests).

In unit tests, each test method is highly isolated. In integration tests, this is usually not the case. Integration tests usually "touch" a lot more than a single class, and almost always, interact with other processes, files, and I/O. Unit tests are in-process, integration tests are out-of-process.
