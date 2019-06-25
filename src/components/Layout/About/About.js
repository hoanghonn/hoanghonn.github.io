import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const MainContainer = styled.div`
  padding: 16px 0;
`
const SectionTitle = styled.div`
  text-align: center;
  font-size: 22px;
  margin: 10px 0 20px 0;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
`

const Summary = styled.div`
  margin: 20px 10%;
  line-height: 1.7em;
`

const Quote = styled.div`
  text-align: center;
  font-size: 18px;
`

const ImageContainer = styled.div`
  width: 100%;
`

const Image = styled(Img)`
  display: inline-block;
  width: 29%;
  height: auto;
  margin: 0 2%;
`

const ListContainer = styled.ul`
  margin: 20px 10%;
  padding: 0 20px;
  line-height: 1.7em;
`

const ListItem = styled.li`
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
    <MainContainer id="about">
      <SectionTitle>about me</SectionTitle>
      {/*<Quote>"{quote}"</Quote>*/}
      <Summary>{summary}</Summary>
      <ImageContainer>
        <Image fluid={photo.childImageSharp.fluid} />
        <Image fluid={photo.childImageSharp.fluid} />
        <Image fluid={photo.childImageSharp.fluid} />
      </ImageContainer>
      <ListContainer>
        {details && details.map((detail, i) => <ListItem>{detail}</ListItem>)}
      </ListContainer>
    </MainContainer>
  )
}

export default About
