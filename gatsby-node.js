/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require('axios')
const crypto = require('crypto')
const path = require('path')
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const fetchNewsletters = () =>
    axios.get(`https://dnw-newsletter.azurewebsites.net/api/v1/newsletters`)
  const res = await fetchNewsletters()

  // map into these results and create nodes
  res.data.data.map((newsletter, i) => {
    // Create your node object
    const newsletterNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Newsletters`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      week: newsletter.week,
      year: newsletter.year,
    }
    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(newsletterNode))
      .digest(`hex`)

    newsletterNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(newsletterNode)
  })

  return
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___createdOn] }
            limit: 50
          ) {
            edges {
              node {
                internal {
                  content
                }
                frontmatter {
                  title
                  _id
                  url
                  category
                  user_id
                  createdOn
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.slug,
            component: blogPostTemplate,
            context: {
              slug: node.frontmatter.slug,
            }, // additional data can be passed via context
          })
        })
        return
      })
    )
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node)
    createNodeField({
      node,
      name: `slug`,
      value: node.frontmatter.slug,
    })
  }
}
