import PropTypes from "prop-types"
import React from "react"

const Social = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        {siteTitle}
      </h1>
    </div>
  </header>
)

Social.propTypes = {
  siteTitle: PropTypes.string,
}

Social.defaultProps = {
  siteTitle: ``,
}

export default Social
