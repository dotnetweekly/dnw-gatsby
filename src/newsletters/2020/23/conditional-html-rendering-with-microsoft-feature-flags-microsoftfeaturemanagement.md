---
_id: 5ed98a3a3a2ca400363786d6
title: "Conditional HTML Rendering with Microsoft Feature Flags (Microsoft.FeatureManagement)"
url: 'https://dontcodetired.com/blog/post/Conditional-HTML-Rendering-with-Microsoft-Feature-Flags-(MicrosoftFeatureManagement)'
category: articles
slug: 'conditional-html-rendering-with-microsoft-feature-flags-microsoftfeaturemanagement'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-06-04T23:56:42.656Z'
tags: [.net]
---

This is part seven in a series of articles.

You can render HTML in your views based on whether or not a feature flag is enable or disabled. To do this you can make use of the FeatureTagHelper.

For example suppose the following Printing feature is configured to be off in the appsettings.json:
