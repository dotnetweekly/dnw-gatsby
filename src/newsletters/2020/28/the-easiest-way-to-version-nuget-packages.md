---
_id: 5f03db58f164e3003f913813
title: "The Easiest Way to Version NuGet Packages"
url: 'https://rehansaeed.com/the-easiest-way-to-version-nuget-packages/'
category: articles
slug: 'the-easiest-way-to-version-nuget-packages'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-07-07T02:18:00.273Z'
tags: [.net]
---

he easiest way to version NuGet packages using semantic versioning in my opinion is to use MinVer. Getting started is literally as easy as adding the MinVer NuGet package. Getting finished is not too much more than that.

In this post I'll discuss the semantic versioning 2.0 standard and show you how you can semantically version your NuGet packages and the DLL's within them MinVer and Git tags.

What is Semantic Versioning?
Semantic versioning is the idea that each part of a version number has some intrinsic meaning. Lets break down an example of a full version number into it's constituent parts:

1.2.3-preview.0.4+b34215d3d2539837ac3e20fc3111ba7d46670064
1 - The major version number. Incrementing this means that a major breaking change has occurred.
2 - The minor version number. Incrementing this means that a non-breaking change has occurred.
3 - The patch version number. Incrementing this means that a patch or fix has been issued for a bug.
preview (Optional) - This determines that the build is a pre-release build. This pre-release label is often set to alpha or beta.
0 (Optional) - This is the pre-release version number.
4 (Optional) - The Git height or the number of commits since the last non-pre-release build.
b34215d3d2539837ac3e20fc3111ba7d46670064 (Optional) - The Git SHA or hash of the current commit.
