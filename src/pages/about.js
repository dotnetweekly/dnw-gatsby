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
    <a href="/register" class="button is-primary">
      Register today!
    </a>
    <ul>
      <li>Add community links</li>
      <li>Receive Community Link</li>
    </ul>
  </Layout>
)

export default About
