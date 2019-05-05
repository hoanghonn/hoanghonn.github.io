import PropTypes from "prop-types"
import React from "react"

const Nav = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        {siteTitle}
      </h1>
    </div>
  </header>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
