import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AddPage = () => (
  <Layout>
    <div className="content">
      <h1>Add</h1>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Title</label>
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
          <label class="label">Url</label>
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
          <label class="label">Category</label>
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
          <label class="label">Tags</label>
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
          <label class="label">Question</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Explain how we can help you"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label" />
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AddPage
