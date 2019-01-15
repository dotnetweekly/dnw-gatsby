---
_id: 5ab14add0e665701fe317082
title: "Under the Hood of Stopwatch"
url: 'http://codingsight.com/under-the-hood-of-stopwatch/'
category: articles
slug: 'under-the-hood-of-stopwatch'
user_id: 5aaa4af315c227023e22fe4b
username: 'Dandy123'
createdOn: '2018-03-20T12:17:26.025Z'
tags: [.net,c#,visual-studio]
---

As all developers, I often need to measure the execution time of my own (and not only my own) code. When I was a beginning programmer, I used the DateTime structure for this purpose. Time have passed and I learned about the Stopwatch class and began using it extensively. I think most of you had a similar experience. It’s not like I didn’t wonder about how Stopwatch works, at that time, it was simply enough for me to know that Stopwatch measures the elapsed time more precise than DateTime. Now the time has come to explain to myself as well as to the readers how the Stopwatch class actually works and clarify its pros and cons in comparison with DateTime.
