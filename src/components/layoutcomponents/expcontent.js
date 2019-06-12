import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ExpContent = ({ content }) => {
    const { html } = content
  return (
    <div>{html}</div>
  )
}

export default ExpContent
