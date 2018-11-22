import React from 'react'
import { Link } from 'gatsby'

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
              <Link to="/add" style={menuLink}>
                Add a link
              </Link>
              <Link to="/login" style={menuLink}>
                Login
              </Link>
              <Link to="/register" style={menuLink}>
                Register
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
