import React from 'react'
import Calendar from './calendar'
import Subscribe from './subscribe'

import Layout from '../components/layout'
import { Link } from '@reach/router'
import * as auth from '../services/auth'

class App extends React.Component {
  renderNoLinks() {
    return (
      <div className="links">
        <div className="link">
          <p className="title is-5">No links found this week.</p>
          <Link to={`/newsletters`} className="is-link">
            <strong>Check previous newsletters</strong>
          </Link>
        </div>
      </div>
    )
  }

  renderLinksList(week, year, edges) {
    return (
      <div className="links">
        {edges.map((edge, i) => {
          const {
            node: { frontmatter, internal },
          } = edge
          return (
            <div className="link" key={`link-${i}`}>
              <h2 className="title is-3">
                <Link to={`/articles/${frontmatter.slug}`}>
                  {frontmatter.title}
                </Link>
              </h2>
              <p className="help">
                by {frontmatter.username}, {frontmatter.createdOn}
              </p>
              <span>{internal.content}</span>
              <p />
              <p className="link-tags">
                {frontmatter.tags &&
                  frontmatter.tags.map(tag => {
                    return (
                      <span key={`link-${i}-${tag}`} className="tag is-light">
                        {tag}
                      </span>
                    )
                  })}
              </p>
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
        {!auth.isLoggedIn() && <Subscribe />}
        <div className="is-clearfix" />
        {links}
      </div>
    )
  }

  render() {
    const { week, year } = this.props.pageContext
    if (!this.props.pageContext.links.data.allMarkdownRemark) {
      this.props.pageContext.links.data.allMarkdownRemark = { edges: [] }
    }
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
