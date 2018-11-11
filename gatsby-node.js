/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require('axios')
const crypto = require('crypto')

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

exports.createPages = ({ graphql, actions }) => {
  const fetchNewsletters = () =>
    axios.get(`https://dnw-newsletter.azurewebsites.net/api/v1/newsletters`);
  const res = await fetchNewsletters();

  res.data.data.map((newsletter, i) => {
    console.log(newsletter);
  });
}
