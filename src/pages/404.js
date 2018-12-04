import React from 'react'
import Layout from '../components/layout'
import Calendar from '../templates/calendar'
import Subscribe from '../templates/subscribe'

const weekRegex = /\/?week\/(\d*)\/year\/(\d*)/gi

class NotFoundPage extends React.Component {
  renderNoLinks(weekYear) {
    if (!weekYear || weekYear.length < 3) {
      return (
        <div>
          <h2>Page Not Found</h2>
        </div>
      )
    }

    return (
      <div className="links">
        <div className="link">
          <p className="title is-5">No links found this week.</p>
          <a className="is-link" href="/newsletters">
            <strong>Check previous newsletters</strong>
          </a>
        </div>
      </div>
    )
  }
  renderCategory(weekYear) {
    if (!weekYear || weekYear.length < 3) {
      return
    }
    return (
      <div>
        <Calendar week={weekYear[1]} year={weekYear[2]} />
        <Subscribe />
      </div>
    )
  }
  render() {
    const pathname = this.props.location.pathname
    const weekYear = weekRegex.exec(pathname)
    console.log(weekYear, pathname)
    return (
      <Layout>
        {this.renderCategory(weekYear)}
        {this.renderNoLinks(weekYear)}
      </Layout>
    )
  }
}

export default NotFoundPage
