---
_id: 5cd1134f09f06d89be8a07c0
title: "Real Time Flight Map w/ Azure Functions, CosmosDB & SignalR"
url: 'https://davetheunissen.io/real-time-flight-map-w-azure-functions-cosmosdb-signalr/'
category: articles
slug: 'real-time-flight-map-w-azure-functions-cosmosdb-and-signalr'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-05-07T06:10:39.721Z'
tags: [azure]
---

What we will cover
In this workshop we will be building a (near) real-time flight tracker app that leverages several Azure technologies.

We will be using Azure Maps to draw the map canvas in our web app.
To get the flight information, we will create a timer triggered Azure Function to pull the latest flight data set from the OpenSky Network public API. The flight data will then be persisted in a Cosmos Database.
We will then create an Azure Function that listens to the Cosmos DB change feed and updates an Azure SignalR hub with all changes to the flight data.
Finally the web app will be configured with a SignalR client to handle the data changes in real-time.
