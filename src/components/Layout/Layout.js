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
  height: 100%;
  width: 40%%;
  margin: 0 30%;
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
