export const isBrowser = () => typeof window !== 'undefined'

export const handleLogin = token => {
  if (isBrowser()) {
    window.localStorage.setItem('dnwToken', token.token)
    window.localStorage.setItem('dnwTokenExpiration', token.expirationDate)
  }
}

export const isLoggedIn = () => {
  if (!isBrowser()) {
    return false
  }
  let expiration = window.localStorage.getItem('dnwTokenExpiration')
  var unixTimestamp = new Date().getTime() / 1000
  if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
    return true
  }
  return false
}

export const logout = callback => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('dnwToken')
    window.localStorage.removeItem('dnwTokenExpiration')
  }
  callback()
}
