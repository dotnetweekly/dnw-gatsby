---
_id: 5ecfcb1cf2bd8f0036781941
title: "BlakeOnLan - A 100-line Wake-on-LAN app using Blazor Server to wake your devices remotely on your home network."
url: 'https://github.com/yugabe/BlakeOnLan'
category: articles
slug: 'blakeonlan-a-100-line-wake-on-lan-app-using-blazor-server-to-wake-your-devices-remotely-on-your-hom'
user_id: 5e3070da36deea0036c54aff
username: 'yugabe'
createdOn: '2020-05-28T14:30:52.879Z'
tags: [asp.net-core,blazor]
---

I use Remote Desktop in the house to RDP onto our HTPC in the living room, but sometimes the TV is already in use. If the device is not awake, I have to go over and power it on. Lazyness prevails, as from now I don't have to go over, just push the Wake button on this app :)

I wanted to make the source as small as possible, and managed to only need two files in total (plus the .csproj file): the Pages\_Host.cshtml (22 lines) for hosting the Blazor Server app, and an App.razor file (78 lines), which contains the only component of the app, for a grand total of exactly 100 lines of source code! This was just a fun experiment to see how much boilerplate could be omitted. No wwwroot, Program.cs (the App.razor contains the Main method) or Startup.cs (the services and pipeline are configured inline in the Main method)!

For the full source, visit my repo at: https://github.com/yugabe/BlakeOnLan
