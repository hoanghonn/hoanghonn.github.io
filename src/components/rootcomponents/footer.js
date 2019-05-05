import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        {siteTitle}
      </h1>
    </div>
  </header>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
