---
_id: 5dedcba2b8c30c002fde5c53
title: "Hacking C#: Programming for the Truly Lazy"
url: 'https://www.thecodepainter.co.uk/blog/2019113/hackingcsharp_arrayadjust'
category: articles
slug: 'hacking-c-programming-for-the-truly-lazy'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-12-09T04:20:50.341Z'
tags: [c#]
---

Welcome to my very first blog entry. Do please wipe your feet on the way in and try not to leave any mess. Beers are in the fridge, help yourselves!

This blog was posted as part of the Third Annual C# Advent. Make sure to check out everyone else's work when you're done here

This is the first in a series of articles I'm planning to write on some of the techniques I've used over the years to accomplish a whole load more in C# with as little effort as I can get away with. I'm very much of the opinion that life is too short to spend writing the same old boilerplate code, and that every problem only ever needs to be solved once. Hopefully, this article series will open your eyes a little to what can be done with a bit of imagination.

A common enough scenario you might encounter is that - given an array - you need to adjust one of its records. If you're following best practice, then you'll be referencing arrays between functions in their most abstract form - the IEnumerable<T> - and if not, why not?

If you've got an array of items referenced as such, then it's trivial to update a specific item, you'd just do it like this:
