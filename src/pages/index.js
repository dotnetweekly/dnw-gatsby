import React from 'react'

import Layout from '../components/layout'

const App = () => (
  <div className="app">
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
        className="button is-white is-outlined"
      />
    </Layout>
  </div>
)

export default App
/*const IndexPage = () => (
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
      className="button is-white is-outlined"
    />
  </Layout>
)

export default IndexPage
*/
