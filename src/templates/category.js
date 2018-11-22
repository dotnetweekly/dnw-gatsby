import React from 'react'
import Calendar from './calendar'

import Layout from '../components/layout'
import { Link } from '@reach/router'

class App extends React.Component {
  renderNoLinks() {
    return <div>No Links Found</div>
  }

  renderLinksList(week, year, edges) {
    return (
      <div>
        {edges.map((edge, i) => {
          const {
            node: { frontmatter, internal },
          } = edge
          return (
            <div key={i}>
              <h1>
                <Link to={`/${frontmatter.slug}`}>{frontmatter.title}</Link>
              </h1>
              <span>{internal.content}</span>
            </div>
          )
        })}
      </div>
    )
  }

  renderLinks(week, year, edges) {
    let links
    if (edges && edges.length > 0) {
      links = this.renderLinksList(week, year, edges)
    } else {
      links = this.renderNoLinks()
    }

    return (
      <div>
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
        {links}
      </div>
    )
  }

  render() {
    const { week, year } = this.props.pageContext
    const {
      links: {
        data: {
          allMarkdownRemark: { edges },
        },
      },
    } = this.props.pageContext

    return (
      <div className="app">
        <Layout>{this.renderLinks(week, year, edges)}</Layout>
      </div>
    )
  }
}

export default App
