---
_id: 5ac42440230cde002ab85cc7
title: 'Writing a GitHub Webhook as an Azure Function'
url: 'https://www.thomaslevesque.com/2018/03/30/writing-a-github-webhook-as-an-azure-function/'
category: 5ac42440230cde002ab85cc7
slug: 'writing-a-github-webhook-as-an-azure-function'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-04-03T20:08:27.070Z'
tags: [azure]
---

As you may already know, I’m one of the maintainers of the FakeItEasy mocking library. As is common in open-source projects, we use a workflow based on feature branches and pull requests. When a change is requested in a PR during code review, we usually make the change as a fixup commit, because it makes it easier to review, and because we like to keep a clean history. When the changes are approved, the author squashes the fixup commits before the PR is merged. Unfortunately, I’m a little absent minded, and when I review a PR, I often forget to wait for the author to squash their commits before I merge… This causes the fixup commits to appear in the main dev branch, which is ugly.
