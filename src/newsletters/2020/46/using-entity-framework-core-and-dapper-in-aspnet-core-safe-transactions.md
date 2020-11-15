---
_id: 5fa7cf91075fce002f33e3ce
title: "Using Entity Framework Core and Dapper in ASP.NET Core – Safe Transactions"
url: 'https://www.codewithmukesh.com/blog/using-entity-framework-core-and-dapper/'
category: articles
slug: 'using-entity-framework-core-and-dapper-in-aspnet-core-safe-transactions'
user_id: 5ece91c4f2bd8f0036781938
username: 'iammukeshm'
createdOn: '2020-11-09T10:59:29.313Z'
tags: [asp.net-core]
---

In this article, we will learn about Using Entity Framework Core and Dapper in ASP.NET Core together in the same application. Another major point of discussion will be Transactions. By the end of the article, we will have an application that works with both Entity Framework Core and Dapper alongside each other, but also intelligent enough to rollback data whenever there is an exception with the process.
We will also take a look at ValidatR, a simple Library for .NET Core that can make you code clean and readable by eliminating the use of IF Clauses unnecessarily. 
Topics Covered - 
1. Dapper vs Entity Framework Core
2. Important Aspect to Handle – Transactions
3. Using Entity Framework Core and Dapper in ASP.NET Core
4. Setting up the Solution and Project
5. Adding the Domain Entities
6. Designing the Interfaces
7. Setting up EntityFrameworkCore & Dapper
8. Wiring up with the Controller
9. Introducing ValidatR – One Line Exception Thrower
