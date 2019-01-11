---
_id: 5a88e1aebd6dca0d5f0d28d6
title: "Enable HTTP Compression in IIS Express"
url: 'http://www.kiwipiet.com/2014/09/enable-http-compression-in-iis-express.html'
category: 5a88e1aebd6dca0d5f0d28d6
slug: 'enable-http-compression-in-iis-express'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-09-28T02:32:14.000Z'
tags: []
---

Open a Command Prompt as Administrator.  Go to the IIS Express installation folder

32 bit : cd %programfiles%\iis express 
64 bit: cd %programfiles(x86)%\iis express
Run the following command to enable dynamic compression:
appcmd set config -section:urlCompression /doDynamicCompression:true
