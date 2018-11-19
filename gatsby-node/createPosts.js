const path = require('path')

exports.createPosts = function(createPage, graphql) {
  return new Promise((resolve, reject) => {
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
      `)
        .then(result => {
          if (result.errors) {
            console.log(result.errors)
          }
          result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
              path: node.frontmatter.slug,
              component: path.resolve(
                path.join(__dirname, `../src/templates/blog-post.js`)
              ),
              context: {
                slug: node.frontmatter.slug,
              }, // additional data can be passed via context
            })
          })
          return
        })
        .catch(ex => {
          return ex
        })
    )
  })
}
