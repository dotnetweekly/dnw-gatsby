---
_id: 5b7348e8fd7ac9b1579e0043
title: "Guard - A fast, extensible argument validation library"
url: 'https://github.com/safakgur/guard'
category: libraries-tools
slug: 'guard-a-fast-extensible-argument-validation-library'
user_id: 5b73409bfd7ac904559e0042
username: 'safak'
createdOn: '2018-08-14T21:26:00.294Z'
tags: [.net,c#,.net-standard]
---

For years, I've been seeing dozens of .NET projects with different approaches to argument validation. In most of these projects there are home-brew classes named something like Guard, Require or Validate that contain static methods for checking whether some preconditions are satisfied - like a string not being null or an integer being greater than zero. These methods throw the appropriate exceptions if their conditions are not met, effectively validating the passed argument.

There are some open-source projects as well, so why add yet-another? Because most of these libraries either are too verbose that they don't add enough usability to be added as a dependency, or sacrifice too much performance in the name of usability. With support for `in` parameters `ref readonly` returns, `readonly struct`s and `ref`/`in` extension methods added in C# 7.2, I believe I found the sweet middle ground that allows you to write short, clean argument validations, mostly without a single heap allocation.

So visit the project page, follow the "design decisions" link in the readme for more insights and decide for yourself if this is the right tool for you.
