import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class LoginPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="content">
          <h1>Login</h1>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-danger"
                    type="text"
                    placeholder="e.g. Partnership opportunity"
                  />
                </div>
                <p class="help is-danger">This field is required</p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Password</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-danger"
                    type="text"
                    placeholder="e.g. Partnership opportunity"
                  />
                </div>
                <p class="help is-danger">This field is required</p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label" />
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-medium is-link">
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
