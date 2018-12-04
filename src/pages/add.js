import React from 'react'

import Layout from '../components/layout'

const AddPage = () => (
  <Layout>
    <div className="content">
      <h1>Add a Link</h1>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Title</label>
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
          <label className="label">Url</label>
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
          <label className="label">Category</label>
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
          <label className="label">Tags</label>
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
          <label className="label">Question</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea is-danger"
                placeholder="Explain how we can help you"
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
                <strong>Add</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AddPage
