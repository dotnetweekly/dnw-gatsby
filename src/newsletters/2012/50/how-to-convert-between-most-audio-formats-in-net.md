---
_id: 5a88e1afbd6dca0d5f0d2e1c
title: How to convert between (most) audio formats in .NET
url: http://www.codeproject.com/Articles/501521/How-to-convert-between-most-audio-formats-in-NET
category: libraries-tools
slug: 'how-to-convert-between-most-audio-formats-in-net'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2012-12-14T18:14:05.000Z'
tags: []
---

Audio can be stored in many different file and compression formats, and converting between them can be a real pain. It is especially difficult in a .NET application, since the framework class library provides almost no support for the various Windows APIs for audio compression and decompression. In this article I will explain what different types of audio file formats are available, and what steps you will need to go through to convert between formats. Then I'll explain the main audio codec related APIs that Windows offers. I'll finish up by showing some working examples of converting files between various formats in .NET, making use of my open source <a href="http://naudio.codeplex.com/">NAudio </a>library.
