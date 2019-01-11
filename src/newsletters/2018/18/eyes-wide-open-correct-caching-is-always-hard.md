---
_id: 5aefbf6f7ecc506e6a6cd127
title: "Eyes wide open - Correct Caching is always hard"
url: 'https://www.hanselman.com/blog/EyesWideOpenCorrectCachingIsAlwaysHard.aspx'
category: 5aefbf6f7ecc506e6a6cd127
slug: 'eyes-wide-open-correct-caching-is-always-hard'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2018-05-05T19:12:51.090Z'
tags: [caching]
---

The code is below. Note that the MemoryCache is a singleton, but within the process. It is not (yet) a DistributedCache. Also note that Caching is Complex(tm) and that thousands of pages have been written about caching by smart people. This is a blog post as part of a series, so use your head and do your research. Don't take anyone's word for it.
