import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import fb from "../../../../public/icons/fb.png"
import insta from "../../../../public/icons/insta.png"
import linkedIn from "../../../../public/icons/linkedin.png"
import gmail from "../../../../public/icons/mail.png"
import git from "../../../../public/icons/github.png"

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

const SocialListContainer = styled.div`
text-align:center;
padding: 5px 0;
`

const SocialItem = styled.a`
padding: 0 5px;`

const SocialLogo = styled.img``

const ResumeContainer = styled.div`
text-align: center;
font-size: 16px;`

const Resume = styled.a``

const About = ({ data }) => {
  const { frontmatter } = data[0].node
  const {summary, quote, photo, details } = frontmatter

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
      <SocialListContainer>
        <SocialItem href="#" rel="noopener noreferrer" target="_blank">
          <SocialLogo src={fb} />
        </SocialItem>
        <SocialItem href="#" rel="noopener noreferrer" target="_blank">
          <SocialLogo src={insta} />
        </SocialItem>
        <SocialItem href="#" rel="noopener noreferrer" target="_blank">
          <SocialLogo src={linkedIn} />
        </SocialItem>
        <SocialItem href="#" rel="noopener noreferrer" target="_blank">
          <SocialLogo src={gmail} />
        </SocialItem>
        <SocialItem href="#" rel="noopener noreferrer" target="_blank">
          <SocialLogo src={git} />
        </SocialItem>
      </SocialListContainer>
      <ResumeContainer>
        or see my <Resume href="#">resume</Resume>
      </ResumeContainer>
    </MainContainer>
  )
}

export default About
