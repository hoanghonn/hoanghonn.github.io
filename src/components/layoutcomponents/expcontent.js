import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"

const ExpContentContainer = styled.div`
  margin: 0 10%;
`
const ECLocation = styled.div`
  text-align: center;
`

const ECRange = styled.div`
  text-align: center;
`

const ECUrl = styled.div`
  text-align: center;
`

const ECCompanyDes = styled.div``

const ECJobDesContainer = styled.ul`
  padding: 0 20px;
`

const ECJobDesItem = styled.li`
  list-style-type: none;
  &:before {
    content: "▹"; 
    padding-right: 5px;
  }
`

const ExpContent = ({ content }) => {
  const {
    location,
    range,
    url,
    companydescription,
    jobdescription,
  } = content.frontmatter
  return (
    <ExpContentContainer>
      <ECLocation>{location}</ECLocation>
      <ECRange>{range}</ECRange>
      <ECUrl>
        <a href={url} rel="noopener noreferrer" target="_blank">
          {url}
        </a>
      </ECUrl>
      <ECCompanyDes>{companydescription}</ECCompanyDes>
      <ECJobDesContainer>
        {jobdescription &&
          jobdescription.map((d, i) => <ECJobDesItem>{d}</ECJobDesItem>)}
      </ECJobDesContainer>
    </ExpContentContainer>
  )
}

export default ExpContent
