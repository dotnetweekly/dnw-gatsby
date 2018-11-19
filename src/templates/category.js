import React from 'react'
import Calendar from './calendar'

import Layout from '../components/layout'
import { Link } from '@reach/router'

const App = props => {
  const { week, year } = props.pageContext
  const {
    links: {
      data: {
        allMarkdownRemark: { edges },
      },
    },
  } = props.pageContext
  return (
    <div className="app">
      <Layout>
        <Calendar week={week} year={year} />
        <h1>Category</h1>
        <span>
          Want to receive every Tuesday the best links of the .NET realm? Once
          subscribed you can login, submit a link, upvote and receive the weekly
          newsletter.{' '}
        </span>
        <input type="text" />
        <input
          type="submit"
          value="Subscribe"
          name="submit"
          className="button is-white is-outlined"
        />
        {edges.map(edge => {
          const {
            node: { frontmatter, internal },
          } = edge
          return (
            <div>
              <h1>
                <Link to={`/${frontmatter.slug}`}>{frontmatter.title}</Link>
              </h1>
              <span>{internal.content}</span>
            </div>
          )
        })}
      </Layout>
    </div>
  )
}

export default App
