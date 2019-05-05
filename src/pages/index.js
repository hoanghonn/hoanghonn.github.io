import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/rootcomponents/layout"


const IndexPage = ({ data }) => (
  <Layout>
    {/* <Intro/>
    <About/>
    <Experience/>
    <Projects/>
    <Blog/>
    <Contact/> */}
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage
