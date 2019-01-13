import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/main.scss'
import icon32 from '../../favicon.ico'

import Header from './header'
import Footer from './footer'
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${icon32}` },
            { rel: 'alternate', type: 'application/rss+xml"', title='RSS', href='https://dnw-api.azurewebsites.net/api/v1/links?feed=rss' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container content">{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
