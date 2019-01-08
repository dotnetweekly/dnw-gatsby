import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Conf from '../../conf'
import axios from '../services/dnw-axios'
/* Copy for forms */

import Layout from '../components/layout'
import FormField from '../components/formField'

const recaptchaRef = React.createRef()
class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      fData: { email: '' },
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
          .post(`/user/forgotPassword?g-recaptcha-response=${recaptchaValue}`, {
            email: fData.email,
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
            self.setState({
              success: true,
              isLoading: false,
            })
            setTimeout(() => {
              self.setState({
                success: false,
                isLoading: false,
              })
            }, 5000)
          })
          .catch(() => {
            const errors = [{ field: 'email', error: 'Error occured' }]
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
  render() {
    const { errors, success, isLoading, fData } = this.state
    return (
      <Layout>
        <div className="content">
          <h1>Forgot Password</h1>
          <FormField
            title="Email"
            field="email"
            value={fData.email}
            onChange={this.handleChangeEmail.bind(this)}
            errors={errors}
          />

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
                        <strong>Forgot Password</strong>
                      </button>
                    )}
                  {!success &&
                    isLoading && (
                      <button className="button is-medium is-link" disabled>
                        <strong>Forgot Password</strong>
                      </button>
                    )}
                  {success && (
                    <div className="control is-expanded">
                      Please visit your email address to update your password.
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
