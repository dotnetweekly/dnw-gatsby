---
_id: 5bd1dbc2e8929f1aeb385e02
title: "The art of designing exceptions"
url: 'https://cezarypiatek.github.io/post/the-art-of-designing-exceptions/'
category: 5bd1dbc2e8929f1aeb385e02
slug: 'the-art-of-designing-exceptions'
user_id: 5a980534877735bd0ca462de
username: 'cezarypiatek'
createdOn: '2018-10-25T15:05:38.079Z'
tags: [.net,c#]
---

Have you ever been in a situation when you discovered an exception in the logs that forced you to spend the next couple of minutes - or even hours - figuring out what exactly went wrong? The message was very cryptic and the only useful information that guided you to the crime scene was a stack trace. And after arriving there, you still had no idea what had really happened and what was the culprit. The most frustrating part is that in many cases the reason is very trivial and could be diagnosed immediately if the error message contained sufficient information. Sounds familiar? I was in such situation many times before, especially when I was working with 3rd party libraries. In this blog post, I would like to share with you my thoughts and experience related to designing exception.
