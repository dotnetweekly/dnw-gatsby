---
_id: 5abb38190c7c83006ed04f56
title: Use the power of Azure Functions and Cognitive Services to collect geolocation information
url: https://www.patrickvankleef.com/2018/03/28/collect-data-with-azure-functions-and-cognitive-services/
category: articles
slug: 'use-the-power-of-azure-functions-and-cognitive-services-to-collect-geolocation-information'
user_id: 5a8a92348b86e53b3449b45c
createdOn: '2018-03-28T02:03:26.378Z'
tags: ['.net','azure']
---

Azure Functions is a powerful service in Azure that provides the ability to run small isolated work. These days we relate Azure Functions to something that we call ‘Serverless Computing’. In this article, I guide you through an example solution where I’ve been working on. The city of Amsterdam started a pilot by placing approximately 300 beacons all over the city. I’m using an app to scan these beacons and call a webhook when a beacon is discovered. This webhook is built with Azure Functions. I created a chain of multiple Functions that are triggered by a queue. Each Function is responsible for getting more information about the location of the discovered beacon. Microsoft Cognitive Services is used to find images and to analyze the content of an image. I created a simple timeline application with Bootstrap and ReactJS to display the information that was collected.  
