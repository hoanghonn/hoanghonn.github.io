// import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components";

const SocialBar = styled.div`
  position: absolute;
  margin: 0 0;
  float: right;
`

const SocialItem = styled.div`

`

class Social extends Component {
  render() {
    return(
      <SocialBar>
        <SocialItem>Facebook</SocialItem>
        <SocialItem>Github</SocialItem>
        <SocialItem>LinkedIn</SocialItem>
        <SocialItem>Youtube</SocialItem>
      </SocialBar>
    );
  }
}

export default Social