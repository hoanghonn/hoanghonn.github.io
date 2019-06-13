import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/rootcomponents/layout"
import About from "../components/layoutcomponents/about"
import Experience from "../components/layoutcomponents/experience"
import Projects from "../components/layoutcomponents/projects"
import { graphql } from "gatsby";


const IndexPage = ({ data }) => (
  <Layout>
      <About data={data.about.edges}/>
      <Experience data={data.experience.edges}/>
      <Projects data={data.projects.edges}/>
    {
    /* 
    
    <Blog/>
    <Contact/> */
    }
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  {
    about: allMarkdownRemark(filter: {fileAbsolutePath: { regex: "/about/"}}) {
      edges {
        node {
          frontmatter {
            title
            summary
            description
          }
          html
        }
      }
    }

    experience: allMarkdownRemark(filter: {fileAbsolutePath: { regex: "/experience/"}}) {
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

    projects: allMarkdownRemark(filter: {fileAbsolutePath: { regex: "/projects/"}}) {
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
`;

export default IndexPage
