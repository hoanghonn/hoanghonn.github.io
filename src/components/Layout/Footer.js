import React, { Component } from "react"
import styled from "styled-components"

const MainContainer = styled.div`
  text-align: center;
  padding: 20px 0;
`

class Footer extends Component {
  render() {
    return <MainContainer>©2019 Copyright: hoangtnguyen.com</MainContainer>
  }
}

export default Footer
