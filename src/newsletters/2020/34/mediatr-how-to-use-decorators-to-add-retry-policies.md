---
_id: 5f3d65aa5f299c0046cea133
title: "MediatR: how to use Decorators to add retry policies"
url: 'https://www.davideguida.com/mediatr-how-to-use-decorators-to-add-retry-policies/'
category: articles
slug: 'mediatr-how-to-use-decorators-to-add-retry-policies'
user_id: 5ec1ddf1f2bd8f00367818fd
username: 'mizrael@yahoo.it'
createdOn: '2020-08-19T17:47:22.996Z'
tags: [.net-core,asp.net-core,c#]
---

Hi All! Today we'll see an interesting technique to add retry policies to MediatR. It can actually be used also for other types of policies (fallback, circuit breaker, and so on), but we'll focusing on retries to keep things simple.
As you might have guessed, this "magic trick" involves the use of the Decorator Pattern. We talked already about it in another article so I'm not going to spend time on it. Let's jump into the code!

