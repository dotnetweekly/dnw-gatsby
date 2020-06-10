---
_id: 5ee000c03a2ca4003637872e
title: "Use GitHub actions to publish NuGet packages"
url: 'https://lukelowrey.com/use-github-actions-to-publish-nuget-packages/'
category: articles
slug: 'use-github-actions-to-publish-nuget-packages'
user_id: 5ee0006e3a2ca4003637872d
username: 'lukencode'
createdOn: '2020-06-09T21:36:00.677Z'
tags: [.net,.net-core,.net-standard,github,open-source]
---

Here is how I automated pushing packages to nuget.org for FluentEmail.

- Create a Github Action that runs on push to the master branch
- Use Publish Nuget action to package and publish nuget packages
- Create a Nuget.org API key and set it as a GitHub secret
- Nuget packages are published on push to master!
