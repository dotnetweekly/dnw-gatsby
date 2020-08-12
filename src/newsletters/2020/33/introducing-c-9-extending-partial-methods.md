---
_id: 5f30a1ed44b8b7004a7cf580
title: "Introducing C# 9: Extending Partial Methods"
url: 'https://anthonygiretti.com/2020/08/10/introducing-c-9-extending-partial-methods/'
category: articles
slug: 'introducing-c-9-extending-partial-methods'
user_id: 5e33901136deea0036c54b06
username: 'anthonygiretti'
createdOn: '2020-08-10T01:25:01.431Z'
tags: [.net]
---

C# 8 (and above) has some restrictions regarding partial methods. For example :

- Partial methods must have a void return type
- Partial methods can’t have out parameters
- Partial methods can’t have any accessibility keyword (public, private, protected etc….)

C# 9 aims to remove these restrictions. If you want to learn more about the motivation behind this, you can find a good description on the Github page here: https://github.com/jaredpar/csharplang/blob/partial/proposals/extending-partial-methods.md
