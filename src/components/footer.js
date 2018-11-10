import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <div
  style={{
    background: 'white',
    marginBottom: '1.45rem',
    borderTop: '1px solid #cfcfcf'
  }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >

      <Link
        to="/newsletters"
        style={{
          textDecoration: 'none',
          paddingRight: '1.45rem'
        }}
      >
        Newsletters
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: 'none',
          paddingRight: '1.45rem'
        }}
      >
        About
      </Link>
      <Link
        to="/privacy-policy"
        style={{
          textDecoration: 'none',
          paddingRight: '1.45rem'
        }}
      >
        Privacy Policy
      </Link>
    </div>
  </div>
)

export default Footer
