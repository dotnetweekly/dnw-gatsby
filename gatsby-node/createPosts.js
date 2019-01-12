const path = require('path')

exports.createPosts = function(createPage, graphql) {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___createdOn] }
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
                  username
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
          const blogPosts = result.data.allMarkdownRemark.edges
          blogPosts.forEach((edge, index) => {
            let next =
              index === 0 ? null : blogPosts[index - 1].node.frontmatter.slug
            const prev =
              index === blogPosts.length - 1
                ? null
                : blogPosts[index + 1].node.frontmatter.slug
            createPage({
              path: `/articles/${edge.node.frontmatter.slug}`,
              component: path.resolve(
                path.join(__dirname, `../src/templates/blog-post.js`)
              ),
              context: {
                slug: edge.node.frontmatter.slug,
                prev,
                next,
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
