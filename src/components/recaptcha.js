import React from 'react'
import Config from '../../conf'
import ReCAPTCHA from 'react-google-recaptcha'

class DNWCaptcha extends React.Component {
  onChange() {}
  render() {
    return (
      <ReCAPTCHA
        sitekey={Config.recaptchaKey}
        onChange={this.onChange}
        size="invisible"
      />
    )
  }
}

export default DNWCaptcha
