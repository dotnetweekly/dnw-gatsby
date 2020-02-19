---
_id: 5e4d61a336deea0036c54b6d
title: "Email Confirmation with ASP.NET Core Identity"
url: 'https://code-maze.com/email-confirmation-aspnet-core-identity/'
category: articles
slug: 'email-confirmation-with-aspnet-core-identity'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-02-19T16:26:11.386Z'
tags: [asp.net-core]
---

Email Confirmation is quite an important part of the user registration process. It allows us to verify the registered user is indeed an owner of the provided email. But why is this important?

Well, let’s imagine a scenario where two users with similar email addresses want to register in our application. Michael registers first with michel@mail.com instead of michael@mail.com which is his real address. Without an email confirmation, this registration will execute successfully. Now, Michel comes to the registration page and tries to register with his email michel@mail.com. Our application will return an error that the user with that email is already registered. So, thinking that he already has an account, he just resets the password and successfully logs in to the application.
