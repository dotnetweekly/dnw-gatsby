---
_id: 5db093a75f78740035ea17c8
title: "The Battle of C# to JSON Serializers in .NET Core 3"
url: 'https://michaelscodingspot.com/the-battle-of-c-to-json-serializers-in-net-core-3/'
category: articles
slug: 'the-battle-of-c-to-json-serializers-in-net-core-3'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-10-23T17:53:43.361Z'
tags: [.net-core]
---

.NET Core 3 was recently released and brought with it a bunch of innovations. Besides C# 8 and support for WinForms & WPF, the new release added a brand new JSON (de)serializer. This new serializer goes by the name System.Text.Json and as the name suggests, all its classes are in that namespace.

This is a big deal. JSON serialization is a big factor in web applications. Most of today’s REST API relies on it. When your javascript client sends a JSON request in a POST body, the server uses JSON deserialization to convert it to a C# object. And when the server returns an object in its response, it serializes that object into JSON for your JavaScript client to understand. These are major operations that happen on every request with objects. Their performance can significantly impact application performance as you’re about to see.
