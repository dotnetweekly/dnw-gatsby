---
_id: 5f8f94ce5822d60033327ad6
title: "Introducing C# 9: Static anonymous functions"
url: 'https://anthonygiretti.com/2020/10/21/introducing-c-9-static-anonymous-functions/'
category: articles
slug: 'introducing-c-9-static-anonymous-functions'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2020-10-21T01:54:22.575Z'
tags: [c#]
---

C# 9 brings an important improvement to anonymous functions by allowing the modifier static on them and we now have static anonymous functions ! Why Microsoft brought this feature ? Because allocation matters ! Microsoft explains here that lambda are not cost less (https://devblogs.microsoft.com/premier-developer/dissecting-the-local-functions-in-c-7/) :
