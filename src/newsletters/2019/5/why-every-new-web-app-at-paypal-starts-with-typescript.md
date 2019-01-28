---
_id: 5c4dff14974c8f23c74ec919
title: "Why every new web app at PayPal starts with TypeScript"
url: 'https://medium.com/paypal-engineering/why-every-new-web-app-at-paypal-starts-with-typescript-9d1acc07c839'
category: articles
slug: 'why-every-new-web-app-at-paypal-starts-with-typescript'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-01-28T19:57:24.686Z'
tags: [javascript]
---

At PayPal, I work on a tool called paypal-scripts which is a toolkit (like react-scripts from create-react-app, or angular-cli, or ember-cli or … etc…). I’ve written about it before. The idea is that it encapsulates all the tools common to PayPal applications and published modules. The goal being taking the huge list of devDependencies in the package.json and all the config files and reducing that down to one entry in the devDependencies. And because all the config lives within a single opinionated package, keeping things updated is a matter of updating one dependency (paypal-scripts) which typically does not need to make breaking changes. So you just keep that one dep updated and you go back to building your app.


