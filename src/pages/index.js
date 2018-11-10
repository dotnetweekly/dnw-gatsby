import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
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
      class="button is-white is-outlined"
    />
  </Layout>
)

export default IndexPage
