---
_id: 5d7ee1bd58aae8001df5f508
title: "File uploads with Blazor"
url: 'http://blog.stevensanderson.com/2019/09/13/blazor-inputfile/'
category: articles
slug: 'file-uploads-with-blazor'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-09-16T01:13:33.156Z'
tags: [blazor]
---

For a long time we’ve expected that we’d add a built-in “file input” feature to Blazor. This would let users pick local files and supply them to your application. Possible uses cases include:

You want to upload and store those files on a server
Or, you want to read and import some data from them
Or, you want to present an editor UI for the file
It applies equally to client-side or server-side Blazor. In client-side Blazor, you’re loading the file into the .NET application’s memory, which can then edit it locally or could make an HTTP request to transfer it to some backend server. In server-side Blazor, your code is already running on the server, but you still want to be able to read files picked by the user.
