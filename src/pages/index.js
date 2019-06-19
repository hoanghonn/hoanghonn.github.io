import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/rootcomponents/layout"
import About from "../components/layoutcomponents/about"
import Experience from "../components/layoutcomponents/experience"
import Projects from "../components/layoutcomponents/projects"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <About data={data.about.edges} />
    <Experience data={data.experience.edges} />
    <Projects data={data.projects.edges} />
    {/* 
    <Blog/>
    <Contact/> */}
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  {
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            summary
            quote
            photo {
              childImageSharp {
                fluid(maxWidth: 1920){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            details
          }
          html
        }
      }
    }

    experience: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/" } },
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            company
            location
            range
            url
            companydescription
            jobdescription
          }
          html
        }
      }
    }

    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } },
      sort: {fields: [frontmatter___index]}
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
          }
          html
        }
      }
    }
  }
`

export default IndexPage
