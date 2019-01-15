---
_id: 5b83a21deb7bebe45e89afb1
title: "Exploring the City of Amsterdam with Azure Durable Functions and the Custom Vision Service"
url: 'https://www.patrickvankleef.com/2018/08/27/exploring-city-with-azure-durable-functions-and-the-custom-vision-service/'
category: articles
slug: 'exploring-the-city-of-amsterdam-with-azure-durable-functions-and-the-custom-vision-service'
user_id: 5a8a92348b86e53b3449b45c
username: 'dnwu3413'
createdOn: '2018-08-27T07:02:53.515Z'
tags: [azure,c#]
---

Microsoft released Azure Durable Functions in 2017. This new feature gives the ability to write long running stateful function orchestrations. I developed a prototype that includes a tourist and admin application. Tourists can take a photo from a building in the city and upload it. The Custom Vision service analyzes the photographed image and detects the correct building. The outcome is sent to the Entity Search service in order to provide the tourist with some basic information about the building that they just photographed. Subsequently, they can start a wizard which presents them with a couple of questions. The outcome of the wizard will help them explore the rest of the city. The wizard is created with Azure Durable Functions. The admin application is responsible for training the machine learning model that analyzes the image that is uploaded. In this application, admins can upload images from buildings and connect them to the correct tag. To eventually train the Custom Vision model. These steps will improve the model so that accurate results are returned for photos that are uploaded by tourists.
