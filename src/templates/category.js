import React from 'react'
import Calendar from './calendar'

import Layout from '../components/layout'

const App = props => {
  const { location } = props
  return (
    <div className="app">
      <Layout>
        <Calendar location={location} />
        <h1>Category</h1>
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
}

export default App
