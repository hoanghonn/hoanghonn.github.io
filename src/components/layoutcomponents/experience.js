import React, { Component } from "react"
import styled from "styled-components"

import ExpContent from "./expcontent"

const ExpTitle = styled.div`
  text-align: center;
  padding: 10px 0;
  margin: 24px 20%;
  border: 2px solid black;
`
const ExpMainContainer = styled.div``

const ExpSectionTitle = styled.div`
  text-align: center;
  font-size: 30px;
  margin: 0 0;
`
const ExpList = styled.div``

class Experience extends Component {
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
    return (
      <ExpMainContainer id="exp">
        <ExpSectionTitle>experience</ExpSectionTitle>
        <ExpList>
          {data &&
            data.map(({ node }, i) => {
              const { title, company } = node.frontmatter
              return (
                <div>
                  <ExpTitle onClick={() => this.toggleActiveId(i)}>
                    {title} @ {company}
                  </ExpTitle>
                  {this.state.isActiveId.has(i) && (
                    <ExpContent content={node} />
                  )}
                </div>
              )
            })}
        </ExpList>
      </ExpMainContainer>
    )
  }
}

export default Experience
