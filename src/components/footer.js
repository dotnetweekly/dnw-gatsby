import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer>
    <div className="container content">
      <Link
        to="/newsletters"
        style={{
          textDecoration: 'none',
          paddingRight: '1.45rem',
        }}
      >
        Newsletters
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: 'none',
          paddingRight: '1.45rem',
        }}
      >
        About
      </Link>
      <Link
        to="/privacy-policy"
        style={{
          textDecoration: 'none',
          paddingRight: '1.45rem',
        }}
      >
        Privacy Policy
      </Link>
    </div>
  </footer>
)

export default Footer
