import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ProjectContent from "./projectcontent"

const ProjectsMainContainer = styled.div``

const ProjectsSectionTitle = styled.div`
  text-align: center;
`

const ProjectsList = styled.div``

const ProjectTitle = styled.div`
  text-align: center;
`

const Projects = ({ data }) => {
  return (
    <ProjectsMainContainer id="projects">
      <ProjectsSectionTitle>Projects</ProjectsSectionTitle>
      <ProjectsList>
        {data &&
          data.map(({ node }, i) => {
            const { title, company } = node.frontmatter
            return (
              <div>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectContent content={node} />
              </div>
            )
          })}
      </ProjectsList>
    </ProjectsMainContainer>
  )
}

Projects.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Projects
