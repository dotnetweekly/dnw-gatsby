---
_id: 5ba45bc37a4fc46b5edaab9d
title: "Parallel Custom Build Tools in Visual Studio 2017"
url: 'https://blogs.msdn.microsoft.com/vcblog/2018/09/18/parallel-custom-build-tools-in-visual-studio-2017/'
category: 5ba45bc37a4fc46b5edaab9d
slug: 'parallel-custom-build-tools-in-visual-studio-2017'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-09-21T02:47:31.154Z'
tags: [vs]
---

Many projects need to use additional tools during their build to generate sources for further compilation or perform other custom build tasks. VC projects have always supported Custom Build Tool integration, but it had some limitations. One of the popular requests on UserVoice is Allow custom build tools to run in parallel. Another problem is that often custom build outputs need to be passed to other build tools (for instance, some tools can generate C/C++ sources, which need to be passed to the compiler) and there was no easy way to specify that.


