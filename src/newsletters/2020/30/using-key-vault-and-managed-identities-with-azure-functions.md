---
_id: 5f18907f7ea0e7003fb8376f
title: "Using Key Vault and Managed Identities with Azure Functions"
url: 'https://damienbod.com/2020/07/20/using-key-vault-and-managed-identities-with-azure-functions/'
category: articles
slug: 'using-key-vault-and-managed-identities-with-azure-functions'
user_id: 5a83ce59d6eb0005c4ecda2c
username: 'bill-s'
createdOn: '2020-07-22T19:16:15.693Z'
tags: [azure]
---

This article shows how Azure Key Vault could be used together with Azure Functions. The Azure Functions can use the system assigned identity to access the Key Vault. This needs to be configured in the Key Vault access policies using the service principal. By using the Microsoft.Azure.KeyVault and the Microsoft.Extensions.Configuration.AzureKeyVault nuget packages, defining direct references in the Azure Functions configuration is not required. The secrets can be read directly from the Key Vault. This also has the advantage of referencing only the secret and not the direct version of the secret. The latest version of the secret is used (depending on the cache)


