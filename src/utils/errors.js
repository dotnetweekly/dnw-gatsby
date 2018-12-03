const errorHelper = {
  hasError(defaultClasses = [], field, errors) {
    for (var i = 0; i < errors.length; i++) {
      const error = errors[i]
      if (error.field === field) {
        defaultClasses.push('is-danger')
        return defaultClasses.join(' ')
      }
    }

    return defaultClasses.join(' ')
  },
  getError(field, errors) {
    for (var i = 0; i < errors.length; i++) {
      const error = errors[i]
      if (error.field === field) {
        return error.error.replace('{VALUE}', field).replace('{PATH}', field)
      }
    }

    return ''
  },
}

export default errorHelper
