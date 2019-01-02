import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import errorHelper from '../utils/errors'
import Conf from '../../conf'
import axios from '../services/dnw-axios'
/* Copy for forms */

import Layout from '../components/layout'

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
            self.setState({ success: true, isLoading: false, errors: [] })
            setTimeout(() => {
              self.setState({ success: false, profile: { email: '' } })
            }, 4000)
            resolve()
            return
          })
          .catch(response => {
            self.setState({
              isLoading: false,
              success: false,
              errors: response.errors || [],
            })
          })
      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }
  handleChangeEmail(event) {
    if (!this.state || !this.state.fData) {
      return
    }
    var changedProperty = { ...this.state.fData }
    changedProperty.email = event.target.value
    console.log(changedProperty)
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
        <div className="content">
          <h1>Login</h1>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Email</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className={errorHelper.hasError(['input'], 'email', errors)}
                    type="text"
                    placeholder="e.g. name@email.com"
                    value={fData ? fData.email : ''}
                    onChange={this.handleChangeEmail.bind(this)}
                  />
                </div>
                <p className="help is-danger">
                  {errorHelper.getError('email', errors)}
                </p>
              </div>
            </div>
          </div>

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
                    type="text"
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
            <div className="field-label" />
            <div className="field-body">
              <div className="field">
                <div className="control">
                  {!success &&
                    !isLoading && (
                      <button
                        className="button is-medium is-link"
                        onClick={this.formSubmit.bind(this)}
                      >
                        <strong>Login</strong>
                      </button>
                    )}
                  {!success &&
                    isLoading && (
                      <button className="button is-medium is-link" disabled>
                        <strong>Login</strong>
                      </button>
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
