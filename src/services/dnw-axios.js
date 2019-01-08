import axios from 'axios'
import config from '../../conf'

axios.defaults.baseURL = config.apiDomain

axios.interceptors.request.use(function(config) {
  if (typeof window === 'undefined') {
    return config
  }
  const token = window.localStorage.getItem('dnwToken')
  if (token && token !== undefined && token !== 'undefined') {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    delete config.headers.Authorization
  }

  if (config.headers.Authorization === 'Bearer undefined') {
    delete config.headers.Authorization
  }

  return config
})

axios.interceptors.response.use(undefined, err => {
  let res = err.response
  if (
    (res && res.status && res.status === 401) ||
    (res && res.body && !res.body.success)
  ) {
    return Promise.reject(res)
  }
})

export default axios
