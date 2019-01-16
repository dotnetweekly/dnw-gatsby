import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Conf from '../../conf'
import axios from '../services/dnw-axios'
/* Copy for forms */

import { navigate } from 'gatsby'
import Layout from '../components/layout'
import * as auth from '../services/auth'

const recaptchaRef = React.createRef()
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
    const self = this
    recaptchaRef.current.reset()
    this.setState({ isLoading: true })
    while (!recaptchaRef || !recaptchaRef.current) {
      await self.sleep(1000)
    }
    setTimeout(() => {
      recaptchaRef.current.execute()
    }, 1000)
  }
  formAction(recaptchaValue) {
    const self = this
    self.setState({ isLoading: true })
    const activationCode = self.props.location.pathname
      .match(/(\/activate\/(.*?)$)/)
      .slice(2, 3)
    try {
      axios
        .post(`/auth/activate?g-recaptcha-response=${recaptchaValue}`, {
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
          setTimeout(() => {
            self.setState({
              success: false,
              isLoading: false,
            })
            navigate('/profile')
          }, 5000)
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
          {isLoading && <h1>Activating...</h1>}
          {errors.length > 0 && (
            <ul>
              {errors.map(error => (
                <li>{error.error}</li>
              ))}
            </ul>
          )}
          {!isLoading && success && (
            <h3 className="control is-expanded">
              Successfully activated! You are logged in now. We'll redirect you
              to your profile page in 3 seconds.
            </h3>
          )}
          <div className="is-clearfix width-100 dnw-captcha">
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={Conf.recaptchaKey}
              onChange={this.formAction.bind(this)}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ActivatePage
