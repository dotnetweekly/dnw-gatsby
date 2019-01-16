/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { sourceNewsletter } = require('./gatsby-node/sourceNewsletter')
const { createPosts } = require('./gatsby-node/createPosts')
const { createCategories } = require('./gatsby-node/createCategories')
const { createRSS } = require('./gatsby-node/createRSS')
const { createSitemaps } = require('./gatsby-node/createSitemap')
const path = require('path')
const fs = require('fs')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  await sourceNewsletter(createNode)
  return
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  await createPosts(createPage, graphql)
  await createCategories(createPage, graphql)
  await createRSS(createPage, graphql)
  await createSitemaps(createPage, graphql)
  return
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.frontmatter.slug,
    })
  }
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  console.log(page)
  return new Promise((resolve, reject) => {
    if (page.path === '/activate/') {
      deletePage(page)
      // Update the page.
      createPage({
        path: '/activate/*',
        component: path.resolve(path.join(__dirname, `src/pages/activate.js`)),
      })
    }
    if (page.path === '/forgot-password/') {
      deletePage(page)
      // Update the page.
      createPage({
        path: '/forgot-password/*',
        component: path.resolve(
          path.join(__dirname, `src/pages/forgot-password.js`)
        ),
      })
    }
    if (page.path === '/updateEmail/') {
      deletePage(page)
      // Update the page.
      createPage({
        path: '/updateEmail/*',
        component: path.resolve(
          path.join(__dirname, `src/pages/updateEmail.js`)
        ),
      })
    }
    if (page.path === '/unsubscribe/') {
      deletePage(page)
      // Update the page.
      createPage({
        path: '/unsubscribe/*',
        component: path.resolve(
          path.join(__dirname, `src/pages/unsubscribe.js`)
        ),
      })
    }
    resolve()
  })
}
