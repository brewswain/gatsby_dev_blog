import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.styles.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `grey`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      ck
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="header-link" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#555`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
