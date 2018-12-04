import React from 'react'

import Layout from '../components/layout'

class LoginPage extends React.Component {
  render() {
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
                    className="input is-danger"
                    type="text"
                    placeholder="e.g. name@email.com"
                  />
                </div>
                <p className="help is-danger">This field is required</p>
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
                    className="input is-danger"
                    type="text"
                    placeholder="e.g. pAssw0rd (not a good password)"
                  />
                </div>
                <p className="help is-danger">This field is required</p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label" />
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button className="button is-medium is-link">
                    <strong>Login</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default LoginPage
