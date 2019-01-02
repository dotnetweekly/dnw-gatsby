import dnwAxios from './dnw-axios'

export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () =>
  isBrowser() && window.localStorage.getItem('dnwUser')
    ? JSON.parse(window.localStorage.getItem('dnwUser'))
    : {}

const setUser = user =>
  window.localStorage.setItem('dnwUser', JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  dnwAxios
    .post(`/auth/login?g-recaptcha-response=${credentials.recaptchaKey}`, {
      email: credentials.email,
      password: credentials.password,
    })
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log(error)
      reject(error)
    })
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
