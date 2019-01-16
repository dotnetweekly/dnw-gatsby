import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import errorHelper from '../utils/errors'
import Conf from '../../conf'
import axios from '../services/dnw-axios'
/* Copy for forms */

import { navigate, Link } from 'gatsby'
import * as auth from '../services/auth'
import Layout from '../components/layout'
import FormField from '../components/formField'

const recaptchaRef = React.createRef()
class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      fData: { email: '', password: '' },
      success: false,
      errors: [],
    }
  }
  componentDidMount() {
    recaptchaRef.current.reset()
  }
  formSubmit() {
    if (!recaptchaRef || !recaptchaRef.current) {
      return
    }
    this.setState({ isLoading: true })
    recaptchaRef.current.execute()
    return
  }
  formAction(recaptchaValue) {
    const { fData } = this.state
    const self = this
    self.setState({ isLoading: true })

    return new Promise((resolve, reject) => {
      try {
        axios
          .post(`/auth/login?g-recaptcha-response=${recaptchaValue}`, {
            email: fData.email,
            password: fData.password,
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
              resolve()
              return
            }
            auth.handleLogin(response.data.data)
            navigate('/profile')
          })
          .catch(() => {
            const errors = [{ field: 'email', error: 'Cannot login' }]
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
        reject(error)
      }
    })
  }
  handleChangeEmail(event, type) {
    if (!this.state || !this.state.fData) {
      return
    }
    var changedProperty = { ...this.state.fData }
    changedProperty.email = event.target.value
    this.setState({ fData: changedProperty })
  }
  handleChangePassword(event) {
    if (!this.state || !this.state.fData) {
      return
    }
    var changedProperty = { ...this.state.fData }
    changedProperty.password = event.target.value
    this.setState({ fData: changedProperty })
  }
  render() {
    const { errors, success, isLoading, fData } = this.state
    return (
      <Layout>
        <div className="content" style={{ padding: '0 10px' }}>
          <h1>Login</h1>
          <FormField
            title="Email"
            field="email"
            value={fData.email}
            onChange={this.handleChangeEmail.bind(this)}
            errors={errors}
          />

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Password</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className={errorHelper.hasError(
                      ['input'],
                      'password',
                      errors
                    )}
                    value={fData ? fData.password : ''}
                    onChange={this.handleChangePassword.bind(this)}
                    type="password"
                    placeholder="e.g. pAssw0rd (not a good password)"
                  />
                </div>
                <p className="help is-danger">
                  {errorHelper.getError('password', errors)}
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label" />
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <p>
                    <Link to="/forgot-password-request">Forgot Password</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label" />
            <div className="field-body">
              <div className="field">
                <div className="control">
                  {!success && !isLoading && (
                    <button
                      className="button is-medium is-link"
                      onClick={this.formSubmit.bind(this)}
                    >
                      <strong>Login</strong>
                    </button>
                  )}
                  {!success && isLoading && (
                    <button className="button is-medium is-link" disabled>
                      <strong>Login</strong>
                    </button>
                  )}
                  {success && (
                    <div className="control is-expanded">
                      Successfully logged in! You are now logged in.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

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

export default LoginPage
