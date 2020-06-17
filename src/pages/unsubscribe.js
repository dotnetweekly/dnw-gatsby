import React from 'react'
import Conf from '../../conf'
import axios from '../services/dnw-axios'
/* Copy for forms */

import Layout from '../components/layout'
import * as auth from '../services/auth'

class ActivatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      fData: '',
      success: false,
      errors: [],
    }
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  async componentDidMount() {
    this.setState({ isLoading: true })
    this.formAction()
  }
  formAction() {
    const self = this
    self.setState({ isLoading: true })
    const activationCode = self.props.location.pathname
      .match(/(\/unsubscribe\/(.*?)$)/)
      .slice(2, 3)
    try {
      axios
        .post(`/user/unsubscribe`, {
          key: activationCode[0],
        })
        .then(response => {
          if (
            response.data.data.errors &&
            response.data.data.errors.length > 0
          ) {
            self.setState({
              isLoading: false,
              errors: response.data.data.errors,
            })
            return
          }
          auth.handleLogin(response.data.data)
          self.setState({
            success: true,
            isLoading: false,
          })
        })
        .catch(() => {
          const errors = [{ field: 'title', error: 'Undefined error' }]
          self.setState({
            isLoading: false,
            success: false,
            errors: errors || [],
          })
        })
    } catch (error) {
      self.setState({
        isLoading: false,
        success: false,
        errors: [],
      })
    }
  }
  render() {
    const { errors, success, isLoading } = this.state
    return (
      <Layout>
        <div className="content" style={{ padding: '0 10px' }}>
          {isLoading && <h1>Unsubscribing...</h1>}
          {errors.length > 0 && (
            <ul>
              {errors.map(error => (
                <li>{error.error}</li>
              ))}
            </ul>
          )}
          {!isLoading && success && (
            <h3 className="control is-expanded">Successfully unsubscribed!</h3>
          )}
        </div>
      </Layout>
    )
  }
}

export default ActivatePage
