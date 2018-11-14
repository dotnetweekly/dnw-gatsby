---
_id: 5a88e1afbd6dca0d5f0d2cc8
title: Inject Controller Libraries Dynamically at Runtime in ASP.NET Web API using Custom Assembly Resolvers
url: http://www.dotnetcurry.com/ShowArticle.aspx?ID=898
category: articles
slug: 'inject-controller-libraries-dynamically-at-runtime-in-asp-net-web-api-using-custom-assembly-resolve'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2013-05-18T16:58:46.000Z'
tags: []
---

<div>Recently I was working with a CMS application from a reputed commercial vendor and it looked like they were doing dynamic code gen as the CMS features and components were added. It was intriguing and I kept that at the back of my head. Recently while exploring Web API features, I came across an extension point I had missed earlier – CustomAssemblyResolvers. This extension point is very interesting as in, it is invoked whenever WebAPI has to resolve a Url to a corresponding controller and it can’t find it in its ‘cache’. This gives us a nice opportunity to ‘inject’ Web API controller libraries into a system dynamically.</div>
