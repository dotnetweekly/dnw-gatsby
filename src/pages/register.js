import React from 'react'

import Layout from '../components/layout'

const RegisterPage = () => (
  <Layout>
    <div className="content">
      <h1>Register</h1>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control is-expanded has-icons-left">
              <input
                class="input is-danger"
                type="text"
                placeholder="First Name"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user" />
              </span>
            </div>
            <p class="help is-danger">This field is required</p>
          </div>
          <div class="field">
            <div class="control is-expanded has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="text"
                placeholder="Last Name"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check" />
              </span>
            </div>
            <p class="help is-danger">This field is required</p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
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
                <strong>Register</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default RegisterPage
