import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ExpContent from "./expcontent"
import { StaticQuery } from "gatsby"

const ExpTitle = styled.div`
  text-align: center;
`
const ExpMainContainer = styled.div``

const ExpSectionTitle = styled.div`
  text-align: center;
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
    console.log(this.state.isActiveId)
    return (
      <ExpMainContainer id="experience">
        <ExpSectionTitle>Experience</ExpSectionTitle>
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
