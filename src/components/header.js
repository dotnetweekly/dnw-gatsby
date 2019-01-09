import React from 'react'
import { Link, navigate } from 'gatsby'
import * as auth from '../services/auth'

class Header extends React.Component {
  render() {
    const { siteTitle } = this.props
    const menuLink = { padding: '1rem .75rem', float: 'left', display: 'block' }
    return (
      <div
        style={{
          background: 'rebeccapurple',
          marginBottom: '1.45rem',
        }}
      >
        <nav className="navbar has-shadow">
          <div className="container">
            <Link to="/" className="navbar-item main-logo">
              {siteTitle}
            </Link>
            <div className="column tight" />
            <div>
              <div className="is-pulled-left">
                {auth.isLoggedIn() && (
                  <Link to="/add" style={menuLink}>
                    Add a link
                  </Link>
                )}
                {!auth.isLoggedIn() && (
                  <Link to="/login" style={menuLink}>
                    Add a link
                  </Link>
                )}
              </div>
              {auth.isLoggedIn() && (
                <div className="is-pulled-left">
                  <Link to="/profile" style={menuLink}>
                    Profile
                  </Link>
                  <button
                    className="link-button"
                    onClick={event => {
                      event.preventDefault()
                      auth.logout(() => navigate(`/`))
                    }}
                    style={menuLink}
                  >
                    Logout
                  </button>
                </div>
              )}
              {!auth.isLoggedIn() && (
                <div className="is-pulled-left">
                  <Link to="/login" style={menuLink}>
                    Login
                  </Link>
                  <Link to="/register" style={menuLink}>
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
