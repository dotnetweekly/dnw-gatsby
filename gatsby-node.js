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
  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/activate/)) {
      page.matchPath = "/activate/*"
      // Update the page.
      createPage({
        path: '/activate/*',
        component: path.resolve(path.join(__dirname, `src/pages/activate.js`)),
      })
    } else if (page.path.match(/^\/forgot-password-request/)) {
      page.matchPath = "/forgot-password-request/*"
      // Update the page.
      createPage({
        path: '/forgot-password-request/*',
        component: path.resolve(
          path.join(__dirname, `src/pages/forgot-password-request.js`)
        ),
      })
    } else if (page.path.match(/^\/forgot\-password/)) {
      page.matchPath = "/forgot-password/*"
      // Update the page.
      createPage({
        path: '/forgot-password/*',
        component: path.resolve(
          path.join(__dirname, `src/pages/forgot-password.js`)
        ),
      })
    } else if (page.path.match(/^\/updateEmail/)) {
      page.matchPath = "/updateEmail/*"
      // Update the page.
      createPage({
        path: '/updateEmail/*',
        component: path.resolve(
          path.join(__dirname, `src/pages/updateEmail.js`)
        ),
      })
    } else if (page.path.match(/^\/unsubscribe/)) {
      page.matchPath = "/unsubscribe/*"
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
