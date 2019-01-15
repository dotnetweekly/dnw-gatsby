---
_id: 5a88e1adbd6dca0d5f0d27c0
title: "Adding Azure Active Directory and OWIN Code into an AngularJS/ASP.NET MVC Application to Handle User Authentication"
url: 'http://weblogs.asp.net/dwahlin/adding-azure-active-directory-and-owin-code-into-an-angularjs-asp-net-mvc-application-to-handle-user-authentication'
category: articles
slug: 'adding-azure-active-directory-and-owin-code-into-an-angularjsasp-net-mvc-application-to-handle-user'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2015-01-24T10:31:02.000Z'
tags: []
---

In a <a href="http://www.itunity.com/article/integrating-aad-services-angularjs-office-365-part-3-770" target="_blank">previous post</a> I discussed how to setup the necessary configuration code and assemblies in an AngularJS/ASP.NET MVC application in order to authenticate users against <a href="http://azure.microsoft.com/en-us/services/active-directory/" target="_blank">Azure Active Directory</a> (AAD). Once the initial configuration is complete you can write code to redirect users to the AAD login screen to retrieve an ID token. In Part 4 of an article series I’m writing for <a href="http://itunity.com/">http://itunity.com</a> I discuss the necessary code that’s required to authenticate a user and retrieve the ID token. Additional topics covered include hooking AAD into the ASP.NET MVC pipeline, creating an Entity Framework token cache, triggering authentication against AAD in MVC controllers, and more. Here’s an excerpt from the article. The complete code for the application discussed in the article series can be found on the <a href="https://github.com/OfficeDev/SP-AngularJS-ExpenseManager-Code-Sample" target="_blank">OfficeDev Github site</a>.
