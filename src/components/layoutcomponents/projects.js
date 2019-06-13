import React, {Component} from "react"
import styled from "styled-components"

import ProjectContent from "./projectcontent"

const ProjectsMainContainer = styled.div``

const ProjectsSectionTitle = styled.div`
  text-align: center;
  font-size: 35px;
  margin: 0 0 28px;
`

const ProjectsList = styled.div`
`

const ProjectTitle = styled.div`
  text-align: center;
  padding: 10px 0;
  margin: 24px 40%;
  border: 2px solid black;
  `

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActiveId: new Set(),
    }
  }

  toggleActiveId = i => {
    this.setState(state => {
      if (state.isActiveId.has(i)) {
        state.isActiveId.delete(i)
      } else {
        state.isActiveId.add(i)
      }
      const isActiveId = state.isActiveId
      return {
        isActiveId,
      }
    })
  }

  render() {
    const data = this.props.data
    console.log(this.state.isActiveId)
    return (
      <ProjectsMainContainer id="projects">
        <ProjectsSectionTitle>Projects</ProjectsSectionTitle>
        <ProjectsList>
          {data &&
            data.map(({ node }, i) => {
              const { title} = node.frontmatter
              return (
                <div>
                  <ProjectTitle onClick={() => this.toggleActiveId(i)}>
                    {title}
                  </ProjectTitle>
                  {this.state.isActiveId.has(i) && (
                    <ProjectContent content={node} />
                  )}
                </div>
              )
            })}
        </ProjectsList>
      </ProjectsMainContainer>
    )
  }
}

export default Projects
