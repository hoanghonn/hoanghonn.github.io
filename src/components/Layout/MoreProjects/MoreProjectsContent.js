import React from "react"
import PropTypes from "prop-types"

const MoreProjectsContent = ({ content }) => {
  const { html } = content
  return <div>{html}</div>
}

MoreProjectsContent.propTypes = {
  content: PropTypes.array.isRequired,
}

export default MoreProjectsContent
