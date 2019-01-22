---
_id: 5c46c8dec083074e054c8d58
title: "http://tooslowexception.com/managed-pointers-in-net/"
url: 'Managed pointers in .NET'
category: articles
slug: 'http-tooslowexceptioncom-managed-pointers-in-net'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2019-01-22T07:40:14.764Z'
tags: [.net]
---

Most of the time a regular .NET developer uses object references and it is simple enough because this is how a managed world is constructed – objects are referencing each other via object references. An object reference is, in fact, a type-safe pointer (address) that always points to an object MethodTable reference field (it is often said it points at the beginning of an object). Thus, using them may be quite efficient. Having an object reference, we simply have the whole object address. For example, the GC can quickly access its header via constant offset. Addresses of fields are also easily computable due to information stored in MethodTable.


