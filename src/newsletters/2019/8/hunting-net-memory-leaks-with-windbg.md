---
_id: 5c69cb986ef4232f653540fc
title: "Hunting .NET memory leaks with Windbg"
url: 'https://snede.net/hunting-net-memory-leaks-with-windbg/'
category: articles
slug: 'hunting-net-memory-leaks-with-windbg'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-02-18T22:01:12.779Z'
tags: [.net]
---

Recently a client called me about an issue where one of their production servers would run out of memory, every other week.

The application in question was a .NET Framework 4.5 Windows service, that runs in an Azure VM, and ever so often it would become unstable and start causing trouble.

I have previously helped this client set up an ELK stack, so it was quick for me to go into Kibana, look at metricbeat data, and see that their server indeed slowly was eating up memory over time. And every time the application was restarted, the memory would return to normal, and slowly creep upwards again.
