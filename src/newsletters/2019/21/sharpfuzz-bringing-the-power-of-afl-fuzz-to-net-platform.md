---
_id: 5ce35766f35c1a5ed04578f4
title: "SharpFuzz: Bringing the power of afl-fuzz to .NET platform"
url: 'https://mijailovic.net/2019/01/03/sharpfuzz/'
category: libraries-tools
slug: 'sharpfuzz-bringing-the-power-of-afl-fuzz-to-net-platform'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-05-21T02:41:58.527Z'
tags: [.net]
---

I’m a big believer in fuzzing (if you don’t know what fuzzing is, now is the best time to read my post Going down the rabbit hole with go-fuzz, even if you are not familiar with Go). Unfortunately, it never got popular enough in the context of managed languages such as C# or Java. One of the reasons is that fuzzers are usually security-oriented, and as such they are often used with targets written in C/C++ to find memory-corruption vulnerabilities, which is a class of problems that is completely eliminated in managed programming languages.

The success of go-fuzz proved to me that coverage-guided fuzzing can be surprisingly effective even outside the C/C++ world. Led by its example, I’ve been thinking a lot over the last year about the possible approaches to fuzzing .NET libraries. Today, I can finally present you SharpFuzz.
