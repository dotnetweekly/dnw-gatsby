import React from 'react'

import Layout from '../components/layout'

const Newsletters = props => {
  const newsletters = props.data.allNewsletters.edges
  const rows = []
  let row = []

  for (var i = 0; i < newsletters.length; i++) {
    const newsletter = newsletters[i]
    row.push({
      week: newsletter.week,
      year: newsletter.year,
    })
    if (row.length === 5) {
      rows.push(row)
      row = []
    }
  }

  return (
    <Layout>
      <h2>Previous Newsletters</h2>
      {rows.map((row, i) => {
        return (
          <div class="columns">
            {row.map(item => {
              return (
                <a
                  key={i}
                  target="_blank"
                  href={`https://dnw-newsletter.azurewebsites.net/issues/${
                    item.year
                  }/${item.week}/`}
                  rel="noopener noreferrer"
                >
                  <span>
                    Week: {item.week} Year: {item.year}
                  </span>
                </a>
              )
            })}
          </div>
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
