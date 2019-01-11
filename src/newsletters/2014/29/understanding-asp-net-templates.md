---
_id: 5a88e1aebd6dca0d5f0d2976
title: 'Understanding ASP.NET Templates'
url: 'http://www.codeproject.com/Articles/775111/Understanding-ASP-NET-Templates'
category: 5a88e1aebd6dca0d5f0d2976
slug: 'understanding-asp-net-templates'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-07-19T08:37:22.000Z'
tags: []
---

If you are in the business to display data on the web using ASP.NET, you probably used templates. All data bound controls, which used to display tabular data (like TreeView, DataList, GridView, Repeater and ListView) use template to make your work easier. You define the template only once and the data-binding mechanism will repeat it for each and every row of the data for you. This idea works with great efficiency, but there is a little misunderstanding when it comes to access the controls inside the data rows using the ID of the template. It can be confusing as you only declared one control with that ID, but now there are tens (hundreds or thousands) of repetitions of the same block. What can make it more confusing is the rendering of the repeated IDs to the client; as a web developer you probably aware of the fact that in HTML ID must be unique...
