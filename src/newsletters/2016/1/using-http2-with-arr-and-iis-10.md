---
_id: 5a88e1adbd6dca0d5f0d2498
title: Using HTTP/2 with ARR and IIS 10
url: http://blogs.msdn.com/b/benjaminperkins/archive/2016/01/04/using-http-2-with-arr-and-iis-10.aspx
category: libraries-tools
slug: 'using-http2-with-arr-and-iis-10'
user_id: 5a83ce59d6eb0005c4ecda2c
createdOn: '2016-01-02T20:23:14.000Z'
tags: []
---

I was asked a question about if the Application Request Router supports the HTTP 2 protocol on IIS 10 (not sure what it will be called).  I was pretty confident that it did, but nothing beats a test to confirm it.  So that is what I did.  I used this article here that contains some good information about HTTP/2 on IIS 10.  As I read through the instructions, the only requirement for using the HTTP/2 protocol is that the request is made over HTTPS.  And of course, you need IIS 10…
