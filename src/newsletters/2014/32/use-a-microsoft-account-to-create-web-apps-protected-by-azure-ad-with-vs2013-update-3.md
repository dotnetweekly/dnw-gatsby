---
_id: 5a88e1aebd6dca0d5f0d293e
title: 'Use a Microsoft Account to Create Web Apps Protected by Azure AD - With VS2013 Update 3'
url: 'http://blogs.msdn.com/b/webdev/archive/2014/08/04/use-a-microsoft-account-to-create-web-apps-protected-by-azure-ad-with-vs2013-update-3.aspx'
category: 5a88e1aebd6dca0d5f0d293e
slug: 'use-a-microsoft-account-to-create-web-apps-protected-by-azure-ad-with-vs2013-update-3'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-08-09T08:49:23.000Z'
tags: []
---

Back in December I have posted <a href="http://www.cloudidentity.com/blog/2013/12/11/setting-up-an-asp-net-project-with-organizational-authentication-requires-an-organizational-account/">an article</a> which described a limitation of the organizational identities support in the ASP.NET project templates in Visual Studio 2013. In a nutshell. The ASP.NET project templates in Visual Studio 2013 have the ability to automatically create an entry for your application in Azure Active Directory – so that your project is created already configured to perform web sign on from the very start. That task requires a write operation in the Azure AD of choice, hence Visual Studio needs to acquire a valid token for performing it. To do so, it prompts you – the developer – for a valid account with administrative privileges in the target directory.
