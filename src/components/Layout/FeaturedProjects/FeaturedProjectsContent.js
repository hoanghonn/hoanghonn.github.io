import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

const MainContainer = styled.div`
  line-height: 1.7em;
`

const Info = styled.div`
  margin: 10px 10% 0 10%;
  padding-bottom: 16px;
`

const Summary = styled.div`
  text-align: center;
`

const Location = styled.div`
  text-align: center;
`

const Range = styled.div`
  text-align: center;
`

const ProjectDescription = styled.div`
  margin: 20px 10%;
  text-align: left;
`

const ImageContainer = styled.div`
  width: 100%;
`

const Image = styled(Img)`
  display: inline-block;
  width: 46%;
  height: auto;
  margin: 0 2%;
`

const FeaturedProjectsContent = ({ content }) => {
  const {
    summary,
    location,
    range,
    url,
    git,
    projectDescription,
    photo,
  } = content.frontmatter
  return (
    <MainContainer>
      <Info>
        <Location>{location}</Location>
        <Range>{range}</Range>
        <Summary>{summary}</Summary>
      </Info>
      <ProjectDescription>{projectDescription}</ProjectDescription>
      <ImageContainer>
        <Image fluid={photo.childImageSharp.fluid} />
        <Image fluid={photo.childImageSharp.fluid} />
      </ImageContainer>
    </MainContainer>
  )
}

FeaturedProjectsContent.propTypes = {
  content: PropTypes.array.isRequired,
}

export default FeaturedProjectsContent
