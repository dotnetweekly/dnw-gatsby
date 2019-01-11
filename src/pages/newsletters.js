import React from 'react'

import Layout from '../components/layout'

const Newsletters = props => {
  const newsletters = props.data.allNewsletters.edges

  return (
    <Layout>
      <h2>Previous Newsletters</h2>
      {newsletters.map(newsletter => {
        return (
          <a
            style={{
              display: 'inline-block',
              'box-sizing': 'border-box;',
              padding: '10px',
              width: '20%',
              float: 'left',
              'text-align': 'center',
            }}
            key={`newsletter-link-${newsletter.node.year}-${
              newsletter.node.week
            }`}
            target="_blank"
            href={`https://dnw-newsletter.azurewebsites.net/issues/${
              newsletter.node.year
            }/${newsletter.node.week}/`}
            rel="noopener noreferrer"
          >
            <span>
              Week: {newsletter.node.week} Year: {newsletter.node.year}
            </span>
          </a>
        )
      })}
      <p className="is-clearfix" />
    </Layout>
  )
}

export default Newsletters

export const query = graphql`
  query NewslettersQuery {
    allNewsletters {
      edges {
        node {
          week
          year
        }
      }
    }
  }
`
