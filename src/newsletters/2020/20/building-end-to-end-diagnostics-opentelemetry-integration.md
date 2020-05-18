---
_id: 5ebae8946409bd00350b4312
title: "Building End-to-End Diagnostics: OpenTelemetry Integration"
url: 'https://jimmybogard.com/building-end-to-end-diagnostics-opentelemetry-integration/'
category: articles
slug: 'building-end-to-end-diagnostics-opentelemetry-integration'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-05-12T18:19:00.809Z'
tags: [.net]
---

In the last post, we looked at providing diagnostic event hooks into our code at specific points so that "something" could listen in. For our purposes, we want to listen in to surface telemetry data, but the uses are far wider for diagnostic events, such as logging, testing, and metrics. We want to focus on telemetry through the OpenTelemetry project.
