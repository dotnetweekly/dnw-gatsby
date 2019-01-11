---
_id: 5a88e1acbd6dca0d5f0d235a
title: "Simplify Code with the Visitor Pattern"
url: 'https://visualstudiomagazine.com/articles/2016/05/01/visitor-pattern.aspx'
category: 5a88e1acbd6dca0d5f0d235a
slug: 'simplify-code-with-the-visitor-pattern'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-05-07T08:35:57.000Z'
tags: []
---

In an <a href="https://visualstudiomagazine.com/articles/2016/05/01/logic-is-your-enemy.aspx" target="_blank">earlier column</a> I discussed how inheritance can let you use simple code to solve a complicated problem. In that column I outlined how inheritance can simplify the code required to handle two products with different pricing schemes. But then, like life in a Thomas Hardy novel, I pointed out that things can get worse. It turns out that your company, in addition to having two kinds of products (products and services) also has two types of customers: PremiumCustomers and TypicalCustomers. PremiumCustomers get a 10 percent discount on Products and TypicalCustomers aren't allowed to buy ServiceProducts at any price.
