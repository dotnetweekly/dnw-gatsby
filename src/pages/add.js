import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import errorHelper from '../utils/errors'
import Conf from '../../conf'
import axios from '../services/dnw-axios'
/* Copy for forms */

import Layout from '../components/layout'

const recaptchaRef = React.createRef()
class AddPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      fData: {
        title: '',
        url: '',
        category: { name: 'Articles', slug: 'articles' },
        content: '',
        tags: ['.net'],
      },
      categories: [],
      tags: [],
      success: false,
      errors: [],
    }
  }
  componentDidMount() {
    const { fData } = this.state
    recaptchaRef.current.reset()
    const self = this
    axios
      .get('/categories')
      .then(response => {
        if (!response || !response.data || !response.data.data) {
          return
        }
        const categoryOptions = response.data.data.filter(x => {
          return x.slug !== 'sponsored' && x.slug !== 'job-listing'
        })
        self.setState({
          categories: categoryOptions,
          fData: { ...fData, category: categoryOptions[0] },
        })
      })
      .catch(error => {
        console.log(error)
      })
    axios
      .get('/tags')
      .then(response => {
        if (!response || !response.data || !response.data.data) {
          return
        }
        self.setState({
          tags: response.data.data,
          fData: { ...fData, tags: [response.data.data[0]] },
        })
      })
      .catch(error => {
        console.log(error)
      })
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
          .post(`links?g-recaptcha-response=${recaptchaValue}`, fData)
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
            self.setState({ success: true, isLoading: false })
            setTimeout(() => {
              self.setState({
                success: false,
                isLoading: false,
                fData: {
                  title: '',
                  url: '',
                  category: { name: 'Articles', slug: 'articles' },
                  content: '',
                  tags: ['.net'],
                },
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
    const { categories, tags } = this.state
    return (
      <Layout>
        <div className="content" style={{ padding: '0 10px' }}>
          <h1>Add a Link</h1>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Title</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className={errorHelper.hasError(['input'], 'title', errors)}
                    type="text"
                    placeholder="Link Title"
                    onChange={event => {
                      this.handleChangeInput(event, 'title').bind(this)
                    }}
                  />
                </div>
                <p className="help is-danger">
                  {errorHelper.getError('title', errors)}
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">URL</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className={errorHelper.hasError(['input'], 'url', errors)}
                    type="text"
                    placeholder="Link URL"
                    onChange={event => {
                      this.handleChangeInput(event, 'url').bind(this)
                    }}
                  />
                </div>
                <p className="help is-danger">
                  {errorHelper.getError('url', errors)}
                </p>
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
                  <div className="select is-fullwidth">
                    <select
                      className={errorHelper.hasError(
                        ['is-fullwidth'],
                        'category',
                        errors
                      )}
                    >
                      {categories.map(category => {
                        return (
                          <option value={category} key={category.slug}>
                            {category.name}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>
                <p className="help is-danger">
                  {errorHelper.getError('category', errors)}
                </p>
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
                  <div className="select is-multiple is-fullwidth">
                    <select
                      multiple
                      size="4"
                      className={errorHelper.hasError(
                        ['is-fullwidth'],
                        'tags',
                        errors
                      )}
                    >
                      {tags.map(tag => {
                        return (
                          <option
                            value={tag}
                            key={tag}
                            selected={fData.tags.includes(tag)}
                          >
                            {tag}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <p className="help">
                    {fData.tags.length > 0 && <span>Selected: </span>}
                    {fData.tags.map(tag => {
                      return <span key={`tag-selected-${tag}`}>{tag}</span>
                    })}
                  </p>
                </div>
                <p className="help is-danger">
                  {errorHelper.getError('tags', errors)}
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Content</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <textarea
                    className={errorHelper.hasError(
                      ['textarea'],
                      'content',
                      errors
                    )}
                    rows="10"
                    placeholder="Description"
                    onChange={event => {
                      this.handleChangeInput(event, 'content').bind(this)
                    }}
                  />
                </div>
                <p className="help is-danger">
                  {errorHelper.getError('content', errors)}
                </p>
              </div>
            </div>
          </div>
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
                        <strong>Add</strong>
                      </button>
                    )}
                  {!success &&
                    isLoading && (
                      <button className="button is-medium is-link" disabled>
                        <strong>Add</strong>
                      </button>
                    )}
                  {success && (
                    <div className="control is-expanded">
                      Link submitted, once approved it will appear on the front
                      page!
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

export default AddPage
