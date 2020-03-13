---
_id: 5e6a33b0226ef4003680053e
title: "Using dotnet new templates to streamline microservices development"
url: 'https://allegro.tech/2020/03/dotnet-new-templates.html'
category: articles
slug: 'using-dotnet-new-templates-to-streamline-microservices-development'
user_id: 5a8a922f8b86e53b3449ab5a
username: 'orgiele'
createdOn: '2020-03-12T13:05:52.773Z'
tags: [.net-core]
---

When working on a project consisting of numerous microservices, you often find that each service shares a part of “common” code. This becomes a burdensome copy-paste activity when you have to add one more microservice. There are a number of straightforward and not-so-clean solutions to this problem (i.e. copying from a microservice of a colleague who read “Clean Code” and/or maintains an exemplary service). In this post, however, I’d like to explore another option suitable for dotnet core developers: dotnet new templates.
