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

export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () =>
  isBrowser() && window.localStorage.getItem('dnwUser')
    ? JSON.parse(window.localStorage.getItem('dnwUser'))
    : {}

const setUser = user =>
  window.localStorage.setItem('gatsbyUser', JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === `john` && password === `pass`) {
    return setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
