import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const IntroContainer = styled.div`
  width: 100%;
  height: 90%;
  background-color: grey;
  position: relative;
`
const IntroSectionTitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
`

const About = ({ data }) => {
  const { frontmatter } = data[0].node
  const { title, name, description } = frontmatter

  return (
    <IntroContainer id="about">
      <IntroSectionTitle>{title}</IntroSectionTitle>
      <div>{name}</div>
      <div>{description}</div>
    </IntroContainer>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired,
}

export default About
