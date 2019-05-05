import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Nav from "./nav"
import Social from "./social"
import Footer from "./footer"

const Layout = ({ children, data }) => (
  <div className="container">
    <Nav siteTitle={data.site.siteMetadata.title} />
    <Social />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
