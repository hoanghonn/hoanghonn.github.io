import React, { Component } from "react"
import styled from "styled-components"

import FeaturedProjectsContent from "./FeaturedProjectsContent"

const MainContainer = styled.div`
  padding: 16px 0;
`

const SectionTitle = styled.div`
  text-align: center;
  font-size: 24px;
  margin: 10px 0 20px 0;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
`

const ListContainer = styled.div``

const Item = styled.div`
  text-align: center;
`

const ItemTitle = styled.div`
  text-align: center;
  padding: 10px 10px;
  margin: 10px 20%;
  border: 2px solid black;
  display: inline-block;
`

class FeaturedProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActiveId: new Set([0, 1]),
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
    return (
      <MainContainer id="featured-projects">
        <SectionTitle>featured projects</SectionTitle>
        <ListContainer>
          {data &&
            data.map(({ node }, i) => {
              const { title } = node.frontmatter
              return (
                <Item>
                  <ItemTitle onClick={() => this.toggleActiveId(i)}>
                    {title}
                  </ItemTitle>
                  {this.state.isActiveId.has(i) && (
                    <FeaturedProjectsContent content={node} />
                  )}
                </Item>
              )
            })}
        </ListContainer>
      </MainContainer>
    )
  }
}

export default FeaturedProjects
