import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"

const ExpContentContainer = styled.div`
  margin: 0 10%;
`

const ExpContent = ({ content }) => {
    const { html } = content
  return (
    <ExpContentContainer>{html}</ExpContentContainer>
  )
}

export default ExpContent
