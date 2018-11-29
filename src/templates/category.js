import React from 'react'
import Calendar from './calendar'
import Subscribe from './subscribe'

import Layout from '../components/layout'
import { Link } from '@reach/router'

class App extends React.Component {
  renderNoLinks() {
    return <div>No Links Found</div>
  }

  renderLinksList(week, year, edges) {
    return (
      <div className="links">
        {edges.map((edge, i) => {
          const {
            node: { frontmatter, internal },
          } = edge
          return (
            <div className="link" key={i}>
              <h2 className="title is-3">
                <Link to={`/${frontmatter.slug}`}>{frontmatter.title}</Link>
              </h2>
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
        <Subscribe />
        <div className="is-clearfix" />
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
