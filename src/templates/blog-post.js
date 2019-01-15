import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { frontmatter } = post
  const { title } = post.frontmatter
  const { next, prev } = props.pathContext

  return (
    <Layout>
      <div style={{ padding: '0 10px' }}>
        <p>
          {next && (
            <Link className="is-pulled-left" to={`${next}`}>
              Previous
            </Link>
          )}
          {prev && (
            <Link className="is-pulled-right" to={`${prev}`}>
              Next
            </Link>
          )}
        </p>
        <span className="is-clearfix" />
        <h1 className="is-clearfix">
          <a href={frontmatter.url} target="_blank" rel="noopener noreferrer">
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
        <p />
        <p className="has-text-centered">
          <a
            href={frontmatter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button is-primary is-large"
          >
            Read More
          </a>
        </p>
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
        username
        createdOn
        url
      }
      internal {
        content
      }
    }
  }
`
