---
_id: 5a88e1aebd6dca0d5f0d2866
title: 'Improving your MVC Unit Tests with Interfaces, Dependency Injection, and Mocking'
url: 'http://www.codeproject.com/Articles/835558/Improving-your-MVC-Unit-Tests-with-Interfaces-Depe'
category: 5a88e1aebd6dca0d5f0d2866
slug: 'improving-your-mvc-unit-tests-with-interfaces-dependency-injection-and-mocking'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-11-08T10:59:14.000Z'
tags: []
---

One of the main benefits of ASP.NET MVC is that you can separate your HTML/Javascript/Razor views from the server-side C# logic in your controllers. There controllers can be tested separately from the views by using <strong>unit tests</strong> so that the code inside can be validated. However a different set of problems comes into play when your MVC controllers use classes that interact with external services such as databases. Uness there is a database online and available for unit tests, the code within the controllers cannot be validated within a testing framework like NUnit or the Visual Studio Testing Framework. Your controllers might also use other services such as SMTP or SQL Reporting Services that are even more difficult to abstract in your unit tests. Setting up these external services just for your unit tests can be very cumbersome and time consuming.
