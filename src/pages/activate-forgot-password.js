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
      fData: { password: '' },
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
        const activationCode = self.props.location.pathname
          .match(/(\/forgot-password\/(.*?)$)/)
          .slice(2, 3)
        axios
          .post(
            `/auth/forgotPassword/${activationCode}?g-recaptcha-response=${recaptchaValue}`,
            {
              password: fData.password,
            }
          )
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
              fData: { password: '' },
            })
            setTimeout(() => {
              self.setState({
                success: false,
                isLoading: false,
              })
            }, 5000)
          })
          .catch(() => {
            const errors = [{ field: 'password', error: 'Error occured' }]
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
  handleChangeInput(event, type) {
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
          <h1>Forgot Password</h1>
          <FormField
            title="New Password"
            field="password"
            type="password"
            value={fData.password}
            onChange={this.handleChangeInput.bind(this)}
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
                        <strong>Save</strong>
                      </button>
                    )}
                  {!success &&
                    isLoading && (
                      <button className="button is-medium is-link" disabled>
                        <strong>Save</strong>
                      </button>
                    )}
                  {success && (
                    <div className="control is-expanded">
                      Successfully changed your password!
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
