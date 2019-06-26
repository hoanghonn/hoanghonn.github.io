import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import Navigator from "./Navigator"
import Footer from "./Footer"
import GlobalStyle from "../../styles/GlobalStyle"

const RootContainer = styled.div`
  position: absolute;
  margin: 0 0;
  width: 100%;
`

const MainContainer = styled.div`
  position: relative;
  width: 40%%;
  margin: 0 30%;

  @media only screen and (max-width: 1440px) {
    width: 40%%;
    margin: 0 30%;
  }

  @media only screen and (max-width: 1200px) {
    width: 70%;
    margin: 0 15%;
  }

  @media only screen and (max-width: 1000px) {
    width: 70%%;
    margin: 0 15%;
  }

  @media only screen and (max-width: 768px) {
    width: 70%%;
    margin: 0 15%;
  }

  @media only screen and (max-width: 600px) {
    width: 80%%;
    margin: 0 10%;
  }

  @media only screen and (max-width: 480px) {
    width: 90%%;
    margin: 0 5%;
  }

  @media only screen and (max-width: 376px) {
    width: 90%;
    margin: 0 5%;
  }

  @media only screen and (max-width: 300px) {
    width: 100%;
    margin: 0 0;
  }

`

const Layout = ({ children }) => (
  <StaticQuery
    query={layoutQuery}
    render={data => {
      return (
        <RootContainer id="root">
          <GlobalStyle />
          <MainContainer>
            <Navigator />
            {children}
            <Footer />
          </MainContainer>
        </RootContainer>
      )
    }}
  />
)

const layoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        author
        social {
          facebook
        }
      }
    }
  }
`

export default Layout
