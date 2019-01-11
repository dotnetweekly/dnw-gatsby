---
_id: 5a88e1aebd6dca0d5f0d2864
title: 'Using System.Numerics.Vector for Graphics Programming'
url: 'http://blogs.msdn.com/b/dotnet/archive/2014/11/05/using-system-numerics-vector-for-graphics-programming.aspx'
category: 5a88e1aebd6dca0d5f0d2864
slug: 'using-system-numerics-vector-for-graphics-programming'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2014-11-08T11:01:33.000Z'
tags: []
---

We've just released a major update to the SIMD vector types we've blogged about earlier (<a href="http://blogs.msdn.com/b/dotnet/archive/2014/04/07/the-jit-finally-proposed-jit-and-simd-are-getting-married.aspx">first announcement</a><span>, </span><a href="http://blogs.msdn.com/b/dotnet/archive/2014/05/13/update-to-simd-support.aspx">second update</a><span>).</span>We've now made the vector library a lot more more useful for typical graphics operations. We added matrix types, a plane type, and a quaternion type. We've also added many methods that are often used on fixed size vectors, such as Lerp, DistanceSquared, Normalize, and Reflect. We also completed our SIMD support for primitive types by adding support for Vector&lt;uint&gt; and Vector&lt;ulong&gt;.
