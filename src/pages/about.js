import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>About</h1>
    <article className="message is-info">
      <div className="message-body">
        dotNET Weekly is free weekly newsletter on .NET latest. Every Tuesday.
      </div>
    </article>
    <Link to="/register" className="button is-medium is-link">
      <strong>Register now!</strong>
    </Link>
    <ul>
      <li>Add community links</li>
      <li>Receive weekly newsletter</li>
    </ul>
  </Layout>
)

export default About
