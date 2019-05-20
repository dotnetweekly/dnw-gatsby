import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from '../services/dnw-axios'
import errorHelper from '../utils/errors'
import Conf from '../../conf'

const recaptchaRef = React.createRef()
class Subscribe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      profile: { email: '' },
      success: false,
      errors: [],
    }
  }
  componentDidMount() {
    recaptchaRef.current.reset()
  }
  register() {
    if (!recaptchaRef || !recaptchaRef.current) {
      return
    }
    this.setState({ isLoading: true })
    recaptchaRef.current.execute()
    return
  }
  registerAction(recaptchaValue) {
    const { profile } = this.state
    const self = this
    self.setState({ isLoading: true })

    axios
      .post(
        `/auth/register?quick=true&g-recaptcha-response=${recaptchaValue}`,
        {
          user: profile,
        }
      )
      .then(response => {
        if (response.data.data.errors && response.data.data.errors.length > 0) {
          self.setState({ isLoading: false, errors: response.data.data.errors })
          return
        }
        self.setState({ success: true, isLoading: false, errors: [] })
        setTimeout(() => {
          self.setState({ success: false, profile: { email: '' } })
        }, 4000)
        return
      })
      .catch(response => {
        self.setState({
          isLoading: false,
          success: false,
          errors: response.errors || [],
        })
      })
  }
  handleChange(event) {
    this.setState({ profile: { email: event.target.value } })
  }
  render() {
    const { errors, isLoading, success } = this.state
    return (
      <section className="subscribe">
        <div>
          <p className="title is-3">
            Want to receive every Tuesday the best .NET links?
          </p>
          <p className="subtitle is-5 has-text-grey-light">
            Once subscribed you can login, submit a link and receive the weekly
            newsletter.
          </p>
          <div className="field is-grouped">
            {!success && (
              <div className="control is-expanded">
                <input
                  type="text"
                  name="email"
                  className={errorHelper.hasError(
                    ['input', 'is-medium', 'is-flat'],
                    'email',
                    errors
                  )}
                  placeholder="email address"
                  required=""
                  value={this.state.profile.email}
                  onChange={this.handleChange.bind(this)}
                />
                <p className="subscribe-danger help is-danger">
                  {errorHelper.getError('email', errors)}
                </p>
                <p>Join more than 4174 .NET professionals!</p>
              </div>
            )}
            {success && (
              <div className="control is-expanded">
                Successfully registered! Please check your email to verify your
                account.
              </div>
            )}
            {!success && !isLoading && (
              <button
                className="button is-medium is-link"
                onClick={this.register.bind(this)}
              >
                <strong>Subscribe</strong>
              </button>
            )}
            {!success && isLoading && (
              <button className="button is-medium is-link" disabled>
                <strong>Subscribe</strong>
              </button>
            )}
          </div>
          <div className="is-clearfix width-100 dnw-captcha">
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={Conf.recaptchaKey}
              onChange={this.registerAction.bind(this)}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Subscribe
