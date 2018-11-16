/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { sourceNewsletter } = require('./gatsby-node/sourceNewsletter')
const { createPosts } = require('./gatsby-node/createPosts')
const { createCategories } = require('./gatsby-node/createCategories')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  await sourceNewsletter(createNode)
  return
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  await createPosts(createPage, graphql)
  await createCategories(createPage, graphql)
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
