import React from "react"
import styled from "styled-components"

const MainContainer = styled.div`
  margin: 10px 10% 0 10%;
  line-height: 1.7em;
`

const Info = styled.div`
  padding-bottom: 16px;
`

const Location = styled.div`
  text-align: center;
`

const Range = styled.div`
  text-align: center;
`

const Url = styled.div`
  text-align: center;
`

const CompanyDescription = styled.div`
  text-align: left;
`

const ListContainer = styled.ul`
  padding: 0 20px;
  text-align: left;
`

const Item = styled.li`
  list-style-type: none;
  &:before {
    content: "▹";
    padding-right: 5px;
  }
`

const ExperienceContent = ({ content }) => {
  const {
    location,
    range,
    url,
    companyDescription,
    jobDescription,
  } = content.frontmatter
  return (
    <MainContainer>
      <Info>
        <Location>{location}</Location>
        <Range>{range}</Range>
        <Url>
          <a href={url} rel="noopener noreferrer" target="_blank">
            {url}
          </a>
        </Url>
      </Info>
      <CompanyDescription>{companyDescription}</CompanyDescription>
      <ListContainer>
        {jobDescription && jobDescription.map((d, i) => <Item>{d}</Item>)}
      </ListContainer>
    </MainContainer>
  )
}

export default ExperienceContent
