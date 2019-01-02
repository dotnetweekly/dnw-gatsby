import axios from 'axios'
import config from '../../conf'

axios.defaults.baseURL = config.apiDomain

axios.interceptors.request.use(function(config) {
  if (typeof window === 'undefined') {
    return config
  }
  const token = window.localStorage.getItem('dnwToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
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
