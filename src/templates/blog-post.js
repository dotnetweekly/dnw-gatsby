import React from 'react'
import Layout from '../components/layout'

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.internal.content }} />
      </div>
    </Layout>
  )
}
export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
      internal {
        content
      }
    }
  }
`
