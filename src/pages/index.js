import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/Layout/Layout"
import About from "../components/Layout/About/About"
import Experience from "../components/Layout/Experience/Experience"
import FeaturedProjects from "../components/Layout/FeaturedProjects/FeaturedProjects"
import MoreProjects from "../components/Layout/MoreProjects/MoreProjects"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <About data={data.about.edges} />
    <Experience data={data.experience.edges} />
    <FeaturedProjects data={data.featuredProjects.edges} />
    <MoreProjects data={data.moreProjects.edges} />
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
                fluid(maxWidth: 1920) {
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
      filter: { fileAbsolutePath: { regex: "/experience/" } }
      sort: { fields: [frontmatter___date], order: DESC }
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
            companyDescription
            jobDescription
          }
          html
        }
      }
    }

    featuredProjects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured-projects/" } }
      sort: { fields: [frontmatter___index] }
    ) {
      edges {
        node {
          frontmatter {
            title
            summary
            location
            range
            url
            git
            projectDescription
            photo {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }

    moreProjects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/more-projects/" } }
      sort: { fields: [frontmatter___index] }
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
