import React, { Component } from "react"
import styled from "styled-components"

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

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`

const Item = styled.a`
  text-align: center;
  border: 2px solid black;
  text-decoration: none;
  :visited {
    text-decoration: none;
    color: black;
  }
`

const ItemTitle = styled.div`
  padding: 10px 10px;
`

const ItemDescription = styled.div`
  text-align: left;
  padding: 10px 10px;
  line-height: 1.4em;
`

class MoreProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: true,
    }
  }

  toggleActive = () => {
    this.setState(state => ({
      isActive: !this.state.isActive,
    }))
  }

  render() {
    const data = this.props.data
    console.log(this.state.isActive)
    return (
      <MainContainer>
        <SectionTitle onClick={() => this.toggleActive()}>
          more projects
        </SectionTitle>
        {this.state.isActive && (
          <ListContainer>
            {data &&
              data.map(({ node }, i) => {
                const { title, projectDescription, url } = node.frontmatter
                return (
                  <Item href={url} rel="noopener noreferrer" target="_blank">
                    <ItemTitle>{title}</ItemTitle>
                    <ItemDescription>{projectDescription}</ItemDescription>
                  </Item>
                )
              })}
          </ListContainer>
        )}
      </MainContainer>
    )
  }
}

export default MoreProjects
