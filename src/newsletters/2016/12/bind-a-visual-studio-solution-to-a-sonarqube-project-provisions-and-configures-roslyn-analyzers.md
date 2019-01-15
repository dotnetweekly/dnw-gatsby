---
_id: 5a88e1acbd6dca0d5f0d23e2
title: "Bind a Visual Studio solution to a SonarQube project provisions and configures Roslyn analyzers"
url: 'https://blogs.msdn.microsoft.com/visualstudioalm/2016/03/17/bind-a-visual-studio-solution-to-a-sonarqube-project-provisions-and-configures-roslyn-analyzers/'
category: articles
slug: 'bind-a-visual-studio-solution-to-a-sonarqube-project-provisions-and-configures-roslyn-analyzers'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2016-03-19T08:16:48.000Z'
tags: []
---

A few weeks ago, we announced <a href="https://blogs.msdn.microsoft.com/visualstudioalm/2016/02/18/sonarqube-scanner-for-msbuild-v2-0-released-support-for-third-party-roslyn-analyzers/">the SonarQube scanner for MSBuild 2.0 supports 3rd party Roslyn analyzers</a>. This has been working for the continuous integration build. In this blog post we are announcing that we have extended this experience to the IDE. You can now bind a Visual Studio solution to a SonarQube project and see Roslyn analyzers automatically provisioned as NuGet packages, and rulesets configured, using the SonarQube Quality Profile for the project. Let’s see what problem we are solving here, and how to use this new feature.

&nbsp;
