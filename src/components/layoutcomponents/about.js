import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const IntroMainContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 16px 0;
`
const IntroSectionTitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
  font-size: 35px;
  margin: 0 0 28px;
`

const IntroSummary = styled.div`
  margin: 28px 10%;
`

const About = ({ data }) => {
  const { frontmatter } = data[0].node
  const { title, summary, description } = frontmatter

  return (
    <IntroMainContainer id="about">
      <IntroSectionTitle>{title}</IntroSectionTitle>
      <IntroSummary>{summary}</IntroSummary>
      <IntroSummary>{summary}</IntroSummary>
    </IntroMainContainer>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired,
}

export default About
