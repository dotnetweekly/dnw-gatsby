import React from 'react'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>About</h1>
    <article class="message is-info">
      <div class="message-body">
        dotNET Weekly is free weekly newsletter on .NET latest. Every Tuesday.
      </div>
    </article>
    <button class="button is-medium is-link">
      <strong>Register today!</strong>
    </button>
    <ul>
      <li>Add community links</li>
      <li>Receive Community Link</li>
    </ul>
  </Layout>
)

export default About
