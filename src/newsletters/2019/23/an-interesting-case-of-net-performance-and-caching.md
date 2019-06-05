---
_id: 5cf76f8ef35c1a1924457931
title: "An Interesting Case Of .NET Performance and Caching"
url: 'https://rimdev.io/an-interesting-case-of-dotnet-performance-and-caching/'
category: articles
slug: 'an-interesting-case-of-net-performance-and-caching'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-06-05T08:30:22.336Z'
tags: [.net]
---

Several months ago, Bill Boga and I, realized there was a performance enhancement we could make in our infrastructure. We were utilizing IdentityServer and took notice that many of our APIs were validating many of the same access tokens and storing the results in memory locally. Validating access tokens can be relatively expensive due to additional web requests and CPU intensive hash calculations. If we could cache the validation results, and share the validation results across our system, then we could reduce the work necessary to get a request through our APIs.


