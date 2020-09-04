---
_id: 5f512876e0574b00461c2b5c
title: "np - A better npm publish"
url: 'https://github.com/sindresorhus/np'
category: articles
slug: 'np-a-better-npm-publish'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-09-03T17:31:34.913Z'
tags: [javascript]
---

Interactive UI
Ensures you are publishing from your release branch (main and master by default)
Ensures the working directory is clean and that there are no unpulled changes
Reinstalls dependencies to ensure your project works with the latest dependency tree
Ensures your Node.js and npm versions are supported by the project and its dependencies
Runs the tests
Bumps the version in package.json and npm-shrinkwrap.json (if present) and creates a git tag
Prevents accidental publishing of pre-release versions under the latest dist-tag
Publishes the new version to npm, optionally under a dist-tag
Rolls back the project to its previous state in case publishing fails
Pushes commits and tags (newly & previously created) to GitHub/GitLab
Supports two-factor authentication
Enables two-factor authentication on new repositories
(does not apply to external registries)
Opens a prefilled GitHub Releases draft after publish
Warns about the possibility of extraneous files being published
See exactly what will be executed with preview mode, without pushing or publishing anything remotely
Supports GitHub Packages
