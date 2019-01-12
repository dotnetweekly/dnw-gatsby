import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Conf from '../../conf'
import axios from '../services/dnw-axios'
/* Copy for forms */

import Layout from '../components/layout'
import FormField from '../components/formField'

const recaptchaRef = React.createRef()
class RegisterPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      fData: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
      },
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
          .post(`/auth/register?g-recaptcha-response=${recaptchaValue}`, {
            user: fData,
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
              fData: {
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
              },
            })
            setTimeout(() => {
              self.setState({
                success: false,
                isLoading: false,
              })
              resolve()
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
        reject(error)
      }
    })
  }
  handleChangeInput(event, param) {
    if (!this.state || !this.state.fData) {
      return
    }
    var changedProperty = { ...this.state.fData }
    changedProperty[param] = event.target.value
    this.setState({ fData: changedProperty })
  }
  render() {
    const { errors, success, isLoading, fData } = this.state
    return (
      <Layout>
        <div className="content" style={{ padding: '0 10px' }}>
          <h1>Register</h1>
          <p>
            Register today to submit links and receive the weekly newsletter
          </p>
          <FormField
            title="First Name"
            field="firstName"
            value={fData.firstName}
            onChange={this.handleChangeInput.bind(this)}
            errors={errors}
            placeholder="First Name"
          />
          <FormField
            title="Last Name"
            field="lastName"
            value={fData.lastName}
            onChange={this.handleChangeInput.bind(this)}
            errors={errors}
            placeholder="Last Name"
          />
          <FormField
            title="Email"
            field="email"
            value={fData.email}
            onChange={this.handleChangeInput.bind(this)}
            errors={errors}
            placeholder="Email"
          />
          <FormField
            title="Username"
            field="username"
            value={fData.username}
            onChange={this.handleChangeInput.bind(this)}
            errors={errors}
            placeholder="Username"
          />
          <FormField
            title="Password"
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
                        <strong>Register</strong>
                      </button>
                    )}
                  {!success &&
                    isLoading && (
                      <button className="button is-medium is-link" disabled>
                        <strong>Register</strong>
                      </button>
                    )}
                  {success && (
                    <div className="control is-expanded">
                      Successfully registered! Please check your email to verify
                      your account.
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

export default RegisterPage
