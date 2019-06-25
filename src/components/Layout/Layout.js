import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import Navigator from "./Navigator"
import Footer from "./footer"
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
          <MainContainer className="container">
            <Navigator />
            {children}
            <Footer />
          </MainContainer>
        </RootContainer>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

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
