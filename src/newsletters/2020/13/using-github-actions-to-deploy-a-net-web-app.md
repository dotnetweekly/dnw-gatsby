---
_id: 5e7a31a60680d900352d7448
title: "Using GitHub Actions to deploy a .Net Web App"
url: 'https://gregorsuttie.com/2020/03/22/using-github-actions-to-deploy-a-net-web-app/'
category: articles
slug: 'using-github-actions-to-deploy-a-net-web-app'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-03-24T16:13:26.738Z'
tags: [github]
---

So I wanted to take a look into GitHub Action’s and deploy a .Net Web App, this is my first real look into them and will be blogging about them a lot more in the future, below are the steps I took to do this.

Create a basic .Net MVC Web App using .Net Core 3.1
Run the app and make sure all is working as expected.
Deploy this to Azure web app to Azure and check it runs ok.
I then go into my Resource Group, locate the app service and from the click on ‘Get publish profile‘ – download the file and keep handy.
Then I added the code to GitHub in a new repo which you can find here: – https://github.com/gsuttie/GHActionsWebApp1
Next, I need to create a secret from within GitHub, so once you have your code in a new repository within Github go click on Settings and then Security and click Add a new secret, call it azureWebAppPublishProfile if you want to use the YAML below.
Then I click on Actions and create my first workflow, I chose, Setup a workflow yourself.
And then from here – https://github.com/actions/setup-dotnet I used the YAML and pasted in so that my main.yaml file looks like this
