---
_id: 5a88e1aebd6dca0d5f0d2970
title: 'ASP.NET MVC 5 Identity: Extending and Modifying Roles'
url: 'http://www.codeproject.com/Articles/727054/ASP-NET-MVC-Identity-Extending-and-Modifying-R'
category: 5a88e1aebd6dca0d5f0d2970
slug: 'asp-net-mvc-5-identity-extending-and-modifying-roles'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-07-19T08:42:49.000Z'
tags: []
---

In a recent article I took a rather long look at extending the ASP.NET 5 Identity model, adding some custom properties to the basic IdentityUser class, and also some basic role-based identity management. We did not discuss modifying, extending, or working directly with Roles, beyond seeding the database with some very basic roles with which to manage application access. Extending the basic ASP.NET IdentityRole class, and working directly with roles from an administrative perspective, requires some careful consideration, and no small amount of work-around code-wise.
