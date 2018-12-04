import React from 'react'

import Layout from '../components/layout'

const RegisterPage = () => (
  <Layout>
    <div className="content">
      <h1>Register</h1>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Name</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                className="input is-danger"
                type="text"
                placeholder="First Name"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
            </div>
            <p className="help is-danger">This field is required</p>
          </div>
          <div className="field">
            <div className="control is-expanded has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="text"
                placeholder="Last Name"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </div>
            <p className="help is-danger">This field is required</p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Username</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input is-danger"
                type="text"
                placeholder="e.g. Partnership opportunity"
              />
            </div>
            <p className="help is-danger">This field is required</p>
          </div>
        </div>
      </div>

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
                placeholder="e.g. Partnership opportunity"
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
                placeholder="e.g. Partnership opportunity"
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
