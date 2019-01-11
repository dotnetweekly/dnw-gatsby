import React from 'react'
import Layout from '../components/layout'

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { frontmatter } = post
  const { title } = post.frontmatter

  return (
    <Layout>
      <div>
        <h1>
          <a href={frontmatter.url} target="_blank">
            {title}
          </a>
        </h1>
        <p className="help">
          by {frontmatter.username}, {frontmatter.createdOn}
        </p>
        <p className="link-tags">
          {frontmatter.tags &&
            frontmatter.tags.map(tag => {
              return <span className="tag is-light">{tag}</span>
            })}
        </p>
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
