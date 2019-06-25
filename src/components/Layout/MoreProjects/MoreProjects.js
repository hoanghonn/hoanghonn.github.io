import React, { Component } from "react"
import styled from "styled-components"

import MoreProjectsContent from "./MoreProjectsContent"

const MainContainer = styled.div``

const SectionTitle = styled.div`
  text-align: center;
  font-size: 26px;
  margin: 10px 0 20px 0;
`

const ListContainer = styled.div``

const Item = styled.div``

const ItemTitle = styled.div`
  text-align: center;
  padding: 10px 0;
  margin: 24px 40%;
  border: 2px solid black;
`

class MoreProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActiveId: new Set([]),
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
      <MainContainer>
        <SectionTitle>more projects</SectionTitle>
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
                    <MoreProjectsContent content={node} />
                  )}
                </Item>
              )
            })}
        </ListContainer>
      </MainContainer>
    )
  }
}

export default MoreProjects
