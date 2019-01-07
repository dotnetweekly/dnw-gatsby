import React from 'react'
import errorHelper from '../utils/errors'

class FormField extends React.Component {
  render() {
    const { field, title, errors, value, onChange, type = 'text' } = this.props
    return (
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">{title}</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className={errorHelper.hasError(['input'], field, errors)}
                type={type}
                value={value}
                onChange={event => {
                  onChange(event, field)
                }}
              />
            </div>
            <p className="help is-danger">
              {errorHelper.getError(field, errors)}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default FormField
