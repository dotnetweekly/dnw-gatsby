import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Newsletters = props => {
  const newsletters = props.data.allNewsletters.edges
  return (
    <Layout>
      <h2>Previous Newsletters</h2>
      {newsletters.map((newsletter, i) => {
        return (
          <a
            key={i}
            target="_blank"
            href={`https://dnw-newsletter.azurewebsites.net/issues/${
              newsletter.node.year
            }/${newsletter.node.week}/`}
          >
            <span>
              Week: {newsletter.node.week} Year: {newsletter.node.year}
            </span>
          </a>
        )
      })}
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
