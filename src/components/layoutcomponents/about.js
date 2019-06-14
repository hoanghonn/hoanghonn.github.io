import React from "react"
import PropTypes from "prop-types"
import Img from 'gatsby-image';
import styled from "styled-components"

const AboutMainContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 16px 0;
`
const AboutSectionTitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
  font-size: 30px;
  margin: 0 0;
`

const AboutSummary = styled.div`
  margin: 20px 10%;
`

const AboutQuote = styled.div`
  font-style: italic;
  text-align: center;
  font-size: 35px;
  font-family: "Sacramento", cursive;
`

const AboutImage = styled(Img)`

`

const AboutImageContainer = styled.div`
  margin: 40px 0;
`

const About = ({ data }) => {
  const { frontmatter } = data[0].node
  const { title, summary, quote, photo} = frontmatter

  return (
    <AboutMainContainer id="about">
      <AboutSectionTitle>{title}</AboutSectionTitle>
      <AboutQuote>"{quote}"</AboutQuote>
      <AboutSummary>{summary}</AboutSummary>
      <AboutImageContainer>
        <AboutImage fluid={photo.childImageSharp.fluid}/>
      </AboutImageContainer>
    </AboutMainContainer>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired,
}

export default About
