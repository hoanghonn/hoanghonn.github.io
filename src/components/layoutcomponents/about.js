import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
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
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
  color: grey;
  // font-family: "Amatic SC", cursive;
`

const AboutImage = styled(Img)``

const AboutImageContainer = styled.div`
  margin: 40px 0;
`
const AboutListContainer = styled.ul`
  margin: 20px 10%;
  padding: 0 20px;
  
`

const AboutListItem = styled.li`
  list-style-type: none;
  &:before {
    content: "▹"; 
    padding-right: 5px;
  }
`

const About = ({ data }) => {
  const { frontmatter } = data[0].node
  const { title, summary, quote, photo, details } = frontmatter

  return (
    <AboutMainContainer id="about">
      <AboutSectionTitle>{title}</AboutSectionTitle>
      <AboutQuote>"{quote}"</AboutQuote>
      <AboutSummary>{summary}</AboutSummary>
      <AboutImageContainer>
        <AboutImage fluid={photo.childImageSharp.fluid} />
      </AboutImageContainer>
      <AboutListContainer>
        {details &&
          details.map((detail, i) => <AboutListItem>{detail}</AboutListItem>)}
      </AboutListContainer>
    </AboutMainContainer>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired,
}

export default About
